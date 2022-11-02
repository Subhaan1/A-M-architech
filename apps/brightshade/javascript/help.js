/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/help.js
     
     Copyright 2010 Sustainable By Design

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  globals
	//
	/////////////////////////////////////////////////////////
	
		currentHelpDiv = '';
		
 
	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Show_Help
	//
	/////////////////////////////////////////////////////////
	
 		function Show_Help (inputName) {
 		
			Show_Div ('helpDiv');
			
			helpContent = Get_Help_Content (inputName);

			document.getElementById('helpDiv').innerHTML = helpContent;
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Hide_Help
	//
	/////////////////////////////////////////////////////////
	
 		function Hide_Help () {
 		
			Hide_Div ('helpDiv');
 		}
 		
 		
 	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Help_Content
	//
	/////////////////////////////////////////////////////////
	
 		function Get_Help_Content (inputName) {

		// ---------------------------------------------
		// latitude
		// ---------------------------------------------
  		
			if (inputName == 'latitude') {

				helpContent = "<span class='helpHeader'>Latitude Help</span><br><br>Please enter the latitude of the building in degrees North or South. The latitude should be an integer or decimal value.";
			}
 			
		// ---------------------------------------------
		// facade
		// ---------------------------------------------
  		
			else if (inputName == 'facade') {

				helpContent = "<span class='helpHeader'>Building Fa&ccedil;ade Help</span><br><br>Please select the closest orientation of the building fa&ccedil;ade on which the window is installed. Use geographic orientations, not compass orientations (or correct the latter for local magnetic declination).";
			}

		// ---------------------------------------------
		// configuration
		// ---------------------------------------------
  		
			else if (inputName == 'configuration') {

				helpContent = "<span class='helpHeader'>Configuration Help</span><br><br>Please select the BrightShade configuration to be analyzed by using the arrow buttons to scroll through the available options.";
			}

		// ---------------------------------------------
		// number of window modules
		// ---------------------------------------------
  		
			else if (inputName == 'numModules') {

				helpContent = "<span class='helpHeader'>Number of Modules Help</span><br><br>BrightShade windows consist of modular sections, each of which may have three jalousies and/or a shading tray. Please indicate the number of modules in the window you wish to analyze. Note that some BrightShade configurations have a minimum number of modules greater than one, depending on their design.<br><br>Here is an example of a Horizontal BrightShade configuration with four modules:<br><br><div align='center'><img src='images/nomenclature-horizontal.gif' width=188 height=288></div><br>Here is an example of a Vertical BrightShade configuration with four modules:<br><br><div align='center'><img src='images/nomenclature-vertical.gif' width=285 height=279></div> ";
			}

		// ---------------------------------------------
		// module length
		// ---------------------------------------------
  		
			else if (inputName == 'moduleLength') {

				helpContent = "<span class='helpHeader'>Module Length Help</span><br><br>For Horizontal BrightShade configurations, please enter the width of the module in inches:<br><br><div align='center'><img src='images/nomenclature-horizontal.gif' width=188 height=288></div><br>For Vertical BrightShade configurations, please enter the height of the module in inches:<br><br><div align='center'><img src='images/nomenclature-vertical.gif' width=285 height=279></div><br>Please do not include the upper clerestory portion, if present.";
			}

		// ---------------------------------------------
		// units
		// ---------------------------------------------
  		
			else if (inputName == 'units') {

				helpContent = "<span class='helpHeader'>Units Help</span><br><br>Please enter the energy units you wish to have displayed in the output section, either Btu or kilowatt-hours.";
			}

		// ---------------------------------------------
		// default
		// ---------------------------------------------
  		
			else {

				helpContent = "";
			}

		// ---------------------------------------------
		// add hide help link
		// ---------------------------------------------
  			
 			helpContent += "<div class='hideHelpLinkDiv'><a href='javascript: Hide_Help();'>hide&nbsp;help</a></div>";

		// ---------------------------------------------
		// return
		// ---------------------------------------------
  			
 			return helpContent;
 		}
 		
 		
 