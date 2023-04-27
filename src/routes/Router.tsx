import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { SingIn } from "../pages/SingIn";



export function Router() {
    return (
        <Routes>
            <Route path='/' element={<SingIn />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
