import './InputText.scss'

const InputText = ({type, text, name, placeholder, handleOnChange, value}) => {
	return (
		<div className='InputText'>
			<label htmlFor={name}>{text}:</label>
			<input 
				type={type} 
				name={name} 
				id={name} 
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}/>
			<span></span>
		</div>
	);
}

export default InputText;
