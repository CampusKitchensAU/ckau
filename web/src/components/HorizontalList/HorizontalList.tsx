import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

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
    <>
      {listChunks.map((chunk, idx) => {
        return (
          <Grid component="ul" key={idx} xs={2}>
            {chunk.map((item, idx) => {
              return (
                <Typography component="li" key={idx}>
                  {item}
                </Typography>
              )
            })}
          </Grid>
        )
      })}
    </>
  )
}

export default HorizontalList
