import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const books = [
	{
		author: 'Keila Shaheen',
		title: 'The Shadow Work Journal',
		img: 'https://m.media-amazon.com/images/I/31UAsu2Q94L._SX331_BO1,204,203,200_.jpg',
	},
	{
		author: 'James Clear',
		title: 'Atomic Habits',
		img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg',
	},
	{
		author: 'Ann Patchett',
		title: 'Tom Lake',
		img: 'https://m.media-amazon.com/images/I/51F4TgwRlyL._SX329_BO1,204,203,200_.jpg',
	},
];

const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => (
				<Book data={book} />
			))}
		</section>
	);
};

root.render(<BookList />);
