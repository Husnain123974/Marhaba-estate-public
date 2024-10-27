// src/utils/utils.ts

import { keysToConvert } from "@/data/hardCodedData";
import { Property } from "@/types/propertyTypes";


export const calculateAEDS = (property :Property ): string => {
    console.log("")
    const price = parseFloat(property.price as string); // Ensure price is a number
    if (price >= 1000000) {
      return (price / 1000000).toFixed(2) + ' Million'; // Show in millions
    } else if (price >= 1000) {
      return (price / 1000).toFixed(2) + ' K'; // Show in thousands
    }
    return price.toLocaleString(); // Format with commas for values below 1000
  };

export const formatDate = (dateString : Date) => {
  const date = new Date(dateString);

  // Get day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // 'Dec'
  const year = date.getFullYear();

  // Function to get the correct ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th...
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  // Construct the formatted date string
  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
};  


  // Helper function to convert keys for a single object
  const convertObjectKeys = (obj) => {
    const newObj = { ...obj };
    keysToConvert.forEach(({ oldKey, newKey }) => {
        if (newObj[oldKey] !== undefined) {
            newObj[newKey] = newObj[oldKey];
            delete newObj[oldKey];
        }
    });
    return newObj;
};


export const toCamelCase = (data : any[]) => {
  // Check if it's an array of objects or a single object
  if (Array.isArray(data)) {
      return data.map(convertObjectKeys);  // Process each object in the array
  } else {
      return convertObjectKeys(data);  // Process a single object
  }
};

 