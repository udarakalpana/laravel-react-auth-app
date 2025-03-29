import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import { ISignInState } from "../../utilities/types/signIn/SignIn";
import axios from "axios";

const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const handleInputField = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;

        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()

        // return await axios.get('/sanctum/csrf-cookie').then(res => {
        //     const response = axios.post('http://127.0.0.1:8000/api/sign-in', signDetails)
        //
        //     console.log(response)
        // });

    };

    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
