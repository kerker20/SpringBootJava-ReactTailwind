export default (customers = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'DELETE':
            return customers.filter((customer) => customer.id !== action.payload);
        case 'CREATE':
            return [ ...customers, action.payload];
        case 'UPDATE':
            return customers.map((data) => (data.id === action.payload.id ? action.payload : data));
        default:
            return customers;
    }
}