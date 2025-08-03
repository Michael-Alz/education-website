import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import StudentTestimonials from './components/StudentTestimonials';
import AchievementGallery from './components/AchievementGallery';
import CoursesSection from './components/CoursesSection';
import OurTeamSection from './components/OurTeamSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /#courses)
    if (location.hash) {
      // Remove the # from the hash to get the element ID
      const elementId = location.hash.substring(1);
      
      // Use setTimeout to ensure the element is rendered before scrolling
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
          
          // Clear the hash from the URL after scrolling to prevent 
          // automatic scrolling on page refresh
          setTimeout(() => {
            window.history.replaceState(
              null, 
              '', 
              window.location.pathname + window.location.search
            );
          }, 500); // Wait for smooth scroll to complete
        }
      }, 100); // Small delay to ensure DOM is ready

      // Cleanup timeout
      return () => clearTimeout(timeoutId);
    }
  }, [location.hash]);
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar />
      <Box sx={{ flex: 1, pt: { xs: '56px', sm: '64px' } }}>
        <AboutSection />
        <StudentTestimonials />
        <AchievementGallery />
        <CoursesSection />
        <OurTeamSection />
        <FAQSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;