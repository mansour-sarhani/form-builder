import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function HtmlInput({field}) {
    return (
        <div className="form-group mb-3">
            <label
                htmlFor={field.fieldId}
                className="form-label"
            >
                {field.displayTitle}
            </label>
            <CKEditor
                id={field.fieldId}
                editor={ ClassicEditor }
                data=""
                onReady={ ( editor ) => {
                    console.log( "CKEditor5 React Component is ready to use!", editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
            />
            <div className="form-text">
                {field.description}
            </div>
        </div>
    );
}

export default HtmlInput;