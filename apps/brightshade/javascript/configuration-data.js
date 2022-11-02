/*   - - - - - - - - - - - - - - - - - - - - - - - - -

     javascript/configuration-data.js
     
     Copyright 2010 Abru–a & Musgrave

     - - - - - - - - - - - - - - - - - - - - - - - - -   */
     

	/////////////////////////////////////////////////////////
	//
	//  create configurations array
	//
	/////////////////////////////////////////////////////////
	
		var configurations = new Array ();
 

	/////////////////////////////////////////////////////////
	//
	//  configuration data
	//
	/////////////////////////////////////////////////////////

		// ---------------------------------------------
		// configuration 1
		// ---------------------------------------------

		var config_1 = new Object ();
		    config_1.name = '1';
		    config_1.orientation = 'horizontal';
		    config_1.minModules = 1;
		    config_1.diffuseModel = 'ALL_SECTIONS';
		    config_1.reflectedModel = 'ALL_SECTIONS_MINUS_ONE';
		    config_1.sections = new Array (
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY');
		
		configurations.push (config_1);
		
		// ---------------------------------------------
		// configuration 2
		// ---------------------------------------------

		var config_2 = new Object ();
		    config_2.name = '2';
		    config_2.orientation = 'horizontal';
		    config_2.minModules = 3;
		    config_2.diffuseModel = 'ALL_SECTIONS_MINUS_ONE';
		    config_2.reflectedModel = 'ALL_SECTIONS_MINUS_ONE';
		    config_2.sections = new Array (
		    	'GLASS', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS_WITH_SHADING_TRAY');
		
		configurations.push (config_2);
		
		// ---------------------------------------------
		// configuration 3
		// ---------------------------------------------

		var config_3 = new Object ();
		    config_3.name = '3';
		    config_3.orientation = 'horizontal';
		    config_3.minModules = 2;
		    config_3.diffuseModel = 'SINGLE_SECTION';
		    config_3.reflectedModel = 'SINGLE_SECTION';
		    config_3.sections = new Array (
		    	'GLASS', 
		    	'GLASS_WITH_SHADING_TRAY', 
		    	'GLASS', 
		    	'GLASS', 
		    	'GLASS', 
		    	'GLASS');
		
		configurations.push (config_3);

		// ---------------------------------------------
		// configuration 4
		// ---------------------------------------------

		var config_4 = new Object ();
		    config_4.name = '4';
		    config_4.orientation = 'vertical';
		    config_4.minModules = 1;
		    config_4.clerestory = false;
		    config_4.diffuseReflectedModel = 'JALOUSIES';
		    config_4.overhang = false;
		    config_4.moduleType = 'LEFT_OPENING_JALOUSIES';
		
		configurations.push (config_4);

		// ---------------------------------------------
		// configuration 5
		// ---------------------------------------------

		var config_5 = new Object ();
		    config_5.name = '5';
		    config_5.orientation = 'vertical';
		    config_5.minModules = 1;
		    config_5.clerestory = true;
		    config_5.diffuseReflectedModel = 'JALOUSIES';
		    config_5.overhang = true;
		    config_5.moduleType = 'LEFT_OPENING_JALOUSIES_WITH_OVERHANG';
		
		configurations.push (config_5);

		// ---------------------------------------------
		// configuration 6
		// ---------------------------------------------

		var config_6 = new Object ();
		    config_6.name = '6';
		    config_6.orientation = 'vertical';
		    config_6.minModules = 1;
		    config_6.clerestory = true;
		    config_6.diffuseReflectedModel = 'GLASS';
		    config_6.overhang = true;
		    config_6.moduleType = 'GLASS';
		
		configurations.push (config_6);

		// ---------------------------------------------
		// configuration 7
		// ---------------------------------------------

		var config_7 = new Object ();
		    config_7.name = '7';
		    config_7.orientation = 'vertical';
		    config_7.minModules = 1;
		    config_7.clerestory = true;
		    config_7.diffuseReflectedModel = 'TRAYS';
		    config_7.overhang = true;
		    config_7.moduleType = 'LEFT_OPENING_TRAYS_WITH_OVERHANG';
		
		configurations.push (config_7);

		// ---------------------------------------------
		// configuration 8
		// ---------------------------------------------

		var config_8 = new Object ();
		    config_8.name = '8';
		    config_8.orientation = 'vertical';
		    config_8.minModules = 1;
		    config_8.clerestory = false;
		    config_8.diffuseReflectedModel = 'TRAYS';
		    config_8.overhang = false;
		    config_8.moduleType = 'LEFT_OPENING_TRAYS';
		
		configurations.push (config_8);
		