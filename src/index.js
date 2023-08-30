import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import EventExamples from './components/EventExamples';
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
	return (
		<section className='booklist'>
			<EventExamples />
			{books.map((book) => (
				<Book key={book.id} data={book} />
			))}
		</section>
	);
};

root.render(<BookList />);
