import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './HomePage';
import CourseDetail from './pages/CourseDetail';
import ScrollToTop from './components/ScrollToTop';

// Create a custom theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    // Remove default margins and padding
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
          overflow: 'auto',
          scrollPaddingTop: '64px', // Account for fixed navbar
          '@media (max-width: 600px)': {
            scrollPaddingTop: '56px', // Smaller navbar on mobile
          },
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          overflow: 'auto',
          fontSize: '16px',
        },
        '#root': {
          height: '100%',
          margin: 0,
          padding: 0,
          width: '100%',
          overflow: 'auto',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
