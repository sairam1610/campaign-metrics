import * as actionTypes from './actionTypes';

export const initTableData = () => {
    return {
        type: actionTypes.LOAD_TABLE_DATA
    };
};

export const setPageNumber = (pageNumber) => {
    return {
        type: actionTypes.SET_PAGE_NUMBER,
        pageNumber:pageNumber,
    };
};

export const searchTable = (searchString) => {
    return {
        type: actionTypes.SEARCH_TABLE,
        searchString:searchString,
    };
};


export const setTableData = ( tableData ) => {
    return {
        type: actionTypes.SET_TABLE_DATA,
        campaignTable: tableData
    };
};
