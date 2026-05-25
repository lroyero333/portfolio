import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { myProjects } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const ProjectGrid: React.FC = () => {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile' | 'audit'>('all');

    const handleTabChange = (_event: React.SyntheticEvent, newValue: 'all' | 'web' | 'mobile' | 'audit') => {
        setActiveTab(newValue);
    };

    const filteredProjects = myProjects.filter((project) => {
        if (activeTab === 'all') return true;
        return project.category === activeTab;
    });

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>

            <Box
                sx={{
                    textTransform: 'center',
                    mb: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 2,
                        background: 'linear-gradient(45deg, #fff 30%, #a2a8b3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center'
                    }}
                >
                    {t('projects.title')}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        maxWidth: 650,
                        textAlign: 'center',
                        mb: 6,
                        fontSize: '1.1rem',
                        lineHeight: 1.7
                    }}
                >
                    {t('projects.subtitle')}
                </Typography>

                {/* ─── Sistema de Filtros Profesional bilingüe ─── */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        overflowX: 'auto',
                        pb: 1,
                        mb: 1
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        sx={{
                            background: 'background.paper',
                            padding: '6px',
                            borderRadius: '999px',
                            display: 'inline-flex',
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: '0 4px 14px rgba(15,23,42,0.1)',
                            minHeight: '48px',
                            '& .MuiTabs-scroller': {
                                overflow: 'visible !important'
                            },
                            '& .MuiTabs-indicator': {
                                height: '100%',
                                borderRadius: '999px',
                                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                zIndex: 0,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            },
                            '& .MuiTabs-flexContainer': {
                                gap: '8px'
                            },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                borderRadius: '999px',
                                color: 'text.secondary',
                                zIndex: 1,
                                minHeight: '36px',
                                padding: '8px 24px',
                                transition: 'color 0.2s ease',
                                '&.Mui-selected': {
                                    color: 'primary.main',
                                },
                                '&:hover:not(.Mui-selected)': {
                                    color: 'text.primary',
                                    backgroundColor: 'rgba(255, 255, 255, 0.03)'
                                }
                            }
                        }}
                    >
                        <Tab value="all" label={t('projects.tabs.all')} />
                        <Tab value="web" label={t('projects.tabs.web')} />
                        <Tab value="mobile" label={t('projects.tabs.mobile')} />
                        <Tab value="audit" label={t('projects.tabs.audit')} />
                    </Tabs>
                </Box>
            </Box>

            {/* ─── Grilla responsiva usando Grid2 ─── */}
            <Grid container spacing={4}>
                {filteredProjects.map((project) => (
                    <Grid
                        key={project.id}
                        size={{ xs: 12, sm: 6, md: 4 }}
                    >
                        <ProjectCard project={project} />
                    </Grid>
                ))}

                {/* ─── Estado Vacío Traducido ─── */}
                {filteredProjects.length === 0 && (
                    <Box
                        sx={{
                            width: '100%',
                            py: 12,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: '2px dashed',
                            borderColor: 'divider',
                            borderRadius: 4,
                            mt: 2
                        }}
                    >
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600, mb: 1 }}>
                            {t('projects.empty')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
                            {t('projects.emptyDesc')} {
                                activeTab === 'web' ? t('projects.tabs.web') :
                                    activeTab === 'mobile' ? t('projects.tabs.mobile') :
                                        activeTab === 'audit' ? t('projects.tabs.audit') : ''
                            }.
                        </Typography>
                    </Box>
                )}
            </Grid>
        </Container>
    );
};