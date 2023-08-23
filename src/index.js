import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firstData = {
	title: 'Necessary Trouble: Growing Up at Midcentury',
	author: 'Drew Gilpin Faust',
	img: 'https://images-na.ssl-images-amazon.com/images/I/81LGc69gzQL._AC_UL600_SR600,400_.jpg',
};

const secondData = {
	title: 'The Four Agreements: A Practical Guide to Personal Freedom',
	author: 'Don Miguel Ruiz',
	img: 'https://m.media-amazon.com/images/I/51EA+bXwJsL._SX343_BO1,204,203,200_.jpg',
};

const BookList = () => {
	return (
		<section className='booklist'>
			<Book data={firstData} />
			<Book data={secondData} />
		</section>
	);
};

root.render(<BookList />);
