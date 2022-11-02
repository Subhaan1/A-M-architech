/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/debug.js
     
     Copyright 2010 Sustainable By Design

     - - - - - - - - - - - - - - - - - - - - - - - - -   */



	/////////////////////////////////////////////////////////
	//
	//  debug params
	//
	/////////////////////////////////////////////////////////
	
		var debugMonth =  1;
		var   debugDay =  16;
		var  debugHour =  14;
		
		
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Alert_Once
	//
	/////////////////////////////////////////////////////////
	
 		alertedOnce = false;
 		
 		function Alert_Once (alertData) {
 
   			if (! alertedOnce) {
   			
   				alert (alertData);
   				
   				alertedOnce = true;
   			}
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Debug_Setup
	//
	/////////////////////////////////////////////////////////
	
 		function Debug_Setup () {
 		
 			if (Get_Var ('debug')) {

		// ---------------------------------------------
		// set input defaults
		// ---------------------------------------------

				form = document.theForm;
				
				form.latitude.value = 40;

		// ---------------------------------------------
		// show debugging div
		// ---------------------------------------------
   			
				Show_Div ('debugging');

		// ---------------------------------------------
		// calculate
		// ---------------------------------------------
 				
 				if (Validate_Inputs ()) { 
 				
 					Calculate ();
 				}
 			}
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Reset_Debug
	//
	/////////////////////////////////////////////////////////
	
 		function Reset_Debug () {
	
			document.getElementById('debugContent').innerHTML = '';
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Debug
	//
	/////////////////////////////////////////////////////////
	
 		function Debug (content) {

 			if ((month == debugMonth) && (day == debugDay) && (hour == debugHour)) {
 		
				document.getElementById('debugContent').innerHTML += content;
			}
		}
 		
 		
 

 