import { notFound } from 'next/navigation';
import { getAllCourses, getCourseById } from '../../../src/data/getCourses';
import { Container, Box, Typography, Chip, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ScheduleIcon from '@mui/icons-material/Schedule';
import InfoIcon from '@mui/icons-material/Info';
import NextLink from 'next/link';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const items = await getAllCourses();
  return items.map((c) => ({ courseId: c.id }));
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);
  if (!course) return notFound();

  return (
    <>
      {course.image && (
        <Box
          sx={{
            width: '100vw',
            height: { xs: 220, sm: 280, md: 340 },
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            mb: 3,
            backgroundImage: `url(${course.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Button component={NextLink as any} href="/#courses" startIcon={<ArrowBackIcon />} variant="outlined" sx={{ mb: 3 }}>
          Back to Homepage
        </Button>

        <Typography variant="h3" component="h1" fontWeight={700} sx={{ mb: 1 }}>
          {course.title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip label={course.level} sx={{ bgcolor: `${course.color}20`, color: course.color }} />
          <Chip label={course.duration} variant="outlined" />
          {course.price && <Chip label={course.price} color="primary" />}
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          {course.description}
        </Typography>

        {course.detailedDescription && (
          <Box sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InfoIcon sx={{ color: course.color }} />
              Detailed Description
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {course.detailedDescription}
            </Typography>
          </Box>
        )}

        {course.currentSchedule && (
          <Box sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ScheduleIcon sx={{ color: course.color }} />
              Current Schedule
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {course.currentSchedule}
            </Typography>
          </Box>
        )}

        <Box sx={{ mb: 2 }}>
          {course.features.map((f, i) => (
            <Chip key={i} label={f} size="small" variant="outlined" sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      </Container>
    </>
  );
}
