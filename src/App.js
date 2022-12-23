import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./components/home/Home";
import {FormProvider} from "./context/formProvider";
import CreateForm from "./pages/CreateForm";
import ViewForm from "./components/forms/ViewForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditForm from "./components/forms/EditForm";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" exact element={<Home />} />,
            <Route path="/new-form" element={<CreateForm />} />,
            <Route path="/view-form/:formId" element={<ViewForm />} />,
            <Route path="/edit-form/:formId" element={<EditForm />} />,
        ])
    );

    return (
        <FormProvider>
            <div className="main">
                <ToastContainer />
                <div className="container">
                    <RouterProvider router={router} />
                </div>
            </div>
        </FormProvider>
    );
}

export default App;
