import {FC} from 'react'
import {ICars, useCarsStore} from '../../../../store/cars'

interface IItem {
  car: ICars
}

const Item: FC<IItem> = ({car}) => {
  const deleteCar = useCarsStore(state => state.deleteCar)
  return (
    <>
      <li>{car.model}</li>
      <li>{car.age}</li>
      <p
        onClick={() => deleteCar(car.id)}
        style={{color: 'red', cursor: 'pointer', border: '1px solid #000', width: '14px'}}
      >X</p>
    </>
  )
}

export default Item