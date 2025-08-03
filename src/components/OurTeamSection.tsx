import React from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupIcon from '@mui/icons-material/Group';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  experience: string;
  specialties: string[];
  avatar: string;
  bgColor: string;
}

const OurTeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Founder & Lead Educator",
      bio: "With over 15 years of experience in education, Dr. Chen holds a Ph.D. in Educational Psychology from Stanford University. She has helped over 2,000 students achieve their academic goals and specializes in personalized learning approaches. Her innovative teaching methods have been recognized nationally.",
      experience: "15+ Years",
      specialties: ["SAT/ACT Prep", "College Counseling", "Educational Psychology"],
      avatar: "SC",
      bgColor: "#1976d2"
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      title: "Mathematics & Science Director",
      bio: "Professor Rodriguez brings 12 years of university-level teaching experience to our team. He holds a Master's in Applied Mathematics from MIT and has published numerous papers on innovative teaching methodologies. His passion for making complex concepts accessible has helped hundreds of students excel in STEM subjects.",
      experience: "12+ Years",
      specialties: ["Advanced Mathematics", "Physics", "Chemistry", "AP Sciences"],
      avatar: "MR",
      bgColor: "#388e3c"
    },
    {
      id: 3,
      name: "Ms. Emily Zhang",
      title: "English & Literature Specialist",
      bio: "Ms. Zhang is a certified English teacher with a Master's in English Literature from Columbia University. She has 8 years of experience helping students improve their writing skills and literary analysis. Her students consistently achieve high scores on standardized tests and gain admission to top universities.",
      experience: "8+ Years",
      specialties: ["Essay Writing", "Literature Analysis", "English Grammar", "Public Speaking"],
      avatar: "EZ",
      bgColor: "#f57c00"
    }
  ];

  return (
    <Box 
      id="our-team" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: '#ffffff',
        width: '100%'
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
          <GroupIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
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
            Our Team
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, md: 6 },
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              sx={{ 
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: { xs: 3, md: 4 },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {/* Teacher Photo and Basic Info */}
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: { md: '280px' },
                      flex: { md: '0 0 280px' }
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        width: { xs: 120, md: 150 },
                        height: { xs: 120, md: 150 },
                        bgcolor: member.bgColor,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        mb: 2,
                        border: '4px solid white',
                        boxShadow: 2
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      fontWeight="bold"
                      sx={{ mb: 1, color: member.bgColor }}
                    >
                      {member.name}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      color="text.secondary"
                      sx={{ mb: 2, fontStyle: 'italic' }}
                    >
                      {member.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <StarIcon sx={{ color: '#f57c00', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight="bold" color={member.bgColor}>
                        {member.experience}
                      </Typography>
                      <VerifiedIcon sx={{ color: '#388e3c', fontSize: 20 }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {member.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          size="small"
                          sx={{ 
                            bgcolor: `${member.bgColor}20`,
                            color: member.bgColor,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Bio Content */}
                  <Box 
                    sx={{ 
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <SchoolIcon sx={{ color: member.bgColor, mr: 1, fontSize: 28 }} />
                      <Typography 
                        variant="h6" 
                        fontWeight="bold"
                        sx={{ color: member.bgColor }}
                      >
                        Professional Background
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: 'text.primary'
                      }}
                    >
                      {member.bio}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeamSection; 