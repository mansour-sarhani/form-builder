import {useState} from "react";
import DatePicker from "react-datepicker";
import {useField, useFormikContext} from "formik";

function DateRangePickerField({...props}) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setFieldValue(field.name, dates);
    };
    return (
        <DatePicker
            {...field}
            {...props}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
        />
    );
}

export default DateRangePickerField;