/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/math.js
     
     Copyright 2010 Sustainable By Design

     - - - - - - - - - - - - - - - - - - - - - - - - -   */


	/////////////////////////////////////////////////////////
	//
	//  constants
	//
	/////////////////////////////////////////////////////////
	
		degreesToRadians =    3.1416 /  180.0000;
		radiansToDegrees =  180.0000 /    3.1416;


	/////////////////////////////////////////////////////////
	//
	//  degree functions
	//
	/////////////////////////////////////////////////////////
	
		function Tangent (angle) { return Math.tan (angle * degreesToRadians); }

		function    Sine (angle) { return Math.sin (angle * degreesToRadians); }

		function  Cosine (angle) { return Math.cos (angle * degreesToRadians); }


		function  ArcTangent (number) { return (Math.atan (number) * radiansToDegrees); }

		function     ArcSine (number) { return (Math.asin (number) * radiansToDegrees); }

		function   ArcCosine (number) { return (Math.acos (number) * radiansToDegrees); }


	/////////////////////////////////////////////////////////
	//
	//  unit conversion
	//
	/////////////////////////////////////////////////////////
	
		squareMetersToSquareFeet = 0.0929;
		
		kwhToMMBtu = 3412.3 / 1000000;
		
		eerToCOP = 1 / 3.413;

		seerToCOP = 1 / 3.792;
 			
 
	/////////////////////////////////////////////////////////
	//
	//  other math functions
	//
	/////////////////////////////////////////////////////////
	
		function logN (x, b) {

			if (b == 2) {

				return Math.LOG2E * Math.log (x);
			}
			
			if (b == 10) {

				return Math.LOG10E * Math.log (x);
			}

			return Math.log (x) / Math.log (b);
		}
      
 
