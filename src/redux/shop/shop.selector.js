import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

// const COLLECTION_ID_MAP ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5

// }


export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectionCollectionByid =(UrlParam) =>
    createSelector(
        [selectShopCollections],
        (collections) => collections[UrlParam]
    );

export const selectCollectionForPreview =createSelector(
    [selectShopCollections],
    collections =>Object.keys(collections).map(key => collections[key])
)