import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, Chip, IconButton, Dialog, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const getTagStyles = (tag: string, mode: 'light' | 'dark') => {
  const t = tag.toLowerCase();

  if (t.includes('flutter')) {
    return {
      bg: mode === 'dark' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(107, 33, 168, 0.08)',
      text: mode === 'dark' ? '#c084fc' : '#6b21a8',
      border: mode === 'dark' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(107, 33, 168, 0.2)'
    };
  }
  if (t.includes('firebase') || t.includes('riverpod')) {
    return {
      bg: mode === 'dark' ? 'rgba(217, 70, 239, 0.15)' : 'rgba(162, 28, 175, 0.08)',
      text: mode === 'dark' ? '#f472b6' : '#a21caf',
      border: mode === 'dark' ? 'rgba(217, 70, 239, 0.4)' : 'rgba(162, 28, 175, 0.2)'
    };
  }
  if (t.includes('react') || t.includes('next.js') || t.includes('typescript')) {
    return {
      bg: mode === 'dark' ? 'rgba(192, 132, 252, 0.1)' : 'rgba(88, 28, 135, 0.06)',
      text: mode === 'dark' ? '#e9d5ff' : '#581c87',
      border: mode === 'dark' ? 'rgba(192, 132, 252, 0.3)' : 'rgba(88, 28, 135, 0.2)'
    };
  }
  return {
    bg: 'transparent',
    text: mode === 'dark' ? '#c084fc' : '#581c87',
    border: mode === 'dark' ? '#2e1065' : '#f3e8ff'
  };
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const title = isEn ? project.titleEN : project.titleES;
  const description = isEn ? project.descriptionEN : project.descriptionES;
  const extendedDesc = isEn ? project.extendedDescriptionEN : project.extendedDescriptionES;

  const theme = useTheme();
  const currentMode = theme.palette.mode as 'light' | 'dark';

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const carouselImages = project.images && project.images.length > 0 ? project.images : (project.imageUrl ? [project.imageUrl] : []);
  const hasImages = carouselImages.length > 0;
  const hasMultipleImages = carouselImages.length > 1;

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(145deg, #140e28 0%, #090514 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '16px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'primary.main',
            boxShadow: theme.palette.mode === 'dark'
              ? '0px 12px 30px rgba(56, 189, 248, 0.12)'
              : '0px 12px 30px rgba(2, 132, 199, 0.08)',
          }
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 4 }}>
          <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, fontSize: '0.75rem' }}>
            {project.category}
          </Typography>

          <Typography variant="h5" component="h3" sx={{ mt: 1, mb: 2, fontWeight: 700, letterSpacing: '-0.01em', color: 'text.primary' }}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, fontSize: '0.92rem' }}>
            {description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag) => {
              const styles = getTagStyles(tag, currentMode);
              return (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: 600, borderRadius: '8px', backgroundColor: styles.bg, color: styles.text, borderColor: styles.border, fontSize: '0.78rem' }}
                />
              );
            })}
          </Box>
        </CardContent>

        <CardActions sx={{ px: 4, pb: 4, pt: 0, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {project.githubUrl && (
              <Button href={project.githubUrl} target="_blank" size="small" sx={{ fontWeight: 600, textTransform: 'none', color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" size="small" color="primary" sx={{ fontWeight: 600, textTransform: 'none' }}>
                Demo
              </Button>
            )}
          </Box>

          {hasImages && (
            <Button
              size="small"
              variant="contained"
              disableElevation
              startIcon={<VisibilityIcon />}
              onClick={() => setIsOpen(true)}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: 'primary.main',
                border: '1px solid',
                borderColor: alpha(theme.palette.primary.main, 0.2),
                '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.2) }
              }}
            >
              {isEn ? 'View App' : 'Ver App'}
            </Button>
          )}
        </CardActions>
      </Card>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.paper',
              backgroundImage: 'none',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: 'divider',
              overflow: 'visible',
              p: 0
            }
          }
        }}
      >
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'absolute', top: { xs: -45, md: 12 }, right: { xs: 0, md: 12 }, color: 'text.secondary',
            bgcolor: alpha(theme.palette.background.default, 0.8),
            border: '1px solid', borderColor: 'divider',
            '&:hover': { color: 'text.primary', bgcolor: theme.palette.action.hover }, zIndex: 10
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: theme.palette.mode === 'dark' ? '#0b0f19' : '#f1f5f9', p: 4, borderTopLeftRadius: '20px', borderBottomLeftRadius: { xs: 0, md: '20px' }, position: 'relative', minHeight: '400px' }}>
            <Box
              component="img"
              src={carouselImages[currentImgIndex]}
              alt="App screenshot"
              sx={{
                maxWidth: '100%',
                maxHeight: '50vh',
                objectFit: 'contain',
                borderRadius: project.category === 'mobile' ? '24px' : '8px',
                boxShadow: '0px 15px 35px rgba(0,0,0,0.15)',
                border: project.category === 'mobile'
                  ? `4px solid ${theme.palette.mode === 'dark' ? '#1e293b' : '#cbd5e1'}`
                  : 'none'
              }}
            />

            {hasMultipleImages && (
              <>
                <IconButton
                  onClick={handlePrev}
                  sx={{ position: 'absolute', left: 12, bgcolor: 'background.paper', color: 'text.primary', border: '1px solid', borderColor: 'divider', '&:hover': { bgcolor: 'action.hover' } }}
                  size="small"
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{ position: 'absolute', right: 12, bgcolor: 'background.paper', color: 'text.primary', border: '1px solid', borderColor: 'divider', '&:hover': { bgcolor: 'action.hover' } }}
                  size="small"
                >
                  <NavigateNextIcon />
                </IconButton>
                <Box sx={{ position: 'absolute', bottom: 12, bgcolor: 'background.paper', px: 1.5, py: 0.3, borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600, color: 'text.secondary', border: '1px solid', borderColor: 'divider' }}>
                  {currentImgIndex + 1} / {carouselImages.length}
                </Box>
              </>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>
              {project.category}
            </Typography>

            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, color: 'text.primary', fontSize: '1.8rem' }}>
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7, fontSize: '0.95rem' }}>
              {description}
            </Typography>

            {extendedDesc && (
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7, fontSize: '0.9rem', bgcolor: alpha(theme.palette.action.hover, 0.4), p: 2, borderRadius: '10px', border: '1px solid', borderColor: 'divider' }}>
                {extendedDesc}
              </Typography>
            )}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 1 }}>
              {project.tags.map((tag) => {
                const styles = getTagStyles(tag, currentMode);
                return (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 600, borderRadius: '6px', backgroundColor: styles.bg, color: styles.text, borderColor: styles.border }}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};