import { useState } from "react";
import Filter from "../../components/Filter/filter";
import Footer from "../../components/Footer/footer";
import Nav from "../../components/Nav/nav";

import "./search.scss";

export default function Search () {
    const [keyword, setKeyword] = useState(0);
    const list: string[] = ["추천 검색어", "인기 검색어", "최근 검색어"];

    return (
        <section className="mainWrapper">
            <Nav/>
            <Filter size="large"/>
            <div className="searchContainer">
                <div className="searchList">
                    {list.map((e, i) => {
                        if(i === keyword){
                            return(<div key={i} onClick={() => setKeyword(i)} className={`searchCategory selected`}>{e}</div>)
                        } return(<div key={i} onClick={() => setKeyword(i)} className={`searchCategory`}>{e}</div>)
                    })}
                </div>
                <div className="searchContent">
                    <div className="searchTitle">역곡 크라이치즈 버거</div>
                    <div className="searchLine"></div>
                    <div className="searchTitle">신동랩 역곡점</div>
                    <div className="searchLine"></div>
                    <div className="searchTitle">학교가는길</div>
                    <div className="searchLine"></div>
                    <div className="searchTitle">분더커피바</div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}