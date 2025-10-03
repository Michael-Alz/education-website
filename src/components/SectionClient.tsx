'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';
import AboutSection from './AboutSection';
import StudentTestimonials from './StudentTestimonials';
import AchievementGallery from './AchievementGallery';
import CoursesSection from './CoursesSection';
import OurTeamSection from './OurTeamSection';
import FAQSection from './FAQSection';

export default function SectionClient({ section }: { section: string }) {
  useEffect(() => {
    const sectionId = section;
    const timeoutId = window.setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => window.clearTimeout(timeoutId);
  }, [section]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <Box sx={{ flex: 1, pt: { xs: '56px', sm: '64px' } }}>
        <AboutSection />
        <StudentTestimonials />
        <AchievementGallery />
        <CoursesSection />
        <OurTeamSection />
        <FAQSection />
      </Box>
    </Box>
  );
}
