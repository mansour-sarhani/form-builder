import RequiredField from "./RequiredField";
import OptionalField from "./OptionalField";
import {Field} from "formik";
import {useState} from "react";

function NumberInput({field, touched, errors}) {
    const [formatNum, setFormatNum] = useState('');

    function validateNumber(value) {
        let error;
        setFormatNum(value)
        if (!value) {
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
                type="number"
                className="form-control"
                name={field.name}
                id={field.fieldId}
                validate={field.required === 'yes' ? validateNumber : null}
            />
            {formatNum && <span className="formattedNum">{formatNum.toLocaleString()}</span>}
            <div className="form-text">
                {field.description}
            </div>
            {errors[field.name] && touched[field.name] && <div className="text-danger">{errors[field.name]}</div>}
        </div>
    );
}

export default NumberInput;