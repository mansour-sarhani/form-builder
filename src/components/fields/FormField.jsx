import TextInput from "../../common/TextInput";
import NumberInput from "../../common/NumberInput";
import CheckBoxInput from "../../common/CheckBoxInput";
import HtmlInput from "../../common/HtmlInput";
import DateInput from "../../common/DateInput";
import DateRangeInput from "../../common/DateRangeInput";
import RadioInput from "../../common/RadioInput";
import SelectInput from "../../common/SelectInput";
import TextAreaInput from "../../common/TextAreaInput";
import TelInput from "../../common/TelInput";

function FormField({field, index, touched, errors}) {

    function fieldTypeCreator(field, index, touched, errors) {
        switch (field.fieldType) {
            case 'text' : {
                return <TextInput field={field} touched={touched} errors={errors} />
            }
            case 'number' : {
                return <NumberInput field={field} touched={touched} errors={errors} />
            }
            case 'tel' : {
                return <TelInput field={field} touched={touched} errors={errors} />
            }
            case 'checkbox' : {
                return <CheckBoxInput field={field} touched={touched} errors={errors} />
            }
            case 'html' : {
                return <HtmlInput field={field} touched={touched} errors={errors} />
            }
            case 'date' : {
                return <DateInput field={field} touched={touched} errors={errors} />
            }
            case 'dateRange' : {
                return <DateRangeInput field={field} touched={touched} errors={errors} />
            }
            case 'radio' : {
                return <RadioInput field={field} index={index} touched={touched} errors={errors} />
            }
            case 'dropdown' : {
                return <SelectInput field={field} touched={touched} errors={errors} />
            }
            case 'textarea' : {
                return <TextAreaInput field={field} touched={touched} errors={errors} />
            }
            default: {
                return
            }
        }
    }

    return (
        <div className="form-field">
            {fieldTypeCreator(field, index, touched, errors)}
        </div>
    );
}

export default FormField;