/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/misc.js
     
     Copyright 2010 Sustainable By Design

     - - - - - - - - - - - - - - - - - - - - - - - - -   */



	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Array_Average
	//
	/////////////////////////////////////////////////////////
/*	
 		function Array_Average (theArray) {

			var arrayLength = theArray.length;
			
			if (arrayLength > 0) {
			
				var arrayTotal = 0;
				
				for (element in theArray) {
				
					arrayTotal += element;
				}

				return (arrayTotal / arrayLength);
			}
			
			else {
			
				return 0;
			}
 		}
*/ 		
 
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Var
	//
	/////////////////////////////////////////////////////////
	
 		function Get_Var (varName) {
 		
			s = window.location.search;
			
			re = new RegExp ('&amp;' + varName + '=([^&]*)', 'i');

			return (s = s.replace (/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Format_Decimal
	//
	/////////////////////////////////////////////////////////
	
 		function Format_Decimal (number, precision) {
 		
 			factor = Math.pow (10, precision);
 		
			return (Math.round (number * factor) / factor);
 		}
 		
 
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Format_Integer
	//
	/////////////////////////////////////////////////////////
	
 		function Format_Integer (number, precision) {

		// ---------------------------------------------
		// round number
		// ---------------------------------------------
  		
 			numDigits = Math.ceil (logN (number, 10));
 			
 			if (numDigits > precision) {
 			
 				divisor = Math.pow (10, (numDigits - precision));
 			
 				number = Math.round (number / divisor) * divisor;
 			}
 			
 			else {
 			
 				number = Math.round (number);
 			}

		// ---------------------------------------------
		// add commas
		// ---------------------------------------------

			number = Add_Commas (number);
			
		// ---------------------------------------------
		// return
		// ---------------------------------------------
   			
 			return number;
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Add_Commas
	//
	/////////////////////////////////////////////////////////
	
 		function Add_Commas (number) {
 		
			number = '' + number;
			
			if (number.length > 3) {

				mod = number.length % 3;

				output = (mod > 0 ? (number.substring (0, mod)) : '');

				for (i = 0 ; i < Math.floor (number.length / 3); i ++) {

					if ((mod == 0) && (i == 0)) {
	
						output += number.substring (mod + 3 * i, mod + 3 * i + 3);
					}
					
					else {
	
						output += ',' + number.substring (mod + 3 * i, mod + 3 * i + 3);
					}
				}
	
				return (output);
			}

			else {
			
				return number;
			}
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Select_Menu_Value
	//
	/////////////////////////////////////////////////////////
	
 		function Select_Menu_Value (id) {
 		
			var form = document.theForm;

 			value = form[id].options[form[id].selectedIndex].value;
 			
 			return value;
 		}
 		
 
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Change_Class
	//
	/////////////////////////////////////////////////////////
	
		function Change_Class (id, newClass) {
		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				document.getElementById(id).className = newClass;
			}
		
			else {
		
				if (document.layers) { // Netscape 4
				
					document.id.className = newClass;
				}
				
				else { // IE 4
				
					document.all.id.className = newClass;
				}
			}
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Set_Div_Content
	//
	/////////////////////////////////////////////////////////
	
		function Set_Div_Content (id, text) {
		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				document.getElementById(id).innerHTML = text;
			}
		
			else {
		
				if (document.layers) { // Netscape 4
				
					document.id.innerHTML = text;
				}
				
				else { // IE 4
				
					document.all.id.innerHTML = text;
				}
			}
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Element_Reference
	//
	/////////////////////////////////////////////////////////
	
 		function Get_Element_Reference (fieldName) {
 		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				var myField = document.getElementById(fieldName);
			}
		
			else {
		
				if (document.layers) { // Netscape 4
				
					var myField = document.fieldName;
				}
				
				else { // IE 4
				
					var myField = document.all.fieldName;
				}
			}	
			
			return myField;
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Hide_Div
	//
	/////////////////////////////////////////////////////////
	
		function Hide_Div (id) {
		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				document.getElementById(id).style.display = 'none';
			}
		
			else {
		
				if (document.layers) { // Netscape 4
				
					document.id.display = 'none';
				}
				
				else { // IE 4
				
					document.all.id.style.display = 'none';
				}
			}
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Show_Div
	//
	/////////////////////////////////////////////////////////
	
		function Show_Div (id) {
		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				document.getElementById(id).style.display = 'block';
			}
		
			else {
		
				if (document.layers) { // Netscape 4
		
					document.id.display = 'block';
				}
		
				else { // IE 4
		
					document.all.id.style.display = 'block';
				}
			}
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Toggle_Div
	//
	/////////////////////////////////////////////////////////
	
		function Toggle_Div (id) {
		
			if (Get_Div_Visibility (id) == 'none') {
			
				Show_Div (id);
			}
			
			else {
			
				Hide_Div (id);
			}
		}
		
	
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Div_Visibility
	//
	/////////////////////////////////////////////////////////
	
		function Get_Div_Visibility (id) {
		
			if (document.getElementById) { // DOM3 = IE5, NS6
		
				return (document.getElementById(id).style.display);
			}
		
			else {
		
				if (document.layers) { // Netscape 4
				
					return (document.id.display);
				}
				
				else { // IE 4
				
					return (document.all.id.style.display);
				}
			}		
		}
		
	
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  In_Array
	//
	/////////////////////////////////////////////////////////
	
 		function In_Array (element, array) {
 		
			var i;
			
			for (i = 0; i < array.length; i++) {

				if (array[i] == element) {

					return true;
				}
			}
			
			return false;
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Ignore_Keys
	//
	/////////////////////////////////////////////////////////
	
		function Ignore_Keys (event, restrictions) {
		
			var charCode = event.charCode ? 
			               event.charCode :
			              (event.which    ? 
			               event.which    : 
			               event.keyCode) ;
								 
			// allow arrow keys
			
			if (charCode >= 37 && charCode <= 40) {
				
				return true;
			}
			
			// allow tab keys
			
			if (charCode == 9) {
				
				return true;
			}
			
			// allow backspace
			
			if (charCode == 8) {
				
				return true;
			}
			
			// return false if return/enter key
			
			if (charCode == 13 || charCode == 3 || charCode == 0) {
				
				return false;
			}
			
			// handle digits restriction
			
			if (restrictions == 'digits') {

				if (charCode < 48 || charCode > 57) {
				
					alert ("Please enter digits only in this field");
				
					return false;
				}
			}
			
			// handle decimal restriction
			
			if (restrictions == 'decimal') {
			
				// decimal point
				
				if (charCode == 46) {
				
					return true;
				}
				
				// check for digits

				if (charCode < 48 || charCode > 57) {
				
					alert ("Please enter only digits or a decimal point in this field");
				
					return false;
				}
			}
			
			// handle decimal restriction
			
			if (restrictions == 'decimalPlusMinus') {
			
				// decimal point
				
				if (charCode == 46) {
				
					return true;
				}
				
				// hyphen
				
				if (charCode == 45 || charCode == 109 || charCode == 189 || charCode == 150) {
				
					return true;
				}
				
				// check for digits

				if (charCode < 48 || charCode > 57) {
				
					alert ("Please enter only digits, a decimal point, or a hyphen (negative sign) in this field");
				
					return false;
				}
			}
			
			// handle currency restriction
			
			if (restrictions == 'currency') {
			
				// decimal point
				
				if (charCode == 46) {
				
					return true;
				}
				
				// comma
				
				if (charCode == 44) {
				
					return true;
				}
				
				// check for digits

				if (charCode < 48 || charCode > 57) {
				
					alert ("Please enter only digits, a decimal point, or a comma in this field");
				
					return false;
				}
			}
			
			// handle phone number restriction
			
			if (restrictions == 'phoneNumber') {

				if ((charCode != 45) && (charCode < 48 || charCode > 57)) {
				
					alert ("Please enter digits or a hyphen (-) only in this field");
				
					return false;
				}
			}

			// handle no input restriction
			
			if (restrictions == 'noInput') {

				alert ("Direct input is not allowed in this field");
				
				return false;
			}

			return true;
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Trim
	//
	/////////////////////////////////////////////////////////
	
 		function Trim (str) {
 		
 			return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Month_Num_To_Elapsed_Days
	//
	/////////////////////////////////////////////////////////
	
 		function Month_Num_To_Elapsed_Days (whichMonth) {

			if (whichMonth ==  0) return   (0);
			if (whichMonth ==  1) return  (31);
			if (whichMonth ==  2) return  (59);
			if (whichMonth ==  3) return  (90);
			if (whichMonth ==  4) return (120);
			if (whichMonth ==  5) return (151);
			if (whichMonth ==  6) return (181);
			if (whichMonth ==  7) return (212);
			if (whichMonth ==  8) return (243);
			if (whichMonth ==  9) return (273);
			if (whichMonth == 10) return (304);
			                 else return (334);
 		}


