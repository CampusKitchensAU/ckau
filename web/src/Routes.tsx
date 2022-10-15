// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { ThemeProvider } from '@mui/material'

import { Router, Route, Set } from '@redwoodjs/router'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import HungerFightersPage from './pages/HungerFightersPage/HungerFightersPage'
import theme from './theme'

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Set wrap={DefaultLayout}>
          <Route path="/hunger-fighters" page={HungerFightersPage} name="hungerFighters" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Router>
    </ThemeProvider>
  )
}

export default Routes
