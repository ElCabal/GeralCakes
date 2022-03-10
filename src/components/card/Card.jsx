import React from "react";
/* import img1 from "../../assets/images/img1.jpeg"; */
const Card = ({ nombre, PrecioMinimo, PrecioMaximo, img1 }) => {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img1} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{nombre}</h2>
        <span>
          ${PrecioMinimo}-{PrecioMaximo}
        </span>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;