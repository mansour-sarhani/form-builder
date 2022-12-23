function TextAreaInput({field}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <textarea
                className="form-control"
                id={field.fieldId}
                rows="3">
            </textarea>
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default TextAreaInput;