import {createContext, useContext, useEffect, useReducer} from "react";
import {formReducer} from "./formReducer";

const FormStateContext = createContext()
const FormDispatchContext = createContext()

export const useFormState = () => useContext(FormStateContext);
export const useFormDispatch = () => useContext(FormDispatchContext);

const initialState = []

export function FormProvider({children}) {

    const [state, dispatch] = useReducer(formReducer, initialState);

    useEffect(() => {
        if (localStorage.getItem('forms')) {
            const forms = JSON.parse(localStorage.getItem('forms'))
            dispatch({
                type: 'INITIALIZE_FORMS',
                payload: forms
            })
        } else {
            localStorage.setItem('forms', JSON.stringify([]))
        }
    }, []);

    return (
        <FormStateContext.Provider value={state}>
            <FormDispatchContext.Provider value={dispatch}>
                {children}
            </FormDispatchContext.Provider>
        </FormStateContext.Provider>
    )
}