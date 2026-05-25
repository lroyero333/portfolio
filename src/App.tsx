import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { ProjectGrid } from '@/features/projects/components/ProjectGrid';
import { ExperienceTimeline } from '@/features/cv/components/ExperienceTimeline';
import { SkillsGrid } from '@/features/cv/components/SkillsGrid';
import { EducationSection } from '@/features/cv/components/EducationSection';

function App() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>

      <Navbar />

      <Box component="header" sx={{ position: 'relative', zIndex: 1, pt: { xs: 18, md: 24 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>

            <Typography
              variant="subtitle2"
              color="primary"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}
            >
              {t('hero.status')}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                letterSpacing: '-0.02em',
                background: (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(to right, #ffffff 40%, #94a3b8 100%)'
                  : 'linear-gradient(to right, #0f172a 40%, #475569 100%)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Luis Enrique Royero <br /> {t('hero.title')}
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.6 }}>
              {t('hero.description')}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2, width: { xs: '100%', sm: 'auto' } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                disableElevation
                onClick={() => scrollToSection('proyectos')}
                sx={{ fontWeight: 600, px: 4, py: 1.5 }}
              >
                {t('hero.btnProjects')}
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => scrollToSection('experiencia')}
                sx={{ fontWeight: 600, px: 4, py: 1.5, borderColor: 'divider' }}
              >
                {t('hero.btnCv')}
              </Button>
            </Stack>

          </Stack>
        </Container>
      </Box>

      <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>

        <ProjectGrid />

        <ExperienceTimeline />

        <SkillsGrid />

        <EducationSection />

      </Box>

    </Box>
  );
}

export default App;