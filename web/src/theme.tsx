import { createTheme, responsiveFontSizes } from '@mui/material'

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

let theme = createTheme({
  palette: {
    primary: {
      main: '#EFEBE0',
    },
    auburnOrange: {
      main: '#dd550c',
      contrastText: '#ffffff',
      light: 'rgb(221,85,12,0.7)',
    },
    auburnBlue: {
      main: '#03244d',
      contrastText: '#ffffff',
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

theme = responsiveFontSizes(theme)

export default theme
