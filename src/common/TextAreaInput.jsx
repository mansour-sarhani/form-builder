import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function validateTextarea(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function TextAreaInput({field, touched, errors}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <Field
                as="textarea"
                name={field.name}
                id={field.fieldId}
                className="form-control"
                validate={field.required === 'yes' ? validateTextarea : null}
            />
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default TextAreaInput;