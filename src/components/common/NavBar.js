import React from "react";
import styled from "styled-components";
import useLogin from "../../hooks/useLogin";

const NavBar = () => {
    const { handleLogout } = useLogin();

    const userData = JSON.parse(localStorage.getItem("userData"));
    return (
        <Container>
            <p>
                Hola {userData?.name} {userData?.lastname}
            </p>

            <UserMenu>
                <Image>
                    <img
                        src="./assets/img/defaultProfileImage.png"
                        alt="Foto de perfil"
                    />
                </Image>
                <CustomButton onClick={handleLogout}>Logout</CustomButton>
            </UserMenu>
        </Container>
    );
};

export default NavBar;

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1.2rem;
    }
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Image = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const CustomButton = styled.button`
    color: #007bff;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
`;
