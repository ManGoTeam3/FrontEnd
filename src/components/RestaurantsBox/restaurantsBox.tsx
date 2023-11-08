import "./restaurantsBox.scss";
import korean from "../../assets/imgs/korean.jpeg"
import buffet from "../../assets/imgs/buffet.jpeg"
import shav from "../../assets/imgs/Shav.jpeg"

interface RestaurantProps {
  id: number;
  addressName: string;
  categoryName: string;
  imageUrl: string;
  placeName: string;
}
export default function RestaurantsBox ( {id, addressName, categoryName, imageUrl, placeName}: RestaurantProps ){
    return (
        <div className="restaurantBox">
          {
            categoryName === "한식" ? (
              <img src={korean} className="restaurantImg"/>
            ) : (
              categoryName === "샤브샤브" ? (
                <img src={shav} className="restaurantImg"/>
              ) : (
                <img src={buffet} className="restaurantImg"/>
              )
            )
          }
            <div className="restaurantContent">
              <div className="restaurantTitle">
                <div className="restaurantLoc">{categoryName}</div>
                <div className="score">5.0</div>
              </div>
              <div className="restaurantName">{placeName}</div>
              <p>해당 업체에 대한 한 줄 설명</p>
            </div>
        </div>
    )
}