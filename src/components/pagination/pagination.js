import React from 'react';
import './pagination.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ campaignsPerPage, totalCampaigns,currentPageNumber, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCampaigns / campaignsPerPage); i++) {
        pageNumbers.push(i);
    }

    const isFirstPageNumber=()=>{
        return currentPageNumber===1;
    }
    const isLastPageNumber=()=>{
        return currentPageNumber===totalCampaigns/campaignsPerPage;
    }
    const generatePageNumbers=()=>{
        return pageNumbers.map(number => (
            <li onClick={() => paginate(number)} key={number} className={`page-number ${number===currentPageNumber ? "active": ""}`}>
                        <span>
                            {number}
                        </span>
            </li>
        ))
    }
    return (
            <div className="pagination-numbers">
                <li onClick={() => paginate(currentPageNumber-1)} className={`page-number start ${isFirstPageNumber() ? "disabled": ""}`}>
                    <span>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </span>
                </li>
                    {generatePageNumbers()}
                <li onClick={() => paginate(currentPageNumber+1)} className={`page-number end ${isLastPageNumber() ? "disabled": ""}`}>
                    <span >
                       <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                     </span>
                </li>
            </div>
    );
};

export default Pagination;
