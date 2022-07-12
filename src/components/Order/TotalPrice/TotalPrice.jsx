import PropTypes from 'prop-types'

const TotalPrice = ({ books }) => {
  const sum = books.reduce(
    (previosValue, book) => previosValue + book.quantity * book.price,
    0
  )

  return <div>{`Total price: ${sum}`}</div>
}

TotalPrice.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      rest: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
}

export default TotalPrice
