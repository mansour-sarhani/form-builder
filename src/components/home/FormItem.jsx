import {Link} from "react-router-dom";
import {useFormDispatch} from "../../context/formProvider";

function FormItem({form, index}) {

    const dispatch = useFormDispatch()

    const onDeleteForm = (formId) => {
        dispatch({
            type: 'DELETE_FORM',
            payload: formId
        })
    }

    return (
        <div className="row-item">
            <div className="row-item-no">
                {index + 1}
            </div>
            <div className="row-item-name">
                {form.formName}
            </div>
            <div className="row-item-id">
                {form.formId}
            </div>
            <div className="row-item-actions">
                <button className="view-btn bg-success">
                    <Link to={`/view-form/${form.formId}`}>
                        View
                    </Link>
                </button>
                <button className="edit-btn bg-primary">
                    <Link to={`/edit-form/${form.formId}`}>
                        Edit
                    </Link>
                </button>
                <button className="delete-btn bg-danger" onClick={() => onDeleteForm(form.formId)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default FormItem;