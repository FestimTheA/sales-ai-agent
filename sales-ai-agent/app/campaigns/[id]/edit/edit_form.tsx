"use client";

import type { Key } from "@react-types/shared";

import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Chip,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { Campaign, JobPositions, industries, locations } from "../../data";

export default function EditForm({ campaign }: { campaign: Campaign }) {
  const router = useRouter();

  const [name, setName] = React.useState(campaign.name);
  const [note, setNote] = React.useState(campaign.note);

  // eslint-disable-next-line prettier/prettier
  const [selectedJobPositions, setSelectedJobPositions] = React.useState<string[]>(campaign.filters.positions);
  // eslint-disable-next-line prettier/prettier
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>(campaign.filters.locations);
  // eslint-disable-next-line prettier/prettier
  const [selectedIndustries, setSelectedIndustries] = React.useState<string[]>(campaign.filters.industries);

  const handleSelectedJobPositionsChange = (
    selectedJobPosition: Key | null,
  ) => {
    if (selectedJobPosition) {
      const selectedJobPositionStr = selectedJobPosition.toString();

      setSelectedJobPositions((prevJobPositions) =>
        prevJobPositions.includes(selectedJobPositionStr)
          ? prevJobPositions
          : [...prevJobPositions, selectedJobPositionStr],
      );
    }
  };

  const handleSelectedLocationsChange = (selectedLocation: Key | null) => {
    if (selectedLocation) {
      const selectedLocationStr = selectedLocation.toString();

      setSelectedLocations((prevLocations) =>
        prevLocations.includes(selectedLocationStr)
          ? prevLocations
          : [...prevLocations, selectedLocationStr],
      );
    }
  };

  const handleSelectedIndustriesChange = (selectedIndustry: Key | null) => {
    if (selectedIndustry) {
      const selectedIndustryStr = selectedIndustry.toString();

      setSelectedIndustries((prevIndustries) =>
        prevIndustries.includes(selectedIndustryStr)
          ? prevIndustries
          : [...prevIndustries, selectedIndustryStr],
      );
    }
  };

  const handleJobPositionChipClose = (valueToRemove: string) => {
    setSelectedJobPositions((prevJobPositions) =>
      prevJobPositions.filter((value) => value !== valueToRemove),
    );
  };

  const handleLocationChipClose = (valueToRemove: string) => {
    setSelectedLocations((prevLocations) =>
      prevLocations.filter((value) => value !== valueToRemove),
    );
  };

  const handleIndustryChipClose = (valueToRemove: string) => {
    setSelectedIndustries((prevIndustries) =>
      prevIndustries.filter((value) => value !== valueToRemove),
    );
  };

  const handleJobPositionKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      // Find options that match what the user typed
      const visibleOptions = JobPositions.filter((item) =>
        item.label.toLowerCase().includes(input.value.toLowerCase()),
      );

      // If there's exactly one match, select it automatically
      if (visibleOptions.length === 1) {
        handleSelectedJobPositionsChange(visibleOptions[0].value);
        input.value = "";
      }
    }
  };

  const handleLocationKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      // Find options that match what the user typed
      const visibleOptions = locations.filter((item) =>
        item.label.toLowerCase().includes(input.value.toLowerCase()),
      );

      // If there's exactly one match, select it automatically
      if (visibleOptions.length === 1) {
        handleSelectedLocationsChange(visibleOptions[0].value);
        input.value = "";
      }
    }
  };

  const handleIndustryKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      // Find options that match what the user typed
      const visibleOptions = industries.filter((item) =>
        item.label.toLowerCase().includes(input.value.toLowerCase()),
      );

      // If there's exactly one match, select it automatically
      if (visibleOptions.length === 1) {
        handleSelectedIndustriesChange(visibleOptions[0].value);
        input.value = "";
      }
    }
  };

  // This is the main part that decides how the page looks
  const [numberOfLeads, setNumberOfLeads] = React.useState(
    campaign.total_leads_to_source.toString(),
  );
  const [showLeadsMessage, setShowLeadsMessage] = React.useState(false);

  const handleNumberOfLeadsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNumberOfLeads(e.target.value);
    setShowLeadsMessage(e.target.value !== "");
  };

  const handleUpdateCampaign = async () => {
    try {
      const res = await fetch(`/api/campaigns`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: campaign.id,
          name,
          note,
          numberOfLeads,
          jobPositions: selectedJobPositions,
          locations: selectedLocations,
          industries: selectedIndustries,
        }),
      });

      if (res.ok) {
        router.push("/campaigns");
        router.refresh();
      } else {
        // eslint-disable-next-line no-console
        console.error(`HTTP error! Status: ${res.status}`);
        if (res.status === 401) {
          router.push("/sign-in");
        } else {
          const result = await res.json();

          // eslint-disable-next-line no-console
          console.error(`HTTP message: ${result["error"]}`);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <div className="mb-[18px] flex items-center justify-between">
          <div className="flex w-[226px] items-center gap-2">
            <h1 className="text-2xl font-[700] leading-[32px]">
              Edit Campaign
            </h1>
          </div>
        </div>

        <div className="flex w-full max-w-lg flex-col gap-3 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <Input
            isRequired
            label="Campaign Name"
            placeholder="Enter your campaign name"
            type="text"
            value={name}
            variant="bordered"
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <Textarea
              isRequired
              label="Connection Note"
              maxLength={300}
              placeholder="Enter your connection note"
              value={note}
              variant="bordered"
              onChange={(e) => setNote(e.target.value)}
            />
            <p className="text-small text-default-500 mt-2">
              Character count: {note.length}/300
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-[700] leading-[32px] mb-4 mt-6">
          Add Leads
        </h1>
        <div className="flex w-full flex-col gap-3 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <div>
            <Autocomplete
              defaultItems={JobPositions}
              disabledKeys={selectedJobPositions}
              label={"Job Position"}
              placeholder={"Search for a job position"}
              variant="bordered"
              onKeyDown={handleJobPositionKeyDown}
              onSelectionChange={handleSelectedJobPositionsChange}
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>

            <div
              className={`flex flex-wrap gap-2 ${selectedJobPositions.length > 0 ? "pt-3 pb-0" : ""}`}
            >
              {selectedJobPositions.map((value) => (
                <Chip
                  key={value}
                  variant="flat"
                  onClose={() => handleJobPositionChipClose(value)}
                >
                  {value}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <Autocomplete
              defaultItems={locations}
              disabledKeys={selectedLocations}
              label={"Location"}
              placeholder={"Search for a location"}
              variant="bordered"
              onKeyDown={handleLocationKeyDown}
              onSelectionChange={handleSelectedLocationsChange}
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>

            <div
              className={`flex flex-wrap gap-2 ${selectedLocations.length > 0 ? "pt-3 pb-0" : ""}`}
            >
              {selectedLocations.map((value) => (
                <Chip
                  key={value}
                  variant="flat"
                  onClose={() => handleLocationChipClose(value)}
                >
                  {value}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <Autocomplete
              defaultItems={industries}
              disabledKeys={selectedIndustries}
              label={"Industry"}
              placeholder={"Search for an industry"}
              variant="bordered"
              onKeyDown={handleIndustryKeyDown}
              onSelectionChange={handleSelectedIndustriesChange}
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <div
              className={`flex flex-wrap gap-2 ${selectedIndustries.length > 0 ? "pt-3 pb-0" : ""}`}
            >
              {selectedIndustries.map((value) => (
                <Chip
                  key={value}
                  variant="flat"
                  onClose={() => handleIndustryChipClose(value)}
                >
                  {value}
                </Chip>
              ))}
            </div>
          </div>

          {/* Available Leads Info */}
          <div>
            <p className="text-small text-default-500">
              Based on these filters, there are 10,000 available leads.
            </p>
          </div>

          {/* Number of Leads Input */}
          <div>
            <Input
              isRequired
              className="pb-1"
              label="Number of Leads to Source"
              placeholder="Enter number of leads to source"
              type="number"
              value={numberOfLeads}
              variant="bordered"
              onChange={handleNumberOfLeadsChange}
            />
            {showLeadsMessage && (
              <p className="text-small text-default-500 mt-2 mb-1">
                {numberOfLeads} new leads will be added to this campaign
              </p>
            )}

            <Button
              className="mt-2 w-full"
              color="primary"
              onClick={handleUpdateCampaign}
            >
              Update Campaign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
