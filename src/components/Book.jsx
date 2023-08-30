import PropTypes from 'prop-types';

const Book = ({ data }) => {
	const { img, title, author } = data;
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h3>{author}</h3>
		</article>
	);
};

Book.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Book;
