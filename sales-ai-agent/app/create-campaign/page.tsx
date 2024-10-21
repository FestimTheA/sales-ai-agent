"use client";

import React from "react";
import {Input, Textarea, Autocomplete, AutocompleteItem, Chip, Button} from "@nextui-org/react";
import {animals} from "./data";

export default function Page() {
  const [selectedAnimals1, setSelectedAnimals1] = React.useState<string[]>([]);
  const [selectedAnimals2, setSelectedAnimals2] = React.useState<string[]>([]);
  const [selectedAnimals3, setSelectedAnimals3] = React.useState<string[]>([]);
  const [numberOfLeads, setNumberOfLeads] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [showLeadsMessage, setShowLeadsMessage] = React.useState(false);

  const handleSelectionChange1 = (selectedItems) => {
    setSelectedAnimals1(Array.from(selectedItems));
  };

  const handleSelectionChange2 = (selectedItems) => {
    setSelectedAnimals2(Array.from(selectedItems));
  };

  const handleSelectionChange3 = (selectedItems) => {
    setSelectedAnimals3(Array.from(selectedItems));
  };

  const handleClose1 = (animalToRemove) => {
    setSelectedAnimals1(selectedAnimals1.filter(animal => animal !== animalToRemove));
  };

  const handleClose2 = (animalToRemove) => {
    setSelectedAnimals2(selectedAnimals2.filter(animal => animal !== animalToRemove));
  };

  const handleClose3 = (animalToRemove) => {
    setSelectedAnimals3(selectedAnimals3.filter(animal => animal !== animalToRemove));
  };

  const handleNumberOfLeadsChange = (event) => {
    const value = event.target.value;
    setNumberOfLeads(value);
    setShowLeadsMessage(value !== "");
  };

  const handleDescriptionChange = (event) => {
    const text = event.target.value;
    if (text.length <= 300) {
      setDescription(text);
    }
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Saving campaign...");
    console.log("Number of Leads to source:", numberOfLeads);
  };

  return (
    <>
      {/* Create Campaign Section */}
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex w-[226px] items-center gap-2">
          <h1 className="text-2xl font-[700] leading-[32px]">Create Campaign</h1>
        </div>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <Input type="text" label="Campaign Name" placeholder="Enter your campaign name" variant="bordered" />
        <div>
          <Textarea
            label="Description"
            placeholder="Enter your description"
            variant="bordered"
            value={description}
            onChange={handleDescriptionChange}
            maxLength={300}
          />
          <p className="text-small text-default-400 mt-2">
            Character count: {description.length}/300
          </p>
        </div>
      </div>

      {/* Add Leads Section */}
      <div className="mt-8 mb-[18px] flex items-center justify-between">
        <div className="flex w-[226px] items-center gap-2">
          <h1 className="text-2xl font-[700] leading-[32px]">Add Leads</h1>
        </div>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        {/* First Animals Autocomplete */}
        <Autocomplete
          label="Favorite Animal 1"
          placeholder="Search an animal"
          defaultItems={animals}
          onSelectionChange={handleSelectionChange1}
          selectedKeys={selectedAnimals1}
          selectionMode="multiple"
          variant="bordered"
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        {selectedAnimals1.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {selectedAnimals1.map((animal) => (
              <Chip key={animal} onClose={() => handleClose1(animal)} variant="bordered">
                {animal}
              </Chip>
            ))}
          </div>
        )}

        {/* Second Animals Autocomplete */}
        <Autocomplete
          label="Favorite Animal 2"
          placeholder="Search an animal"
          defaultItems={animals}
          onSelectionChange={handleSelectionChange2}
          selectedKeys={selectedAnimals2}
          selectionMode="multiple"
          variant="bordered"
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        {selectedAnimals2.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {selectedAnimals2.map((animal) => (
              <Chip key={animal} onClose={() => handleClose2(animal)} variant="bordered">
                {animal}
              </Chip>
            ))}
          </div>
        )}

        {/* Third Animals Autocomplete */}
        <Autocomplete
          label="Favorite Animal 3"
          placeholder="Search an animal"
          defaultItems={animals}
          onSelectionChange={handleSelectionChange3}
          selectedKeys={selectedAnimals3}
          selectionMode="multiple"
          variant="bordered"
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        {selectedAnimals3.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {selectedAnimals3.map((animal) => (
              <Chip key={animal} onClose={() => handleClose3(animal)} variant="bordered">
                {animal}
              </Chip>
            ))}
          </div>
        )}

        {/* Available Leads Info */}
        <p className="text-small text-default-500 mt-4">
          Based on these filters, there are 10,000 available leads.
        </p>

        {/* Number of Leads Input */}
        <Input
          type="number"
          label="Number of Leads to source"
          placeholder="Enter number of leads"
          value={numberOfLeads}
          onChange={handleNumberOfLeadsChange}
          variant="bordered"
          className="w-full"
        />

        {showLeadsMessage && (
          <p className="text-small text-default-500 mt-2">
            {numberOfLeads} new leads will be added to this campaign
          </p>
        )}

        {/* Save Button */}
        <Button color="primary" onClick={handleSave} className="mt-4">
          Save Campaign
        </Button>
      </div>
    </>
  );
}
