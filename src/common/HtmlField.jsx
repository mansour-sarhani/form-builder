import {useField, useFormikContext} from "formik";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

function HtmlField({ ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <CKEditor
            editor={ ClassicEditor }
            data=""
            onReady={ ( editor ) => {
                console.log( "CKEditor5 React Component is ready to use!", editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setFieldValue(field.name, data);
            } }
        />
    );
}

export default HtmlField;