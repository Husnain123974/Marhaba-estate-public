import { Property } from '@/types/propertyTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 
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
