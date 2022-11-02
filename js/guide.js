// JavaScript Document

Supongo que RX son los required y los puedo borrar dejando solo los del fondo.

//Original form
".name":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
".state":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:'input'},
".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".fax":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".message":{rx:/.{20}/,target:'textarea'}

//JS Array for Charters in island airlines
".name":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:'input'},
".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".RequestedAircraft":{rx:/.{2}/,target:'select'},
".CompanyName":{rx:/.{2}/,target:'input'},
".DepartureDate":{rx:/.{2}/,target:'input'},
".DepartTime":{rx:/.{2}/,target:'input'},
".ReturnDate":{rx:/.{2}/,target:'input'},
".ReturnTime":{rx:/.{2}/,target:'input'},
".RouteFrom":{rx:/.{2}/,target:'input'},
".RouteTo":{rx:/.{2}/,target:'input'},
".NumberOfPassengers":{rx:/.{1}/,target:'input'}

//Object second section
name:_.getValFromLabel($('.name',_.form)),
email:_.getValFromLabel($('.email',_.form)),
phone:_.getValFromLabel($('.phone',_.form)),
RequestedAircraft:_.getValFromLabel($('.RequestedAircraft',_.form)),
CompanyName:_.getValFromLabel($('.CompanyName',_.form)),
DepartureDate:_.getValFromLabel($('.DepartureDate',_.form)),
DepartTime:_.getValFromLabel($('.DepartTime',_.form)),
ReturnDate:_.getValFromLabel($('.ReturnDate',_.form)),
ReturnTime:_.getValFromLabel($('.ReturnTime',_.form)),
RouteFrom:_.getValFromLabel($('.RouteFrom',_.form)),
RouteTo:_.getValFromLabel($('.RouteTo',_.form)),
NumberOfPassengers:_.getValFromLabel($('.NumberOfPassengers',_.form)),
message:_.getValFromLabel($('.message',_.form)),
TermsAndConditionsLabel:_.getValFromLabel($('.TermsAndConditionsLabel',_.form)),
owner_email:_.ownerEmail,
stripHTML:_.stripHTML

//classes for gsi rfp form
name		/input/string -----
company	/input/string -----
address	/input/string -----
city		/input/string -----
state	/input/string -----
country	/input/string -----
zipcode	/input/number -----
email	/input/email -----
phone	/input/telephone -----
fax		/input/telephone -----
contactby		/select/string -----
programstart	/input/date -----
programend	/input/date -----
numberofattendees	/input/number -----
hotel	/input/string -----
servicesneeded		/select/string ------
groupprofile		/textarea -----
programoverview	/textarea -----
additionalcomments	/textarea -----
upload		/file

//RX to implement
".name":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:'input'},
".company":{rx:/.{2}/,target:'input'},
".address":{rx:/.{2}/,target:'input'},
".city":{rx:/.{2}/,target:'input'},
".state":{rx:/.{2}/,target:'input'},
".country":{rx:/.{2}/,target:'input'},
".zipcode":{rx:/.{2}/,target:'input'},
".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:'input'},
".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".fax":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".contactby":{rx:/.{2}/,target:'select'},
".programstart":{rx:/.{2}/,target:'input'},
".programend":{rx:/.{2}/,target:'input'},
".numberofattendees":{rx:/.{2}/,target:'input'},
".hotel":{rx:/.{2}/,target:'input'},
".servicesneeded":{rx:/.{2}/,target:'select'},
".groupprofile":{rx:/.{20}/,target:'textarea'},
".programoverview":{rx:/.{20}/,target:'textarea'},
".additionalcomments":{rx:/.{20}/,target:'textarea'},

//Add to email
name:_.getValFromLabel($('.name',_.form)),
company:_.getValFromLabel($('.company',_.form)),
address:_.getValFromLabel($('.address',_.form)),
city:_.getValFromLabel($('.city',_.form)),
state:_.getValFromLabel($('.state',_.form)),
country:_.getValFromLabel($('.country',_.form)),
zipcode:_.getValFromLabel($('.zipcode',_.form)),
email:_.getValFromLabel($('.email',_.form)),
phone:_.getValFromLabel($('.phone',_.form)),
fax:_.getValFromLabel($('.fax',_.form)),
contactby:_.getValFromLabel($('.contactby',_.form)),
programstart:_.getValFromLabel($('.programstart',_.form)),
programend:_.getValFromLabel($('.programend',_.form)),
numberofattendees:_.getValFromLabel($('.numberofattendees',_.form)),
hotel:_.getValFromLabel($('.hotel',_.form)),
servicesneeded:_.getValFromLabel($('.servicesneeded',_.form)),
groupprofile:_.getValFromLabel($('.groupprofile',_.form)),
programoverview:_.getValFromLabel($('.programoverview',_.form)),
additionalcomments:_.getValFromLabel($('.additionalcomments',_.form)),
owner_email:_.ownerEmail,
stripHTML:_.stripHTML
