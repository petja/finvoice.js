var Finvoice = function(){
	this.AccountDetails = require('./src/FinvoiceAccountDetails');
	this.Address = require('./src/FinvoiceAddress');
	this.SellerInformationDetails = require('./src/FinvoiceSellerInformationDetails');
	this.SellerParty = require('./src/FinvoiceSellerParty');
};

Finvoice.setSeller = function(sellerObj){
	//
};

module.exports = Finvoice;
