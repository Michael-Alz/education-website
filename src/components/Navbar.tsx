import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
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

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { label: 'About', sectionId: 'about' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Achievements', sectionId: 'achievements' },
    { label: 'Courses', sectionId: 'courses' },
    { label: 'Our Team', sectionId: 'our-team' },
    { label: 'FAQ', sectionId: 'faq' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleMenuClose();
  };

  return (
    <>
      <AppBar 
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{ 
          backgroundColor: scrolled ? '#1976d2' : 'rgba(0,0,0,0.1)',
          backdropFilter: scrolled ? 'none' : 'blur(8px)',
          border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.02)',
          borderRadius: 0,
          margin: 0,
          boxShadow: scrolled ? 4 : '0 8px 32px rgba(0,0,0,0.05)',
          color: '#fff',
          transition: 'background-color 250ms ease, box-shadow 250ms ease, color 250ms ease, backdrop-filter 250ms ease, border 250ms ease',
          top: 0, 
          left: 0, 
          right: 0,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box 
              component={NextLink as any} 
              href="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                color: 'inherit',
                cursor: 'pointer'
              }}
            >
              <Box
                component="img"
                src="/favicon/icon_2.png"
                alt="Logo"
                sx={{ mr: { xs: 0.5, md: 1 }, width: { xs: 24, md: 28 }, height: { xs: 24, md: 28 }, borderRadius: 1 }}
              />
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', md: '1.2rem' }, display: { xs: 'none', sm: 'block' }, whiteSpace: 'nowrap' }}
              >
                STH Education Solutions
              </Typography>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ fontWeight: 'bold', fontSize: '1rem', display: { xs: 'block', sm: 'none' } }}
              >
                STH
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {menuItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => scrollToSection(item.sectionId)}>
                    {item.label}
                  </MenuItem>
                ))}
                <MenuItem component={NextLink as any} href="/article" onClick={handleMenuClose}>Articles</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
              <Box sx={{ flexGrow: 1 }} />
              {menuItems.map((item) => (
                <Button 
                  key={item.label} 
                  color="inherit" 
                  onClick={() => scrollToSection(item.sectionId)} 
                  sx={{ textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ))}
              <Button color="inherit" component={NextLink as any} href="/article" sx={{ textTransform: 'none' }}>
                Articles
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
