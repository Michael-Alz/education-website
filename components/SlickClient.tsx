'use client';

import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default Slider;
