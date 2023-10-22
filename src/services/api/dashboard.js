import axios from "axios";

export const getUsersData = async () => {
    const URL = `${process.env.REACT_APP_URL_API}/users`;

    try {
        const req = await axios.get(URL);
        return req.data;
    } catch (error) {
        throw new Error(error);
    }
};
