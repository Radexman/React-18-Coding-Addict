import PropTypes from 'prop-types';

const Book = ({ data, number }) => {
	const { img, title, author } = data;
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h3>{author}</h3>
			<div className='book-num'>{`#${number + 1}`}</div>
		</article>
	);
};

Book.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Book;
