"use client";

import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Modal,
  Typography,
  Divider,
  Container,
  Paper,
} from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Floating Contact Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={handleOpen}
          sx={{
            bgcolor: '#1976d2',
            color: 'white',
            width: 60,
            height: 60,
            boxShadow: 3,
            '&:hover': {
              bgcolor: '#1565c0',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
          aria-label="Contact Us"
        >
          <ContactSupportIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      {/* Contact Modal */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="contact-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            width: { xs: '90%', sm: '450px' },
            maxHeight: '80vh',
            overflow: 'auto',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
            }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>

          <Container sx={{ py: 3 }}>
            {/* Main Title */}
            <Typography variant="h4" component="h1" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 1 }}>
              Contact us now
            </Typography>

            {/* WeChat Section */}
            <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                WeChat
              </Typography>
              <Typography variant="body1" color="grey.600" sx={{ mb: 2, textAlign: 'center' }}>
                Scan QR code or add:
              </Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}>
                KevinLiu_ED
              </Typography>
              <Box 
                component="img" 
                src="/wechat/qr_code.jpg" 
                alt="WeChat QR Code"
                sx={{ 
                  width: 150, 
                  height: 150, 
                  borderRadius: 1,
                  border: '2px solid #e0e0e0',
                  boxShadow: 2,
                }}
              />
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* Contact Information Section */}
            <Box sx={{ mb: 1 }}>
              <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 2, color: '#81c784' }} />
                <Box>
                  <Typography variant="body1" color="grey.600">
                    Phone
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    +1 (562)-968-4306 (US)
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 2, color: '#64b5f6' }} />
                <Box>
                  <Typography variant="body1" color="grey.600">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    anqingllf@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* Social Icons Section */}
            <Box>
              <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <IconButton 
                  component="a"
                  href="mailto:anqingllf@gmail.com"
                  sx={{ 
                    color: '#db4437',
                    '&:hover': { 
                      bgcolor: '#db4437',
                      color: 'white',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label="Gmail"
                >
                  <EmailIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <IconButton 
                  component="a"
                  href="https://wa.me/15629684306"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#25d366',
                    '&:hover': { 
                      bgcolor: '#25d366',
                      color: 'white',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Modal>
    </>
  );
};

export default FloatingContact;
