import {Link, useParams} from "react-router-dom";
import {useFormState} from "../../context/formProvider";
import FormField from "../fields/FormField";
import {Form, Formik} from "formik";

function ViewForm() {
    const forms = useFormState()
    let {formId} = useParams();
    const currentFormIndex = forms.findIndex(form => form.formId === formId)
    const currentForm = forms[currentFormIndex]

    const namesArray = currentForm && currentForm.fields.map(field => field.name)

    if (!currentForm) {
        return <p>Loading ...</p>
    } else {
        return (
            <div className="view-form mt-4">
                <div className="view-form-header">
                    <h1>Form Name: {currentForm.formName}</h1>
                    <button className="btn btn-primary">
                        <Link to={'/'} className="text-light">
                            Back to Forms
                        </Link>
                    </button>
                </div>
                <div className="view-form-fields">
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
                                {currentForm && currentForm.fields.map((field, index) =>
                                    <FormField
                                        index={index}
                                        key={field.fieldId}
                                        field={field}
                                        errors={errors}
                                        touched={touched}
                                    />
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }

}

export default ViewForm;