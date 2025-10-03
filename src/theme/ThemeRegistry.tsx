'use client';

import * as React from 'react';
import { useServerInsertedHTML, usePathname } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function useEmotionCache() {
  const [cache] = React.useState(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{ __html: Object.values(cache.inserted).join(' ') as string }}
    />
  ));

  return cache;
}

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': { fontSize: '3rem' },
      '@media (min-width:960px)': { fontSize: '3.5rem' },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': { fontSize: '2.5rem' },
      '@media (min-width:960px)': { fontSize: '3rem' },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      '@media (min-width:600px)': { fontSize: '2rem' },
      '@media (min-width:960px)': { fontSize: '2.5rem' },
    },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none', borderRadius: 8, fontWeight: 600 } },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
          scrollPaddingTop: '64px',
          '@media (max-width: 600px)': { scrollPaddingTop: '56px' },
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          fontSize: '16px',
        },
        '#root': { height: '100%', margin: 0, padding: 0, width: '100%' },
        '*': { boxSizing: 'border-box' },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  const pathname = usePathname();
  
  // Only show navbar on the home page
  const isHomePage = pathname === '/';
  
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isHomePage && <Navbar />}
        {children}
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
