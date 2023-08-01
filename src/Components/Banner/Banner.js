import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";
import { UncontrolledCarousel  } from 'reactstrap';
import "./Banner.css";
import img1 from '../../assets/images/img1.jpeg'
import img2 from '../../assets/images/img2.jpeg'
import img3 from '../../assets/images/img3.jpeg'
import img4 from '../../assets/images/img4.jpeg'
import img5 from '../../assets/images/banner copy.png'
function Banner() {
  let [category, setCategory] = useState();
  const items = [
    {
        src: `${img1}`,
        // altText: 'Slide 1',

        // caption: 'Slide 1',
        // header: 'Buying Real State inFeet'
    },
    {
        src: `${img2}`,
        // altText: 'Slide 2',
        // caption: 'Slide 2',
        // header: 'Sale Real State in Feet'
    },
    {

        src: `${img3}`,
        // altText: 'Slide 3',
        // caption: 'Slide 3',
        // header: 'Hold Real State in Feet'
    },
    {
      src: `${img4}`,
      // altText: 'Slide 3',
      // caption: 'Slide 3',
      // header: 'Hold Real State in Feet'
  }
];
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")} >Cars</span>
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div>
        </div>
        <div className="banner">
        <UncontrolledCarousel items={items} />
          {/* <img src="../../../Images/banner copy.png" alt="" /> */}
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
