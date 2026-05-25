import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { academicEducation, industryCertifications } from '@/features/projects/data/cvData';

export const EducationSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    return (
        <Container id="educacion" maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, pb: { xs: 12, md: 16 } }}>

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
                    {t('education.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 650, textAlign: 'center', fontSize: '1.1rem' }}>
                    {t('education.subtitle')}
                </Typography>
            </Box>

            <Grid container spacing={5}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3}>
                        {academicEducation.map((edu) => {
                            const eduTitle = isEn ? edu.titleEN : edu.titleES;
                            return (
                                <Card
                                    key={edu.id}
                                    sx={{
                                        background: (theme) => theme.palette.mode === 'dark'
                                            ? 'linear-gradient(145deg, #1e293b 0%, #111c30 100%)'
                                            : 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: '16px',
                                        p: 2,
                                        position: 'relative'
                                    }}
                                >
                                    <CardContent>
                                        <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }} >
                                            <Box sx={{ bgcolor: 'rgba(56, 189, 248, 0.1)', p: 1.5, borderRadius: '12px', color: 'primary.main', display: 'flex' }}>
                                                <SchoolIcon sx={{ fontSize: 28 }} />
                                            </Box>
                                            <Stack spacing={0.5}>
                                                <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                                                    {eduTitle}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                                                    {edu.institution}
                                                </Typography>
                                                <Typography variant="caption" color="primary" sx={{ fontWeight: 600, mt: 0.5 }}>
                                                    {edu.period} {edu.location ? `| ${edu.location}` : ''}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, fontSize: '1.25rem' }}>
                        <WorkspacePremiumIcon sx={{ color: 'primary.main' }} />
                        {t('education.courses')}
                    </Typography>

                    <Stack spacing={2}>
                        {industryCertifications.map((cert) => {
                            const certTitle = isEn ? cert.titleEN : cert.titleES;
                            return (
                                <Box
                                    key={cert.id}
                                    sx={{
                                        p: 2.5,
                                        borderRadius: '12px',
                                        bgcolor: (theme) => theme.palette.mode === 'dark'
                                            ? 'rgba(30, 41, 59, 0.3)'
                                            : 'rgba(226, 232, 240, 0.4)',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: '0px 4px 12px rgba(56, 189, 248, 0.05)'
                                        }
                                    }}
                                >
                                    <Stack spacing={0.5}>
                                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                            {certTitle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                                            {cert.institution}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600, whiteSpace: 'nowrap', ml: 2 }}>
                                        {cert.period}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Stack>
                </Grid>

            </Grid>
        </Container >
    );
};