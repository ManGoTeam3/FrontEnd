import './Home.scss'

import Filter from "../../components/Filter/filter";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";

import rec from "../../assets/imgs/rec1.png";
import heart from "../../assets/imgs/heart.png";
import mango from "../../assets/imgs/mango.webp";
import hands from "../../assets/imgs/hands.png";

const Home = () => {
    return (
        <section className="mainWrapper">
          <Nav />
          <div className="filterWrapper">
            <Filter />
            <div className="adWrapper">
              <div className="adTitleWrapper">
                <p>빠르게 <span style={{ color: "#3AB062" }}>검색</span>하고</p>
                <p className="rightTitle">믿고 보는 <span style={{ color: "#3AB062" }}>후기</span></p>
              </div>
              <div className="adImgWrapper">
                <img src={mango}  alt={mango}/>
              </div>
            </div>
            <div className="recWrapper">
              <div className="recTitle"><span style={{ color: "#3AB062" }}>부천시</span> 맛집 추천</div>
              <div className="recContainer">
                {/* 컴포넌트화 필요 */}
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
      
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
      
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bannerBox">
              <img src={heart} width="229px" height="237px" alt={heart}/>
              <p>솔직한 리뷰로 맛집 선택</p>
              <div>다람쥐 쳇바퀴 어쩌구 저쩌구 다람쥐 쳇바퀴 어쩌구 저쩌구 다람쥐 쳇바퀴 어쩌구 저쩌구</div>
              <div>다람쥐 쳇바퀴 어쩌구 저쩌구 다람쥐 쳇바퀴 어쩌구 저쩌구 다람쥐 쳇바퀴 어쩌구 저쩌구</div>
            </div>
            <div className="adBox">
              <div className="adTitleBox">
                <div className="title">쉽고 빠르게 업체 등록하기</div>
                <div>다람쥐 쳇바퀴 어쩌구</div>
              </div>
              <img src={hands} width="393px" height="459px" alt={hands}/>
            </div>
          </div>
          <Footer />
        </section>
        );
}
export default Home