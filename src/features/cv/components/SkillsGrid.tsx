import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '@/features/projects/data/cvData';

export const SkillsGrid: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <Container id="habilidades" maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

      <Box sx={{ textTransform: 'center', mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" sx={{
          fontWeight: 800, mb: 2,
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #ffffff 40%, #94a3b8 100%)'
            : 'linear-gradient(to right, #0f172a 40%, #475569 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          {t('skills.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 650, textAlign: 'center', fontSize: '1.1rem' }}>
          {t('skills.subtitle')}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {skillCategories.map((cat, idx) => {
          const categoryTitle = isEn ? cat.titleEN : cat.titleES;

          return (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  background: (theme) => theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)'
                    : 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '16px',
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0px 4px 14px rgba(15,23,42,0.1)'
                    : '0px 4px 14px rgba(148,163,184,0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0px 10px 25px rgba(56, 189, 248, 0.12)'
                      : '0px 10px 25px rgba(2,132,199,0.08)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 2.5, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                    {categoryTitle}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {cat.skills.map((skill, sIdx) => (
                      <Box key={sIdx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                          {skill.name}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            bgcolor: (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(56, 189, 248, 0.06)'
                              : 'rgba(2, 132, 199, 0.06)',
                            px: 1,
                            py: 0.3,
                            borderRadius: '6px',
                            border: '1px solid',
                            borderColor: (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(56, 189, 248, 0.15)'
                              : 'rgba(2, 132, 199, 0.15)'
                          }}
                        >
                          {skill.level}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};