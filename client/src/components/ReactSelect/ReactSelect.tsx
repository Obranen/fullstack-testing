import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import BasicSelect from './BasicSelect/BasicSelect'
import MultipleSelect from './MultipleSelect/MultipleSelect'

const ReactSelect = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={4} xlOffset={4}>
        <Typography variant={'h4'} align={'center'}>React Select</Typography>
        <BasicSelect/>
        <MultipleSelect/>
      </Grid>
    </Grid>
  )
}

export default ReactSelect