import { expect } from "chai";
import { getRating } from "../src/chapter06/rating.js";
import { price } from "../src/chapter06/extractVariable";
import { Order } from "../src/chapter06/extractVariable2";

describe("chp6-2", function () {
  it("chp6-2", function () {
    expect(
      getRating({
        numberOfLateDeliveries: 10,
      })
    ).equal(2);
  });
});

describe("chp6-3", function () {
  it("price", function () {
    expect(
      price({
        quantity: 500,
        itemPrice: 55,
      })
    ).equal(27600);
  });

  it("should price order which quantity is under 50", () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1,
    };

    expect(new Order(anOrder).price).to.equal(53.9);
  });

  it("should price order which quantity is above 50", () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1,
    };

    expect(new Order(anOrder).price).to.equal(56.1);
  });
});
