function CheckBoxInput({field}) {

    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => (
        <div key={index} className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={field.fieldId}
            />
            <label
                className="form-check-label"
                htmlFor={field.fieldId}
            >
                {option}
            </label>
        </div>
    )) : <p>Loading ...</p>

    return (
        <div className="checkbox-group mb-3">
            <label>{field.displayTitle}</label>
            {renderedOptions}
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default CheckBoxInput;