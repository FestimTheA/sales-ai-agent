/* eslint-disable import/order */
"use client";

import type { Selection, SortDescriptor } from "@nextui-org/react";
import type { ColumnsKey, StatusOptions, Lead } from "./data";
import type { Key } from "@react-types/shared";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  Pagination,
  Divider,
  useButton,
  DropdownSection,
} from "@nextui-org/react";
import { SearchIcon } from "@nextui-org/shared-icons";
import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";

import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";

// Commented CopyText as it was reliable on hidden columns
// import {CopyText} from "@/utils/copy-text";
// import {EyeFilledIcon} from "@/components/icons";
// import {EditLinearIcon} from "@/components/icons";
import { DeleteFilledIcon } from "@/components/icons";
import { LinkedInIcon } from "@/components/icons";
import { useMemoizedCallback } from "@/hooks/use-memoized-callback";
import { columns, INITIAL_VISIBLE_COLUMNS } from "./data";
import { Status } from "./Status";

type LeadsTableType = {
  leads: Array<Lead>;
};

export const LeadsTable = ({ leads }: LeadsTableType) => {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [rowsPerPage] = useState(20);

  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "TimeSourced",
    direction: "descending",
  });

  const [statusFilter, setStatusFilter] = React.useState("all");
  const [campaignFilter, setCampaignFilter] = React.useState("all");

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns
      .map((item) => {
        if (item.uid === sortDescriptor.column) {
          return {
            ...item,
            sortDirection: sortDescriptor.direction,
          };
        }

        return item;
      })
      .filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns, sortDescriptor]);

  const itemFilter = useCallback(
    (col: Lead) => {
      let allStatus = statusFilter === "all";
      let allCampaign = campaignFilter === "all";

      return (
        (allStatus || statusFilter === col.status) &&
        (allCampaign || campaignFilter === col.campaign)
      );
    },
    [statusFilter, campaignFilter],
  );

  const filteredItems = useMemo(() => {
    let filteredLeads = [...leads];

    if (filterValue) {
      filteredLeads = filteredLeads.filter((lead) =>
        Object.values(lead).some((value) =>
          String(value).toLowerCase().includes(filterValue.toLowerCase()),
        ),
      );
    }

    filteredLeads = filteredLeads.filter(itemFilter);

    return filteredLeads;
  }, [filterValue, itemFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a: Lead, b: Lead) => {
      const col = sortDescriptor.column as keyof Lead;

      let first = a[col];
      let second = b[col];

      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedItems.slice(start, end);
  }, [page, sortedItems, rowsPerPage]);

  const filterSelectedKeys = useMemo(() => {
    if (selectedKeys === "all") return selectedKeys;
    let resultKeys = new Set<Key>();

    if (filterValue) {
      filteredItems.forEach((item) => {
        const stringId = String(item.id);

        if ((selectedKeys as Set<string>).has(stringId)) {
          resultKeys.add(stringId);
        }
      });
    } else {
      resultKeys = selectedKeys;
    }

    return resultKeys;
  }, [selectedKeys, filteredItems, filterValue]);

  // const eyesRef = useRef<HTMLButtonElement | null>(null);
  // const editRef = useRef<HTMLButtonElement | null>(null);
  const deleteRef = useRef<HTMLButtonElement | null>(null);
  const linkedinRef = useRef<HTMLButtonElement | null>(null);
  // const {getButtonProps: getEyesProps} = useButton({ref: eyesRef});
  // const {getButtonProps: getEditProps} = useButton({ref: editRef});
  const { getButtonProps: getDeleteProps } = useButton({ ref: deleteRef });
  const { getButtonProps: getLinkedInProps } = useButton({ ref: linkedinRef });

  const renderCell = useMemoizedCallback((lead: Lead, columnKey: React.Key) => {
    const leadKey = columnKey as ColumnsKey;

    const cellValue = lead[leadKey as unknown as keyof Lead] as string;

    switch (leadKey) {
      case "created_at":
        return (
          <div className="text-nowrap text-small text-default-foreground">
            {cellValue}
          </div>
        );
      case "first_name":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "last_name":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "position":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "company":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "link":
        return (
          <div className="flex items-center gap-2">
            <a
              className="cursor-pointer text-default-400"
              href={cellValue}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon {...getLinkedInProps()} height={20} width={20} />
            </a>
          </div>
        );
      case "score":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "campaign":
        return (
          <div className="text-nowrap text-small capitalize text-default-foreground">
            {cellValue}
          </div>
        );
      case "status":
        return <Status status={cellValue as StatusOptions} />;
      case "actions":
        return (
          <div className="flex items-center justify-end gap-2">
            <DeleteFilledIcon
              {...getDeleteProps()}
              className="cursor-pointer text-default-400"
              height={18}
              width={18}
            />
            {/* <EyeFilledIcon
                {...getEyesProps()}
                className="cursor-pointer text-default-400"
                height={18}
                width={18}
              /> */}
            {/* <EditLinearIcon
                {...getEditProps()}
                className="cursor-pointer text-default-400"
                height={18}
                width={18}
              /> */}
          </div>
        );
      default:
        return cellValue;
    }
  });

  const onNextPage = useMemoizedCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  });

  const onPreviousPage = useMemoizedCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  });

  const onSearchChange = useMemoizedCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  });

  const onSelectionChange = useMemoizedCallback((keys: Selection) => {
    if (keys === "all") {
      if (filterValue) {
        const resultKeys = new Set(
          filteredItems.map((item) => String(item.id)),
        );

        setSelectedKeys(resultKeys);
      } else {
        setSelectedKeys(keys);
      }
    } else if (keys.size === 0) {
      setSelectedKeys(new Set());
    } else {
      const resultKeys = new Set<Key>();

      keys.forEach((v) => {
        resultKeys.add(v);
      });
      const selectedValue =
        selectedKeys === "all"
          ? new Set(filteredItems.map((item) => String(item.id)))
          : selectedKeys;

      selectedValue.forEach((v) => {
        if (items.some((item) => String(item.id) === v)) {
          return;
        }
        resultKeys.add(v);
      });
      setSelectedKeys(new Set(resultKeys));
    }
  });

  const topContent = useMemo(() => {
    return (
      <div className="flex items-center gap-4 overflow-auto px-[6px] py-[4px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <Input
              className="min-w-[200px]"
              endContent={
                <SearchIcon className="text-default-400" width={16} />
              }
              placeholder="Search"
              size="sm"
              value={filterValue}
              onValueChange={onSearchChange}
            />
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="bg-default-100 text-default-800"
                    size="sm"
                    startContent={
                      <Icon
                        className="text-default-400"
                        icon="solar:tuning-2-linear"
                        width={16}
                      />
                    }
                  >
                    Filter:{" "}
                    {statusFilter === "all" && campaignFilter === "all" ? (
                      "All"
                    ) : (
                      <>
                        {statusFilter !== "all" && `Status: ${statusFilter}`}
                        {statusFilter !== "all" &&
                          campaignFilter !== "all" &&
                          ", "}
                        {campaignFilter !== "all" &&
                          `Campaign: ${campaignFilter}`}
                      </>
                    )}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  selectedKeys={
                    new Set([
                      statusFilter !== "all" ? statusFilter : "status-all",
                      campaignFilter !== "all"
                        ? campaignFilter
                        : "campaign-all",
                    ])
                  }
                  selectionMode="single"
                >
                  <DropdownSection title="Status">
                    <DropdownItem
                      key="status-all"
                      onPress={() => setStatusFilter("all")}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      key="Outreached"
                      onPress={() => setStatusFilter("Outreached")}
                    >
                      Outreached
                    </DropdownItem>
                    <DropdownItem
                      key="Inactive"
                      onPress={() => setStatusFilter("Inactive")}
                    >
                      Inactive
                    </DropdownItem>
                    <DropdownItem
                      key="Failed"
                      onPress={() => setStatusFilter("Failed")}
                    >
                      Failed
                    </DropdownItem>
                    <DropdownItem
                      key="Waiting"
                      onPress={() => setStatusFilter("Waiting")}
                    >
                      Waiting
                    </DropdownItem>
                  </DropdownSection>
                  <DropdownSection title="Campaign">
                    <DropdownItem
                      key="campaign-all"
                      onPress={() => setCampaignFilter("all")}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      key="Campaign 1"
                      onPress={() => setCampaignFilter("Campaign 1")}
                    >
                      Campaign 1
                    </DropdownItem>
                    <DropdownItem
                      key="Campaign 2"
                      onPress={() => setCampaignFilter("Campaign 2")}
                    >
                      Campaign 2
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="bg-default-100 text-default-800"
                    size="sm"
                    startContent={
                      <Icon
                        className="text-default-400"
                        icon="solar:sort-linear"
                        width={16}
                      />
                    }
                  >
                    Sort
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Sort"
                  items={headerColumns.filter(
                    (c) => !["actions", "teams"].includes(c.uid),
                  )}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.uid}
                      onPress={() => {
                        setSortDescriptor({
                          column: item.uid,
                          direction:
                            sortDescriptor.direction === "ascending"
                              ? "descending"
                              : "ascending",
                        });
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        {item.name}
                        {sortDescriptor.column === item.uid &&
                          (sortDescriptor.direction === "ascending" ? (
                            <ArrowUpIcon
                              className="text-default-500"
                              height={16}
                              width={16}
                            />
                          ) : (
                            <ArrowDownIcon
                              className="text-default-500"
                              height={16}
                              width={16}
                            />
                          ))}
                      </div>
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div>
              <Dropdown closeOnSelect={false}>
                <DropdownTrigger>
                  <Button
                    className="bg-default-100 text-default-800"
                    size="sm"
                    startContent={
                      <Icon
                        className="text-default-400"
                        icon="solar:sort-horizontal-linear"
                        width={16}
                      />
                    }
                  >
                    Columns
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Columns"
                  items={columns.filter((c) => !["actions"].includes(c.uid))}
                  selectedKeys={visibleColumns}
                  selectionMode="multiple"
                  onSelectionChange={setVisibleColumns}
                >
                  {(item) => (
                    <DropdownItem key={item.uid}>{item.name}</DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <Divider className="h-5" orientation="vertical" />

          <div className="whitespace-nowrap text-sm text-default-800">
            {filterSelectedKeys === "all"
              ? "All items selected"
              : `${filterSelectedKeys.size} Selected`}
          </div>

          {(filterSelectedKeys === "all" || filterSelectedKeys.size > 0) && (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="bg-default-100 text-default-800"
                  endContent={
                    <Icon
                      className="text-default-400"
                      icon="solar:alt-arrow-down-linear"
                    />
                  }
                  size="sm"
                  variant="flat"
                >
                  Selected Actions
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Selected Actions">
                <DropdownItem key="delete-lead">Download</DropdownItem>
                <DropdownItem key="delete-lead">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    filterSelectedKeys,
    headerColumns,
    sortDescriptor,
    statusFilter,
    campaignFilter,
    setStatusFilter,
    setCampaignFilter,
    onSearchChange,
    setVisibleColumns,
  ]);

  const topBar = useMemo(() => {
    return (
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex w-[226px] items-center gap-2">
          <h1 className="text-2xl font-[700] leading-[32px]">Leads</h1>
          <Chip
            className="hidden items-center text-default-500 sm:flex"
            size="sm"
            variant="flat"
          >
            {leads.length}
          </Chip>
        </div>
        {/* <Button color="primary" endContent={<Icon icon="solar:add-circle-bold" width={20} />}>
            Add Leads
          </Button> */}
      </div>
    );
  }, []);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-between gap-2 px-2 py-2 sm:flex-row">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="flex items-center justify-end gap-6">
          <span className="text-small text-default-400">
            {filterSelectedKeys === "all"
              ? "All items selected"
              : `${filterSelectedKeys.size} of ${filteredItems.length} selected`}
          </span>
          <div className="flex items-center gap-3">
            <Button
              isDisabled={page === 1}
              size="sm"
              variant="flat"
              onPress={onPreviousPage}
            >
              Previous
            </Button>
            <Button
              isDisabled={page === pages}
              size="sm"
              variant="flat"
              onPress={onNextPage}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }, [
    filterSelectedKeys,
    page,
    pages,
    filteredItems.length,
    onPreviousPage,
    onNextPage,
  ]);

  return (
    <div>
      {topBar}
      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          td: "before:bg-transparent",
        }}
        selectedKeys={filterSelectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={onSelectionChange}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "end" : "start"}
              className={cn([
                column.uid === "actions"
                  ? "flex items-center justify-end px-[20px]"
                  : "",
              ])}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No leads found"} items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
