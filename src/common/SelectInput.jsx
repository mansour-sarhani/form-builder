function SelectInput({field}) {

    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => <option key={index} value={option}>{option}</option>) : <p>Loading ...</p>

    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <select
                id={field.fieldId}
                className="form-select"
                aria-label="Default select example"
            >
                {renderedOptions}
            </select>
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default SelectInput;