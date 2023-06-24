import {useState} from 'react'
import Select from 'react-select'
import Typography from '@mui/material/Typography'
import {useCountriesStore} from '../../../store/countries'
import './BasicSelect.scss'

const BasicSelect = () => {
  const [currentSelect, setCurrentSelect] = useState('ukraine')
  const options = useCountriesStore(state => state.options)

  console.log(currentSelect)

  const getValue = () => {
    return currentSelect ? options.find(current => current.value === currentSelect) : ''
  }

  const selectChange = (newValue: any) => {
    setCurrentSelect(newValue.value)
  }

  return (
    <>
      <Typography marginTop={'20px'} variant={'h6'} align={'center'}>Basic select</Typography>
      <Select
        onChange={selectChange}
        value={getValue()}
        options={options}
        className={'react-select-container'}
        classNamePrefix={'custom-select'}
      />
    </>
  )
}

export default BasicSelect