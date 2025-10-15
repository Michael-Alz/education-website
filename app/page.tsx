import { Box, Toolbar, Typography, Button } from '@mui/material';
import AboutSection from '../src/components/AboutSection';
import StudentVideoTestimonials from '../src/components/StudentVideoTestimonials';
import AchievementGallery from '../src/components/AchievementGallery';
import CoursesSection from '../src/components/CoursesSection';
import OurTeamSection from '../src/components/OurTeamSection';
import FAQSection from '../src/components/FAQSection';
import HomeScrollClient from '../src/components/HomeScrollClient';

export default function Page() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      {/* client-side hash scroll handler */}
      <HomeScrollClient />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '80vh', md: '100vh' },
          backgroundImage: 'url(/background/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Box sx={{ px: 2 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              color: '#fff',
              textShadow: '0.5px 0.5px 2.5px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
              lineHeight: 1.1
            }}
          >
            Empowering Students To Succeed
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mt: 2, 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.6rem' },
              color: '#fff',
              textShadow: '0.5px 0.5px 2.5px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)',
              lineHeight: 1.3
            }}
          >
            Personalized learning experiences for every stage of the journey
          </Typography>
          <Button href="#courses" variant="contained" color="primary" sx={{ mt: 4 }}>
            Explore Courses
          </Button>
        </Box>
      </Box>

      {/* Spacer to offset fixed AppBar below the hero for anchor scrolls */}
      <Toolbar />

      <Box sx={{ flex: 1 }}>
        <AboutSection />
        <StudentVideoTestimonials />
        <AchievementGallery />
        <CoursesSection />
        <OurTeamSection />
        <FAQSection />
      </Box>
    </Box>
  );
}
