import {useState} from "react";
import {useFormState} from "../../context/formProvider";
import FormField from "../fields/FormField";
import {Link} from "react-router-dom";
import {Form, Formik} from "formik";

function FrontForm() {
    const [renderedFormId, setRenderedFormId] = useState('');
    const [renderedForm, setRenderedForm] = useState();
    const [isNewForm, setIsNewForm] = useState(false);
    const forms = useFormState()

    const renderForm = () => {
        const currentFormId = renderedFormId
        const index = forms.findIndex(f => f.formId === currentFormId)
        const currentForm = forms[index]
        setRenderedForm(currentForm)
        setIsNewForm(true)
    }

    const namesArray = renderedForm && renderedForm.fields.map(field => field.name)

    const onResetForm = () => {
        setRenderedFormId('')
        setRenderedForm(null)
        setIsNewForm(false)
    }

    return (
        <div className="front-form-wrapper my-4">
            <div className="view-form-header">
                <h1>Front End Form Rendering</h1>
                <button className="btn btn-primary">
                    <Link to={'/'} className="text-light">
                        Back to Forms
                    </Link>
                </button>
            </div>
            {isNewForm ? (
                <div className="row g-2 my-4">
                    <div className="col-auto">
                        <h4>If you like to render a new form click here:</h4>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" onClick={onResetForm}>Reset</button>
                    </div>
                </div>
            ) : (
                <div className="row g-3 my-4">
                    <div className="col-auto">
                        <h4>To use any form simply enter the form id here:</h4>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control"
                            id="front-form-id"
                            placeholder="Form ID ..."
                            value={renderedFormId}
                            onChange={(e) => setRenderedFormId(e.target.value.trim())}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" onClick={renderForm}>Render Form</button>
                    </div>
                </div>
            )}
            <div className="form-front-rendered">
                {renderedForm ? (
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
                                {renderedForm && renderedForm.fields.map((field, index) =>
                                    <FormField
                                        index={index}
                                        key={field.fieldId}
                                        field={field}
                                        errors={errors}
                                        touched={touched}
                                    />
                                )}
                                <button className="btn btn-outline-success" type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                ) : <p>No form chosen yet ...</p>}
            </div>
        </div>
    );
}

export default FrontForm;