/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/shading.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  globals
	//
	/////////////////////////////////////////////////////////
	
		var month = 0
 		var   day = 0;
 		var  hour = 0;

		var         hourlyHeatGain = 0;
		var  hourlyAvoidedHeatGain = 0;
		var monthlyAvoidedHeatGain = 0;
		var  annualAvoidedHeatGain = 0;
		
		var jalousieHeight = 5;
		var jalousiesPerSection = 3;
		
		var moduleSize       = jalousieHeight * jalousiesPerSection;
		var sectionHeight    = jalousieHeight * jalousiesPerSection;
		var shadingTrayDepth = jalousieHeight * jalousiesPerSection;
		
		// ---------------------------------------------
		// diffuse / reflected light shading values
		// ---------------------------------------------

		var diffuseReflectedShading_horizontal_glassWithTray     = 0.72;
		
		var diffuseReflectedShading_vertical_jalousiesOnly       = 0.72;
		var diffuseReflectedShading_vertical_jalousiesEndSection = 0.36;

		var diffuseReflectedShading_vertical_traysOnly           = 0.72;
		var diffuseReflectedShading_vertical_traysEndSection     = 0.27;

		var diffuseReflectedShading_vertical_jalousiesTrays           = 0.78;
		var diffuseReflectedShading_vertical_jalousiesTraysEndSection = 0.63;
		
		var clerestoryOverhangReflectedShading = 0.72;
		
		var debugText = '';

 		
 	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate () {

		// ---------------------------------------------
		// reset debugging div
		// ---------------------------------------------
 
			Reset_Debug ();
			
		// ---------------------------------------------
		// reset globals
		// ---------------------------------------------
 
			 annualAvoidedHeatGain = 0;
			
		// ---------------------------------------------
		// form var
		// ---------------------------------------------
  			
			form = document.theForm;

		// ---------------------------------------------
		// calculation parameters
		// ---------------------------------------------

 			// hours of the day for which the calculation is performed
 			
 			firstHour = 4;
 			lastHour = 20;

		// ---------------------------------------------
		// calculate for each day and hour
		// ---------------------------------------------
		
			for (month = 0; month <= 11; month ++) {

				monthlyAvoidedHeatGain = 0;

				for (hour = firstHour; hour <= lastHour; hour += 1) {

					hourlyAvoidedHeatGain = 0;
					       hourlyHeatGain = 0;
					
					// - - - - - - - - - - - - - - - - - - - - - 
					// get heat gain and shading for this hour
					// - - - - - - - - - - - - - - - - - - - - - 

					for (day = 1; day <= 28; day += 3) {
 			
						Debug ('month / day / hour: ' + month + " / " + day + " / " + hour + "<br>\n");

						Calculate_Shading ();
					}

					// - - - - - - - - - - - - - - - - - - - - - 
					// update table cell for this hour
					// - - - - - - - - - - - - - - - - - - - - - 
					
		 			var tableCellID = "month_" + month + "_hour_" + hour;
		 			
		 				// if heat gain this hour
		 			
 					if (hourlyHeatGain > 0) {
 					
						var totalHourlyShadingFraction = hourlyAvoidedHeatGain / hourlyHeatGain;
					
						var shadingPercentage = Math.floor ((totalHourlyShadingFraction + 0.005) * 100) + "%";
		
						var shadingDecile = Math.floor ((totalHourlyShadingFraction + 0.05) * 10);

						var sunDecile = 10 - shadingDecile;
					}
					
						// if no heat gain this hour
						
					else {
					
						var shadingPercentage = "&nbsp;";
		
						var sunDecile = 'x';
					}
					
						// update table cell
					
					Set_Div_Content (tableCellID, shadingPercentage);
					
					Change_Class (tableCellID, 'sun_' + sunDecile);

					// - - - - - - - - - - - - - - - - - - - - - 
					// add hourly heat gain to this month
					// - - - - - - - - - - - - - - - - - - - - - 
					
					monthlyAvoidedHeatGain += hourlyAvoidedHeatGain;
				}

					// - - - - - - - - - - - - - - - - - - - - - 
					// update monthly total table cell
					// - - - - - - - - - - - - - - - - - - - - - 
				
				document.getElementById('month_' + month + '_total').innerHTML = Format_Integer (Correct_Heat_Gain_Values (monthlyAvoidedHeatGain), 2);
				
					// - - - - - - - - - - - - - - - - - - - - - 
					// add monthply total to annual total
					// - - - - - - - - - - - - - - - - - - - - - 

				annualAvoidedHeatGain += monthlyAvoidedHeatGain;
			}

					// - - - - - - - - - - - - - - - - - - - - - 
					// update annual total table cell
					// - - - - - - - - - - - - - - - - - - - - - 

			if (Select_Menu_Value ('units') == "kwh") {
			
				var annualDisplayUnits = "kwh";
			}
			
			else {
			
				var annualDisplayUnits = "kBtu";
			}

			document.getElementById('heat_gain_total').innerHTML = Format_Integer (Correct_Heat_Gain_Values (annualAvoidedHeatGain), 2) + "<BR>" + annualDisplayUnits;
 		
		// ---------------------------------------------
		// debug text
		// ---------------------------------------------

  			if (debugText) {
  			
  				alert ("-------------------------------\nDEBUG INFO\n-------------------------------\n\n" + debugText);
  			}
 		}
 		

	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Correct_Heat_Gain_Values
	//
	/////////////////////////////////////////////////////////
	
		// correct the heat gain values for the day interval, window area, SHGC, and output units
	
 		function Correct_Heat_Gain_Values (heatGain) {

			// correct for units (originally in watt-hours)
			
				// kwh
				
			if (Select_Menu_Value ('units') == "kwh") {

				heatGain /= 1000;
			}
			
				// Btu
			
			else {
			
				heatGain *= 3.412;  // convert to Btu
				
				heatGain /= 1000;  // convert to kBtu
			}
 			
			// correct for day interval

			heatGain *= 3;
 			
			// correct for window SHGC
 			
 			heatGain *= 0.75;

			// correct for window area
			
			var moduleLength = Select_Menu_Value ('moduleLength') - 0;
			
			var numModules = Select_Menu_Value ('numModules') - 0;
			
			if (currentConfiguration.clerestory) {
			
				moduleLength += shadingTrayDepth;
			}
			
 			heatGain *= jalousieHeight * jalousiesPerSection * numModules * moduleLength / 12 / 12 / 10.1;

	 		// return
	 		
	 		return heatGain;
 		}
 		
 		
  		
  	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Shading
	//
	/////////////////////////////////////////////////////////
	
 		function Calculate_Shading () {

		// ---------------------------------------------
		// form var
		// ---------------------------------------------
  			
			form = document.theForm;

		// ---------------------------------------------
		// get latitude
		// ---------------------------------------------
			
			latitude = form.latitude.value - 0;

			if (latitude == 0) { latitude = 0.000000001; }

			if (Select_Menu_Value ('northSouth') == "south") { latitude *= -1; }

		// ---------------------------------------------
		// get window orientation
		// ---------------------------------------------
  			
			windowOrientation = Select_Menu_Value ('facade') - 0;
			
		// ---------------------------------------------
		// calculate sun angles
		// ---------------------------------------------
 			
			sunAngles = new Object ();
			
			Calculate_Altitude_Azimuth (sunAngles, latitude);
			
			altitudeAngle = sunAngles['altitude'] - 0;
			 azimuthAngle = sunAngles['azimuth']  - 0;
			 
			 if (altitudeAngle <= 0) { 

			Debug ('altitude angle: ' + Format_Integer (altitudeAngle) + "<br>\n");
			 	return;
			 }

			Debug ('altitude angle: ' + Format_Integer (altitudeAngle) + "<br>\n");
			Debug ('azimuth angle: ' + Format_Integer (azimuthAngle) + "<br>\n");

		// ---------------------------------------------
		// calculate solar-surface azimuth
		// ---------------------------------------------
 
			solarSurfaceAzimuth = azimuthAngle - windowOrientation;

			if (solarSurfaceAzimuth > 180) {
			
				solarSurfaceAzimuth -= 360;
			}
			
			if (solarSurfaceAzimuth < -180) {
			
				solarSurfaceAzimuth += 360;
			}
			
			Debug ('solar-surf. azimuth: ' + Format_Integer (solarSurfaceAzimuth) + "<br>\n");

		// ---------------------------------------------
		// calculate angle of incidence
		// ---------------------------------------------
 			
			angleOfIncidence = ArcCosine (Cosine (altitudeAngle) * Cosine (solarSurfaceAzimuth));

			if (angleOfIncidence > 180) {
			
				angleOfIncidence = angleOfIncidence - 360;
			}
			
			if (angleOfIncidence < -180) {
			
				angleOfIncidence = angleOfIncidence + 360;
			}

			Debug ('angle of incidence: ' + Format_Integer (angleOfIncidence) + "<br>\n");

		// ---------------------------------------------
		// calculate basic solar gain
		// ---------------------------------------------
 			
			var SHGF = new Object ();

 			Calculate_SHGF (SHGF, altitudeAngle, solarSurfaceAzimuth, angleOfIncidence);
 			
 			var totalSHGF = SHGF['direct'] + SHGF['diffuse'] + SHGF['reflected'];
 			
 			hourlyHeatGain += totalSHGF;

			Debug ('SHGF: ' + Format_Integer (totalSHGF) + "<br>\n");

		// ---------------------------------------------
		// calculate shading
		// ---------------------------------------------
		
			var configurationShading = Calculate_Configuration_Shading (SHGF, altitudeAngle, solarSurfaceAzimuth);
										

			hourlyAvoidedHeatGain += totalSHGF * configurationShading;
  		
			Debug ('shading: ' + Format_Decimal (configurationShading, 2) + "<br>\n");
			
			return true;
		}


	/////////////////////////////////////////////////////////
	//
	//  FUNCTION:  Calculate_Altitude_Azimuth
	//
	/////////////////////////////////////////////////////////
		
		function Calculate_Altitude_Azimuth (sunAngles, latitude) {

		// ---------------------------------------------
		// calculate declination & equation of time
		// ---------------------------------------------

 			beta = 360 / 365 * (284 + Month_Num_To_Elapsed_Days (month) + day);

			declination = 23.45 * Sine (beta);

 			eot = 9.87 * Sine (2 * beta) - 7.53 * Cosine (beta) - 1.5 * Sine (beta);

			solarHourAngle = 15 * (hour - 12);
			
			altitudeAngle = ArcSine ((Sine (latitude) * Sine (declination)) - (Cosine (latitude) * Cosine (declination) * Cosine ((solarHourAngle + 180))));
			
			preAzimuthAngle = ArcCosine ((Cosine (declination) * ((Cosine (latitude) * Tangent (declination)) + (Sine (latitude) * Cosine ((solarHourAngle + 180))))) / Cosine (altitudeAngle));
				 
			if ((solarHourAngle > 0) && (solarHourAngle < 180)) { 
			
				azimuthAngle = 180 - preAzimuthAngle;
			}
			
			else { 
			
				azimuthAngle = preAzimuthAngle - 180;
			}
			
			sunAngles['altitude'] = altitudeAngle;
			sunAngles['azimuth' ] =  azimuthAngle;

			return true;
 		}
 		
