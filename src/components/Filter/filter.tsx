import "./filter.scss";
import { useNavigate } from "react-router-dom";

import search from "../../assets/icons/search.png";

interface FilterProps {
    size: string;
}

function Filter ( {size}: FilterProps ) {
    const navigate = useNavigate();
    return(
        <div className="filterWrapper">
<<<<<<< HEAD
            <div className={`filterInput ${size}`}>
                <img src={search} width="50px" height="50px" style={{marginTop: "23px"}}/>
                <input 
                    type="text" 
                    placeholder="맛집 검색"
                    onClick={() => navigate("/search")}
                />
=======
            <div className="filterInputWrapper">
                <img src={search} width="50px" height="50px" style={{marginTop: "23px"}} alt={search}/>
                <input type="text" placeholder="맛집 검색"/>
>>>>>>> 65ccb91c5682bce98818ec4e3dbc41e25bd3b500
            </div>
        </div>
    );
}

export default Filter;
