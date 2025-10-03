'use client';

import React, { useRef, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Load react-slick on client only
const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

type Props = {
  videos?: string[];
  title?: string;
};

const StudentVideoTestimonials: React.FC<Props> = ({
  videos = [
    'https://d3ch9yaylaixz2.cloudfront.net/5_1752336881.mp4',
    'https://d3ch9yaylaixz2.cloudfront.net/6_1752336889.mp4',
    'https://d3ch9yaylaixz2.cloudfront.net/7_1752336896.mp4',
    'https://d3ch9yaylaixz2.cloudfront.net/8_1752336919.mp4',
  ],
  title = 'What Our Students Say',
}) => {
  const sliderRef = useRef<any>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const pauseAll = useCallback(() => {
    const root = sliderWrapperRef.current;
    if (!root) return;
    root.querySelectorAll('video').forEach((v: HTMLVideoElement) => {
      if (!v.paused) v.pause();
    });
  }, []);

  const pauseOthers = useCallback((current?: HTMLVideoElement) => {
    const root = sliderWrapperRef.current;
    if (!root) return;
    root.querySelectorAll('video').forEach((v: HTMLVideoElement) => {
      if (v !== current && !v.paused) v.pause();
    });
  }, []);

  const handleBeforeChange = useCallback(() => {
    pauseAll();
  }, [pauseAll]);

  const handleAfterChange = useCallback(() => {
    pauseAll();
  }, [pauseAll]);

  const handleSwipe = useCallback(() => {
    pauseAll();
  }, [pauseAll]);


  const PrevArrow = useMemo(() => (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        aria-label="Previous"
        onClick={(e) => {
          pauseAll();
          onClick?.(e);
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ChevronLeftRoundedIcon />
      </IconButton>
    );
  }, [pauseAll]);

  const NextArrow = useMemo(() => (props: any) => {
    const { onClick } = props;
    return (
      <IconButton
        aria-label="Next"
        onClick={(e) => {
          pauseAll();
          onClick?.(e);
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ChevronRightRoundedIcon />
      </IconButton>
    );
  }, [pauseAll]);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: handleBeforeChange,
      afterChange: handleAfterChange,
      onSwipe: handleSwipe,
      lazyLoad: 'ondemand' as const,
      waitForAnimate: true,
      // Prevent any autoplay at the carousel level
      autoplay: false,
    }),
    [NextArrow, PrevArrow, handleBeforeChange, handleAfterChange, handleSwipe]
  );

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
          width: '100%',
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
              color: 'primary.main',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box ref={sliderWrapperRef} sx={{ width: '100%', maxWidth: 900, position: 'relative' }}>
          <SlickSlider {...settings}>
            {videos.map((src, idx) => (
              <Box key={src} sx={{ px: { xs: 1, sm: 2 } }}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        bgcolor: '#000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '300px',
                      }}
                    >
                      <Box
                        component="video"
                        src={src}
                        controls
                        preload="metadata"
                        playsInline
                        // Never autoplay
                        autoPlay={false}
                        muted={false}
                        onPlay={(e) => pauseOthers(e.currentTarget)}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '500px',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </SlickSlider>
        </Box>
      </Container>
    </Box>
  );
};

export default StudentVideoTestimonials;
