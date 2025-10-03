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
      question: "What types of academic courses do you offer?",
      answer: "We offer tutoring and academic support for AP, IB, and A-Level courses in Math, Physics, Chemistry, Biology, and Statistics."
    },
    {
      id: 2,
      question: "Do you provide SAT and ACT preparation courses?",
      answer: "Yes, we provide comprehensive SAT and ACT preparation programs, including diagnostic testing, strategy coaching, and personalized study plans."
    },
    {
      id: 3,
      question: "What is the difference between AP, IB, and A-Level courses?",
      answer: "AP (Advanced Placement) is a U.S.-based curriculum offering college-level courses in high school. IB (International Baccalaureate) is a globally recognized program with a broader, inquiry-based curriculum. A-Level is a UK-based system focused on subject specialization. We provide support for all three systems."
    },
    {
      id: 4,
      question: "Can students get help with homework or exam preparation only?",
      answer: "Yes. We offer flexible tutoring options, including regular sessions, last-minute homework help, and intensive test preparation."
    },
    {
      id: 5,
      question: "Do you offer college admissions consulting services?",
      answer: "Yes, we provide U.S. college admissions guidance, including application strategy, school selection, essay coaching, interview preparation, and more."
    },
    {
      id: 6,
      question: "When should students start preparing for U.S. college applications?",
      answer: "Ideally, students should begin planning in Grade 10 or 11 to build a strong academic and extracurricular profile. However, we also support students with later start dates."
    },
    {
      id: 7,
      question: "Is the college admissions service only for U.S. universities?",
      answer: "Our primary focus is U.S. universities, but we also provide limited guidance for UK, Canada, and other international applications upon request."
    },
    {
      id: 8,
      question: "Are your sessions online or in-person?",
      answer: "We offer both online and in-person tutoring, depending on the student's location and preference."
    },
    {
      id: 9,
      question: "How do we get started?",
      answer: "Contact us through our website to schedule a free consultation. We'll assess your needs and recommend a customized learning or admissions plan."
    },
    {
      id: 10,
      question: "Do you provide practice materials and mock tests for SAT and AP exams?",
      answer: "Yes. We offer extensive practice with real past exam questions for SAT and AP subjects. Students also gain access to professional online platforms for adaptive mock testing and performance tracking."
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
            Contact us at info@eduexcellence.com or +1 (562)-968-4306 (US)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection; 