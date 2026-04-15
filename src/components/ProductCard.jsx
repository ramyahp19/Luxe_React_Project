import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useStore();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="image-box">
          <img src={product.image} />
        </div>
        <h3 className="product-title">{product.name}</h3>
      </Link>
      <p className="price">₹{product.price}</p>

      <div className="btn-group">
        <button onClick={() => addToCart(product)}>Add</button>
        <button onClick={() => addToWishlist(product)}>❤️</button>
      </div>
    </div>
  );
}