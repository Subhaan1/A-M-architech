/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/configuration-shading-vertical.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Direct_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Direct_Shading (moduleType, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// left-opening jalousies
		// ---------------------------------------------

			if (moduleType == 'LEFT_OPENING_JALOUSIES') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Shading (1, false, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// right-opening jalousies
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_JALOUSIES') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Shading (-1, false, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// left-opening trays
		// ---------------------------------------------

			else if (moduleType == 'LEFT_OPENING_TRAYS') {
			
				var moduleShading = Calculate_Vertical_Tray_Shading (1, false, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// right-opening trays
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_TRAYS') {
			
				var moduleShading = Calculate_Vertical_Tray_Shading (-1, false, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// left-opening trays with overhang
		// ---------------------------------------------

			else if (moduleType == 'LEFT_OPENING_TRAYS_WITH_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Tray_Shading (1, true, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// right-opening trays with overhang
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_TRAYS_WITH_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Tray_Shading (-1, true, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// left-opening jalousies with shading tray
		// ---------------------------------------------

			else if (moduleType == 'LEFT_OPENING_JALOUSIES_WITH_SHADING_TRAY') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Tray_Shading (1, false, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// right-opening jalousies with shading tray
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_JALOUSIES_WITH_SHADING_TRAY') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Tray_Shading (-1, false, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// left-opening jalousies with overhang
		// ---------------------------------------------

			else if (moduleType == 'LEFT_OPENING_JALOUSIES_WITH_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Shading (1, true, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// right-opening jalousies with overhang
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_JALOUSIES_WITH_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Shading (-1, true, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// left-opening jalousies with shading tray & overhang
		// ---------------------------------------------

			else if (moduleType == 'LEFT_OPENING_JALOUSIES_WITH_SHADING_TRAY_AND_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Tray_Shading (1, true, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// right-opening jalousies with shading tray & overhang
		// ---------------------------------------------

			else if (moduleType == 'RIGHT_OPENING_JALOUSIES_WITH_SHADING_TRAY_AND_OVERHANG') {
			
				var moduleShading = Calculate_Vertical_Jalousie_Tray_Shading (-1, true, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// glass jalousies
		// ---------------------------------------------

			else if (moduleType == 'GLASS') {
				
				var windowHeight = Select_Menu_Value ('moduleLength');
				
				var numModules = Select_Menu_Value ('numModules');
				
				var windowWidth = numModules * moduleSize;
	
				var moduleShading = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, windowHeight, altitudeAngle, solarSurfaceAzimuth);
			}

		// ---------------------------------------------
		// include clerestory, if applicable
		// ---------------------------------------------
		
			// reduce shading due to unshaded clerestory
 
 			if (currentConfiguration.clerestory) {
 			
				var windowHeightSections = Select_Menu_Value ('moduleLength') - 0;
				
				var windowHeightWithClerestory = windowHeightSections + shadingTrayDepth;
				
 				moduleShading *= (windowHeightSections / windowHeightWithClerestory);
 			}
 			
		// ---------------------------------------------
		// return
		// ---------------------------------------------
				
			return moduleShading;
		} 		


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Diffuse_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Diffuse_Shading (altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get shading model
		// ---------------------------------------------
 
			var shadingModel = currentConfiguration.diffuseReflectedModel;

		// ---------------------------------------------
		// get number of jalousies
		// ---------------------------------------------

			var windowHeight = Select_Menu_Value ('moduleLength') - 0;
				
 			var numModules = Select_Menu_Value ("numModules") - 0;
 			
 			var numJalousies = numModules * jalousiesPerSection;

		// ---------------------------------------------
		// jalousies only
		// ---------------------------------------------
 			
			if (shadingModel == 'JALOUSIES') {
			
				var shadingFraction = diffuseReflectedShading_vertical_jalousiesOnly * (1 - (1 / numJalousies)) + diffuseReflectedShading_vertical_jalousiesEndSection * (1 / numJalousies);

			}

		// ---------------------------------------------
		// trays only
		// ---------------------------------------------
 			
			else if (shadingModel == 'TRAYS') {
			
				var shadingFraction = diffuseReflectedShading_vertical_traysOnly * (1 - (1 / numModules)) + diffuseReflectedShading_vertical_traysEndSection * (1 / numModules);
			}

		// ---------------------------------------------
		// jalousies plus trays
		// ---------------------------------------------
 			
			else if (shadingModel == 'JALOUSIES_TRAYS') {
			
				var shadingFraction = diffuseReflectedShading_vertical_jalousiesTrays * (1 - (1 / numJalousies)) + diffuseReflectedShading_vertical_jalousiesTraysEndSection * (1 / numJalousies);

			}

		// ---------------------------------------------
		// glass
		// ---------------------------------------------
 			
			else if (shadingModel == 'GLASS') {
			
				var shadingFraction = 0;

			}

		// ---------------------------------------------
		// incorporate overhang, if applicable
		// ---------------------------------------------
 
			if (currentConfiguration.overhang) {
			
				var windowWidth = numModules * moduleSize;

				var overhangShading = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, windowHeight, altitudeAngle, solarSurfaceAzimuth);
				
				shadingFraction = 1 - ((1 - shadingFraction) * (1 - overhangShading));
			}
 
		// ---------------------------------------------
		// incorporate clerestory, if applicable
		// ---------------------------------------------

 			if (currentConfiguration.clerestory) {
 			
				var windowHeightWithClerestory = windowHeight + shadingTrayDepth;
				 
 				shadingFraction *= (windowHeight / windowHeightWithClerestory);
 			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------
  				
  			return shadingFraction;
		} 		


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Reflected_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Reflected_Shading (altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get shading model
		// ---------------------------------------------
 
			var shadingModel = currentConfiguration.diffuseReflectedModel;

		// ---------------------------------------------
		// get number of jalousies
		// ---------------------------------------------

			var moduleLength = Select_Menu_Value ('moduleLength') - 0;
				
 			var numModules = Select_Menu_Value ("numModules") - 0;
 			
 			var numJalousies = numModules * jalousiesPerSection;

		// ---------------------------------------------
		// jalousies only
		// ---------------------------------------------
 			
			if (shadingModel == 'JALOUSIES') {
			
				var shadingFraction = diffuseReflectedShading_vertical_jalousiesOnly * (1 - (1 / numJalousies)) + diffuseReflectedShading_vertical_jalousiesEndSection * (1 / numJalousies);

			}

		// ---------------------------------------------
		// trays only
		// ---------------------------------------------
 			
			else if (shadingModel == 'TRAYS') {
			
				var shadingFraction = diffuseReflectedShading_vertical_traysOnly * (1 - (1 / numModules)) + diffuseReflectedShading_vertical_traysEndSection * (1 / numModules);
			}

		// ---------------------------------------------
		// jalousies plus trays
		// ---------------------------------------------
 			
			else if (shadingModel == 'JALOUSIES_TRAYS') {
			
				var shadingFraction = diffuseReflectedShading_vertical_jalousiesTrays * (1 - (1 / numJalousies)) + diffuseReflectedShading_vertical_jalousiesTraysEndSection * (1 / numJalousies);

			}

		// ---------------------------------------------
		// glass
		// ---------------------------------------------
 			
			else if (shadingModel == 'GLASS') {
			
				var shadingFraction = 0;

			}

		// ---------------------------------------------
		// incorporate clerestory, if applicable
		// ---------------------------------------------

 			if (currentConfiguration.clerestory) {
 			
				if (currentConfiguration.overhang) {
				
					var clerestoryShadingFraction = clerestoryOverhangReflectedShading;
				}
				
				else {
				
					var clerestoryShadingFraction = 0;
				}
				
				shadingFraction = ((shadingFraction * moduleLength) + (clerestoryShadingFraction * shadingTrayDepth)) / (moduleLength + shadingTrayDepth);
 			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------
  				
  			return shadingFraction;
		} 		
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Jalousie_Tray_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Jalousie_Tray_Shading (direction, shadingTray, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get window dimensions
		// ---------------------------------------------
			
			var windowHeight = Select_Menu_Value ('moduleLength');
			
			var numModules = Select_Menu_Value ('numModules');
			
			var windowWidth = numModules * moduleSize;

		// ---------------------------------------------
		// basic jalousie shading
		// ---------------------------------------------

 			var jalousieShadingFraction = Calculate_Vertical_Fin_Window_Shading (jalousieHeight, jalousieHeight, windowHeight, altitudeAngle, solarSurfaceAzimuth);

		// ---------------------------------------------
		// tray shading
		// ---------------------------------------------
 
 			// section third closest to tray is always shaded by tray
 			
 			var innerThirdShading = Calculate_Vertical_Fin_Window_Shading (shadingTrayDepth, jalousieHeight, windowHeight, altitudeAngle, solarSurfaceAzimuth);

			// middle section third is shaded by either the tray or the jalousie
			
			var shadingFraction = Tangent (solarSurfaceAzimuth);
			
				// if shadow wider than jalousie, use jalousie shading				
			
			if (shadingFraction > 1) {
			
				var middleThirdShading = jalousieShadingFraction;
			}
			
				// determine if jalousie or tray casts longer shadow...
			
			else {
			
				var middleJalousieTrayShadingFraction = 3 * shadingFraction - 1;
			
					// if tray casts longer shadow
				 
				if (middleJalousieTrayShadingFraction > shadingFraction) {
				
					// determine tray shadow with equivalent smaller tray
					// immediately adjacent to jalousie
					
					var equivalentTrayDepth = shadingTrayDepth * shadingFraction / middleJalousieTrayShadingFraction;

					var middleThirdShading = Calculate_Vertical_Fin_Window_Shading (equivalentTrayDepth, jalousieHeight, windowHeight, altitudeAngle, solarSurfaceAzimuth);
				}
				
					// if middle jalousie casts longer shadow
				 
				else {
				
					var middleThirdShading = jalousieShadingFraction;
				}
			}
			
			// outer section third is always shaded by jalousie
			
			var outerThirdShading = jalousieShadingFraction;
			
			// calculate composite shading
				
			var jalousieShadingFraction = (innerThirdShading + middleThirdShading + outerThirdShading ) / 3;
 			
		// ---------------------------------------------
		// handle end-section illumination
		// ---------------------------------------------
		
 			// if a jalousie doesn't shade the last third of the last section...
 			
 			if ((direction * solarSurfaceAzimuth) < 0) {
 			
				jalousieShadingFraction *= (1 - (1 / (numModules * jalousiesPerSection)));
 			}

		// ---------------------------------------------
		// incorporate shading tray
		// ---------------------------------------------
		
			if (shadingTray) {
			
				var trayShadingFraction = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, windowHeight, altitudeAngle, solarSurfaceAzimuth);
			
				jalousieShadingFraction = 1 - ((1 - trayShadingFraction) * (1 - jalousieShadingFraction));
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------

			return jalousieShadingFraction;
 		}
 

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Jalousie_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Jalousie_Shading (direction, shadingTray, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get window dimensions
		// ---------------------------------------------
			
			var windowHeight = Select_Menu_Value ('moduleLength');
			
			var numModules = Select_Menu_Value ('numModules');
			
			var windowWidth = numModules * moduleSize;

		// ---------------------------------------------
		// basic jalousie shading
		// ---------------------------------------------
 
 			var jalousieShadingFraction = Calculate_Vertical_Fin_Window_Shading (jalousieHeight, jalousieHeight, windowHeight, altitudeAngle, solarSurfaceAzimuth);

		// ---------------------------------------------
		// handle end-section illumination
		// ---------------------------------------------
		
 			// if a jalousie doesn't shade the last third of the last section...
 			
 			if ((direction * solarSurfaceAzimuth) < 0) {
 			
				jalousieShadingFraction *= (1 - (1 / (numModules * jalousiesPerSection)));
 			}

		// ---------------------------------------------
		// incorporate shading tray
		// ---------------------------------------------
		
			if (shadingTray) {
			
				var trayShadingFraction = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, windowHeight, altitudeAngle, solarSurfaceAzimuth);
			
				jalousieShadingFraction = 1 - ((1 - trayShadingFraction) * (1 - jalousieShadingFraction));
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------

			return jalousieShadingFraction;
 		}
 

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Tray_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Tray_Shading (direction, overhang, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get window dimensions
		// ---------------------------------------------
			
			var windowHeight = Select_Menu_Value ('moduleLength');
			
			var numModules = Select_Menu_Value ('numModules');
			
			var windowWidth = numModules * moduleSize;

		// ---------------------------------------------
		// basic jalousie shading
		// ---------------------------------------------
 
 			var jalousieShadingFraction = Calculate_Vertical_Fin_Window_Shading (shadingTrayDepth, shadingTrayDepth, windowHeight, altitudeAngle, solarSurfaceAzimuth);

		// ---------------------------------------------
		// handle end-section illumination
		// ---------------------------------------------
		
 			// if a jalousie doesn't shade the last third of the last section...
 			
 			if ((direction * solarSurfaceAzimuth) < 0) {
 			
				jalousieShadingFraction *= (1 - (1 / numModules));
 			}

		// ---------------------------------------------
		// incorporate overhang
		// ---------------------------------------------
		
			if (overhang) {
			
				var overhangShadingFraction = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, windowHeight, altitudeAngle, solarSurfaceAzimuth);
			
				jalousieShadingFraction = 1 - ((1 - overhangShadingFraction) * (1 - jalousieShadingFraction));
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------

			return jalousieShadingFraction;
 		}
 
