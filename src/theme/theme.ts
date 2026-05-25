import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  // Mapeamos tus colores al sistema de paleta oficial de MUI
  palette: {
    mode: 'dark', // Cambiamos a 'dark' porque tus colores (#0f172a) son oscuros y así el texto se adapta automáticamente
    primary: {
      main: '#38bdf8', // Tu color primary
    },
    secondary: {
      main: '#fb7185', // Tu color secondary
    },
    background: {
      default: '#0f172a', // Tu color background (Slate 900)
      paper: '#1e293b',   // Tu color surface (Slate 800)
    },
    text: {
      primary: '#e2e8f0',   // Tu color text
      secondary: '#94a3b8', // Tu color muted
    },
    divider: '#334155', // Tu color border
  },

  // Mapeamos tus fuentes y tamaños tipográficos
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

  // Customización global de componentes usando tus bordes (radii) y sombras
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Tu radii.md
          backgroundColor: '#1e293b',
          border: '1px solid #334155', // Tu border
          boxShadow: '0 4px 14px rgba(15,23,42,0.1)', // Tu shadow.md
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Tu radii.sm
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Tu radii.sm
          textTransform: 'none',
        },
      },
    },
  },
});

export default lightTheme;