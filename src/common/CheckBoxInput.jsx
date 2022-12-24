import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function validateCheckbox(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function CheckBoxInput({field, touched, errors}) {
    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => (
        <div key={index} className="form-check">
            <Field
                className="form-check-input"
                type="checkbox"
                name={field.name}
                value={option}
                id={field.fieldId}
                validate={field.required === 'yes' ? validateCheckbox : null}
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
            <label>{field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}</label>
            <div role="group" aria-labelledby="checkbox-group">
                {renderedOptions}
            </div>
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default CheckBoxInput;