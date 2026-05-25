import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { IconButton, useColorScheme, alpha } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';

export const Navbar: React.FC = () => {
    const { mode, setMode } = useColorScheme();
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nextLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mode) return null;

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: (theme) => isScrolled
                    ? alpha(theme.palette.background.paper, 0.8)
                    : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: '1px solid',
                borderColor: isScrolled ? 'divider' : 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 1100,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: '70px', justifyContent: 'space-between' }}>

                    {/* LOGO DINÁMICO */}
                    <Typography
                        variant="h6"
                        component="div"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        sx={{
                            fontWeight: 800,
                            fontFamily: '"Poppins", sans-serif',
                            cursor: 'pointer',
                            background: mode === 'dark'
                                ? 'linear-gradient(45deg, #d946ef 30%, #a855f7 90%)'
                                : 'linear-gradient(45deg, #a21caf 30%, #6b21a8 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        LERS.dev
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {['projects', 'experience', 'skills', 'education'].map((key) => {
                            const sectionIds: Record<string, string> = {
                                projects: 'proyectos',
                                experience: 'experiencia',
                                skills: 'habilidades',
                                education: 'educacion'
                            };
                            return (
                                <Button
                                    key={key}
                                    color="inherit"
                                    onClick={() => scrollToSection(sectionIds[key])}
                                    sx={{
                                        fontWeight: 600,
                                        color: 'text.secondary',
                                        '&:hover': { color: 'text.primary' }
                                    }}
                                >
                                    {t(`nav.${key}`)}
                                </Button>
                            );
                        })}
                    </Stack>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>

                        <IconButton
                            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                            color="primary"
                            sx={{
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '8px',
                                p: 1,
                                color: 'text.primary'
                            }}
                        >
                            {mode === 'dark' ? <LightModeIcon sx={{ fontSize: 20 }} /> : <DarkModeIcon sx={{ fontSize: 20 }} />}
                        </IconButton>

                        <Button
                            variant="outlined"
                            onClick={toggleLanguage}
                            startIcon={<LanguageIcon />}
                            sx={{
                                fontWeight: 600,
                                borderColor: 'divider',
                                color: 'text.primary',
                                '&:hover': { borderColor: 'primary.main' }
                            }}
                        >
                            {i18n.language === 'en' ? 'ES' : 'EN'}
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};