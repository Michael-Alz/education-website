import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Rating,
  Fade,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReviewsIcon from '@mui/icons-material/Reviews';

interface Testimonial {
  id: number;
  name: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
}

const StudentTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Zhang",
      course: "SAT Preparation",
      rating: 5,
      comment: "The personalized attention I received was incredible. My SAT score improved by 200 points! Sarah's teaching methods are truly effective.",
      avatar: "EZ"
    },
    {
      id: 2,
      name: "Michael Chen",
      course: "Mathematics Tutoring",
      rating: 5,
      comment: "I went from struggling with calculus to actually enjoying it. The one-on-one sessions made all the difference in my understanding.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Jessica Wu",
      course: "College Application Prep",
      rating: 5,
      comment: "Thanks to the guidance here, I got accepted into my dream university! The application essay support was invaluable.",
      avatar: "JW"
    },
    {
      id: 4,
      name: "David Liu",
      course: "English Literature",
      rating: 4,
      comment: "My writing skills improved dramatically. The feedback was always constructive and helped me become a better student overall.",
      avatar: "DL"
    }
  ];

  return (
    <Box 
      id="testimonials" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: '#f5f5f5',
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
          <ReviewsIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
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
            What Our Students Say
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, md: 4 },
            width: '100%',
            maxWidth: '1200px',
            justifyItems: 'center'
          }}
        >
        {testimonials.map((testimonial, index) => (
          <Fade in={true} timeout={1000 + index * 200} key={testimonial.id}>
            <Card 
              sx={{ 
                height: '100%',
                p: 2,
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 3
                }
              }}
            >
              <CardContent>
                <Box sx={{ position: 'absolute', top: 16, right: 16, opacity: 0.1 }}>
                  <FormatQuoteIcon sx={{ fontSize: 48 }} />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      mr: 2,
                      width: 56,
                      height: 56
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.course}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly size="small" />
                  </Box>
                </Box>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  "{testimonial.comment}"
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StudentTestimonials; 