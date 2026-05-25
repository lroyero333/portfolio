import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { workExperiences } from '@/features/projects/data/cvData';

export const ExperienceTimeline: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    return (
        <Container id="experiencia" maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>

            <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center", mb: 8 }} >
                <Typography variant="h3" sx={{
                    fontWeight: 800,
                    background: (theme) => theme.palette.mode === 'dark'
                        ? 'linear-gradient(to right, #ffffff 40%, #94a3b8 100%)'
                        : 'linear-gradient(to right, #0f172a 40%, #475569 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {t('experience.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, fontSize: '1.1rem' }}>
                    {t('experience.subtitle')}
                </Typography>
            </Stack>

            <Box
                sx={{
                    position: 'relative',
                    borderLeft: '2px solid',
                    borderColor: 'divider',
                    ml: { xs: 2, sm: 4 },
                    pl: { xs: 3, sm: 5 }
                }}
            >
                {workExperiences.map((exp) => {
                    const role = isEn ? exp.roleEN : exp.roleES;
                    const period = isEn ? exp.periodEN : exp.periodES;
                    const bullets = isEn ? exp.bulletsEN : exp.bulletsES;

                    return (
                        <Box key={exp.id} sx={{ position: 'relative', mb: 6, '&:last-child': { mb: 0 } }}>

                            <Box
                                sx={{
                                    position: 'absolute', top: 6, left: { xs: -33, sm: -49 },
                                    width: '16px', height: '16px', borderRadius: '50%',
                                    bgcolor: 'background.default',
                                    border: '3px solid',
                                    borderColor: 'primary.main',
                                    boxShadow: (theme) => theme.palette.mode === 'dark'
                                        ? '0 0 10px rgba(56, 189, 248, 0.5)'
                                        : '0 0 8px rgba(2, 132, 199, 0.3)'
                                }}
                            />

                            <Stack spacing={1.5}>
                                <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '-0.01em' }}>
                                    {role}
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ color: 'text.secondary' }}>
                                    <Stack direction="row" spacing={0.8} sx={{ alignItems: "center", fontSize: '0.9rem', fontWeight: 500 }}>
                                        <BusinessIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                            {exp.company}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.8} sx={{ alignItems: "center", fontSize: '0.9rem' }}>
                                        <CalendarMonthIcon sx={{ fontSize: 18 }} />
                                        <Typography variant="body2">{period}</Typography>
                                    </Stack>
                                </Stack>

                                <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                                    {bullets.map((bullet, idx) => (
                                        <Typography
                                            key={idx}
                                            component="li"
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.7,
                                                fontSize: '0.92rem',
                                                '&::marker': { color: 'primary.main' }
                                            }}
                                        >
                                            {bullet}
                                        </Typography>
                                    ))}
                                </Box>
                            </Stack>
                        </Box>
                    );
                })}
            </Box>
        </Container>
    );
};