import config from './config';
import axios from 'axios';

const APIintegration = {

    async postMethod(path, _data) {
        const response = await axios.post(config.baseUrl + path, _data);
        return response.data;
    },

    async getMethod(path) {
        const result = await axios.get(config.baseUrl + path);
        console.log('result from user list', result.data.data);
        return result.data.data;
    },

    async putMethod(path, _data) {
        const response = await axios.put(config.baseUrl + path, _data);
        return response.data;
    },

    async deleteMethod(path) {
        const response = await axios.delete(config.baseUrl + path);
        return response.data;
    },

};

export default APIintegration;