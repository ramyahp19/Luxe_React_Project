import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart } = useStore();

  return (
    <div className="grid">
      {cart.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
