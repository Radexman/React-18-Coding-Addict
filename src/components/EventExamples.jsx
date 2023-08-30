const EventExamples = () => {
	const handleFormInput = (e) => {
		console.log(e.target);
		console.log(e.target.name);
		console.log(e.target.value);
		console.log('Handle form input');
	};

	const handleButtonClick = () => {
		alert('Handle button click');
	};

	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log('form');
	};

	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h2>Typical Form</h2>
				<input onChange={handleFormInput} type='text' name='example' style={{ marginBlock: '1rem' }} />
				<button type='submit'>Submit</button>
				<div>
					<button type='button' onClick={handleButtonClick}>
						Click Me
					</button>
				</div>
			</form>
		</section>
	);
};
export default EventExamples;
