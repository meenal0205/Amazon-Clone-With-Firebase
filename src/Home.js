import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_1x._CB594150943_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123123123"
            title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/31mUgvf0QTL._AC_SR400,600_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking , Stylish kitchen Mixer with K-beater , Dough Hook and Whisk , 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={"https://m.media-amazon.com/images/I/61WTWKV9p-L.jpg"}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title='Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'
            price={200}
            rating={3}
            image="https://www.mivi.in/assets/model-e/green.png"
          />
          <Product
            id="2804252"
            image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/air_conditioner_0_1200x768.jpeg?VersionId=1ep_guOOJpkzYzpnu0.IOxwPvXKmFXim"
            title="SUHANA Snow Falls 1.0 Ton 5 Star Non Inverter Split Air Conditioner AC with Energy Saver Technology (Model 2022-23 SU12JSF0123R22)"
            price={1400}
            rating={4}
          />
          <Product
            id="3257259"
            image="https://images.samsung.com/is/image/samsung/p6pim/in/rs7hcg8543b1hl/gallery/in-side-by-side-family-hub-449420-rs7hcg8543b1hl-535087575?$650_519_PNG$"
            rating={5}
            price={2000}
            title="Haier 531 L Inverter Frost-Free Side-by-Side Refrigerator (HRB-550KG, Black,Convertible)"
          />
        </div>
        <div className="home__row">
          <Product
            id="235732"
            title="The Sleep Company SmartGRID Onyx Chair for Office & Home, Patented SmartGRID Technology for advanced Orthopedic Support | Adjustable Lumbar Support for ergonomic sitting posture | Multiple Adjustments Mechanism | Ergonomic Chair | Made in India | (Classic Black & Black"
            image="https://m.media-amazon.com/images/I/71mKwaKglhL._AC_UF894,1000_QL80_DpWeblab_.jpg"
            rating={4}
            price={1500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
