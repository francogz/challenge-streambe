import { useEffect, useRef, useState } from "react";
import { getUsersData } from "../services/api/dashboard";

const useDashboard = () => {
    // STATES
    const [usersData, setUsersData] = useState(null);
    const [loading, setLoading] = useState(false);

    const hasFetchedData = useRef(false);

    // EFFECTS
    useEffect(() => {
        !hasFetchedData.current && handleUserData();
        hasFetchedData.current = true;
    }, []);

    // FUNCTIONS
    const handleUserData = async () => {
        setLoading(true);
        try {
            const req = await getUsersData();
            setUsersData(req?.users);
            setLoading(false);
        } catch (error) {
            setUsersData(false);
            setLoading(false);
        }
    };

    return { usersData, loading };
};

export default useDashboard;
