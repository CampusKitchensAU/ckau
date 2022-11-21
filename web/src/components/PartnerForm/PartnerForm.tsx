import { useState } from 'react'

import { Button, TextField, Tooltip, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import EmailTextField from '../EmailTextField/EmailTextField'
import PhoneTextField from '../PhoneTextField/PhoneTextField'

const PartnerForm = () => {
  const theme = useTheme()

  const [name, setName] = useState<string>('')
  const [organization, setOrganization] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneIsValid, setPhoneIsValid] = useState<boolean>(false)
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')

  return (
    <Grid
      container
      sx={{
        bgcolor: theme.palette.auburnBlue.main,
        px: 2,
        [theme.breakpoints.down('md')]: { py: 2 },
      }}
      flexDirection="column"
    >
      <Grid xs={12}>
        <Typography
          variant="h5"
          color={theme.palette.auburnBlue.contrastText}
          textAlign="center"
        >
          Looking to partner with us?
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography
          color={theme.palette.auburnBlue.contrastText}
          textAlign="center"
        >
          Please fill out the information below.
        </Typography>
      </Grid>
      <Grid xs={12} sx={{ pt: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiFormLabel-root': {
                  color: theme.palette.auburnBlue.contrastText,
                  '&.Mui-focused': {
                    ml: '6px',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.palette.auburnBlue.contrastText,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.auburnBlue.contrastText,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderRadius: 0,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                    borderLeftWidth: 6,
                    borderRadius: 1,
                  },
                },
              }}
              fullWidth
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <TextField
              id="organization"
              label="Organization Name"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value)
              }}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiFormLabel-root': {
                  color: theme.palette.auburnBlue.contrastText,
                  '&.Mui-focused': {
                    ml: '6px',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.palette.auburnBlue.contrastText,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.auburnBlue.contrastText,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderRadius: 0,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                    borderLeftWidth: 6,
                    borderRadius: 1,
                  },
                },
              }}
              fullWidth
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <PhoneTextField
              val={phone}
              payload={setPhone}
              isValid={setPhoneIsValid}
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <EmailTextField
              val={email}
              payload={setEmail}
              isValid={setEmailIsValid}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              required
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
              label="Why do you want to partner with us?"
              variant="outlined"
              multiline
              rows={6}
              sx={{
                '& .MuiFormLabel-root': {
                  color: theme.palette.auburnBlue.contrastText,
                  '&.Mui-focused': {
                    ml: '6px',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.palette.auburnBlue.contrastText,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.auburnBlue.contrastText,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.auburnOrange.main,
                    borderLeftWidth: 6,
                  },
                },
              }}
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <Tooltip
              title={
                !phoneIsValid || !emailIsValid || !content
                  ? 'please fill out the required fields'
                  : ''
              }
              arrow
            >
              <span>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: theme.palette.auburnOrange.main,
                    color: theme.palette.auburnOrange.contrastText,
                    '&:hover': {
                      bgcolor: theme.palette.auburnOrange.main,
                    },
                    '&.Mui-disabled': {
                      color: theme.palette.text.disabled,
                      bgcolor: theme.palette.auburnOrange.light,
                    },
                  }}
                  disabled={!phoneIsValid || !emailIsValid || !content}
                >
                  Submit
                </Button>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PartnerForm
