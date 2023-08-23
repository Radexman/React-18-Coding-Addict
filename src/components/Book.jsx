import PropTypes from 'prop-types';

const Book = ({ data }) => {
	return (
		<article className='book'>
			<img
				src={data.img}
				alt={data.title}
			/>
			<h2>{data.title}</h2>
			<h3>{data.author}</h3>
		</article>
	);
};

Book.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Book;
