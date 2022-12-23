import { useState} from "react";
import {useFormDispatch} from "../../context/formProvider";
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {v4 as uuidv4} from 'uuid';
import FormField from "../fields/FormField";
import EditField from "../fields/EditField";

function EditForm() {

    const [formName, setFormName] = useState('');
    const formDispatch = useFormDispatch()
    const forms = JSON.parse(localStorage.getItem('forms'))
    const redirect = useNavigate()
    const {formId} = useParams()
    const index = forms.findIndex(f => f.formId === formId)
    const currentForm = forms[index]
    const [formFields, setFormFields] = useState(currentForm.fields);

    function editFormSubmit() {
        const updatedForm = {
            formId,
            formName: formName,
            fields: formFields
        }
        formDispatch({
            type: 'UPDATE_FORM',
            payload: updatedForm
        })
        redirect('/')
        toast.success('Form has been created!')
    }

    const onAddField = () => {
        console.log(formFields)
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
                            defaultValue={currentForm.formName}
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
                                {formFields.length ? formFields.map((field) => <EditField key={field.fieldId} field={field} fields={formFields} setFormFields={setFormFields} />) : <p>There is no field ...</p>}
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
            <button className="form-submit-btn btn btn-success w-100 my-4" onClick={editFormSubmit}>Update Form</button>
        </div>
    )
}

export default EditForm;