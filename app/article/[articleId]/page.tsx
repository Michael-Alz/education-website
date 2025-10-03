import NextLink from 'next/link';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAllArticles, getArticleById } from '../../../src/data/getArticles';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const items = await getAllArticles();
  return items.map((a) => ({ articleId: a.id }));
}

export default async function ArticleDetail({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  const article = await getArticleById(articleId);
  if (!article) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Article not found</Typography>
        <Button component={NextLink as any} href="/article" variant="contained" startIcon={<ArrowBackIcon />}>Back to Articles</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Button component={NextLink as any} href="/article" startIcon={<ArrowBackIcon />}>Back to Articles</Button>
        <Button component={NextLink as any} href="/#" variant="outlined" startIcon={<ArrowBackIcon />}>Back to Home Page</Button>
      </Stack>

      <Typography variant="h3" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        {article.title}
      </Typography>
      {article.subtitle && (
        <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
          {article.subtitle}
        </Typography>
      )}
      <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
        {new Date(article.publishedAt).toISOString().slice(0, 10)}
      </Typography>

      {article.imageUrl && (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={article.imageUrl}
            alt={article.title}
            sx={{
              width: '100%',
              maxWidth: { xs: 360, sm: 480, md: 640 },
              height: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          '& p': { mb: 2, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.1rem' } },
        }}
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </Container>
  );
}
