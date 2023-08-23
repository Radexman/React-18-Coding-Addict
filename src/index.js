import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BookList = () => {
	return (
		<section>
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => (
	<img
		src='https://images-na.ssl-images-amazon.com/images/I/81LGc69gzQL._AC_UL600_SR600,400_.jpg'
		alt='Necessary Trouble: Growing Up at Midcentury'
	/>
);
const Title = () => <h2>Necessary Trouble: Growing Up at Midcentury</h2>;
const Author = () => <h3>Drew Gilpin Faust</h3>;

root.render(<BookList />);
