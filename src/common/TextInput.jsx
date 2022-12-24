import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function validateText(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function TextInput({field, touched, errors}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <Field
                className="form-control"
                name={field.name}
                id={field.fieldId}
                validate={field.required === 'yes' ? validateText : null}
            />
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default TextInput;