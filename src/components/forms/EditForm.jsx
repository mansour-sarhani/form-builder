import { useState} from "react";
import {useFormDispatch} from "../../context/formProvider";
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {v4 as uuidv4} from 'uuid';
import FormField from "../fields/FormField";
import EditField from "../fields/EditField";
import {Form, Formik} from "formik";

function EditForm() {
    const formDispatch = useFormDispatch()
    const forms = JSON.parse(localStorage.getItem('forms'))
    const redirect = useNavigate()
    const {formId} = useParams()
    const index = forms.findIndex(f => f.formId === formId)
    const currentForm = forms[index]
    const [formName, setFormName] = useState(currentForm.formName);
    const [formFields, setFormFields] = useState(currentForm.fields);
    const [userCanView, setUserCanView] = useState(currentForm.formPerm.userCanView);
    const [userCanEdit, setUserCanEdit] = useState(currentForm.formPerm.userCanEdit);
    const [adminCanView, setAdminCanView] = useState(currentForm.formPerm.adminCanView);
    const [adminCanEdit, setAdminCanEdit] = useState(currentForm.formPerm.adminCanEdit);
    const [submitBtn, setSubmitBtn] = useState(currentForm.submitText);

    let formPerm = {
        'userCanView': userCanView,
        'userCanEdit': userCanEdit,
        'adminCanView': adminCanView,
        'adminCanEdit': adminCanEdit,
    }

    function editFormSubmit() {
        const updatedForm = {
            formId,
            formPerm: formPerm,
            formName: formName,
            submitText: submitBtn,
            fields: formFields
        }
        formDispatch({
            type: 'UPDATE_FORM',
            payload: updatedForm
        })
        redirect('/')
        toast.success('Form has been updated!')
    }

    const onAddField = () => {
        console.log(formFields)
        const newField = {fieldId: uuidv4()}
        setFormFields((prevState) => ([
            ...prevState,
            newField
        ]))
    }

    const namesArray = formFields && formFields.map(field => field.name)

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
            <button className="btn btn-outline-primary" onClick={onAddField}>Add New Field</button>
            <hr/>
            <div className="create-form-fields">
                <div className="field-item-row">
                    <div className="row">
                        <div className="col col-md-7">
                            <h4>Fields</h4>
                            <div className="list-container">
                                <div className="accordion" id="fieldsAccordion">
                                    {formFields.length ? formFields.map((field, index) => (
                                        <EditField index={index} key={field.fieldId} field={field} fields={formFields} setFormFields={setFormFields} />
                                    )) : <p>There is no field ...</p>}
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-5">
                            <h4>Form Preview</h4>
                            <Formik
                                enableReinitialize={true}
                                initialValues={
                                    namesArray.reduce((o, key) => ({ ...o, [key]: ''}), {})
                                }
                                onSubmit={values => {
                                    alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        {formFields && formFields.map((field, index) =>
                                            <FormField
                                                index={index}
                                                key={field.fieldId}
                                                field={field}
                                                errors={errors}
                                                touched={touched}
                                            />
                                        )}
                                        <button className="btn btn-outline-success" type="submit">{submitBtn || 'submit'}</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className="form-meta-wrapper">
                <div className="row">
                    <div className="col">
                        <div className="form-group mb-3">
                            <label
                                htmlFor="form-submit-btn"
                                className="form-label"
                            >
                                Submit button label
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="form-submit-btn"
                                aria-describedby="form submit button"
                                value={submitBtn}
                                onChange={(e) => setSubmitBtn(e.target.value)}
                            />
                            <div className="form-text">
                                Choose the text for submit button.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="checkbox-group mb-3">
                            <label>Who can view this form?</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="userCanView"
                                    name="userCanView"
                                    checked={userCanView}
                                    onChange={() => setUserCanView(!userCanView)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="userCanView"
                                >
                                    Users
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="adminCanView"
                                    name="adminCanView"
                                    checked={adminCanView}
                                    onChange={() => setAdminCanView(!adminCanView)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="adminCanView"
                                >
                                    Admins
                                </label>
                            </div>
                            <div className="form-text">
                                Choose who can view this form.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="checkbox-group mb-3">
                            <label>Who can edit this form?</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="userCanEdit"
                                    name="userCanEdit"
                                    checked={userCanEdit}
                                    onChange={() => setUserCanEdit(!userCanEdit)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="edit-perm-admin"
                                >
                                    Users
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="adminCanEdit"
                                    name="adminCanEdit"
                                    checked={adminCanEdit}
                                    onChange={() => setAdminCanEdit(!adminCanEdit)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="edit-perm-admin"
                                >
                                    Admins
                                </label>
                            </div>
                            <div className="form-text">
                                Choose who can edit this form.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="form-submit-btn btn btn-success w-100 my-4" onClick={editFormSubmit}>Update Form</button>
        </div>
    )
}

export default EditForm;