import {ICars, useCarsStore} from '../../../store/cars'
import {SubmitHandler, useForm} from 'react-hook-form'

const Cars = () => {
  const cars = useCarsStore(state => state.cars)
  const count = useCarsStore(state => state.cars.length)
  const addCar = useCarsStore(state => state.addCar)
  const deleteCar = useCarsStore(state => state.deleteCar)

  const {
    register,
    handleSubmit,
    formState: {errors},
    resetField
  } = useForm<ICars>({
    defaultValues: {model: '', age: ''}
  })
  const onSubmit: SubmitHandler<ICars> = (data) => {
    console.log(data)
    addCar(data.model, data.age)
    resetField('model')
    resetField('age')
  }

  return (
    <>
      <h1>Zustand and RHF</h1>
      <h2>Added cars</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p><input type="text" {...register('model', {required: true})}/></p>
        {errors.model && <p style={{color: 'red', fontSize: '12px'}}>This field is required</p>}
        <p><input type="text" {...register('age', {required: true})}/></p>
        {errors.age && <p style={{color: 'red', fontSize: '12px'}}>This field is required</p>}
        <button type={'submit'}>Add</button>
      </form>

      <h2>List cars</h2>
      {cars.length && cars.map(car =>
        <ul key={car.id}>
          <li>{car.model}</li>
          <li>{car.age}</li>
          <p
            onClick={() => deleteCar(car.id)}
            style={{color: 'red', cursor: 'pointer', border: '1px solid #000', width: '14px'}}
          >X</p>
        </ul>
      )}
      <h3>Total: {count}</h3>
    </>
  )
}

export default Cars