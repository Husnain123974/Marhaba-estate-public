// src/utils/utils.ts

export const calculateAEDS = (property ): string => {
    console.log("")
    const price = parseFloat(property.price as string); // Ensure price is a number
    if (price >= 1000000) {
      return (price / 1000000).toFixed(2) + ' Million'; // Show in millions
    } else if (price >= 1000) {
      return (price / 1000).toFixed(2) + ' K'; // Show in thousands
    }
    return price.toLocaleString(); // Format with commas for values below 1000
  };
  