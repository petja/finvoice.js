var FinvoiceSellerInformationDetails = function(companyID, companyNames, companyAddress){
	this.phoneNumber = void(0);
	this.faxNumber = void(0);
	this.email = void(0);
	this.
};

FinvoiceSellerInformationDetails.getXML = function(){
	return {
		SellerInformationDetails : {
			SellerPhoneNumber : this.phoneNumber,
			SellerFaxNumber : this.faxNumber,
			SellerCommonEmailaddressIdentifier : this.email,
			SellerWebaddressIdentifier : this.www,
			SellerFreeText : this.motto,
			SellerAccountDetails : this.accounts.getXML()
		}
	};
};

module.exports = FinvoiceSellerInformationDetails;
