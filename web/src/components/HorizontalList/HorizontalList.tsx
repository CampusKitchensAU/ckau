import { Box, Typography } from '@mui/material'

const HorizontalList = ({
  list,
  chunkSize,
}: {
  list: string[]
  chunkSize: number
}) => {
  const listChunks: string[][] = []

  for (let i = 0; i < list.length; i += chunkSize) {
    listChunks.push(list.slice(i, i + chunkSize))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {listChunks.map((chunk, idx) => {
        return (
          <Box component="ul" key={idx}>
            {chunk.map((item, idx) => {
              return (
                <Typography component="li" key={idx}>
                  {item}
                </Typography>
              )
            })}
          </Box>
        )
      })}
    </Box>
  )
}

export default HorizontalList
