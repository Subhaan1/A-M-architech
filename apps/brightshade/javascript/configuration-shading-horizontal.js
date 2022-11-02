/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/configuration-shading-horizontal.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Horizontal_Section_Direct_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Horizontal_Section_Direct_Shading (moduleType, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get window width
		// ---------------------------------------------
 
			var windowWidth = Select_Menu_Value ('moduleLength');

		// ---------------------------------------------
		// unshaded glass
		// ---------------------------------------------

			if (moduleType == 'GLASS') {
			
				var sectionDirectShading = 0;
			}
			
		// ---------------------------------------------
		// glass with tray above
		// ---------------------------------------------

			if (moduleType == 'GLASS_WITH_SHADING_TRAY') {
			
				var sectionDirectShading = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, sectionHeight, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// jalousies (no shading tray)
		// ---------------------------------------------

			if (moduleType == 'JALOUSIES') {
			
				var sectionDirectShading = Calculate_Overhang_Window_Shading (jalousieHeight, windowWidth, jalousieHeight, altitudeAngle, solarSurfaceAzimuth);
			}
			
		// ---------------------------------------------
		// jalousies with shading tray
		// ---------------------------------------------

			if (moduleType == 'JALOUSIES_WITH_SHADING_TRAY') {
			
				// upper third is shaded by shading tray
				
				var upperThirdShading = Calculate_Overhang_Window_Shading (shadingTrayDepth, windowWidth, jalousieHeight, altitudeAngle, solarSurfaceAzimuth);

				// middle third is shaded by either the shading tray or the jalousie
				
				var middleThirdJalousieShading = Calculate_Overhang_Window_Shading (jalousieHeight, windowWidth, jalousieHeight, altitudeAngle, solarSurfaceAzimuth);

				var shadingFraction = Tangent (altitudeAngle) / Cosine (solarSurfaceAzimuth);
				
					// if shadow taller than jalousie, use jalousie shading				
				
				if (shadingFraction > 1) {
				
					var middleThirdShading = middleThirdJalousieShading;
				}
				
					// determine if jalousie or tray casts longer shadow...
				
				else {
				
					var middleJalousieTrayShadingFraction = 3 * shadingFraction - 1;
				
						// if tray casts longer shadow
					 
					if (middleJalousieTrayShadingFraction > shadingFraction) {
					
						// determine tray shadow with equivalent smaller tray
						// immediately over jalousie
						
						var equivalentTrayDepth = shadingTrayDepth * shadingFraction / middleJalousieTrayShadingFraction;

						var middleThirdShading = Calculate_Overhang_Window_Shading (equivalentTrayDepth, windowWidth, jalousieHeight, altitudeAngle, solarSurfaceAzimuth);
					}
					
						// if middle jalousie casts longer shadow
					 
					else {
					
						var middleThirdShading = middleThirdJalousieShading;
					}
				}
				
				// lower third is shaded by jalousie
				
				var lowerThirdShading = Calculate_Overhang_Window_Shading (jalousieHeight, windowWidth, jalousieHeight, altitudeAngle, solarSurfaceAzimuth);

Debug ("UPPER: " + Format_Decimal (upperThirdShading, 2) + "<br>\n");
Debug ("MIDDLE: " + Format_Decimal (middleThirdShading, 2) + "<br>\n");
Debug ("LOWER: " + Format_Decimal (lowerThirdShading, 2) + "<br>\n");

				// calculate composite shading
				
				var sectionDirectShading = (upperThirdShading + middleThirdShading + lowerThirdShading ) / 3;
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------
 				
			return sectionDirectShading;
		} 		


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Horizontal_Diffuse_Or_Reflected_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Horizontal_Diffuse_Or_Reflected_Shading (mode) {
 		
 			// all horizontal configurations have glass jalousies only

		// ---------------------------------------------
		// get diffuse shading model
		// ---------------------------------------------
  		
 			if (mode == 'diffuse') {
 			
 				var shadingModel = currentConfiguration.diffuseModel;
 			}
 			
 			else {
 			
 				var shadingModel = currentConfiguration.reflectedModel;
 			}

		// ---------------------------------------------
		// get num sections
		// ---------------------------------------------
 
 			var numModules = Select_Menu_Value ("numModules");

		// ---------------------------------------------
		// all sections have a tray
		// ---------------------------------------------

			if (shadingModel == 'ALL_SECTIONS') {
			
				return diffuseReflectedShading_horizontal_glassWithTray;
			}
			
		// ---------------------------------------------
		// all sections minus one have a tray
		// ---------------------------------------------

			if (shadingModel == 'ALL_SECTIONS_MINUS_ONE') {
			
				return diffuseReflectedShading_horizontal_glassWithTray * (1 - (1 / numModules));
			}
			
		// ---------------------------------------------
		// only a single section has a tray
		// ---------------------------------------------

			if (shadingModel == 'SINGLE_SECTION') {
			
				return diffuseReflectedShading_horizontal_glassWithTray * (1 / numModules);
			}
		} 		
