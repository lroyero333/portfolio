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
      
      {/* Encabezado */}
      <Box sx={{ textTransform: 'center', mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(45deg, #fff 30%, #94a3b8 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>
          {t('skills.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 650, textAlign: 'center', fontSize: '1.1rem' }}>
          {t('skills.subtitle')}
        </Typography>
      </Box>

      {/* Grilla de Categorías */}
      <Grid container spacing={4}>
        {skillCategories.map((cat, idx) => {
          const categoryTitle = isEn ? cat.titleEN : cat.titleES;
          
          return (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
                  border: '1px solid #334155',
                  borderRadius: '16px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0px 10px 25px rgba(56, 189, 248, 0.08)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', mb: 2.5, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                    {categoryTitle}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {cat.skills.map((skill, sIdx) => (
                      <Box key={sIdx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#e2e8f0' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, bgcolor: 'rgba(56, 189, 248, 0.06)', px: 1, py: 0.3, borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
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