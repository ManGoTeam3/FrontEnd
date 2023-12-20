// @ts-ignore
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./restaurants.scss";


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
  const [restaurantList, setRestaurantList] = useState([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const location = useLocation();

  const { state } = location;
  const findWord: string = (state && state.findWord) || "";

  const fetchList = async () => {
    try{
      // if(restaurantList.length === 0){
        console.log(findWord);
        console.log(categoryList);
        console.log(`${findWord} ${categoryList?.join(' ')}`);
        const response = await axios.get(`http://3.217.20.163:8080/api/restaurants/search?query=${findWord} ${categoryList?.join(' ')}`);
        console.log(response);
        setRestaurantList(response.data);
      // }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findWord]);

  const toggleCategory = (category: string) => {
    // Check if the category is already in the list
    if (categoryList.includes(category)) {
      // If yes, remove it
      setCategoryList(categoryList.filter((item) => item !== category));
    } else {
      // If not, add it
      setCategoryList([...categoryList, category]);
    }
  };

  const handleCategory = () => {
    setIsCategory(false);
    // setCategoryList([]);

    fetchList();
  }

  return (
    <section className="mainWrapper">
      <Nav/>
      <Filter size="small"/>
      <main className="contentWrapper">
        <div className="searchTitle"><span style={{ color: "#3DAB60"}}>"{findWord}"</span>에 대한 검색 결과</div>
        <div className="searchLine"></div>
        <div className="categoryWrapper">
          <div className="categoryBox" onClick={() => setIsCategory(true)}>카테고리</div>
          {/* <div className="categorySort">인기순 <img src={sortArrow} alt={sortArrow}/></div> */}
        </div>

        <div className="restaurantsContainer">
        {restaurantList.map((e: RestaurantProps) => (
          <>
          <RestaurantsBox 
            key={e.id} 
            id={e.id} 
            addressName={e.addressName}
            categoryName={e.categoryName} 
            imageUrl={e.imageUrl} 
            placeName={e.placeName} 
          />
          </>
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
                <div
                  className={`categoryBtn ${categoryList.includes("한식") ? "active" : ""}`}
                  onClick={() => toggleCategory("한식")}
                >
                  한식
                </div>
                <div
                  className={`categoryBtn ${categoryList.includes("양식") ? "active" : ""}`}
                  onClick={() => toggleCategory("양식")}
                >
                  양식
                </div>
                <div
                  className={`categoryBtn ${categoryList.includes("중식") ? "active" : ""}`}
                  onClick={() => toggleCategory("중식")}
                >
                  중식
                </div>
                <div
                  className={`categoryBtn ${categoryList.includes("일식") ? "active" : ""}`}
                  onClick={() => toggleCategory("일식")}
                >
                  일식
                </div>
                <div
                  className={`categoryBtn ${categoryList.includes("기타") ? "active" : ""}`}
                  onClick={() => toggleCategory("기타")}
                >
                  기타
                </div>
              </div>
              <div className="modalBtnBox">
                <div className="cancleBtn" onClick={() => {setIsCategory(false);}}>닫기</div>
                <div className="checkBtn" onClick={handleCategory}>카테고리 설정</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Restaurants;