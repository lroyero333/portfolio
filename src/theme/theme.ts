import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#d946ef',
        },
        secondary: {
          main: '#a855f7',
        },
        background: {
          default: '#090514',
          paper: '#140e28',
        },
        text: {
          primary: '#f5f3ff',
          secondary: '#c084fc',
        },
        divider: '#2e1065',
      },
    },
    light: {
      palette: {
        primary: {
          main: '#a21caf',
        },
        secondary: {
          main: '#6b21a8',
        },
        background: {
          default: '#fafafa',
          paper: '#ffffff',
        },
        text: {
          primary: '#1e1b4b',
          secondary: '#581c87',
        },
        divider: '#f3e8ff',
      },
    },
  },

  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h4: {
      fontFamily: '"Poppins", system-ui, sans-serif',
      fontWeight: 800,
    },
    h5: {
      fontFamily: '"Poppins", system-ui, sans-serif',
      fontWeight: 700,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          backgroundColor: theme.palette.background.paper,
          border: '1px solid',
          borderColor: theme.palette.divider,
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0,0,0,0.5)'
            : '0 4px 14px rgba(15,23,42,0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;