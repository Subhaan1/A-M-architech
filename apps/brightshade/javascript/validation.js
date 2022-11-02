/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/validation.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Validate_Inputs
	//
	/////////////////////////////////////////////////////////
	
 		function Validate_Inputs () {

		// ---------------------------------------------
		// vars
		// ---------------------------------------------
  			
			form = document.theForm;
 			
			errorMessage = '';
			
			doubleSpace = "\n\n";
  			
		// ------------------------------------------------------------------------
		// BUILDING INPUTS
		// ------------------------------------------------------------------------
			
			// ---------------------------------------------
			// building inputs:  latitude
			// ---------------------------------------------
			
			latitude = form.latitude.value - 0;

			if (form.latitude.value == "") { 
			
				errorMessage += doubleSpace + " *  The latitude field is empty...please enter the latitude of the location, from 0 to 90 degrees";
			}
  			
			else if (latitude > 90) { 
			
				errorMessage += doubleSpace + " *  The latitude cannot exceed 90 degrees";
			}
  			
			else if (isNaN (latitude)) { 
			
				errorMessage += doubleSpace + " *  The latitude is not a valid number";
			}
  			
			// ---------------------------------------------
			// nubmer of modules
			// ---------------------------------------------

			numModules = form.numModules.value - 0;

			if (numModules < currentConfiguration.minModules) { 
			
				errorMessage += doubleSpace + " *  The configuration you selected requires at least " + currentConfiguration.minModules + " modules...please adjust the \"# modules\" input.";
			}
			
		// ------------------------------------------------------------------------
		// RETURN
		// ------------------------------------------------------------------------
 	
			if (errorMessage == "") {
			
				return true;
			}
			
			else {
			
				errorMessage = "The following errors must be corrected before the shading calculation can be performed:" + errorMessage;
			
				alert (errorMessage);
 			
	 			return false;
			}
 		}
 
