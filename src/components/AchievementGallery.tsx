import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
  CardMedia,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Slider from '../../components/SlickClient';

interface Achievement {
  id: number;
  title: string;
  imagePath: string;
}

const AchievementGallery: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Student Achievement Score 1",
      imagePath: "/scores/Picture1.jpg"
    },
    {
      id: 2,
      title: "Student Achievement Score 2",
      imagePath: "/scores/Picture2.png"
    },
    {
      id: 3,
      title: "Student Achievement Score 3",
      imagePath: "/scores/Picture3.jpg"
    },
    {
      id: 4,
      title: "Student Achievement Score 4",
      imagePath: "/scores/Picture4.png"
    },
    {
      id: 5,
      title: "Student Achievement Score 5",
      imagePath: "/scores/Picture5.jpg"
    },
    {
      id: 6,
      title: "Student Achievement Score 6",
      imagePath: "/scores/Picture6.jpg"
    },
    {
      id: 7,
      title: "Student Achievement Score 7",
      imagePath: "/scores/Picture7.png"
    },
    {
      id: 8,
      title: "Student Achievement Score 8",
      imagePath: "/scores/Picture8.jpg"
    },
    {
      id: 9,
      title: "Student Achievement Score 9",
      imagePath: "/scores/Picture9.jpg"
    },
    {
      id: 10,
      title: "Student Achievement Score 10",
      imagePath: "/scores/Picture10.png"
    },
    {
      id: 11,
      title: "Student Achievement Score 11",
      imagePath: "/scores/Picture11.png"
    },
    {
      id: 12,
      title: "Student Achievement Score 12",
      imagePath: "/scores/Picture12.png"
    },
    {
      id: 13,
      title: "Student Achievement Score 13",
      imagePath: "/scores/Picture13.png"
    },
    {
      id: 14,
      title: "Student Achievement Score 14",
      imagePath: "/scores/Picture14.png"
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
                  <CardMedia
                    component="img"
                    height="350"
                    image={achievement.imagePath}
                    alt={achievement.title}
                    sx={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
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