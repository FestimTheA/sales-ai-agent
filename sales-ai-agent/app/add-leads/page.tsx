"use client";

import React from "react";
import {Autocomplete, AutocompleteItem, Chip, Input, Button, Select, SelectItem} from "@nextui-org/react";
import {JobPositions, locations, industries} from "./data";

export default function App() {
  // This keeps track of what the user has selected for each category
  const [selectedValues, setSelectedValues] = React.useState<{
    jobPositions: (string | number)[],
    locations: (string | number)[],
    industries: (string | number)[]
  }>({
    jobPositions: [],
    locations: [],
    industries: []
  });

  // This function adds a new selection to the list when the user picks something
  const handleSelectionChange = (category: keyof typeof selectedValues) => (selectedValue: string | number | null) => {
    if (selectedValue) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [category]: prevValues[category].includes(selectedValue)
          ? prevValues[category]
          : [...prevValues[category], selectedValue]
      }));
    }
  };

  // This function removes a selection when the user clicks the 'x' on a chip
  const handleClose = (category: keyof typeof selectedValues, valueToRemove: string | number) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [category]: prevValues[category].filter(value => value !== valueToRemove)
    }));
  };

  // This function handles what happens when the user presses keys in the search box
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, items: typeof JobPositions, category: keyof typeof selectedValues) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      // Find options that match what the user typed
      const visibleOptions = items.filter(item => 
        item.label.toLowerCase().includes(input.value.toLowerCase())
      );
      // If there's exactly one match, select it automatically
      if (visibleOptions.length === 1) {
        handleSelectionChange(category)(visibleOptions[0].value);
        input.value = "";
      }
    }
  };

  // This function creates the search box and the chips for each category
  const renderAutocomplete = (
    label: string,
    category: keyof typeof selectedValues,
    items: typeof JobPositions
  ) => (
    <>
      <Autocomplete
        label={label}
        variant="bordered"
        defaultItems={items}
        placeholder={`Search for a ${label.toLowerCase()}`}
        onSelectionChange={handleSelectionChange(category)}
        disabledKeys={selectedValues[category]}
        onKeyDown={(e) => handleKeyDown(e, items, category)}
      >
        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
      
      {/* Show the selected items as little removable tags (chips) */}
      <div className="flex flex-wrap gap-2 pt-1">
        {selectedValues[category].map((value) => (
          <Chip key={value} onClose={() => handleClose(category, value)} variant="flat">
            {value}
          </Chip>
        ))}
      </div>
    </>
  );

  // This is the main part that decides how the page looks
  const [numberOfLeads, setNumberOfLeads] = React.useState("");

  const handleNumberOfLeadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfLeads(e.target.value);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving campaign...");
  };

  // Add this new state for the selected campaign
  const [selectedCampaign, setSelectedCampaign] = React.useState("");

  // Add this new array for campaign options (you might want to fetch this from an API or database)
  const campaigns = [
    { value: "campaign1", label: "Pilot" },
    { value: "campaign2", label: "Campaign 2" },
    { value: "campaign3", label: "Campaign 3" },
  ];

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Add Leads</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <div className="flex w-full max-w-xl flex-col gap-2">
            {/* Create search boxes for job positions, locations, and industries */}
            {renderAutocomplete("Job Position", "jobPositions", JobPositions)}
            {renderAutocomplete("Location", "locations", locations)}
            {renderAutocomplete("Industry", "industries", industries)}

            {/* Available Leads Info */}
            <p className="text-small text-default-500 mt-2">
              Based on these filters, there are 10,000 available leads.
            </p>

            {/* Campaign Select Menu */}
            <Select
              label="Select Campaign"
              placeholder="Choose a campaign"
              variant="bordered"
              selectedKeys={selectedCampaign ? [selectedCampaign] : []}
              onSelectionChange={(keys) => setSelectedCampaign(keys.currentKey as string)}
            >
              {campaigns.map((campaign) => (
                <SelectItem key={campaign.value} value={campaign.value}>
                  {campaign.label}
                </SelectItem>
              ))}
            </Select>

            {/* Added gap-2 class here */}
            <div className="gap-2"></div>

            {/* Number of Leads Input */}
            <Input
              type="number"
              label="Number of Leads to source"
              placeholder="Enter number of leads"
              value={numberOfLeads}
              onChange={handleNumberOfLeadsChange}
              variant="bordered"
            />

            {/* Save Button */}
            <Button color="primary" onClick={handleSave} className="mt-4">
              Add Leads
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
