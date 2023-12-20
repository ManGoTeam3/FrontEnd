// @ts-ignore
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./restaurantDetail.scss";
import { useNavigate } from 'react-router-dom';
import Map from "../../components/Map/map";
import Nav from "../../components/Nav/nav";
import ReviewBox from "../../components/ReviewBox/reviewBox";

import sad from "../../assets/icons/sad.png";
import smile from "../../assets/icons/smile.png";
import soso from "../../assets/icons/soso.png";


interface RestaurantDetailProps {
    addressName: string;
    categoryName: string;
    phone: string;
    placeName: string;
    placeUrl: string;
    roadAddressName: string;
    score: number;
    x: Number;
    y: Number;
};

// 리뷰 정보
interface ReviewData {
    createdAt: string;
    restaurantId: number;
    reviewContents: string;
    reviewId: number;
    reviewPicUrl: string[];
    score: number;
    username: string;
}

interface RestaurantDetailData {
    data: ReviewData[];
}

const RestaurantDetail = () => {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    const [restaurantDetail, setRestaurantDetail] = useState<RestaurantDetailProps | null>(null);
    const [reviewList, setReviewList] = useState<RestaurantDetailData | null>(null);

    const fetchList = () => {
        // 식당 상세 조회
        axios.get(`http://3.217.20.163:8080/api/restaurants/detail?restaurantId=${id}`)
            .then((response: any) => {
                console.log(response);
                setRestaurantDetail(response.data);
    
                // 리뷰 전체 조회
                return axios.get(`http://3.217.20.163:8080/api/restaurants/review/1`);
            })
            .then((response2: any) => {
                console.log(response2);
                setReviewList(response2); // Assuming response2 is an object with a 'data' property
            })
            .catch((error: any) => {
                console.error(error);
            });
    };

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Rating', { state: { id: id } });
    }
    
      useEffect(() => {
        fetchList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    return(
        <section className="mainWrapper">
            <Nav />
            <main className="detailContentWrapper">
                <div className="topWrapper">
                    <span className="detailCategory">{restaurantDetail?.categoryName}</span>
                    <div>
                        <span className="detailName">{restaurantDetail?.placeName}</span>
                        {/* <span className="detailStar">5.0</span> */}
                    </div>
                    <div className="imgWrapper">
                        {reviewList?.data?.map((e) => (
                            <img src={e.reviewPicUrl[0]} alt="reviewImg" width="300px" height="300px"/>
                        ))}
                    </div>
                </div>

                {/* 리뷰 */}
                <div className="reviewmainWrapper">
                    <div className="reviewLeftBox">
                        <div><span>{restaurantDetail?.addressName}</span></div>
                        <div><span>{restaurantDetail?.phone}</span></div>
                        <div>
                            <div className="reviewBoxTitle">
                                <div>리뷰 <span style={{ 'color': "#3dab60", marginLeft: '8px'}}>{reviewList?.data?.length === undefined ? 0 : reviewList?.data?.length}</span></div>
                                <div className="reviewWriteBtn" onClick={handleButtonClick}>

                                    <span>리뷰 작성하기</span></div>
                            </div>
                            <div className="reviewLine"></div>
                            <div>
                                <div className="reviewNumBox">
                                    <span style={{ 'color' : '#3DAB60', fontSize: "50px", fontWeight: 'bold'}}>{restaurantDetail?.score}</span>
                                    <span>{reviewList?.data?.length === undefined ? 0 : reviewList?.data?.length}명의 방문자가 리뷰를 남겼어요!</span>
                                    <div className="reviewCntWrapper">
                                        <img src={smile} alt="smile" style={{ marginRight: "1em" }}/>
                                        {reviewList?.data?.filter((e) => e.score === 4 && 5).length}
                                    </div>
                                    <div className="reviewCntWrapper">
                                        <img src={soso} alt="soso" style={{ marginRight: "1em" }}/>
                                        {reviewList?.data?.filter((e) => e.score === 2 && 3).length}
                                    </div>
                                    <div className="reviewCntWrapper">
                                        <img src={sad} alt="sad" style={{ marginRight: "1em" }}/>
                                        {reviewList?.data?.filter((e) => e.score === 1).length}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {reviewList?.data?.map((e: ReviewData, i: number) => (
                                    <React.Fragment key={i}>
                                        <ReviewBox 
                                            createdAt={e.createdAt}
                                            reviewContents={e.reviewContents}
                                            reviewPicUrl={e.reviewPicUrl[0]}
                                            username={e.username}
                                            score={e.score}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="reviewRightBox">
                        {/* <img src={mango} alt="mango"/> */}
                        <Map 
                            x={restaurantDetail?.x}
                            y={restaurantDetail?.y}
                        />
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </section>
    )
}

export default RestaurantDetail;