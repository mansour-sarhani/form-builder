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

function FormField({field, index}) {

    function fieldTypeCreator(field, index) {
        switch (field.fieldType) {
            case 'text' : {
                return <TextInput field={field} />
            }
            case 'number' : {
                return <NumberInput field={field} />
            }
            case 'tel' : {
                return <TelInput field={field} />
            }
            case 'checkbox' : {
                return <CheckBoxInput field={field} />
            }
            case 'html' : {
                return <HtmlInput field={field} />
            }
            case 'date' : {
                return <DateInput field={field} />
            }
            case 'dateRange' : {
                return <DateRangeInput field={field} />
            }
            case 'radio' : {
                return <RadioInput field={field} index={index} />
            }
            case 'dropdown' : {
                return <SelectInput field={field} />
            }
            case 'textarea' : {
                return <TextAreaInput field={field} />
            }
            default: {
                return
            }
        }
    }

    return (
        <div className="form-field">
            {fieldTypeCreator(field, index)}
        </div>
    );
}

export default FormField;