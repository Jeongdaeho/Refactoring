import { expect } from "chai";
import { getRating } from "../src/chapter06/rating.js";
import { price } from "../src/chapter06/extractVariable";
import { Order } from "../src/chapter06/extractVariable2";
import {xxNewEngland} from "../src/chapter06/changeFunctionDeclaration";

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

  it('잉글랜드 거주확인', () => {

    const aEnglander = {
      address: {
          state: "CT"
      }
    };
    const noEnglander = {
      address: {
        state: "ZZ"
      } 
    }
    const someCustomers = [aEnglander, noEnglander];
    const newEnglanders = someCustomers.filter(c => xxNewEngland(c.address.state));

    expect(newEnglanders).to.eql([aEnglander]);
  });
});
