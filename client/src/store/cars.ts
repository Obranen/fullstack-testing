import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {nanoid} from 'nanoid'

export interface ICars {
  id: string
  model: string
  age: string
}

interface IUseCarsStore {
  cars: ICars[],
  loading: boolean,
  errors: string[],
  addCar: (model: string, age: string) => void
  deleteCar: (id: string) => void
}

export const useCarsStore = create(devtools<IUseCarsStore>((set) => ({
  cars: [
    {
      id: '1',
      model: 'audi',
      age: '2005'
    },
    {
      id: '2',
      model: 'bmv',
      age: '2001'
    }
  ],
  loading: false,
  errors: [],
  addCar: (model, age) => set(state => {
    const newCar = {id: nanoid(), model, age}
    return {cars: [...state.cars, newCar]}
  }),
  deleteCar: (id) => set(state => {
    return {cars: state.cars.filter(car => car.id !== id)}
  })
})))