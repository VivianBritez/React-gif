import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiFGridItem } from "./GiFGridItem";

export const GitGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  console.log(loading);
  /* 
   

     useEffect( ()=>{
        getGifs( category )
        .then(imgs => setImages(imgs)) // que se ejecute solo cuando es renderizado por primera vez
    }, [ category ]); // el useEffect ya se ejecuto mediante el array vacio por eso no vuelve a renderizar denuevo todo, y repetir las peticiones api
   // le ma ndo category por si quisieramos hacer denuevo la peticion a la api*/

  return (
   <div>
      <h3 className="animate__animated animate__fadeInUp"> {category}</h3>
      <div className="card-grid">
      {loading && (
        <p className="animate__animated animate__fadeOut">loading.....</p>
      )}
      {
        <ol>
          {data.map((img) => (
            <GiFGridItem key={img.id} {...img} />
          ))}
        </ol>
      }
    </div>
    </div>
    
  );
};
