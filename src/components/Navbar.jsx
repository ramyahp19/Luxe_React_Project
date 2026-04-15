import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { cart, wishlist } = useStore();

  return (
    <nav className="nav">
      <h1 className="logo">LUXE</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/wishlist">💛{wishlist.length}</Link>
        <Link to="/cart">🛒 {cart.length}</Link>
      </div>
    </nav>
  );
}