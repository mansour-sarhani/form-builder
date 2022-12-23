import {useFormState} from "../../context/formProvider";
import FormItem from "./FormItem";
import {Link} from "react-router-dom";

function Home() {
    const forms = useFormState()
    const renderedForms = forms ? forms.map((form, index) => <FormItem key={form.formId} index={index} form={form} />) : <p>Loading ...</p>
    return (
        <div className="home-wrapper mt-4">
            <div className="list-container">
                <div className="create-new-form">
                    <h2>Need to create a new form ?</h2>
                    <button className="btn btn-primary">
                        <Link to='/new-form' className="text-light">
                            Start Here
                        </Link>
                    </button>
                </div>
                {renderedForms}
            </div>
        </div>
    )
}

export default Home;