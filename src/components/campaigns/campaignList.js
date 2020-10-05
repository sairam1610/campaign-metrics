import React from 'react';
import './campaignList.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
const CampaignList = (props) => {

    let renderTableHeader= ()=> {
        let { currentPageCampaigns } = props;
        let header = Object.keys(currentPageCampaigns && currentPageCampaigns.length && currentPageCampaigns[0])
        let headerData = header && header.map((key, index) => {
            return <div className="column-title col-md-3" key={index}>{key}</div>
        }).slice(1);
        headerData.unshift(<div className="column-title col-md-1" key="5"><input type="checkbox" value="ALL"></input></div>)
        headerData.push(<div className="column-title col-md-2" key="6">Actions</div>)
        return headerData;
    }

    let  renderTableData= ()=>{
        return props.currentPageCampaigns && props.currentPageCampaigns.map((campaign) => {
            const { _id, name, type, company } = campaign //destructuring
            return (
                <div className="table-row" key={_id}>
                    <div className="column-data col-md-1"><input type="checkbox" value={_id}></input></div>
                    <div className="column-data col-md-3" style={{color: "#6c7ae0", fontWeight:600}}>{name.toLowerCase()}</div>
                    <div className="column-data col-md-3">{type.toLowerCase()}</div>
                    <div className="column-data col-md-3">{company.toLowerCase()}</div>
                    <div className="column-data col-md-2 actions">
                        <div className="edit">
                            <FontAwesomeIcon icon={faEdit} color={"#45a4ec"}></FontAwesomeIcon>
                        </div>
                        <div className="delete">
                            <FontAwesomeIcon icon={faTrashAlt}   color={"#c82124"}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
        <div className="table-header">
            {renderTableHeader()}
        </div>
            {renderTableData()}
        </>
    );
};

export default  CampaignList;
