import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './campaignTable.scss'
import Pagination from "../../components/pagination/pagination";
import CampaignList from "../../components/campaigns/campaignList";
import Search from "../../components/search/search";
import {debounce} from "../../utils/common-utils";
export class CampaignTable extends Component {
    constructor() {
        super();
        this.state = {
            search:"",
        }
    }

    componentDidMount () {
        this.props.onInitTableData();
    }



    executeSearch=()=>{
        let searchString = this.state && this.state.search;
        this.props.searchTable(searchString);
    }

    handleInput=(event)=>{
        let name=event.target && event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    handleSearch=debounce(this.executeSearch,1000)

    render () {
        const { campaignsPerPage,totalCampaigns,currentPageNumber,searchResult,currentPageCampaigns}= this.props
        return (
            <div className="table-layout">
                <div className="campaigns-table">
                    <div className="table-options">
                        <Search handleInput={this.handleInput}
                                handleSearch={this.handleSearch}
                                inputString={this.state.inputString}>
                        </Search>
                    </div>
                    <div className="table-wrapper">
                        {this.state.search && this.props.searchResult.length ?
                            <CampaignList
                                currentPageCampaigns={searchResult}>
                            </CampaignList>:
                            <CampaignList
                                currentPageCampaigns={currentPageCampaigns}>
                            </CampaignList>}
                    </div>
                    <div className="pagination">
                        <Pagination
                            campaignsPerPage={campaignsPerPage}
                            totalCampaigns={totalCampaigns}
                            paginate={this.props.paginate}
                            currentPageNumber={currentPageNumber}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { currentPageNumber, campaignsPerPage, campaignTable,searchResult }= state.campaignTableState
    const indexOfLastPost = currentPageNumber * campaignsPerPage;
    const indexOfFirstPost = indexOfLastPost - campaignsPerPage;
    const currentPageCampaigns = campaignTable.slice(indexOfFirstPost, indexOfLastPost);

    return {
        currentPageNumber: currentPageNumber,
        searchResult: searchResult,
        campaignsPerPage: campaignsPerPage,
        totalCampaigns: campaignTable.length,
        currentPageCampaigns: currentPageCampaigns
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTableData: () => dispatch(actions.initTableData()),
        paginate:(pageNumber)=>dispatch(actions.setPageNumber(pageNumber)),
        searchTable:(searchString)=> dispatch(actions.searchTable(searchString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignTable);
