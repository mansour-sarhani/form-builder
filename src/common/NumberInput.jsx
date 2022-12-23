function NumberInput({field}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <input
                type="number"
                className="form-control"
                id={field.fieldId}
                aria-describedby={field.displayTitle}
                min='0'
            />
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default NumberInput;