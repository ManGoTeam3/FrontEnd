import "./filter.scss";
import { useNavigate } from "react-router-dom";

import search from "../../assets/icons/search.png";
import { useState, useRef, useEffect } from "react";

interface FilterProps {
    size: string;
}

function Filter ( {size}: FilterProps ) {
    const searchRefs = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [findWord, setFindWord] = useState("");

    useEffect(() => {
        if(searchRefs.current !== null){
            searchRefs.current.focus();
        }
    }, []);

    const searchData = (e : any) => {
        console.log(e);
        if(e.key === "Enter"){
            navigate("/restaurants", {state: {findWord}});
        }
    }
    return(
        <div className="filterWrapper">
            <div className={`filterInput ${size}`}>
                <img src={search} alt={search} width="50px" height="50px" style={{marginTop: "23px"}}/>
                {size === "large" ? (
                    <input 
                    type="text" 
                    placeholder="맛집 검색"
                    onClick={() => navigate("/search")}
                    // ref={searchRefs}
                    />
                    ) : (
                        size === "medium" ? (
                        <input 
                            type="text" 
                            placeholder="맛집 검색"
                            onKeyDown={searchData}
                            value={findWord}
                            onChange={(e) => setFindWord(e.target.value)}
                            ref={searchRefs}
                        />
                    ) : (
                        <input 
                            type="text" 
                            placeholder="맛집 검색"
                            onClick={() => navigate("/search")}
                            // ref={searchRefs}
                        />
                    )
                )}
            </div>
        </div>
    );
}

// @ts-ignore
export default Filter;