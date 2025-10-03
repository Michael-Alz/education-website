import { Container, Stack, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NextLink from 'next/link';
import { getAllArticles } from '../../src/data/getArticles';
import ArticleCard from './(components)/ArticleCard';

export const dynamic = 'force-static';

export default async function ArticlesPage() {
  const items = await getAllArticles();
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h3" component="h1" fontWeight={700}>
          Articles
        </Typography>
        <Button
          component={NextLink as any}
          href="/#"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back to Home Page
        </Button>
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        {items.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Box>
    </Container>
  );
}
