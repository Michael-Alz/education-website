import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9f9f9', py: 4 }}>
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Course not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you are looking for does not exist.
        </Typography>
        <Button component={Link} href="/#courses" variant="contained" startIcon={<ArrowBackIcon />}>
          Back to Homepage
        </Button>
      </Container>
    </Box>
  );
}
