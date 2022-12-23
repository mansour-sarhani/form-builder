import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {useState} from "react";

function DateRangeInput({field}) {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <div className="dateRange">
                <DateRange
                    id={field.fieldId}
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                />
            </div>
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default DateRangeInput;