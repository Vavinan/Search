import React from 'react';
import LandingPage from './Components/LandingPage';

const App = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;



/* import React, { useState } from 'react';
import SearchDropdown from './Components/SearchDropdown';
import asyncSearchFunction from './Components/asyncSearchFunction';
const options = [
  { label: 'Luffy', value: 1 },
  { label: 'Zoro', value: 2 },
  { label: 'Sanji', value: 3 },
  { label: 'Nami', value: 4 },
  { label: 'Usopp', value: 5 },
  { label: 'Brook', value: 6 },
  { label: 'Chopper', value: 7 },
  { label: 'Franky', value: 8 },
  { label: 'Jimbei', value: 9 },
  { label: 'Robin', value: 10 },
];

const options2 = [
  { label: 'United States', value: 'USD', subLabel: 'USD' },
  { label: 'United Kingdom', value: 'GBP', subLabel: 'GBP' },
  { label: 'Canada', value: 'CAD', subLabel: 'CAD' },
  { label: 'Australia', value: 'AUD', subLabel: 'AUD' },
  { label: 'Eurozone', value: 'EUR', subLabel: 'EUR' },
  { label: 'Japan', value: 'JPY', subLabel: 'JPY' },
  { label: 'Switzerland', value: 'CHF', subLabel: 'CHF' },
  { label: 'Sweden', value: 'SEK', subLabel: 'SEK' },
  { label: 'Norway', value: 'NOK', subLabel: 'NOK' },
  { label: 'Denmark', value: 'DKK', subLabel: 'DKK' },
  { label: 'New Zealand', value: 'NZD', subLabel: 'NZD' },
  { label: 'Singapore', value: 'SGD', subLabel: 'SGD' },
  { label: 'Hong Kong', value: 'HKD', subLabel: 'HKD' },
  { label: 'South Korea', value: 'KRW', subLabel: 'KRW' },
  { label: 'India', value: 'INR', subLabel: 'INR' },
  { label: 'China', value: 'CNY', subLabel: 'CNY' },
  { label: 'Mexico', value: 'MXN', subLabel: 'MXN' },
  { label: 'Brazil', value: 'BRL', subLabel: 'BRL' },
  { label: 'South Africa', value: 'ZAR', subLabel: 'ZAR' },
  { label: 'Russia', value: 'RUB', subLabel: 'RUB' },
];



const customSearchResultLabel = (option) => {
 // return `${option.label} (${option.value})`;
 return `${option.label} (${option.value}) - ${option.subLabel}`;

};

const customSearchResultTransform = (option) => {
 // return label.toUpperCase() ;
 const label = option.label || '';
 const subLabel = option.subLabel || '';
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
        <div className="text-gray-500 whitespace-pre-wrap">{option.subLabel}</div>
      )}
    </div>
  );
};


const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    setSelectedOptions((prevOptions) => {
      const index = prevOptions.findIndex((opt) => opt.value === option.value);
      if (index === -1) {
        return [...prevOptions, option];
      } else {
        return prevOptions.filter((opt) => opt.value !== option.value);
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Search Dropdown Example</h1>
        <h2>Sync Search</h2>
        <SearchDropdown
          label="Search..."
          options={options2}
          onSelect={handleSelect}
          customSearchResultLabel={customSearchResultLabel}
          customSearchResultTransform={customSearchResultTransform}
          customSearchResultComponent={(option) => customSearchResultComponent(option, false)}
        />
        <h2>Async Search</h2>
        <SearchDropdown
          label="Search..."
          searchFunction={(query) => asyncSearchFunction(options2, query)}
          onSelect={handleSelect}
          customSearchResultLabel={customSearchResultLabel}
          customSearchResultTransform={customSearchResultTransform}
          customSearchResultComponent={(option) => customSearchResultComponent(option, true)}
        />
      </div>
    </div>
  );
};

export default App;

*/




/*const asyncSearchFunction = (query) => {
  return new Promise((resolve) => {
    // Simulating asynchronous search with setTimeout
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredOptions);
    }, 1000); // Simulating delay of 1 second
  });
};  */

// Function to simulate asynchronous search
/*const asyncSearchFunction = query => {
  return new Promise(resolve => {
    // Simulating asynchronous search with setTimeout
    setTimeout(() => {
      const filteredOptions = filterDeeplyNestedOptions(options, query);
      resolve(filteredOptions);
    }, 1000); // Simulating delay of 1 second
  });
};

// Function to filter deeply nested options
const filterDeeplyNestedOptions = (options, query) => {
  const filtered = options.filter(option => {
    // Check if label matches the query
    if (option.label.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    // Check if the option has nested options
    if (option.options) {
      const nestedFiltered = filterDeeplyNestedOptions(option.options, query);
      return nestedFiltered.length > 0;
    }
    return false;
  });
  return filtered;
};*/