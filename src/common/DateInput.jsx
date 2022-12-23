function DateInput({field}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <input
                type="date"
                className="form-control"
                id={field.fieldId}
                aria-describedby={field.displayTitle}
            />
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default DateInput;