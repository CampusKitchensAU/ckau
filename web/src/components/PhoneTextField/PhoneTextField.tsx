import { Dispatch, SetStateAction, useState } from 'react'

import { TextField, useTheme } from '@mui/material'

const PhoneTextField = ({
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

  const formatPhone = (input: string) => {
    if (!input) {
      setValid(true)
      isValid(false)
      return input
    }
    const nums = input.replace(/[^\d]/g, '')
    if (nums.length < 4) {
      setValid(false)
      isValid(false)
      return nums
    }
    if (nums.length < 7) {
      setValid(false)
      isValid(false)
      return `(${nums.slice(0, 3)}) ${nums.slice(3)}`
    }
    if (nums.length > 9) {
      setValid(true)
      isValid(true)
    } else {
      setValid(false)
      isValid(false)
    }
    return `(${nums.slice(0, 3)}) ${nums.slice(3, 6)}-${nums.slice(6, 10)}`
  }

  return (
    <TextField
      required
      id="phone"
      label="Phone Number"
      value={val}
      onChange={(e) => {
        const formattedNum = formatPhone(e.target.value)
        payload(formattedNum)
      }}
      error={!valid && val != ''}
      fullWidth
      helperText={!valid && val != '' ? 'phone number must be 10 digits' : null}
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

export default PhoneTextField
