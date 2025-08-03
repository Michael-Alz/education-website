import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';

const AboutSection: React.FC = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        bgcolor: '#ffffff'
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
          <InfoIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'primary.main'
            }}
          >
            About Us
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            gap: { xs: 3, md: 4 },
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
        <Box sx={{ flex: 1 }}>
          <Card sx={{ height: '100%', p: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <PersonIcon />
                </Avatar>
                <Typography variant="h5" component="h3" fontWeight="bold">
                  Our Founder
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                With over 15 years of experience in education, our founder Sarah Chen 
                has dedicated her career to helping students achieve their academic goals. 
                Holding a Master's degree in Education and multiple teaching certifications, 
                she has guided thousands of students to success.
              </Typography>
              <Typography variant="body1" paragraph>
                Sarah's personalized approach to learning ensures that each student 
                receives the individual attention they need to thrive. Her passion for 
                education and proven track record make her one of the most sought-after 
                educators in the region.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Card sx={{ height: '100%', p: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                  <BusinessIcon />
                </Avatar>
                <Typography variant="h5" component="h3" fontWeight="bold">
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                EduExcellence was founded with a simple yet powerful mission: to provide 
                world-class educational services that unlock every student's potential. 
                We believe that quality education should be accessible, engaging, and 
                tailored to individual learning styles.
              </Typography>
              <Typography variant="body1" paragraph>
                Our comprehensive approach combines traditional teaching methods with 
                innovative educational technologies, creating an environment where 
                students not only learn but also develop a lifelong love for knowledge.
              </Typography>
              <Typography variant="body1">
                We are committed to academic excellence, character development, and 
                preparing students for success in an ever-changing world.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection; 