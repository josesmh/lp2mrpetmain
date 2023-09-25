import './SubmitButton.scss';

const SubmitButton = ({text}) => {
	return (
		<div className="SubmitButton">
			<button type='submit'>{text}</button>
		</div>
	);
}

export default SubmitButton;
