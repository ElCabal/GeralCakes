/* import { useContext } from "react"; */
import { Link } from "react-router-dom";

const Card = ({ name, PriceMin, PriceMax, image, id }) => {
  /* const Contexto = useContext(DataContext); */
  return (
    <div className="card bg-base-100 shadow-xl p-1">
      <figure className="px-10 pt-10">
        <img src={image} alt="Cakes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          ${PriceMin}-{PriceMax}
        </p>
        <div className="card-actions">
          <Link to={`/DetailProduct/${id}`}>
            <button className="btn btn-primary">VER PRODUCTOS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
