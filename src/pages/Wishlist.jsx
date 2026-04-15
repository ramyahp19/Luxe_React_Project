import { useStore } from "../context/StoreContext";

export default function Wishlist() {
  const { wishlist } = useStore();

  return (
    <div className="grid">
      {wishlist.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
