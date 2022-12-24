import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function validateRadio(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function RadioInput({field, touched, errors, index}) {
    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => (
        <div key={index} className="form-check">
            <Field
                className="form-check-input"
                type="radio"
                name={field.name}
                value={option}
                id={index}
                validate={field.required === 'yes' ? validateRadio : null}
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
            <label>
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            {renderedOptions}
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default RadioInput;