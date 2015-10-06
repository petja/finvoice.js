var FinvoiceAccountDetails = function(){
	// Constructor
	this.accountID = void(0);
	this.accountBic = void(0);
};

FinvoiceAccountDetails.getXML = function(){
	return {
		SellerAccountDetails : {
			SellerAccountID : [
				{
					_attr : {
						IdentificationSchemeName : 'IBAN'
					}
				},
				this.accountID
			],
			SellerBic : [
				{
					_attr : {
						IdentificationSchemeName : 'BIC'
					}
				},
				this.accountBic
			],
		}
	};
};

module.exports = FinvoiceAccountDetails;
