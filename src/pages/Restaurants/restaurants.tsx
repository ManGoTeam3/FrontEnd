import { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import "./restaurants.scss";

import sortArrow from "../../assets/icons/sortArrow.png";

import Filter from "../../components/Filter/filter";
import Footer from "../../components/Footer/footer";
import Nav from "../../components/Nav/nav";
import RestaurantsBox from "../../components/RestaurantsBox/restaurantsBox";

interface RestaurantProps {
  id: number;
  addressName: string;
  categoryName: string;
  imageUrl: string;
  placeName: string;
};

const Restaurants = () => {
  const [isCategory, setIsCategory] = useState(false);
  const [category, setCategory] = useState("카테고리");
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchList = async () => {
    try{
      // if(restaurantList.length === 0){
        const response = await axios.get('http://34.83.15.61:8080/api/search?query=역곡동');
        console.log(response);
        setRestaurantList(response.data);
      // }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <section className="mainWrapper">
      <Nav/>
      <Filter size="small"/>
      <main className="contentWrapper">
        <div className="searchTitle"><span style={{ color: "#3DAB60"}}>"역곡역"</span>에 대한 검색 결과</div>
        <div className="searchLine"></div>
        <div className="categoryWrapper">
          <div className="categoryBox" onClick={() => setIsCategory(true)}>카테고리</div>
          <div className="categorySort">인기순 <img src={sortArrow}/></div>
        </div>

        <div className="restaurantsContainer">
        {restaurantList.slice(0, 20).map((e: RestaurantProps) => (
          <RestaurantsBox 
            key={e.id} 
            id={e.id} 
            addressName={e.addressName}
            categoryName={e.categoryName} 
            imageUrl={e.imageUrl} 
            placeName={e.placeName} 
          />
        ))}
        </div>
      </main>
      <Footer/>

      {isCategory && (
        <div className="modalContainer">
          <div className="modalBox">
            <div className="modalContent">
              <div className="categoryTitle">카테고리</div>
              <div className="categoryConatiner">
                <div>한식</div>
                <div>양식</div>
                <div>중식</div>
                <div>일식</div>
                <div>기타</div>
              </div>
              <div className="modalBtnBox">
                <div className="cancleBtn" onClick={() => setIsCategory(false)}>닫기</div>
                <div className="checkBtn" onClick={() => setIsCategory(false)}>카테고리 설정</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Restaurants;