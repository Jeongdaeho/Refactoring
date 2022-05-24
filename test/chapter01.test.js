import { expect } from "chai";
import { statement } from "../src/chapter01/statement.js";
import invoices from "../src/chapter01/invoices.json";
import plays from "../src/chapter01/plays.json";

describe("statement", () => {
  it("should print a statement", () => {
    let expected =
      "Statement for BigCo\n" +
      "  Hamlet: $650.00 (55 seats)\n" +
      "  As You Like It: $580.00 (35 seats)\n" +
      "  Othello: $500.00 (40 seats)\n" +
      "Amount owed is $1,730.00\n" +
      "You earned 47 credits\n";

    let result = statement(invoices[0], plays);
    console.log(result);
    expect(result).to.equal(expected);
  });
});
