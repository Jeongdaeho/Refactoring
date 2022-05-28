import { expect } from "chai";
import { getRating } from "../src/chapter06/rating.js";

describe('chp6', function () {
  it("chp6-2", function () {
    expect(getRating({
			numberOfLateDeliveries: 10
		})).equal(2);
  });
});

