import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop], 
  (shop) => shop.collections
);

export const selectColllectiosForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUlrParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUlrParam] : null
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop=> shop.isFetching
  )

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop=> !!shop.collections
  )