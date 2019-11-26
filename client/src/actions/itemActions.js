import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// Get item Actions
export const getItems = () => {
    return{
        type: GET_ITEMS
    };
};

// Delete Item Actions
export const deleteItems = (id) => {
    return{
        type: DELETE_ITEM,
        payload: id
    };
};
