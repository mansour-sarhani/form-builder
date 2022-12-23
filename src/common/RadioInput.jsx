function RadioInput({field}) {

    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => (
        <div key={index} className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={field.fieldId}
                id={index}
            />
            <label
                className="form-check-label"
                htmlFor={index}
            >
                {option}
            </label>
        </div>
    )) : <p>Loading ...</p>

    return (
        <div className="radio-group mb-3">
            <label>{field.displayTitle}</label>
            {renderedOptions}
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default RadioInput;