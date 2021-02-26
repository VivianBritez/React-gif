import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GitGrid } from "./GitGrid";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faWhatsapp} from "@fortawesome/fontawesome-free-brands"; */


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Spacex"]);
  /*   const handledAdd = ()=> {
       // setcategories( [...categories, 'hunter-hunter']);
       setcategories( catg => [...catg, 'HUnterMan']);
    }  */

  return (
    <div>
      <header>
        <div className="gif-title">
          
          <div className="icons-redes">
          <img className="animate__animated animate__slideInLeft"
            src="https://i.ibb.co/PDLvTZs/searchgif.png"
            alt="searchgif"
            border="0"
          ></img>
          
        </div>
         
        </div>
        
          
      </header>

      <AddCategory setcategories={setcategories} />

      <ol>
        {categories.map((category) => (
          <GitGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
