var FinvoiceSellerParty = function(companyID, companyNames, companyAddress){
	// We should make validation to companyID
	this.companyID = companyID;
	
	// Convert to array if needed
	this.companyNames = typeof(companyNames) == 'string' ? [companyNames] : companyNames;
	
	// Tax code is based on companyID
	this.companyTaxCode = 'FI' + this.companyID.replace(/-/g,'');
	
	// Address (FinvoiceAddress)
	this.companyAddress = companyAddress;
};

FinvoiceSellerParty.setAddress = function(addressObj){
	this.companyAddress = addressObj;	
};

module.exports = FinvoiceSellerParty;
