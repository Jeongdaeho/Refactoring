import { expect } from "chai";
import { statement, htmlStatement } from "../src/chapter01/statement.js";
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
    expect(result).to.equal(expected);
  });

  it("should print a statement for multiple plays, single customer and multiple seats in html", () => {
    let expected = `<h1>Statement for BigCo</h1>\n`;
    expected += "<table>\n";
    expected += `<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n`;
    expected += `  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n`;
    expected += `  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n`;
    expected += "</table>\n";
    expected += `<p>Amount owed is <em>$1,730.00</em></p>\n`;
    expected += `<p>You earned <em>47</em> credits</p>\n`;

    let result = htmlStatement(invoices[0], plays);
    console.log(result);
    expect(result).to.equal(expected);
  });
});
