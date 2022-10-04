import {
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
} from '@mui/icons-material'
import { Box, Divider, Link, Typography, useTheme } from '@mui/material'

import { routes, Link as RWLink } from '@redwoodjs/router'

interface iconLink {
  icon: JSX.Element
  href: string
  title: string
}

const contactUsLinks: iconLink[] = [
  {
    icon: <LocationOn />,
    href: 'https://goo.gl/maps/zfLEZ5fABSZF6UULA',
    title: 'Lupton Residence Hall',
  },
  {
    icon: <Mail />,
    href: 'mailto:theckau@gmail.com',
    title: 'theckau@gmail.com',
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/campuskitchen_au/',
    title: '@campuskitchen_au',
  },
  {
    icon: <Facebook />,
    href: 'https://m.facebook.com/TheCampusKitchenAU/',
    title: '@TheCampusKitchenAU',
  },
]

const siteMapLinks: iconLink[] = [
  {
    icon: <Home />,
    href: routes.home(),
    title: 'Home',
  },
]

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component={'footer'}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.auburnBlue.main,
        width: '100%',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          color: theme.palette.secondary.contrastText,
        }}
      >
        <img
          src="img/SquareLogo.png"
          alt="Square CKAU Logo"
          style={{
            width: '100%',
            maxWidth: '160px',
            height: 'auto',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            Contact Us
          </Typography>
          {contactUsLinks.map((link: iconLink, idx: number) => {
            return (
              <Box sx={{ display: 'flex', gap: 1 }} key={idx}>
                {link.icon}
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  {link.title}
                </Link>
              </Box>
            )
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            Site Map
          </Typography>
          {siteMapLinks.map((link: iconLink, idx: number) => {
            return (
              <Box sx={{ display: 'flex', gap: 1 }} key={idx}>
                {link.icon}
                <RWLink
                  to={link.href}
                  style={{
                    color: theme.palette.auburnBlue.contrastText,
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    sx={{ '&:hover': { textDecoration: 'underline' } }}
                  >
                    {link.title}
                  </Typography>
                </RWLink>
              </Box>
            )
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="https://auburn.edu/" target="_blank" rel="noopener">
            <img
              src="img/AULogo.png"
              alt="Auburn University Logo"
              style={{
                width: '100%',
                maxWidth: '192px',
                height: 'auto',
              }}
            />
          </Link>
          <Link
            href="https://auburn.campuslabs.com/engage/organization/thecampuskitchenatau"
            target="_blank"
            rel="noopener"
          >
            <img
              src="img/AUInvolveLogo.png"
              alt="Auburn Involve Logo"
              style={{
                width: '100%',
                maxWidth: '192px',
                height: 'auto',
              }}
            />
          </Link>
        </Box>
      </Box>
      <Divider
        sx={{
          borderTopWidth: 2,
          background: theme.palette.auburnOrange.main,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: theme.palette.secondary.contrastText,
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} Campus Kitchen AU. All Rights
          Reserved.
        </Typography>
        <Typography alignItems="center" display="flex" gap="2px">
          Proudly created by{' '}
          <Link
            href="https://www.linkedin.com/in/trevor-aupperle/"
            target="_blank"
            rel="noopener"
            underline="always"
            display="flex"
          >
            <LinkedIn /> Trevor Aupperle
          </Link>
          &
          <Link
            href="https://www.linkedin.com/in/ethan-wilkes/"
            target="_blank"
            rel="noopener"
            underline="always"
            display="flex"
          >
            <LinkedIn /> Ethan Smells.
          </Link>
        </Typography>
        <Typography>Fork Hunger!</Typography>
      </Box>
    </Box>
  )
}

export default Footer
