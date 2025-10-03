'use client';

import NextLink from 'next/link';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import type { Article } from '../../../src/data/articles';

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
  } catch {
    return iso.slice(0, 10);
  }
}

export default function ArticleCard({ article }: { article: Article }) {
  const subtitle = article.subtitle || article.excerpt;
  const [imageValid, setImageValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (!article.imageUrl) {
      setImageValid(false);
      return;
    }

    const img = new Image();
    img.onload = () => setImageValid(true);
    img.onerror = () => setImageValid(false);
    img.src = article.imageUrl;
  }, [article.imageUrl]);

  // Show image only if URL exists and image loads successfully
  const shouldShowImage = imageValid === true;

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 820,
        height: 170,
        mx: 'auto',
        '&:hover': { boxShadow: 6, transform: 'translateY(-2px)' },
        transition: 'all 0.2s ease',
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          p: 0,
          '&:last-child': { pb: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
          }}
        >
          {/* Left side - Text content */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: 0,
            }}
          >
            {/* Top section - Date and Title */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ 
                  mb: 1, 
                  display: 'block',
                  fontSize: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                {formatDate(article.publishedAt)}
              </Typography>

              <Typography
                component={NextLink as any}
                href={`/article/${article.id}`}
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  mb: 1,
                  height: '2.6em', // Fixed height for exactly 2 lines
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {article.title}
              </Typography>
            </Box>

            {/* Bottom section - Subtitle */}
            <Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  height: '2.8em', // Fixed height for exactly 2 lines
                }}
              >
                {subtitle || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
              </Typography>
            </Box>
          </Box>

          {/* Right side - Image */}
          <Box
            sx={{
              width: 160,
              height: '100%',
              flexShrink: 0,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {shouldShowImage ? (
              <Box
                component="img"
                src={article.imageUrl}
                alt={article.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0 12px 12px 0',
                }}
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0 12px 12px 0',
                }}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
