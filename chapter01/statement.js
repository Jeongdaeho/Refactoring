import createStatementData from './createStatementData.js';

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for(let perf of data.performances) {
        //청구 내역을 출력한다.
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석) \n`;
    }

    //청구 내역을 출력한다.
    result += `총액: ${usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    return result;
}

function htmlStatement(invoice, plays) {
    return renderHtmlText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})<h1>\n`;
    result += "<table>\n";
    result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>\n";

    for(let perf of data.performances) {
        //청구 내역을 출력한다.
        result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}석</td><td>${usd(perf.amount)}</td></tr>`
    }

    result += "<table>\n";
    //청구 내역을 출력한다.
    result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}점</em></p>\n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2 
    }).format(aNumber/100);
}
