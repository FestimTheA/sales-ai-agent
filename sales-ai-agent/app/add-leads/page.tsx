"use client";

import React from "react";
import {Autocomplete, AutocompleteItem, Chip} from "@nextui-org/react";
import {JobPositions} from "./data";

export default function App() {
  const [value, setValue] = React.useState<string | number | null>("");

  // Function to handle closing the chip, which clears the selection
  const handleClose = () => {
    setValue(null);
  };
  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <Autocomplete
        label="Job Position"
        variant="bordered"
        defaultItems={JobPositions}
        placeholder="Search for a job position"
        selectedKey={value}
        onSelectionChange={setValue}
      >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
     
      {/* Return the selected value as a Chip with top padding */}
      {value && (
        <div className="pt-1">
          <Chip onClose={handleClose} variant="flat">
            {value}
          </Chip>
        </div>
      )}
    </div>
  );
}
