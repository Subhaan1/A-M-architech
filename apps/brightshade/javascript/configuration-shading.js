/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/configuration-shading.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Configuration_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Configuration_Shading (SHGF, altitudeAngle, solarSurfaceAzimuth) {

		// ---------------------------------------------
		// get configuration direct & diffuse shading
		// ---------------------------------------------
		
			// calculate only if sun is above horizon
		
			if (altitudeAngle > 0) {
 									
				// - - - - - - - - - - - - - - - - - - - - - 
				// horizontal sections
				// - - - - - - - - - - - - - - - - - - - - - 

				if (currentConfiguration.orientation == 'horizontal') {
				
					// storage var

					var totalConfigurationDirectShading = 0;
		
					// get number of sections
					
					var numModules = Select_Menu_Value ("numModules");
		
					// calculate direct shading for each section 
					
					for (sectionNum = 0; sectionNum < numModules; sectionNum ++) {
		
						var moduleType = currentConfiguration.sections[sectionNum];

						if ((solarSurfaceAzimuth < 90) && (solarSurfaceAzimuth > -90)) {
						
							var directShading = Calculate_Horizontal_Section_Direct_Shading (moduleType, altitudeAngle, solarSurfaceAzimuth);
					
						}
						
						else {
						
							var directShading = 1;
						}
						
						totalConfigurationDirectShading += directShading;
					}
					
					// get composite configuration direct shading
			
					var configurationDirectShading = totalConfigurationDirectShading / numModules;
					
					// get diffuse shading
		
					var configurationDiffuseShading = Calculate_Horizontal_Diffuse_Or_Reflected_Shading ('diffuse');
						
					// get reflected shading
		
					var configurationReflectedShading = Calculate_Horizontal_Diffuse_Or_Reflected_Shading ('reflected');
				}
					
				// - - - - - - - - - - - - - - - - - - - - - 
				// vertical sections
				// - - - - - - - - - - - - - - - - - - - - - 
				
				else {
				
					var moduleType = currentConfiguration.moduleType;

					if ((solarSurfaceAzimuth < 90) && (solarSurfaceAzimuth > -90)) {

						var configurationDirectShading = Calculate_Vertical_Direct_Shading (moduleType, altitudeAngle, solarSurfaceAzimuth);
					}
					
					else {

						var configurationDirectShading = 1;
					}

					var configurationDiffuseShading = Calculate_Vertical_Diffuse_Shading (altitudeAngle, solarSurfaceAzimuth);

					var configurationReflectedShading = Calculate_Vertical_Reflected_Shading (altitudeAngle, solarSurfaceAzimuth);
				}
			}
			
			// if sun is below horizon
			
			else {
			
				// direct shading
			
				var configurationDirectShading = 1;
				
				// diffuse & reflected for horizontal
	
				if (currentConfiguration.orientation == 'horizontal') {
				
					var configurationDiffuseShading = Calculate_Horizontal_Diffuse_Or_Reflected_Shading ('diffuse');
						
					var configurationReflectedShading = Calculate_Horizontal_Diffuse_Or_Reflected_Shading ('reflected');
				}
				
				// diffuse & reflected for vertical
	
				else {
				
					var configurationDiffuseShading = Calculate_Vertical_Diffuse_Shading (altitudeAngle, solarSurfaceAzimuth);

					var configurationReflectedShading = Calculate_Vertical_Reflected_Shading (altitudeAngle, solarSurfaceAzimuth);
				}
			}

		// ---------------------------------------------
		// calculate composite shading
		// ---------------------------------------------

			var totalSHGF = SHGF['direct'] + SHGF['diffuse'] + SHGF['reflected'];

			Debug ('configurationDirectShading: ' + Format_Decimal (configurationDirectShading, 2) + "<br>\n");
			
			Debug ('configurationDiffuseShading: ' + Format_Decimal (configurationDiffuseShading, 2) + "<br>\n");
			
			Debug ('configurationReflectedShading: ' + Format_Decimal (configurationReflectedShading, 2) + "<br>\n");
			
			if (totalSHGF > 0) {
			
				var compositeConfigurationShading = (SHGF['direct'] * configurationDirectShading + SHGF['diffuse'] * configurationDiffuseShading + SHGF['reflected'] * configurationReflectedShading) / totalSHGF;

			}
			
			else {
			
				var compositeConfigurationShading = 1;
			}
			
		// ---------------------------------------------
		// return total configuration shading
		// ---------------------------------------------
 
			return (compositeConfigurationShading);	
 		}

