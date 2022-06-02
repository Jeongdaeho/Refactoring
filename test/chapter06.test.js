import { expect } from "chai";
import { getRating } from "../src/chapter06/rating.js";
import { price } from "../src/chapter06/extractVariable";

describe('chp6-2', function () {
  it("chp6-2", function () {
    expect(getRating({
			numberOfLateDeliveries: 10
		})).equal(2);
  });
});

describe('chp6-3', function () {
  it("price", function () {
    expect(price({
      quantity: 500,
      itemPrice: 55
		})).equal(27600);
  });
});
