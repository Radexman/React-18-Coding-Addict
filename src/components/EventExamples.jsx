const EventExamples = () => {
	return (
		<section>
			<form>
				<h2>Typical Form</h2>
				<input type='text' name='example' style={{ marginBlock: '1rem' }} />
				<button type='submit'>Submit</button>
				<div>
					<button type='button' onClick={() => console.log('Clicked')}>
						Click Me
					</button>
				</div>
			</form>
		</section>
	);
};

export default EventExamples;
