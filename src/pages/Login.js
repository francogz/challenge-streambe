import React from "react";
import styled from "styled-components";
import FormLogin from "../components/login/FormLogin";

const Login = () => {
    return (
        <Container>
            <Card>
                <h1>Login</h1>
                <FormLogin />
            </Card>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    width: 500px;
    border: solid 1px #e1e1e1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    h1 {
        color: #007bff;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;
