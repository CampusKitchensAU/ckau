import { Dispatch, SetStateAction, useState } from 'react'

import { TextField, useTheme } from '@mui/material'
import validator from 'validator'

const EmailTextField = ({
  val,
  payload,
  isValid,
}: {
  val: string
  payload: Dispatch<SetStateAction<string>>
  isValid: Dispatch<SetStateAction<boolean>>
}) => {
  const theme = useTheme()
  const [valid, setValid] = useState<boolean>(false)

  const validateEmail = (input: string) => {
    if (validator.isEmail(input)) {
      setValid(true)
      isValid(true)
    } else {
      setValid(false)
      isValid(false)
    }
    payload(input)
  }

  return (
    <TextField
      required
      id="email"
      label="Email"
      value={val}
      onChange={(e) => {
        validateEmail(e.target.value)
      }}
      error={!valid && val != ''}
      fullWidth
      helperText={!valid && val != '' ? 'invalid email' : null}
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
            borderColor: valid
              ? theme.palette.auburnOrange.main
              : val == ''
              ? theme.palette.auburnOrange.main
              : 'red',
            borderLeftWidth: 6,
            borderRadius: 1,
          },
        },
      }}
    />
  )
}

export default EmailTextField
