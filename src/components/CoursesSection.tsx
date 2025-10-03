import React from 'react';
import NextLink from 'next/link';
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
import { getAllCourses } from '../data/getCourses';

function courseIconFor(id: string) {
  switch (id) {
    case 'sat-prep':
      return <BookIcon sx={{ fontSize: 32 }} />;
    case 'math':
      return <CalculateIcon sx={{ fontSize: 32 }} />;
    case 'physics':
      return <ScienceIcon sx={{ fontSize: 32 }} />;
    case 'english':
      return <LanguageIcon sx={{ fontSize: 32 }} />;
    case 'college-prep':
      return <PsychologyIcon sx={{ fontSize: 32 }} />;
    case 'computer-science':
      return <ComputerIcon sx={{ fontSize: 32 }} />;
    default:
      return <LibraryBooksIcon sx={{ fontSize: 32 }} />;
  }
}

export default async function CoursesSection() {
  const courses = await getAllCourses();

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
        width: '100%',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
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
              color: 'primary.main',
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
              lg: '1fr 1fr 1fr',
            },
            gap: { xs: 3, md: 4 },
            width: '100%',
            maxWidth: '1400px',
            justifyItems: 'center',
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
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      color: course.color,
                      mr: 2,
                      p: 1,
                      borderRadius: 1,
                      bgcolor: `${course.color}20`,
                    }}
                  >
                    {courseIconFor(course.id)}
                  </Box>
                  <Box>
                    <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mb: 0.5 }}>
                      {course.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      <Chip label={course.level} size="small" sx={{ bgcolor: `${course.color}20`, color: course.color }} />
                      <Chip label={course.duration} size="small" variant="outlined" />
                    </Box>
                  </Box>
                </Box>

                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  {course.description}
                </Typography>

                {course.price && (
                  <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: course.color, mb: 2 }}>
                    {course.price}
                  </Typography>
                )}

                <Box sx={{ mb: 2 }}>
                  {course.features.map((feature, index) => (
                    <Chip key={index} label={feature} size="small" variant="outlined" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  component={NextLink as any}
                  href={`/courses/${course.id}`}
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: course.color,
                    textDecoration: 'none',
                    '&:hover': {
                      bgcolor: course.color,
                      filter: 'brightness(0.9)',
                    },
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
} 