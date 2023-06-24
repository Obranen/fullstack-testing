import Typography from '@mui/material/Typography'
import {useState} from 'react'
import {IOptions, useCountriesStore} from '../../../store/countries'
import Select, {OnChangeValue} from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MultipleSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>(['germany', 'usa'])
  const options = useCountriesStore(state => state.options)

  console.log(currentCountries)

  const getValue = () => {
    return currentCountries ?
      options.filter(current => currentCountries.indexOf(current.value) >= 0)
      : []
  }

  const selectChange = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentCountries(
      (newValue as IOptions[]).map((v: any) => v.value)
    )
  }

  return (
    <>
      <Typography marginTop={'20px'} variant={'h6'} align={'center'}>Multiple select</Typography>
      <Select
        onChange={selectChange}
        value={getValue()}
        options={options}
        isMulti
        components={animatedComponents}
      />
    </>
  )
}

export default MultipleSelect