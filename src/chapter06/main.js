export function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
	recodeDueDate(invoice);
	printDetail(invoice, outstanding)
}

function printBanner() {
  console.log("***********************");
  console.log("****** 고객 채무 ******");
  console.log("***********************");
}

function recodeDueDate(invoice) {
	const today = clock.today;
	invoice.dueDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 30
	);
}

function printDetail(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
	return result;
}
