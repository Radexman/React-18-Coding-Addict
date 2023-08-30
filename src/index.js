import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import Title from './components/Title';
import books from './books';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BookList = () => {
	return (
		<section className='booklist'>
			<Title />
			{books.map((book) => (
				<Book key={book.id} data={book} />
			))}
		</section>
	);
};

root.render(<BookList />);
