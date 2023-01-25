import axios from 'axios';

const url = 'http://localhost:5000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/user/addUser`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/user/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}