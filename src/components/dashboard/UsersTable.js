import React from "react";
import styled from "styled-components";

const UsersTable = (props) => {
    const { usersData, loading } = props;

    return (
        <>
            {loading ? (
                <p>Cargando contenido...</p>
            ) : (
                <Table>
                    <Header>
                        <ItemTable header>Name</ItemTable>
                        <ItemTable header>Birth Date</ItemTable>
                        <ItemTable header>Photo</ItemTable>
                    </Header>
                    <Body>
                        {Array.isArray(usersData) && usersData?.length > 0 ? (
                            <>
                                {usersData.map((user, index) => (
                                    <RowTable
                                        orderItem={index}
                                        key={user?.contactId}
                                    >
                                        <ItemTable>
                                            {user?.name} {user?.surnames}
                                        </ItemTable>
                                        <ItemTable>
                                            {" "}
                                            {user?.birthDate}
                                        </ItemTable>
                                        <ItemTable>
                                            <Image>
                                                <img
                                                    src={
                                                        user?.photo ||
                                                        "./assets/img/defaultProfileImage.png"
                                                    }
                                                    alt="Foto de usuario"
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "./assets/img/defaultProfileImage.png";
                                                    }}
                                                />
                                            </Image>
                                        </ItemTable>
                                    </RowTable>
                                ))}
                            </>
                        ) : (
                            <p>No se encontraron usuarios</p>
                        )}
                    </Body>
                </Table>
            )}
        </>
    );
};

export default UsersTable;

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
`;

const Header = styled.div`
    background-color: #007bff;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Body = styled.div`
    width: 100%;
`;

const RowTable = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    border-bottom: solid 1px #e1e1e1;
    background-color: ${(p) => (p.orderItem % 2 === 0 ? "#fff" : "#e9e9e9")};
`;

const ItemTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: ${(p) => (p.header ? "bold" : "normal")};

    color: ${(p) => (p.header ? "#fff" : "#000")};
`;

const Image = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
    }
`;
