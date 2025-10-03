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
              Our educational philosophy is shaped by the leadership of Mr. Kevin Liu, an accomplished educator based in Houston, Texas. With extensive experience in teaching mathematics, physics, and chemistry, Mr. Liu offers deep expertise in both U.S. and U.K. secondary science curricula. Over the years, he has guided hundreds of students to outstanding results in AP, IB, SAT, and ACT examinations—many achieving perfect scores under his mentorship.
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
              Founded in 2021, our company is committed to delivering exceptional academic support to middle and high school students worldwide. We focus on three core areas: comprehensive after-school tutoring across all high school subjects (including AP, IB, and A-Level curricula), standardized test preparation (SAT, ACT, GRE, TOEFL, IELTS, SSAT, and ISEE), and expert guidance for college and graduate school admissions in the United States and Canada.
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