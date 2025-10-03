import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Slider from '../../components/SlickClient';

interface Achievement {
  id: number;
  title: string;
  description: string;
  stat: string;
  icon: React.ReactNode;
  color: string;
}

const AchievementGallery: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Students Accepted to Top Universities",
      description: "Our students have been accepted to prestigious institutions including Harvard, MIT, Stanford, and UC Berkeley.",
      stat: "95%",
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      color: '#1976d2'
    },
    {
      id: 2,
      title: "Average SAT Score Improvement",
      description: "Students see significant improvements in their standardized test scores with our targeted preparation programs.",
      stat: "+180",
      icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
      color: '#388e3c'
    },
    {
      id: 3,
      title: "Academic Excellence Awards",
      description: "Our students have won numerous academic competitions and received recognition for their outstanding achievements.",
      stat: "200+",
      icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
      color: '#f57c00'
    },
    {
      id: 4,
      title: "Students Served Successfully",
      description: "Over the years, we have helped thousands of students achieve their academic goals and reach their full potential.",
      stat: "1000+",
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      color: '#7b1fa2'
    },
    {
      id: 5,
      title: "Years of Educational Excellence",
      description: "With over a decade of experience, we continue to evolve our teaching methods to serve students better.",
      stat: "15+",
      icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
      color: '#d32f2f'
    }
  ];

  type SlickArrowProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    // Drop all other props that react-slick might inject
    [key: string]: any;
  };

  const CustomPrevArrow = (props: SlickArrowProps) => {
    const { className, style, onClick, ...rest } = props;
    // Explicitly drop rest props to prevent them from being passed to DOM
    return (
      <IconButton
        className={className}
        style={style}
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: { xs: -15, md: -25 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'primary.main',
          color: 'white',
          width: { xs: 35, md: 40 },
          height: { xs: 35, md: 40 },
          '&:hover': { bgcolor: 'primary.dark' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
      </IconButton>
    );
  };

  const CustomNextArrow = (props: SlickArrowProps) => {
    const { className, style, onClick, ...rest } = props;
    // Explicitly drop rest props to prevent them from being passed to DOM
    return (
      <IconButton
        className={className}
        style={style}
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: { xs: -15, md: -25 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'primary.main',
          color: 'white',
          width: { xs: 35, md: 40 },
          height: { xs: 35, md: 40 },
          '&:hover': { bgcolor: 'primary.dark' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 960, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <Box id="achievements" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 }, width: '100%', bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
          <MilitaryTechIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
          <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, color: 'primary.main' }}>
            Our Achievements
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 1, sm: 2, md: 4 } }}>
          <Slider {...(settings as any)}>
            {achievements.map((achievement) => (
              <Box key={achievement.id} sx={{ px: 2 }}>
                <Card sx={{ height: 300, display: 'flex', flexDirection: 'column', textAlign: 'center', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out', boxShadow: 4 } }}>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ color: achievement.color, mb: 2, display: 'flex', justifyContent: 'center' }}>
                      {achievement.icon}
                    </Box>
                    <Typography variant="h3" component="div" fontWeight="bold" sx={{ color: achievement.color, mb: 1 }}>
                      {achievement.stat}
                    </Typography>
                    <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default AchievementGallery; 