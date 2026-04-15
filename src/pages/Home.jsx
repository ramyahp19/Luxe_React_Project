import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Luxe </h1>
      <p>Luxury that feels divine</p>

      {/* 🌸 CTA BUTTON */}
      <button 
        className="explore-btn"
        onClick={() => navigate("/products")}
      >
        Explore Beauty Products
      </button>
    </div>
  );
}