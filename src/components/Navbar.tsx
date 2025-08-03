import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ['About', 'Testimonials', 'Achievements', 'Courses', 'Our Team', 'FAQ', 'Contact'];

  const scrollToSection = (section: string) => {
    // Convert section name to proper ID format
    const sectionId = section.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#1976d2',
        zIndex: 1300,
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SchoolIcon sx={{ mr: { xs: 0.5, md: 1 }, fontSize: { xs: 24, md: 28 } }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              display: { xs: 'none', sm: 'block' }
            }}
          >
            EduExcellence
          </Typography>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: '1rem',
              display: { xs: 'block', sm: 'none' }
            }}
          >
            Edu
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={() => scrollToSection(item)}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => scrollToSection(item)}
                sx={{ textTransform: 'none' }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 