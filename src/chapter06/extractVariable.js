export { price };

function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  return (
    basePrice -
    quantityDiscount +
    Math.min(basePrice * 0.1, 100)
  );
}
