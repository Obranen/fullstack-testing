import Grid from '@mui/material/Unstable_Grid2'
import Cars from './Cars/Cars'

const Home = () => {
  return (
  <Grid container spacing={2}>
    <Grid xs={4} xlOffset={4}>
      <Cars/>
    </Grid>
  </Grid>
  )
}

export default Home