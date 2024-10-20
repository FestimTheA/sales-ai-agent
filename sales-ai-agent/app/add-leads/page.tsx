"use client";

import React from "react";
import {Autocomplete, AutocompleteItem, Chip} from "@nextui-org/react";
import {JobPositions} from "./data";

export default function App() {
  // Function to handle an array of selected values
  const [values, setValues] = React.useState<(string | number | null )[]>([]);

  // Function to handle closing a chip, which removes the selected value
  const handleClose = (valueToRemove: string | number | null) => {
    setValues((prevValues) => prevValues.filter(value => value !== valueToRemove));
  };

  // Function to handle selection change
  const handleSelectionChange = (selectedValue: string | number | null) => {
    if (selectedValue) { // Check if the selected value is not empty
      setValues((prevValues) => {
        // Add the selected value if it's not already in the array
        if (!prevValues.includes(selectedValue)) {
          return [...prevValues, selectedValue];
        }
        return prevValues;
      });
    }
  };

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <Autocomplete
        label="Job Position"
        variant="bordered"
        defaultItems={JobPositions}
        placeholder="Search for a job position"
        onSelectionChange={handleSelectionChange}
      >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
     
      {/* Return the selected values as Chips with top padding. Use a flex container to display chips next to each other */}
      <div className="flex flex-wrap gap-2 pt-1">
        {values.map((value) => (
          <Chip key={value} onClose={() => handleClose(value)} variant="flat">
            {value}
          </Chip>
        ))}
      </div>
    </div>
  );
}
