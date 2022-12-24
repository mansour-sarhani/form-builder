import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";

function TelInput({field, touched, errors}) {

    function validateTel(value) {
        const n = field.validation
        let error;
        if (!value || value.length < n) {
            error = 'Required';
        }
        return error;
    }

    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <Field
                type="tel"
                className="form-control"
                name={field.name}
                id={field.fieldId}
                validate={field.required === 'yes' ? validateTel : null}
            />
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default TelInput;