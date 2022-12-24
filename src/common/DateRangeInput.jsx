import "react-datepicker/dist/react-datepicker.css";
import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import DateRangePickerField from "./DateRangePickerField";

function validateDateRange(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

function DateRangeInput({field, touched, errors}) {

    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle} {field.required === 'yes' ? <RequiredField /> : <OptionalField />}
            </label>
            <DateRangePickerField name={field.name} validate={field.required === 'yes' ? validateDateRange : null} />
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default DateRangeInput;