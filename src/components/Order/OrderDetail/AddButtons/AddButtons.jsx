import PropTypes from 'prop-types'

import './AddButtons.css'

import { cn } from '@bem-react/classname'

const cnAddButtons = cn('AddButtons')
const cnButton = cn('Button')

const AddButtons = ({ id, quantity, rest, setQuantity }) => {
  const handleIncrease = () => {
    if (quantity > rest) {
      return
    }

    setQuantity(id, quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity === 0) {
      return
    }

    setQuantity(id, quantity - 1)
  }

  return (
    <div className={cnAddButtons()}>
      <button
        className={cnButton({ color: 'green' })}
        type="button"
        onClick={handleIncrease}
      >
        +
      </button>
      <button
        className={cnButton({ color: 'red' })}
        type="button"
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  )
}

AddButtons.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
}

export default AddButtons
