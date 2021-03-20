const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

const invoices = {
    "customer": "Bigco",
    "performances": [
        {
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "as-like",
            "audience": 35 
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
};

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format;

    for(let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf);
        
        //청구 내역을 출력한다.
        result += ` ${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience}석) \n`;
        totalAmount += amountFor(perf);
    }
    //청구 내역을 출력한다.
    result += `총액: ${format(totalAmount/100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}

function playFor(aPerfomance) {
    return plays[aPerfomance.playID];
}

function amountFor(aPerfomance) {
    let result = 0;

    switch(playFor(aPerfomance).type) {
        case "tragedy":
            result = 40000;
            if (aPerfomance.audience > 30) {
                result += 1000 + 500 * (aPerfomance.audience - 20);
            }
            break;
        case "comedy":
            result = 30000;
            if( aPerfomance.audience > 20 ) {
                result += 10000 + 500 * (aPerfomance.audience - 20);
            }
            result += 300 * aPerfomance.audience;
            break;
        default:
            throw new Error(`알수 없는 장르: ${playFor(perf).type}`);
    }
    return result;
}

function volumeCreditsFor(aPerfomance) {
    let result = 0;
    //포인트를 적립한다.
    result += Math.max(aPerfomance.audience - 30, 0);
    //희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === playFor(aPerfomance).type) result += Math.floor(aPerfomance.audience / 5);
    return result;
}

console.log(statement(invoices, plays));
