import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      id="contact"
      component="footer" 
      sx={{ 
        bgcolor: '#1e1e1e', 
        color: 'white',
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
        width: '100%'
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: '1fr', 
              md: '1fr 1fr', 
              lg: '2fr 1fr 1fr' 
            },
            gap: { xs: 3, md: 4 },
            mb: { xs: 3, md: 4 }
          }}
        >
          {/* Company Info */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box component="img" src="/favicon/icon_2.png" alt="Logo" sx={{ mr: 1, width: 32, height: 32, borderRadius: 1 }} />
              <Typography variant="h5" component="div" fontWeight="bold">
                STH Education Solutions
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
              Empowering students to achieve their academic dreams through 
              personalized education and proven teaching methods. Join thousands 
              of successful students who have transformed their futures with us.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': { bgcolor: '#3b5998' }
                }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': { bgcolor: '#1da1f2' }
                }}
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': { bgcolor: '#0077b5' }
                }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': { bgcolor: '#e4405f' }
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box>
            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 2, color: '#64b5f6' }} />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    info@eduexcellence.com
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 2, color: '#81c784' }} />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    +1 (562)-968-4306 (US)
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 2, color: '#ffb74d' }} />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Address
                  </Typography>
                  <Typography variant="body1">
                    23107 Catalina Harbor CT<br />
                    Katy, TX 77494, USA
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About Us', 'Our Courses', 'Testimonials', 'Achievements', 'Our Team', 'FAQ', 'Contact'].map((link) => (
                <Typography 
                  key={link}
                  variant="body1" 
                  component="a"
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  sx={{ 
                    color: 'grey.300',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" component="h4" fontWeight="bold" gutterBottom>
                WeChat
              </Typography>
              <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
                Scan QR code or add:
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
                KevinLiu_ED
              </Typography>
              <Box 
                component="img" 
                src="/wechat/qr_code.jpg" 
                alt="WeChat QR Code"
                sx={{ 
                  width: 120, 
                  height: 120, 
                  borderRadius: 1,
                  border: '2px solid #fff',
                  boxShadow: 2
                }}
              />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'grey.700', my: 3 }} />

        {/* Copyright */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" color="grey.400">
            © {currentYear} STH Education Solutions. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography 
              variant="body2" 
              component="a"
              href="#privacy"
              sx={{ 
                color: 'grey.400',
                textDecoration: 'none',
                '&:hover': { color: 'white' }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              component="a"
              href="#terms"
              sx={{ 
                color: 'grey.400',
                textDecoration: 'none',
                '&:hover': { color: 'white' }
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 