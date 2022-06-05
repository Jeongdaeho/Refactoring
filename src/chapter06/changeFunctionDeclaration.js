export {inNewEngland};

function inNewEngland(aCustomer) {
	const stateCode = aCustomer.address.state;
	return xxNewEngland(stateCode);
}

function xxNewEngland(stateCode) {
	return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}