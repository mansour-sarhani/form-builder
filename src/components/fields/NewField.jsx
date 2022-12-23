import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

const initialValues = {
    name: '',
    displayTitle: '',
    fieldType: '',
    validation: '',
    format: '',
    options: '',
    description: '',
    required: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    displayTitle: Yup.string()
        .required('Required'),
    fieldType: Yup.string()
        .required('Required'),
    required: Yup.string()
        .required('Required'),
});


function NewField({field, fields, setFormFields}) {

    return (
        <div className="new-field-form" id={field.fieldId}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const index = fields.findIndex(f => f.fieldId === field.fieldId)
                    const updatedFields = [...fields]
                    const indexedField = updatedFields[index]
                    updatedFields[index] = {
                        ...indexedField,
                        ...values
                    }
                    setFormFields(updatedFields)
                    toast.success('The field has been added!')
                }}
            >
                {({errors, touched, values}) => (
                    <Form>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-field mb-3">
                                    <label htmlFor="name" className="form-label">Field Name</label>
                                    <Field name="name" className="form-control" id="name"/>
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col col-md-6">
                                <div className="form-field mb-3">
                                    <label htmlFor="displayTitle" className="form-label">Field Display Title</label>
                                    <Field name="displayTitle" className="form-control" id="displayTitle"/>
                                    {errors.displayTitle && touched.displayTitle ? (
                                        <div>{errors.displayTitle}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col col-md-6">
                                <div className="form-field mb-3">
                                    <label htmlFor="fieldType" className="form-label">Field Type</label>
                                    <Field
                                        as="select"
                                        name="fieldType"
                                        className="form-control"
                                        id="fieldType"
                                    >
                                        <option value="">Choose the type ...</option>
                                        <option value="text">Text</option>
                                        <option value="number">Number (if chosen a format input appears)</option>
                                        <option value="tel">Tel (if chosen a validation input appears)</option>
                                        <option value="textarea" defaultValue={'selected'}>Text Area</option>
                                        <option value="html">HTML</option>
                                        <option value="date">Date</option>
                                        <option value="dateRange">Date Range</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="radio">Radio Button</option>
                                        <option value="checkbox">Checkbox</option>
                                    </Field>
                                    {errors.fieldType && touched.fieldType ? (
                                        <div>{errors.fieldType}</div>
                                    ) : null}
                                    <div className="form-text">
                                        Some options will have additional field
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-6">
                                {values.fieldType === 'tel' && (
                                    <div className="form-field mb-3">
                                        <label htmlFor="validation" className="form-label">Valid Tel Digits
                                            Number</label>
                                        <Field type="number" name="validation" className="form-control"
                                               id="validation"/>
                                        <div className="form-text">
                                            For example '11' means phone number should be 11 digits
                                        </div>
                                    </div>
                                )}
                                {values.fieldType === 'number' && (
                                    <div className="form-field mb-3">
                                        <label htmlFor="format" className="form-label">Decimal No</label>
                                        <Field type="number" name="format" className="form-control" id="format"/>
                                        <div className="form-text">
                                            For example '3' means Number will be shown like 456,000
                                        </div>
                                    </div>
                                )}
                                {((values.fieldType === 'dropdown') || (values.fieldType === 'radio') || (values.fieldType === 'checkbox')) && (
                                    <div className="form-field mb-3">
                                        <label htmlFor="options" className="form-label">Options</label>
                                        <Field
                                            type="text"
                                            name="options"
                                            className="form-control"
                                            id="options"
                                        />
                                        <div className="form-text">
                                            Separate options with a comma => ','
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col col-md-6">
                                <div className="form-field mb-3">
                                    <label htmlFor="description" className="form-label">Field Description</label>
                                    <Field name="description" className="form-control" id="description"/>
                                </div>
                            </div>
                            <div className="col col-md-6">
                                <div className="form-field mb-3">
                                    <h5>Is this field required?</h5>
                                    <div className="form-check">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="required"
                                            value="yes"
                                            id="yes"
                                        />
                                        <label htmlFor="yes" className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="required"
                                            value="no"
                                            id="no"
                                        />
                                        <label htmlFor="no" className="form-check-label">No</label>
                                    </div>
                                    {errors.required && touched.required ? (
                                        <div>{errors.required}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <button type="submit">Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NewField;