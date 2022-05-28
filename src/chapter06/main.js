export function printOwing(invoice, console, clock) {
	let outstanding = 0;

	console.log("***********************");
	console.log("****** 고객 채무 ******");
	console.log("***********************");

	// 미해결 채무
	for (const o of invoice.orders) {
			outstanding += o.amount;
	}

	// 마감일(dueDate)을 기록한다.
	const today = clock.today;
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

	//print details
	console.log(`name: ${invoice.customer}`);
	console.log(`amount: ${outstanding}`);
	console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}