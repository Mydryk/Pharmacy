import axios from 'axios';

export const fetchPills = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/pills');
        return response.data;
    } catch (error) {
        console.error('Error fetching pills:', error);
        return [];
    }
};