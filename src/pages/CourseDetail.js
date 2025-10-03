import NextLink from 'next/link';
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import InfoIcon from '@mui/icons-material/Info';
import { getCourseById } from '../data/getCourses';

interface Props {
  courseIdFromParams?: string;
}

const CourseDetail = async ({ courseIdFromParams }: Props) => {
  const courseId = courseIdFromParams;
  const course = await getCourseById(courseId);

  if (!course) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Course not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The course you're looking for doesn't exist.
        </Typography>
        <Button
          component={NextLink as any}
          href="/#courses"
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Back to Homepage
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9f9f9', py: 4 }}>
      <Container maxWidth="lg">
        <Button
          component={NextLink as any}
          href="/#courses"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4, mt: 2 }}
          variant="outlined"
        >
          Back to Homepage
        </Button>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Card>
            <CardMedia
              component="img"
              sx={{ 
                width: '100%',
                height: { xs: 200, sm: 250, md: 300 },
                objectFit: 'cover' 
              }}
              image={course.image}
              alt={course.title}
            />
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                  {course.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  <Chip 
                    label={course.level} 
                    icon={<BarChartIcon />}
                    sx={{ bgcolor: `${course.color}20`, color: course.color }}
                  />
                  <Chip 
                    label={course.duration} 
                    icon={<AccessTimeIcon />}
                    variant="outlined"
                  />
                  <Chip 
                    label={course.price} 
                    icon={<AttachMoneyIcon />}
                    color="primary"
                  />
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

                <Box sx={{ mt: 3, mb: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    What You'll Learn
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 2,
                    mt: 2
                  }}>
                    {course.features.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          bgcolor: `${course.color}10`,
                          borderRadius: 1,
                          px: 2,
                          py: 1,
                          border: `1px solid ${course.color}30`
                        }}
                      >
                        <CheckCircleIcon sx={{ color: course.color, fontSize: 18, mr: 1 }} />
                        <Typography variant="body2" fontWeight="medium">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 4, mt: 3, mb: 3 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Duration</Typography>
                    <Typography variant="body1" fontWeight="medium">{course.duration}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Level</Typography>
                    <Typography variant="body1" fontWeight="medium">{course.level}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Price</Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: course.color }}>
                      {course.price}
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    mt: 2,
                    bgcolor: course.color,
                    minWidth: 200,
                    '&:hover': {
                      bgcolor: course.color,
                      filter: 'brightness(0.9)'
                    }
                  }}
                >
                  Enroll Now
                </Button>
            </CardContent>
          </Card>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
              Course Overview
            </Typography>
              
              <Typography variant="body1" paragraph>
                This comprehensive course is designed to provide students with a thorough understanding of the subject matter through engaging lectures, hands-on activities, and real-world applications.
              </Typography>

              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
                What Makes This Course Special
              </Typography>
              
              <Typography variant="body1" paragraph>
                Our expert instructors bring years of industry experience and academic excellence to create a learning environment that fosters both theoretical knowledge and practical skills. Students will benefit from:
              </Typography>

              <Typography variant="body1" paragraph>
                • Interactive learning sessions with immediate feedback
                <br />
                • Access to exclusive study materials and resources
                <br />
                • Personalized attention and support throughout the course
                <br />
                • Networking opportunities with peers and industry professionals
              </Typography>

              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
                Course Structure
              </Typography>
              
              <Typography variant="body1" paragraph>
                The course is structured to build knowledge progressively, starting with foundational concepts and advancing to more complex topics. Each module includes assessments and practical exercises to reinforce learning.
              </Typography>

            <Typography variant="body1" paragraph>
              Upon completion, students will have gained the confidence and competence needed to excel in their academic pursuits and future career endeavors.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseDetail;