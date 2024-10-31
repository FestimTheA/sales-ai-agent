// Imports

"use client";

import { ResponsiveFunnel } from '@nivo/funnel'
import { data } from './data'
import type {Selection} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  DropdownSection,
} from "@nextui-org/react";
import {SearchIcon} from "@nextui-org/shared-icons";
import {Icon} from "@iconify/react";
import React, {useState, useMemo} from "react";

// Define the type for Funnel Data
type FunnelData = {
  id: string
  value: number
  label: string
}

// Funnel Chart 
const MyResponsiveFunnel = ({ data }: { data: FunnelData[] }) => (
    // Height is required or chart won't appear
    <div style={{ height: '64vh' }} className="relative"> 
        <ResponsiveFunnel
            data={data}
            margin={{ top: 40, right: 40, bottom: 80, left: 40 }} // Increased margin bottom to make room for color legend
            direction="horizontal"
            shapeBlending={0.1}
            valueFormat=" >-,.4~r"
            colors={['#6ea9d7', '#4089ce', '#2171b5', '#08519c']}  // Medium blue to dark blue
            borderWidth={50}  // Increased this so it doesn't look like a condom
            borderOpacity={1}
            labelColor={{
                from: 'color',
                modifiers: [['brighter', 10]]
            }}
            theme={{
                labels: {
                    text: {
                        fontSize: "var(--nextui-font-size-small)",
                        fontFamily: "var(--font-sans)",
                    }
                },
                // Tooltip on Hover Config
                tooltip: {
                    container: {
                        background: 'hsl(var(--nextui-default-100) / 0.9)',
                        color: 'hsl(var(--nextui-foreground-600))',
                        fontSize: "var(--nextui-font-size-small)",
                        fontFamily: "var(--font-sans)",
                        borderRadius: '15px',
                        // boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
                        height: "54px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                // Grid Lines Config
                grid: {
                    line: {
                        stroke: "hsl(var(--nextui-default-200))",
                        opacity: 1
                    }
                }
            }}
            enableBeforeSeparators={false}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            enableAfterSeparators={false}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
        />
        
        {/* Color legend positioned absolutely at bottom of chart */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-4 justify-center" style={{ fontSize: "var(--nextui-font-size-small)" }}>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#6ea9d7', borderRadius: '3px' }}></div>
                <span>Sourced</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#4089ce', borderRadius: '3px' }}></div>
                <span>Outreached</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#2171b5', borderRadius: '3px' }}></div>
                <span>Accepted</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#08519c', borderRadius: '3px' }}></div>
                <span>Responded</span>
            </div>
        </div>
    </div>
)

// Page Layout
export default function Page() {
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [campaignFilter, setCampaignFilter] = React.useState("all");

    // Filter logic
    const filteredData = useMemo(() => {
        let filtered = [...data];

        if (statusFilter !== "all") {
            filtered = filtered.filter(item => item.label === statusFilter);
        }

        if (campaignFilter !== "all") {
            // Add campaign filtering logic here if needed
        }

        return filtered;
    }, [statusFilter, campaignFilter]);

    return (
        <>
            <div className="mb-[22px]">
                <div className="flex w-[226px] items-center gap-2">
                    <h1 className="text-2xl font-[700] leading-[32px]">Dashboard</h1>
                </div>
            </div>
            
            <div className="mb-5">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="bg-default-100 text-default-800"
                            size="sm"
                            startContent={
                                <Icon className="text-default-400" icon="solar:tuning-2-linear" width={16} />
                            }
                        >
                            Filter: {statusFilter === "all" ? "All" : statusFilter}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                        selectedKeys={new Set([statusFilter])}
                        selectionMode="single"
                    >
                        <DropdownSection title="Status">
                            <DropdownItem key="all" onPress={() => setStatusFilter("all")}>All</DropdownItem>
                            <DropdownItem key="Sourced" onPress={() => setStatusFilter("Sourced")}>Sourced</DropdownItem>
                            <DropdownItem key="Outreached" onPress={() => setStatusFilter("Outreached")}>Outreached</DropdownItem>
                            <DropdownItem key="Accepted" onPress={() => setStatusFilter("Accepted")}>Accepted</DropdownItem>
                            <DropdownItem key="Responded" onPress={() => setStatusFilter("Responded")}>Responded</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full"> 
                <MyResponsiveFunnel data={filteredData} />
            </div>
        </>
    );
}
