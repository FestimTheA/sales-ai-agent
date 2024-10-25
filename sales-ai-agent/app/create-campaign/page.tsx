"use client";

import React from "react";
import {Autocomplete, AutocompleteItem, Chip, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {JobPositions, locations, industries} from "./data";

export default function App() {
  const [description, setDescription] = React.useState("");
  

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
      
      {/* Show the selected items as little removable tags (chips). Chip padding applies only if there are any selected items. */}
      <div className={`flex flex-wrap gap-2 ${selectedValues[category].length > 0 ? 'pt-3 pb-0' : ''}`}>
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
  const [showLeadsMessage, setShowLeadsMessage] = React.useState(false);

  const handleNumberOfLeadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfLeads(e.target.value);
    setShowLeadsMessage(e.target.value !== "");
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving campaign...");
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">

        {/* Create Campaign Section */}
        <div className="mb-[18px] flex items-center justify-between">
          <div className="flex w-[226px] items-center gap-2">
            <h1 className="text-2xl font-[700] leading-[32px]">Create Campaign</h1>
          </div>
        </div>

        <div className="flex w-full max-w-lg flex-col gap-3 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <Input 
            type="text" 
            label="Campaign Name" 
            placeholder="Enter your campaign name" 
            variant="bordered" 
            isRequired
          />
          <div>
            <Textarea
              label="Connection Note"
              placeholder="Enter your connection note"
              variant="bordered"
              isRequired
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={300}
            />
            <p className="text-small text-default-500 mt-2">
              Character count: {description.length}/300
            </p>
          </div>
        </div>

        {/* Add Leads Section */}
        <h1 className="text-2xl font-[700] leading-[32px] mb-4 mt-6">Add Leads</h1>
        <div className="flex w-full flex-col gap-3 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <div>
            {/* Create search boxes for job positions, locations, and industries */}
            {renderAutocomplete("Job Position", "jobPositions", JobPositions)}
          </div>
          <div>
            {renderAutocomplete("Location", "locations", locations)}
          </div>
          <div>
            {renderAutocomplete("Industry", "industries", industries)}
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
              type="number"
              label="Number of Leads to Source"
              placeholder="Enter number of leads to source"
              value={numberOfLeads}
              onChange={handleNumberOfLeadsChange}
              variant="bordered"
            />
            {showLeadsMessage && (
              <p className="text-small text-default-500 mt-2 mb-1">
                {numberOfLeads} new leads will be added to this campaign
          </p>
        )}

            {/* Creat Button */}
            <Button color="primary" onClick={handleSave} className="mt-2 w-full">
              Create Campaign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
