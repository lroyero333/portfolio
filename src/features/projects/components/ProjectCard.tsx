import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, Chip, IconButton, Dialog, Grid } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const getTagStyles = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes('flutter')) return { bg: 'rgba(56, 189, 248, 0.1)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)' };
  if (t.includes('firebase') || t.includes('riverpod')) return { bg: 'rgba(251, 146, 60, 0.1)', text: '#fb923c', border: 'rgba(251, 146, 60, 0.3)' };
  if (t.includes('react') || t.includes('next.js') || t.includes('typescript')) return { bg: 'rgba(96, 165, 250, 0.1)', text: '#60a5fa', border: 'rgba(96, 165, 250, 0.3)' };
  return { bg: 'transparent', text: '#94a3b8', border: '#334155' };
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const title = isEn ? project.titleEN : project.titleES;
  const description = isEn ? project.descriptionEN : project.descriptionES;
  const extendedDesc = isEn ? project.extendedDescriptionEN : project.extendedDescriptionES;

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
      {/* ─── TARJETA PRINCIPAL (DISEÑO TIPOGRÁFICO LIMPIO) ─── */}
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
          border: '1px solid #334155',
          borderRadius: '16px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'primary.main',
            boxShadow: '0px 12px 30px rgba(56, 189, 248, 0.12)',
          }
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 4 }}>
          <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, fontSize: '0.75rem' }}>
            {project.category}
          </Typography>

          <Typography variant="h5" component="h3" sx={{ mt: 1, mb: 2, fontWeight: 700, letterSpacing: '-0.01em', color: '#ffffff' }}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, fontSize: '0.92rem' }}>
            {description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag) => {
              const styles = getTagStyles(tag);
              return (
                <Chip
                  key={tag} label={tag} size="small" variant="outlined"
                  sx={{ fontWeight: 600, borderRadius: '8px', backgroundColor: styles.bg, color: styles.text, borderColor: styles.border, fontSize: '0.78rem' }}
                />
              );
            })}
          </Box>
        </CardContent>

        <CardActions sx={{ px: 4, pb: 4, pt: 0, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {project.githubUrl && (
              <Button href={project.githubUrl} target="_blank" size="small" color="inherit" sx={{ fontWeight: 600, textTransform: 'none' }}>
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
                bgcolor: 'rgba(56, 189, 248, 0.1)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                '&:hover': { bgcolor: 'rgba(56, 189, 248, 0.2)' }
              }}
            >
              {isEn ? 'View App' : 'Ver App'}
            </Button>
          )}
        </CardActions>
      </Card>

      {/* ─── MODAL DETALLADO DE ALTA FIDELIDAD ─── */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              bgcolor: '#0f172a',
              backgroundImage: 'none',
              borderRadius: '20px',
              border: '1px solid #334155',
              overflow: 'visible',
              p: 0
            }
          }
        }}
      >
        {/* Botón Cerrar */}
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'absolute', top: { xs: -45, md: 12 }, right: { xs: 0, md: 12 }, color: '#94a3b8',
            bgcolor: 'rgba(30, 41, 59, 0.5)', '&:hover': { color: '#fff', bgcolor: 'rgba(30, 41, 59, 0.8)' }, zIndex: 10
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#0b0f19', p: 4, borderTopLeftRadius: '20px', borderBottomLeftRadius: { xs: 0, md: '20px' }, position: 'relative', minHeight: '400px' }}>
            <Box
              component="img"
              src={carouselImages[currentImgIndex]}
              alt="App screenshot"
              sx={{
                maxWidth: '100%',
                maxHeight: '50vh',
                objectFit: 'contain',
                borderRadius: project.category === 'mobile' ? '24px' : '8px', // Look de celular para apps móviles
                boxShadow: '0px 15px 35px rgba(0,0,0,0.6)',
                border: project.category === 'mobile' ? '4px solid #1e293b' : 'none'
              }}
            />

            {hasMultipleImages && (
              <>
                <IconButton
                  onClick={handlePrev}
                  sx={{ position: 'absolute', left: 12, bgcolor: 'rgba(30, 41, 59, 0.8)', color: '#fff', '&:hover': { bgcolor: '#334155' } }}
                  size="small"
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{ position: 'absolute', right: 12, bgcolor: 'rgba(30, 41, 59, 0.8)', color: '#fff', '&:hover': { bgcolor: '#334155' } }}
                  size="small"
                >
                  <NavigateNextIcon />
                </IconButton>
                <Box sx={{ position: 'absolute', bottom: 12, bgcolor: 'rgba(15, 23, 42, 0.8)', px: 1.5, py: 0.3, borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', border: '1px solid #334155' }}>
                  {currentImgIndex + 1} / {carouselImages.length}
                </Box>
              </>
            )}
          </Grid>

          {/* Columna Derecha: Contenido Técnico */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>
              {project.category}
            </Typography>
            
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, color: '#ffffff', fontSize: '1.8rem' }}>
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7, fontSize: '0.95rem' }}>
              {description}
            </Typography>

            {extendedDesc && (
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.7, fontSize: '0.9rem', bgcolor: 'rgba(30, 41, 59, 0.3)', p: 2, borderRadius: '10px', border: '1px solid #1e293b' }}>
                {extendedDesc}
              </Typography>
            )}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 1 }}>
              {project.tags.map((tag) => {
                const styles = getTagStyles(tag);
                return (
                  <Chip
                    key={tag} label={tag} size="small" variant="outlined"
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