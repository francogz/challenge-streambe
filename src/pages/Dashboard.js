import React from "react";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import useDashboard from "../hooks/useDashboard";
import UsersTable from "../components/dashboard/UsersTable";

const Dashboard = () => {
    const { usersData, loading } = useDashboard();

    return (
        <Container>
            <NavBar />
            <TableWrapper>
                <h2>Dashboard</h2>
                <UsersTable usersData={usersData} loading={loading} />
            </TableWrapper>
        </Container>
    );
};

export default Dashboard;

const Container = styled.div`
    width: calc(100% - 10rem);
    padding: 1rem 5rem;
`;

const TableWrapper = styled.div`
    display: flex;
    margin-top: 4rem;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-size: 1.4rem;
    }
`;
