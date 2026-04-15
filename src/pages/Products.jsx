import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="products-container">
      <h2 className="section-title">Our Collection</h2>
      <div className="products-grid">
        {data.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}