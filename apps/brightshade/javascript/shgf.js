/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/shgf.js
     
     Copyright 2010 Sustainable By Design

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_SHGF
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_SHGF (SHGF, altitudeAngle, solarSurfaceAzimuth, angleOfIncidence) {

		// ---------------------------------------------
		// constants
		// ---------------------------------------------
 
			var groundReflectance = 0.2;
			
		// ---------------------------------------------
		// reset storage vars to zero
		// ---------------------------------------------
 
			SHGF['direct']    = 0;
			SHGF['diffuse']   = 0;
			SHGF['reflected'] = 0;
							
			// ---------------------------------------------
			// data
			// ---------------------------------------------
 
			var apparentSolarConstantArray = new Array (1230, 1215, 1186, 1136, 1104, 1088, 1085, 1107, 1151, 1192, 1221, 1233);

			var atmosExtinctionConstantArray = new Array (0.142, 0.144, 0.156, 0.18, 0.196, 0.205, 0.207, 0.201, 0.177, 0.16, 0.149, 0.142);

			var skyDiffuseFactorArray = new Array (0.058, 0.06, 0.071, 0.097, 0.121, 0.134, 0.136, 0.122, 0.092, 0.073, 0.063, 0.057);

			var absorptionCoefficients = new Array (0.01154, 0.77674, -3.94657, 8.57881, -8.38135, 3.01188);

			var transmissionCoefficients = new Array (-0.00885, 2.71235, -0.62062, -7.07329, 9.75995, -3.89922);

			// ---------------------------------------------
			// apparent solar constant
			// ---------------------------------------------
			
			var apparentSolarConstant = apparentSolarConstantArray[month];
								
			// ---------------------------------------------
			// atmos. extinction constant
			// ---------------------------------------------
	
			var atmosExtinctionConstant = atmosExtinctionConstantArray[month];
	
			// ---------------------------------------------
			// sky diffuse factor
			// ---------------------------------------------
	
			var skyDiffuseFactor = skyDiffuseFactorArray[month];
							
			// ---------------------------------------------
			// direct normal irradiance
			// ---------------------------------------------
							
			var directNormalIrradiance = apparentSolarConstant * Math.exp (-1 * atmosExtinctionConstant / Sine (altitudeAngle));
	
			// ---------------------------------------------
			// direct irradiance
			// ---------------------------------------------
							
			if ((solarSurfaceAzimuth > -90) && (solarSurfaceAzimuth < 90)) {

				var directIrradiance = directNormalIrradiance * Cosine (angleOfIncidence);
			}
			
			else {
			
				var directIrradiance = 0;
			}
								
			// ---------------------------------------------
			// vert/horz sky diffuse ratio
			// ---------------------------------------------
	
			if (Cosine (angleOfIncidence) > -0.2) {
			
				var vertHorzDiffuseRatio = 0.55 + 0.437 * Cosine (angleOfIncidence) + 0.313 * Cosine (angleOfIncidence) * Cosine (angleOfIncidence);
			}
			
			else {
			
				var vertHorzDiffuseRatio = 0.45;
			}
								
			// ---------------------------------------------
			// diffuse sky irradiance
			// ---------------------------------------------
							
			var diffuseSkyIrradiance = skyDiffuseFactor * vertHorzDiffuseRatio * directNormalIrradiance;
	
			// ---------------------------------------------
			// ground reflected irradiance
			// ---------------------------------------------
							
			var groundReflectedIrradiance = directNormalIrradiance * (skyDiffuseFactor + Sine (altitudeAngle)) * groundReflectance / 2;
	
			// ---------------------------------------------
			// diffuse irradiance
			// ---------------------------------------------
							
			var diffuseIrradiance = diffuseSkyIrradiance + groundReflectedIrradiance;
								
			// ---------------------------------------------
			// compute SHGF
			// ---------------------------------------------
 			
			for (j = 0; j <= 5; j++) {

				// - - - - - - - - - - - - - - - - -
				// direct 
				// - - - - - - - - - - - - - - - - -

					// direct transmission
				
				SHGF['direct'] += (directIrradiance * transmissionCoefficients[j] * Math.pow (Cosine (angleOfIncidence), j));
				
					// direct absorption
				
				SHGF['direct'] += (0.267 * directIrradiance * absorptionCoefficients[j] * Math.pow (Cosine (angleOfIncidence), j));
			
			
				// - - - - - - - - - - - - - - - - -
				// diffuse 
				// - - - - - - - - - - - - - - - - -

					// diffuse transmission
				
				SHGF['diffuse'] += (diffuseSkyIrradiance * 2 * transmissionCoefficients[j] / (j + 2));
				
					// diffuse absorption
				
				SHGF['diffuse'] += (0.267 * diffuseSkyIrradiance * 2 * absorptionCoefficients[j] / (j + 2));

				// - - - - - - - - - - - - - - - - -
				// reflected 
				// - - - - - - - - - - - - - - - - -

					// reflected transmission
				
				SHGF['reflected'] += (groundReflectedIrradiance * 2 * transmissionCoefficients[j] / (j + 2));
				
					// reflected absorption
				
				SHGF['reflected'] += (0.267 * groundReflectedIrradiance * 2 * absorptionCoefficients[j] / (j + 2));
			}

		// ---------------------------------------------
		// correct SHGF values to remove shading coefficient of window
		// ---------------------------------------------
		
			SHGF['direct'   ] /= 0.87;
			SHGF['diffuse'  ] /= 0.87;
			SHGF['reflected'] /= 0.87;
 		}
