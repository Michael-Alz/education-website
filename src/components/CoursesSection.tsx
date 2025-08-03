import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ComputerIcon from '@mui/icons-material/Computer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

interface Course {
  id: number;
  courseId: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const CoursesSection: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      courseId: "sat-prep",
      title: "SAT/ACT Preparation",
      description: "Comprehensive test preparation with personalized study plans and practice tests to maximize your scores.",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$1,200",
      icon: <BookIcon sx={{ fontSize: 32 }} />,
      color: '#1976d2',
      features: ["Practice Tests", "Score Analysis", "Time Management", "Strategy Sessions"]
    },
    {
      id: 2,
      courseId: "math",
      title: "Mathematics Tutoring",
      description: "From basic arithmetic to advanced calculus, we provide personalized math instruction for all levels.",
      duration: "Ongoing",
      level: "All Levels",
      price: "$80/hr",
      icon: <CalculateIcon sx={{ fontSize: 32 }} />,
      color: '#388e3c',
      features: ["One-on-One", "Homework Help", "Exam Prep", "Concept Mastery"]
    },
    {
      id: 3,
      courseId: "physics",
      title: "Physics Programs",
      description: "Physics tutoring with hands-on experiments and concept reinforcement.",
      duration: "Flexible",
      level: "High School",
      price: "$90/hr",
      icon: <ScienceIcon sx={{ fontSize: 32 }} />,
      color: '#f57c00',
      features: ["Lab Work", "AP Prep", "Concept Building", "Research Skills"]
    },
    {
      id: 4,
      courseId: "english",
      title: "English & Literature",
      description: "Improve writing skills, reading comprehension, and literary analysis with expert guidance.",
      duration: "8 weeks",
      level: "All Levels",
      price: "$75/hr",
      icon: <LanguageIcon sx={{ fontSize: 32 }} />,
      color: '#7b1fa2',
      features: ["Essay Writing", "Grammar", "Reading Skills", "Critical Analysis"]
    },
    {
      id: 5,
      courseId: "college-prep",
      title: "College Application Prep",
      description: "Complete college application support including essay writing, interview prep, and application strategy.",
      duration: "6 months",
      level: "High School",
      price: "$2,000",
      icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
      color: '#d32f2f',
      features: ["Essay Review", "Interview Prep", "Application Strategy", "Scholarship Guidance"]
    },
    {
      id: 6,
      courseId: "computer-science",
      title: "Computer Science",
      description: "Programming fundamentals, algorithms, and computer science concepts for beginners to advanced students.",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      price: "$100/hr",
      icon: <ComputerIcon sx={{ fontSize: 32 }} />,
      color: '#0288d1',
      features: ["Programming Languages", "Algorithm Design", "Project Work", "Portfolio Building"]
    }
  ];

  return (
    <Box 
      id="courses" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: '#f9f9f9',
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
          <LibraryBooksIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
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
            Our Courses
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: '1fr', 
              md: '1fr 1fr', 
              lg: '1fr 1fr 1fr' 
            },
            gap: { xs: 3, md: 4 },
            width: '100%',
            maxWidth: '1400px',
            justifyItems: 'center'
          }}
        >
        {courses.map((course) => (
          <Card 
            key={course.id}
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-8px)',
                transition: 'transform 0.3s ease-in-out',
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Box 
                  sx={{ 
                    color: course.color,
                    mr: 2,
                    p: 1,
                    borderRadius: 1,
                    bgcolor: `${course.color}20`
                  }}
                >
                  {course.icon}
                </Box>
                <Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    fontWeight="bold"
                    sx={{ mb: 0.5 }}
                  >
                    {course.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Chip 
                      label={course.level} 
                      size="small" 
                      sx={{ bgcolor: `${course.color}20`, color: course.color }}
                    />
                    <Chip 
                      label={course.duration} 
                      size="small" 
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>

              <Typography 
                variant="body1" 
                paragraph
                sx={{ mb: 2 }}
              >
                {course.description}
              </Typography>

              <Typography 
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ color: course.color, mb: 2 }}
              >
                {course.price}
              </Typography>

              <Box sx={{ mb: 2 }}>
                {course.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    size="small"
                    variant="outlined"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </CardContent>

            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button 
                component={Link}
                to={`/courses/${course.courseId}`}
                variant="contained" 
                fullWidth
                sx={{ 
                  bgcolor: course.color,
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: course.color,
                    filter: 'brightness(0.9)'
                  }
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoursesSection; 