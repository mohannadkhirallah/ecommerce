import Shop_Data from './shop.data';

const INITAL_STATE ={
    collections: Shop_Data
}

const shopReducer = (state=INITAL_STATE, action) =>{
    switch(action.type)
    {
        default:
            return state;
    }

};

export default shopReducer;