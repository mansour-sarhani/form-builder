import {useFormState} from "../../context/formProvider";
import FormItem from "./FormItem";
import {Link} from "react-router-dom";

function Home() {
    const forms = useFormState()
    const renderedForms = forms.length ? forms.map((form, index) => <FormItem key={form.formId} index={index} form={form} />) : <p>There is no form yet ... start by creating one now!</p>
    return (
        <div className="home-wrapper mt-4">
            <div className="home-header">
                <div className="home-header-item">
                    <h2>Want to create a new form ?</h2>
                    <button className="btn btn-primary">
                        <Link to='/new-form' className="text-light">
                            Start Here
                        </Link>
                    </button>
                </div>
                <div className="home-header-item">
                    <h2>Want to render a form ?</h2>
                    <button className="btn btn-primary">
                        <Link to='/front-form' className="text-light">
                            Click Here
                        </Link>
                    </button>
                </div>
            </div>
            <div className="list-container">
                {renderedForms}
            </div>
        </div>
    )
}

export default Home;