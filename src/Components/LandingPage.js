import React, { useState } from "react";
import SearchDropdown from "./SearchProcess/SearchDropdown";
import asyncSearchFunction from "./asyncSearchFunction";

const options = [
  { label: "United States", value: "USD", subLabel: "USD" },
  { label: "United Kingdom", value: "GBP", subLabel: "GBP" },
  { label: "Canada", value: "CAD", subLabel: "CAD" },
  { label: "Australia", value: "AUD", subLabel: "AUD" },
  { label: "Eurozone", value: "EUR", subLabel: "EUR" },
  { label: "Japan", value: "JPY", subLabel: "JPY" },
  { label: "Switzerland", value: "CHF", subLabel: "CHF" },
  { label: "Sweden", value: "SEK", subLabel: "SEK" },
  { label: "Norway", value: "NOK", subLabel: "NOK" },
  { label: "Denmark", value: "DKK", subLabel: "DKK" },
  { label: "New Zealand", value: "NZD", subLabel: "NZD" },
  { label: "Singapore", value: "SGD", subLabel: "SGD" },
  { label: "Hong Kong", value: "HKD", subLabel: "HKD" },
  { label: "South Korea", value: "KRW", subLabel: "KRW" },
  { label: "India", value: "INR", subLabel: "INR" },
  { label: "China", value: "CNY", subLabel: "CNY" },
  { label: "Mexico", value: "MXN", subLabel: "MXN" },
  { label: "Brazil", value: "BRL", subLabel: "BRL" },
  { label: "South Africa", value: "ZAR", subLabel: "ZAR" },
  { label: "Russia", value: "RUB", subLabel: "RUB" },
];

const customSearchResultLabel = (option) => {
  return `${option.label} (${option.value}) - ${option.subLabel}`;
};

const customSearchResultTransform = (option) => {
  const label = option.label || "";
  const subLabel = option.subLabel || "";
  return `${label.toUpperCase()} (${subLabel.toUpperCase()})`;
};

const customSearchResultComponent = (option, isAsync) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="w-2 h-2 mr-2 rounded-full"></div>
        <div>{option.label}</div>
      </div>
      {isAsync && option.subLabel && (
        <div className="text-gray-500 whitespace-pre-wrap">
          {option.subLabel}
        </div>
      )}
    </div>
  );
};
const LandingPage = () => {
  const [selectedOptionsAsync, setSelectedOptionsAsync] = useState([]);
  const [selectedOptionsSync, setSelectedOptionsSync] = useState([]);

  const handleDeselectAllSync = () => {
    setSelectedOptionsSync([]);
  };

  const handleDeselectAllAsync = () => {
    setSelectedOptionsAsync([]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Search Dropdown Example</h1>
        <div className="mb-4 flex justify-between items-center">
          <h2>Sync Search</h2>
          <div onClick={handleDeselectAllSync} className="cursor-pointer text-red-600 hover:text-red-800">
            Deselect all
          </div>
        </div>
        <SearchDropdown
          label="Search..."
          options={options}
          customSearchResultLabel={customSearchResultLabel}
          customSearchResultTransform={customSearchResultTransform}
          customSearchResultComponent={(option) =>
            customSearchResultComponent(option, false)
          }
          setSelectedOptions={setSelectedOptionsSync}
          selectedOptions={selectedOptionsSync}
          disabled = {false}
        />
        <div className="mt-4 mb-4 flex justify-between items-center">
          <h2>Async Search</h2>
          <div onClick={handleDeselectAllAsync} className="cursor-pointer text-red-600 hover:text-red-800">
            Deselect all
          </div>
        </div>
        <SearchDropdown
          label="Search..."
          searchFunction={(query) => asyncSearchFunction(options, query, 100)}
          customSearchResultLabel={customSearchResultLabel}
          customSearchResultTransform={customSearchResultTransform}
          customSearchResultComponent={(option) =>
            customSearchResultComponent(option, true)
          }
          setSelectedOptions={setSelectedOptionsAsync}
          selectedOptions={selectedOptionsAsync}
          disabled = {false}
        />
      </div>
    </div>
  );
};

export default LandingPage;