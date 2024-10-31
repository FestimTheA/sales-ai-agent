// Imports

"use client";

import { ResponsiveFunnel } from '@nivo/funnel'
import { data } from './data'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import React, {useState, useMemo} from "react";

// Define the type for Funnel Data
type FunnelData = {
  id: string
  value: number
  label: string
  campaign: string
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
    // State management for filters
    const [campaignFilter, setCampaignFilter] = React.useState("all");
    const [userFilter, setUserFilter] = React.useState("all");

    // useMemo hook to compute and cache filtered data
    // Only recomputes when campaignFilter or userFilter changes
    const filteredData = useMemo(() => {
        // Helper function to transform and filter the data
        const transformData = () => {
            let result: FunnelData[] = [];
            
            // Iterate through each step (Sourced, Outreached, Accepted, Responded)
            Object.entries(data.steps).forEach(([stepId, step]) => {
                let totalValue = 0;
                
                // First level: iterate through campaigns
                Object.entries(data.metrics).forEach(([campaignId, campaignData]) => {
                    // Check if this campaign should be included based on filter
                    if (campaignFilter === "all" || (data.campaigns as any)[campaignId].name === campaignFilter) {
                        // Second level: iterate through users in each campaign
                        Object.entries(campaignData).forEach(([userId, userData]) => {
                            // Check if this user should be included based on filter
                            if (userFilter === "all" || (data.users as any)[userId].name === userFilter) {
                                // Add the value for this step from this user/campaign combination
                                totalValue += (userData as any)[stepId].value;
                            }
                        });
                    }
                });

                // Push the aggregated data for this step to the result array
                result.push({
                    id: step.label,
                    label: step.label,
                    value: totalValue,
                    campaign: campaignFilter
                });
            });
            return result;
        };

        return transformData();
    }, [campaignFilter, userFilter]);

    return (
        <>
            <div className="mb-[18px] flex items-center justify-between">
                <div className="flex w-[226px] items-center gap-2">
                    <h1 className="text-2xl font-[700] leading-[32px]"> Dashboard</h1>
                </div>
            </div>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-4 overflow-auto pt-[4px] pr-[6px] pb-[20px] pl-[6px]"> 
                <Dropdown>
                    {/* Button that shows current filter state */}
                    <DropdownTrigger>
                        <Button
                            className="bg-default-100 text-default-800"
                            size="sm"
                            startContent={
                                <Icon className="text-default-400" icon="solar:tuning-2-linear" width={16} />
                            }
                        >
                            {/* Use a single string for the dynamic filter label */}
                            {`Filter: ${
                                campaignFilter === "all" && userFilter === "all"
                                    ? "All"
                                    : `${campaignFilter !== "all" ? `Campaign: ${campaignFilter}` : ""}${
                                          campaignFilter !== "all" && userFilter !== "all" ? ", " : ""
                                      }${userFilter !== "all" ? `User: ${userFilter}` : ""}`
                            }`}
                        </Button>
                    </DropdownTrigger>

                    {/* Dropdown menu with filter options */}
                    <DropdownMenu 
                        selectedKeys={new Set([
                            campaignFilter !== "all" ? campaignFilter : "campaign-all",
                            userFilter !== "all" ? userFilter : "user-all"
                        ])}
                        selectionMode="single"
                    >
                        {/* Campaign filter section */}
                        <DropdownSection title="Campaign">
                            {[
                                <DropdownItem key="campaign-all" onPress={() => setCampaignFilter("all")}>All</DropdownItem>,
                                // Dynamically generate campaigns from data
                                ...Object.values(data.campaigns).map(campaign => (
                                    <DropdownItem 
                                        key={campaign.name} 
                                        onPress={() => setCampaignFilter(campaign.name)}
                                    >
                                        {campaign.name}
                                    </DropdownItem>
                                ))
                            ]}
                        </DropdownSection>

                        {/* User filter section */}
                        <DropdownSection title="User">
                            {[
                                <DropdownItem key="user-all" onPress={() => setUserFilter("all")}>All</DropdownItem>,
                                // Dynamically generate users from data
                                ...Object.values(data.users).map(user => (
                                    <DropdownItem 
                                        key={user.name} 
                                        onPress={() => setUserFilter(user.name)}
                                    >
                                        {user.name}
                                    </DropdownItem>
                                ))
                            ]}
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </div>

            {/* Funnel Chart Container */}
            <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full"> 
                <MyResponsiveFunnel data={filteredData} />
            </div>
        </>
    );
}
