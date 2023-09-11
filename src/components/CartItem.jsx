const CartItem = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.amount}</div>
    </div>
  );
};

export default CartItem;
