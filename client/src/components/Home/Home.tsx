import RHFControllerAndMUI from './RHFControllerAndMUI/RHFControllerAndMUI'
import Grid from '@mui/material/Unstable_Grid2'

const Home = () => {
  return (
  <Grid container spacing={2}>
    <Grid xs={4} xlOffset={4}>
      <RHFControllerAndMUI/>
    </Grid>
  </Grid>
  )
}

export default Home