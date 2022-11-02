/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/overhang-calcs.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Overhang_Window_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Overhang_Window_Shading (overhangDepth, windowWidth, windowHeight, altitudeAngle, azimuthAngle) {

		// ---------------------------------------------
		// calculate overhang shading fraction
		// ---------------------------------------------
 
			// - - - - - - - - - - - - - - - - - - - - - -
			// get overhang shadow size & location
			// - - - - - - - - - - - - - - - - - - - - - -
			
			var overhangShadowHeight = overhangDepth * Tangent (altitudeAngle) / Cosine (Math.abs (azimuthAngle));
			
			var overhangShadowWidth = overhangDepth * Tangent (Math.abs (azimuthAngle));
			
			if (overhangShadowHeight <= 0) {
			
				return 0;
			}
			
			// - - - - - - - - - - - - - - - - - - - - - -
			// if overhang shadow corner within window
			// - - - - - - - - - - - - - - - - - - - - - -
			
			if ((overhangShadowHeight < windowHeight) && (overhangShadowWidth < windowWidth)) {
			
				var overhangShadingFraction = (overhangShadowHeight * (1 - (overhangShadowWidth / windowWidth / 2))) / windowHeight;
if ((month==0)&&(day==1)&&(hour==12)) { Debug ("OSW: " + overhangShadowWidth + "<br>\n"); }
			}
			
			else {
			
			// - - - - - - - - - - - - - - - - - - - - - -
			// if overhang shadow intersects window bottom
			// - - - - - - - - - - - - - - - - - - - - - -
			
				if ((overhangShadowHeight / overhangShadowWidth) > (windowHeight / windowWidth)) {
				
					var overhangShadingFraction = 1 - ((overhangShadowWidth / windowWidth) * (windowHeight / overhangShadowHeight) / 2);
				}
				
			// - - - - - - - - - - - - - - - - - - - - - -
			// if overhang shadow intersects window side
			// - - - - - - - - - - - - - - - - - - - - - -
			
				else {
				
					var overhangShadingFraction = (overhangShadowHeight / windowHeight) * (windowWidth / overhangShadowWidth) / 2;
				}
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------
 			
			return overhangShadingFraction;
 		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Vertical_Fin_Window_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Vertical_Fin_Window_Shading (finDepth, windowWidth, windowHeight, altitudeAngle, azimuthAngle) {

		// ---------------------------------------------
		// calculate fin shading fraction
		// ---------------------------------------------
 
			// - - - - - - - - - - - - - - - - - - - - - -
			// get fin shadow size & location
			// - - - - - - - - - - - - - - - - - - - - - -
			
			var finShadowHeight = finDepth * Math.abs (Tangent (altitudeAngle) / Cosine (azimuthAngle));
			
			var finShadowWidth = finDepth * Math.abs (Tangent (azimuthAngle));
			
			if (finShadowHeight <= 0) {
			
				return 0;
			}
			
			// - - - - - - - - - - - - - - - - - - - - - -
			// if fin shadow corner within window
			// - - - - - - - - - - - - - - - - - - - - - -
			
			if ((finShadowHeight < windowHeight) && (finShadowWidth < windowWidth)) {
			
				var finShadingFraction = (finShadowWidth * (1 - (finShadowHeight / windowHeight / 2))) / windowWidth;
			}
			
			else {
			
			// - - - - - - - - - - - - - - - - - - - - - -
			// if fin shadow intersects window bottom
			// - - - - - - - - - - - - - - - - - - - - - -
			
				if ((finShadowHeight / finShadowWidth) > (windowHeight / windowWidth)) {
				
					var finShadingFraction = finShadowWidth * windowHeight / windowWidth / finShadowHeight / 2;
				}
				
			// - - - - - - - - - - - - - - - - - - - - - -
			// if fin shadow intersects window side
			// - - - - - - - - - - - - - - - - - - - - - -
			
				else {
					var finShadingFraction = 1 - (finShadowHeight * windowWidth / windowHeight / finShadowWidth / 2);
				}
			}

		// ---------------------------------------------
		// return
		// ---------------------------------------------

			return finShadingFraction;
 		}
 
