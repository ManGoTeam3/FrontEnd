import "./filter.scss";

import search from "../../assets/icons/search.png";

const Filter : React.FC = () => {
    return(
        <div className="filterWrapper">
            <div className="filterInputWrapper">
                <img src={search} width="50px" height="50px" style={{marginTop: "23px"}}/>
                <input type="text" placeholder="맛집 검색"/>
            </div>
        </div>
    );
}

export default Filter;
