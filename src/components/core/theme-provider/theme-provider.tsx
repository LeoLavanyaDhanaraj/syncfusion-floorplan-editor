'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { createTheme } from '../../../styles/theme/create-theme';
import { GlobalStyles } from '@mui/material';
// import EmotionCache from "./emotion-cache";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {
  const theme = createTheme();
  return (
    // <EmotionCache options={{ key: "mui" }}>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
      {children}
    </CssVarsProvider>
    // </EmotionCache>
  );
}
