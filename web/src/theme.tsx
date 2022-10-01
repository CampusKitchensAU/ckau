import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    auburnOrange: Palette['primary']
    auburnBlue: Palette['primary']
  }
  interface PaletteOptions {
    auburnOrange: PaletteOptions['primary']
    auburnBlue: PaletteOptions['primary']
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#EFEBE0',
    },
    auburnOrange: {
      main: '#dd550c',
    },
    auburnBlue: {
      main: '#03244d',
    },
  },
  typography: {
    fontFamily: 'Playfair Display',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 600
        }
      `,
    },
  },
})

export default theme
