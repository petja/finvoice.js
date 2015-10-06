var FinvoiceAddress = function(street, town, postcode, countrycode, country, po){
	// Constructor
	this.street = street;
	this.town = town;
	this.postcode = postcode;
	this.countrycode = countrycode;
	this.country = country;
	this.po = po;
};

module.exports = FinvoiceAddress;
