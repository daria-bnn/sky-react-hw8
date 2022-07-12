import { useState } from 'react'

import './Order.css'

import { cn } from '@bem-react/classname'

import booksData from './data/booksData'
import OrderDetail from './OrderDetail/OrderDetail'
import TotalPrice from './TotalPrice/TotalPrice'
import TotalQuantity from './TotalQuantity/TotalQuantity'

const cnOrder = cn('Order')

const Order = () => {
  const [books, setBooks] = useState(booksData())

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  return (
    <div className={cnOrder()}>
      <h2>Каталог книг</h2>
      <div className={cnOrder('Container')}>
        {books.map((book) => (
          <OrderDetail key={book.id} book={book} setQuantity={setQuantity} />
        ))}
      </div>
      <div className={cnOrder('TotalInfo')}>
        <TotalQuantity books={books} />
        <TotalPrice books={books} />
      </div>
    </div>
  )
}

export default Order
