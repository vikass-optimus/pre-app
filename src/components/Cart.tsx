import MenuItem from "./MenuItem";

const Cart = () => {
  return (
    <section>
        <h1>Your Cart</h1>
    <ul>
        <MenuItem item={{ name: "Pizza", quantity: 2 }} />
        <MenuItem item={{ name: "Pasta", quantity: 1 }} />
        <MenuItem item={{ name: "Coke",  quantity: 4 }} />
    </ul>
    </section>
  );
};


export default Cart;
