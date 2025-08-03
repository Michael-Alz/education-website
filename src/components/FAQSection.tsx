import React from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What age groups do you serve?",
      answer: "We provide educational services for students from middle school through college level (ages 12-22). Our programs are specifically designed to meet the unique learning needs of each age group, with specialized approaches for SAT/ACT preparation, college applications, and academic subject tutoring."
    },
    {
      id: 2,
      question: "How do I schedule a consultation or first session?",
      answer: "Getting started is easy! You can contact us through our website contact form, call us at (555) 123-4567, or send us an email at info@eduexcellence.com. We offer a free 30-minute consultation to discuss your academic goals and determine the best program for your needs."
    },
    {
      id: 3,
      question: "What are your class sizes and tutoring options?",
      answer: "We offer both small group classes (maximum 6 students) and one-on-one tutoring sessions. Our small group classes provide collaborative learning opportunities while maintaining personalized attention. Private tutoring offers completely customized instruction tailored to individual learning styles and pace."
    },
    {
      id: 4,
      question: "How much improvement can I expect in my test scores?",
      answer: "While results vary by individual, our students typically see significant improvements. On average, SAT scores improve by 180+ points and ACT scores increase by 4+ points. Many of our students achieve their target scores within 12-16 weeks of consistent preparation with our proven methods."
    },
    {
      id: 5,
      question: "Do you offer online or in-person classes?",
      answer: "We offer both online and in-person instruction options to accommodate different preferences and schedules. Our online platform provides interactive whiteboards, screen sharing, and recorded sessions for review. In-person classes are held at our modern learning center with state-of-the-art facilities."
    }
  ];

  return (
    <Box 
      id="faq" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        bgcolor: '#f5f5f5'
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
          <HelpOutlineIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
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
            FAQ
          </Typography>
        </Box>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ 
            mb: { xs: 4, md: 6 },
            maxWidth: '600px',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          Find answers to commonly asked questions about our educational services and programs.
        </Typography>

        <Box 
          sx={{ 
            width: '100%',
            maxWidth: '900px'
          }}
        >
          {faqItems.map((faq) => (
            <Accordion 
              key={faq.id}
              sx={{ 
                mb: 2,
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                  boxShadow: 6,
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: 24, md: 28 }
                    }} 
                  />
                }
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  '&.Mui-expanded': {
                    minHeight: 'auto',
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                    '&.Mui-expanded': {
                      margin: '16px 0',
                    },
                  },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    color: 'white !important',
                    '&:hover': {
                      color: 'white !important',
                    },
                    '&.Mui-expanded': {
                      transform: 'rotate(180deg)',
                      color: 'white !important',
                    },
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    pr: 2
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              
              <AccordionDetails
                sx={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0 0 8px 8px',
                  p: { xs: 2, md: 3 }
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    lineHeight: 1.7,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    color: 'text.primary'
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Have a question that's not answered here?
          </Typography>
          <Typography 
            variant="h6" 
            color="primary.main"
            sx={{ fontWeight: 'bold' }}
          >
            Contact us at info@eduexcellence.com or (555) 123-4567
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection; 