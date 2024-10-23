import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Image, { StaticImageData } from 'next/image';

// Define the property type (adjust the fields based on your data)
interface Property {
  id: string;
  builders: string;
  price: string | number;
  name: string;
  location: string;
  bedrooms: string;
  area: string;
  paymentPlan: string;
  images: StaticImageData[] ;
  description:string;
  amenities:string[];
}


// Define the initial state for the property slice
interface PropertyState {
  selectedProperty: Property | null;
}

const initialState: PropertyState = {
  selectedProperty: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedProperty: (state, action: PayloadAction<Property>) => {
      state.selectedProperty = action.payload;
    },
    clearSelectedProperty: (state) => {
      state.selectedProperty = null;
    },
  },
});

export const { setSelectedProperty, clearSelectedProperty } = propertySlice.actions;

export default propertySlice.reducer;
