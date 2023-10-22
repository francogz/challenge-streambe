import axios from "axios";

export const getLoginData = async () => {
    const URL = `${process.env.REACT_APP_URL_API}/login`;

    try {
        const req = await axios.get(URL);
        return req.data;
    } catch (error) {
        throw new Error(error);
    }
};
