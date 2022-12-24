import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function validateSelect(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function SelectInput({field, touched, errors}) {
    const options = field.options
    const optionsArray = options.split(',');
    const renderedOptions = optionsArray ? optionsArray.map((option, index) => <option key={index} value={option}>{option}</option>) : <p>Loading ...</p>

    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <Field
                as="select"
                name={field.name}
                id={field.fieldId}
                className="form-select"
                validate={field.required === 'yes' ? validateSelect : null}
            >
                {renderedOptions}
            </Field>
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default SelectInput;