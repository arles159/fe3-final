import axios from "axios";
import '@testing-library/jest-dom';

const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users')

test('el cuarto odontologo de la api', () => { 
    return fetchData().then(data =>{
        expect(data.data[3].name).toBe("Patricia Lebsack");
    });
});