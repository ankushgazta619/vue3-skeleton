import axios from 'axios';

export default axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "Bearer " + localStorage.getItem('token')
    }
});