const EventExamples = () => {
	const handleFormInput = (e) => {
		console.log('Handle form input');
	};

	const handleButtonClick = () => {
		alert('Handle button click');
	};

	return (
		<section>
			<form>
				<h2>Typical Form</h2>
				<input onChange={handleFormInput} type='text' name='example' style={{ marginBlock: '1rem' }} />
			</form>
			<button onClick={handleButtonClick}>Click Me</button>
		</section>
	);
};
export default EventExamples;
