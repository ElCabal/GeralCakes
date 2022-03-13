import React from "react";

const Card = ({ nombre, PrecioMinimo, PrecioMaximo, img1 }) => {
  return (
    /* <div class="card card-compact w-96 bg-base-100 shadow-xl">
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
    </div> */
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img1} alt="Cakes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{nombre}</h2>
        <p>
          ${PrecioMinimo}-{PrecioMaximo}
        </p>
        <div class="card-actions">
          <button class="btn btn-primary">VER PRODUCTOS</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
