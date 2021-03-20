const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

const invoice = {
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
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerfomance);

    return renderPlainText(statementData, plays);

    function enrichPerfomance(aPerfomance) {
        const result = Object.assign({}, aPerfomance);  //얕은 복사 수행
        result.play = playFor(result);
        result.amount = amountFor(result);
        return result;
    }

    function playFor(aPerfomance) {
        return plays[aPerfomance.playID];
    }

    function amountFor(aPerfomance) {
        let result = 0;

        switch(aPerfomance.play.type) {
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
                throw new Error(`알수 없는 장르: ${perf.play.type}`);
        }
        return result;
    }
}

function renderPlainText(data, plays) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for(let perf of data.performances) {
        //청구 내역을 출력한다.
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석) \n`;
    }

    //청구 내역을 출력한다.
    result += `총액: ${usd(totalAmount())}\n`;
    result += `적립 포인트: ${totalVolumeCredits()}점\n`;
    return result;

    function totalAmount() {
        let result = 0;
        for(let perf of data.performances) {
            result += perf.amount;
        }

        return result;
    }

    function totalVolumeCredits() {
        let result = 0;
        for(let perf of data.performances) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD", minimumFractionDigits: 2 
        }).format(aNumber/100);
    }

    function volumeCreditsFor(aPerfomance) {
        let result = 0;
        //포인트를 적립한다.
        result += Math.max(aPerfomance.audience - 30, 0);
        //희극 관객 5명마다 추가 포인트를 제공한다.
        if ("comedy" === aPerfomance.play.type) result += Math.floor(aPerfomance.audience / 5);
        return result;
    }

}
console.log(statement(invoice, plays));
