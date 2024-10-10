// /app/providers/MUIThemeProvider.tsx
"use client";

import React from 'react';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from './emotionCache'; // Adjust the import based on where you place it
import { ThemeProvider, createTheme } from '@mui/material/styles';

const emotionCache = createEmotionCache();

const MUIThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    // Customize your theme here
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MUIThemeProvider;
