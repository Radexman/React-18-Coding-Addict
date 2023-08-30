import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import books from './books';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => (
				<Book key={book.id} data={book} />
			))}
		</section>
	);
};

root.render(<BookList />);
