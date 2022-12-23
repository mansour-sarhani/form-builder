import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useFormDispatch} from "../context/formProvider";
import NewField from "../components/fields/NewField";
import {Link, useNavigate} from "react-router-dom";
import FormField from "../components/fields/FormField";
import {toast} from "react-toastify";

function CreateForm() {
    const formId = uuidv4()

    const [formFields, setFormFields] = useState([]);
    const [formName, setFormName] = useState('');
    const formDispatch = useFormDispatch()
    const redirect = useNavigate()

    function newFormSubmit() {
        const newForm = {
            formId,
            formName: formName,
            fields: formFields
        }
        formDispatch({
            type: 'CREATE_NEW_FORM',
            payload: newForm
        })
        redirect('/')
        toast.success('Form has been created!')
    }

    const onAddField = () => {
        const newField = {fieldId: uuidv4()}
        setFormFields((prevState) => ([
            ...prevState,
            newField
        ]))
    }

    return (
        <div className="form-create-wrapper my-4">
            <div className="view-form-header mb-4">
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="new_form_name" className="form-label mb-0">Form Name:</label>
                    </div>
                    <div className="col-auto">
                        <input
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="new_form_name"
                        />
                    </div>
                </div>
                <button className="btn btn-primary">
                    <Link to={'/'} className="text-light">
                        Back to Forms
                    </Link>
                </button>
            </div>
            <button onClick={onAddField}>Add New Field</button>
            <hr/>
            <div className="create-form-fields">
                <div className="field-item-row">
                    <div className="row">
                        <div className="col">
                            <div className="list-container">
                                {formFields.length ? formFields.map((field) => <NewField key={field.fieldId} field={field} fields={formFields} setFormFields={setFormFields} />) : <p>There is no field ...</p>}
                            </div>
                        </div>
                        <div className="col">
                            <h4>Form Preview</h4>
                            {formFields && formFields.map((field, index) =>
                                <FormField index={index} key={field.fieldId} field={field} />
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <button className="form-submit-btn btn btn-success w-100 my-4" onClick={newFormSubmit}>Create Form</button>
        </div>

    );
}

export default CreateForm;



