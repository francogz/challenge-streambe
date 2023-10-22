import React from "react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import DefaultField from "../common/DefaultField";
import { loginSchema } from "../../utils/schemas";
import useLogin from "../../hooks/useLogin";

const FormComponent = () => {
    //HOOKS
    const { handleLogin } = useLogin();

    const initialValues = {
        userName: "",
        password: "",
    };

    const handleSubmit = () => {
        handleLogin();
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
            >
                {() => (
                    <Container>
                        <DefaultField
                            name="userName"
                            type="text"
                            label="Username"
                        />
                        <DefaultField
                            name="password"
                            type="password"
                            label="Password"
                        />
                        <CustomButton type="submit">Ingresar</CustomButton>
                    </Container>
                )}
            </Formik>
        </Wrapper>
    );
};

export default FormComponent;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;

    h4 {
        color: #b31d15;
        font-size: 1rem;
        text-align: center;
    }
`;

const Container = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const CustomButton = styled.button`
    width: 100%;
    background-color: #007bff;
    color: #fff;
    font-size: 0.95rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 1.5rem;
`;
