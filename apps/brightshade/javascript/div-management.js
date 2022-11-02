/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/div-management.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Change_Orientation
	//
	/////////////////////////////////////////////////////////
	
 		function Change_Orientation (scenario) {

		// ---------------------------------------------
		// get orientation
		// ---------------------------------------------
  		
 			orientation = Get_Orientation (scenario);

		// ---------------------------------------------
		// toggle coverage input div
		// ---------------------------------------------
  			
 			coverageMenuDivID = "scenario_" + scenario + "_window_horizontal_coverage_menu";
 		
 			if (orientation == "horizontal") {
 			
 				Show_Div (coverageMenuDivID);
 			}
 			
 			else {
 			
 				Hide_Div (coverageMenuDivID);
 			}

		// ---------------------------------------------
		// toggle window container divs
		// ---------------------------------------------
  			
 			windowHorizontalContainerDivID = "scenario_" + scenario + "_window_horizontal";
 		
 			windowVerticalContainerDivID = "scenario_" + scenario + "_window_vertical";
 		
 			if (orientation == "horizontal") {
 			
 				Show_Div (windowHorizontalContainerDivID);

 				Hide_Div (windowVerticalContainerDivID);
 			}
 			
 			else {
 			
 				Hide_Div (windowHorizontalContainerDivID);

 				Show_Div (windowVerticalContainerDivID);
 			}

		// ---------------------------------------------
		// toggle blade container divs
		// ---------------------------------------------
  			
 			bladeHorizontalContainerDivID = "scenario_" + scenario + "_blade_horizontal";
 		
 			bladeVerticalContainerDivID = "scenario_" + scenario + "_blade_vertical";
 		
 			if (orientation == "horizontal") {
 			
 				Show_Div (bladeHorizontalContainerDivID);

 				Hide_Div (bladeVerticalContainerDivID);
 			}
 			
 			else {
 			
 				Hide_Div (bladeHorizontalContainerDivID);

 				Show_Div (bladeVerticalContainerDivID);
 			}
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Change_Coverage
	//
	/////////////////////////////////////////////////////////
	
 		function Change_Coverage (scenario) {

		// ---------------------------------------------
		// get coverage
		// ---------------------------------------------
  		
 			coverage = Get_Coverage (scenario);

		// ---------------------------------------------
		// toggle coverage inputs
		// ---------------------------------------------
  			
 			completeCoverageDivID = "scenario_" + scenario + "_window_horizontal_complete_coverage";
 		
 			partialCoverageDivID = "scenario_" + scenario + "_window_horizontal_partial_coverage";
 		
 			if (coverage == "partial") {
 			
 				Show_Div (partialCoverageDivID);
 			
 				Hide_Div (completeCoverageDivID);
 			}
 			
 			else {
 			
 				Show_Div (completeCoverageDivID);
 			
 				Hide_Div (partialCoverageDivID);
 			}
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Orientation
	//
	/////////////////////////////////////////////////////////
	
 		function Get_Orientation (scenario) {
 		
 			menuID = "scenario_" + scenario + "_orientation";
 			
 			value = Select_Menu_Value (menuID);

 			return (value);
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Get_Coverage
	//
	/////////////////////////////////////////////////////////
	
 		function Get_Coverage (scenario) {
 		
 			menuID = "scenario_" + scenario + "_coverage";
 			
 			value = Select_Menu_Value (menuID);

 			return (value);
 		}
 		
 		
  		
 