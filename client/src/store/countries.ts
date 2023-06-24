import {create} from 'zustand'

export interface IOptions {
  value: string
  label: string
}

interface IUseCountriesStore {
  options: IOptions[]
}

export const useCountriesStore = create<IUseCountriesStore>((set) => ({
  options: [
    {
      value: 'germany',
      label: 'Germany'
    },
    {
      value: 'usa',
      label: 'USA'
    },
    {
      value: 'ukraine',
      label: 'Ukraine'
    },
    {
      value: 'canada',
      label: 'Canada'
    }
  ]
}))