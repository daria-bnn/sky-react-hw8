import PropTypes from 'prop-types'

import { cn } from '@bem-react/classname'

import './OrderDetail.css'

import AddButtons from './AddButtons/AddButtons'

const cnOrderDetail = cn('OrderDetail')

const OrderDetail = (props) => {
  const { id, price, title, quantity, rest } = props.book

  return (
    <div className={cnOrderDetail()}>
      <h3>{title}</h3>
      <div className={cnOrderDetail('Info')}>
        <div>{`Price: ${price}`}</div>
        <div>{`Quantity: ${quantity}`}</div>
      </div>

      <AddButtons
        id={id}
        quantity={quantity}
        rest={rest}
        setQuantity={props.setQuantity}
      />
    </div>
  )
}

OrderDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    rest: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  setQuantity: PropTypes.func.isRequired,
}

export default OrderDetail
