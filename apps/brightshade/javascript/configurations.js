/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/configurations.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */
     

	/////////////////////////////////////////////////////////
	//
	//  configurations
	//
	/////////////////////////////////////////////////////////

		// ---------------------------------------------
		// get configurations array length
		// ---------------------------------------------
 
		var numConfigurations = configurations.length;

		// ---------------------------------------------
		// default to first configuration
		// ---------------------------------------------
 			
		var currentConfigurationPosition = 0;

		var currentConfiguration = configurations[currentConfigurationPosition];

 
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Change_Config
	//
	/////////////////////////////////////////////////////////
	
 		function Change_Config (direction) {

			currentConfigurationPosition += direction;
			
			if (currentConfigurationPosition == numConfigurations) { 
			
				currentConfigurationPosition = 0;
			}
			
			else if (currentConfigurationPosition == -1) {
			
				currentConfigurationPosition = numConfigurations - 1;
			}
			
			currentConfiguration = configurations[currentConfigurationPosition];
			
			document['configurationImage'].src = "images/configurations/" + currentConfiguration.name + ".jpg";
 		}
 		
 		
 


