import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/common-utils";

const initialState = {
    campaignTable:[],
    currentPageNumber: 1,
    campaignsPerPage: 10,
    searchResult:[],
};

const setTableData= (state, action) => {
    return updateObject( state, {
        campaignTable: action.campaignTable,
    } );
};

const searchInTable=(state,action)=>{
    let filteredData = state.campaignTable.filter((campaign)=>{
        return campaign.name && campaign.name.toLowerCase().includes(action.searchString);
    })
    return updateObject(state,{
        searchResult:filteredData
    })
}
const setCurrentPageNumber= (state, action) => {
    return updateObject( state, {
        currentPageNumber: action.pageNumber,
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEARCH_TABLE : return searchInTable(state,action)
        case actionTypes.SET_PAGE_NUMBER: return setCurrentPageNumber(state,action)
        case actionTypes.SET_TABLE_DATA: return setTableData(state, action);
        default: return state;
    }
};

export default reducer;
