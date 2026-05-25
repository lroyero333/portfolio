import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nextLang);
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: isScrolled ? 'rgba(15, 23, 42, 0.75)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: '1px solid',
                borderColor: isScrolled ? 'rgba(51, 65, 85, 0.5)' : 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 1100,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px' }}>

                    {/* Logo / Iniciales */}
                    <Typography
                        variant="h6"
                        component="div"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        sx={{
                            fontWeight: 800,
                            fontFamily: '"Poppins", sans-serif',
                            cursor: 'pointer',
                            background: 'linear-gradient(45deg, #38bdf8 30%, #fb7185 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        LERS.dev
                    </Typography>

                    {/* Menú de Navegación Central */}
                    <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit" onClick={() => scrollToSection('proyectos')} sx={{ fontWeight: 600, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                            {t('nav.projects')}
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection('experiencia')} sx={{ fontWeight: 600, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                            {t('nav.experience')}
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection('habilidades')} sx={{ fontWeight: 600, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                            {t('nav.skills')}
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection('educacion')} sx={{ fontWeight: 600, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                            {t('nav.education')}
                        </Button>
                    </Stack>

                    {/* Selector de Idioma Minimalista */}
                    <Box>
                        <Button
                            variant="text"
                            onClick={toggleLanguage}
                            size="small"
                            sx={{
                                fontWeight: 700,
                                borderRadius: '8px',
                                color: 'primary.main',
                                border: '1px solid rgba(56, 189, 248, 0.2)',
                                backgroundColor: 'rgba(56, 189, 248, 0.04)',
                                padding: '4px 12px',
                                '&:hover': {
                                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                    borderColor: 'primary.main'
                                }
                            }}
                        >
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};