import PropTypes from 'prop-types'

const TotalQuantity = ({ books }) => {
  const quantity = books.reduce(
    (previosValue, book) => previosValue + book.quantity,
    0
  )

  return <div>{`Total quantity: ${quantity}`}</div>
}

TotalQuantity.propTypes = {
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

export default TotalQuantity
