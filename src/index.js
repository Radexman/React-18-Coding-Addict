import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const books = [
	{
		id: 1,
		author: 'Keila Shaheen',
		title: 'The Shadow Work Journal',
		img: 'https://m.media-amazon.com/images/I/31UAsu2Q94L._SX331_BO1,204,203,200_.jpg',
	},
	{
		id: 2,
		author: 'James Clear',
		title: 'Atomic Habits',
		img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg',
	},
	{
		id: 3,
		author: 'Ann Patchett',
		title: 'Tom Lake',
		img: 'https://m.media-amazon.com/images/I/51F4TgwRlyL._SX329_BO1,204,203,200_.jpg',
	},
];

const BookList = () => {
	const someValue = 'shakeAndBake';

	const displayValue = () => {
		console.log(someValue);
	};

	const handleClick = (title) => {
		console.log(title);
	};

	return (
		<section className='booklist'>
			{books.map((book) => (
				<Book displayValue={displayValue} handleClick={handleClick} key={book.id} data={book} />
			))}
		</section>
	);
};

root.render(<BookList />);
