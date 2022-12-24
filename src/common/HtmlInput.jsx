import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import HtmlField from "./HtmlField";

function validateHtml(data) {
    let error;
    if (!data) {
        error = 'Required';
    }
    return error;
}

function HtmlInput({field, touched, errors}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <HtmlField name={field.name} validate={field.required === 'yes' ? validateHtml : null} />

            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default HtmlInput;