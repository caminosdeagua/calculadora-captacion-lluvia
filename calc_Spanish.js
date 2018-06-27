//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Calculadora: captación de lluvia";

var HEADER = "Calculadora de captación de agua de lluvia";

var SUB_HEADER = "Esta calculadora puede usarse para dimensionar un sistema de captación de agua de lluvia que proporcione suficiente agua potable para beber y cocinar - la necesidad de agua esencial en tu hogar. Si tienes preguntas, comentarios o colaboraciones, por favor <a href='http://caminosdeaguamexico.org/contactenos/' target = '_blank'>contáctanos</a>!";

var INSTRUCTIONS = "<b>Por favor, responde las siguientes preguntas sobre tu hogar lo mejor que puedas.</b>";

var MONTHS = ["Ene", "Feb", "Mar", "Abr",
				"May", "Jun", "Jul", "Ago",
				"Sep", "Oct", "Nov", "Dic"];
				
var FULL_MONTHS_DISPLAY = ["Enero", "Febrero", "Marzo",
				"Abril", "Mayo", "Junio",
				"Julio", "Agosto", "Septiembre",
				"Octubre", "Noviembre", "Diciembre"];	// month names for getting rainfall. 
			
var MONTHLY_RAIN_LBL = "Por favor captura tus datos de precipitación mensual<br>en <b>milímetros (mm)</b>:";

//////////////////////////////////////////
//										//
//		FORM LABELS & OPTIONS			//
//										//
//////////////////////////////////////////

var CHECKBOX_LBL = "Tengo mis datos de precipitación mensual en<br>milímetros (lluvia que cae por mes)";

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Selecciona tu domicilio haciendo clic en el mapa de abajo:";
var MUNIS = [];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "¿Cuántas personas viven en tu casa?";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "¿Cuál es la longitud de tu techo (<b>metros</b>)?";
var WIDTH0_LBL = "¿Cuál es el ancho de tu techo (<b>metros</b>)?";

//////		ROOF TYPE				//////
var ROOF0_LBL = "¿Qué tipo de techo tienes?";
var CEMENT_ROOF_LBL = "Concreto";
var SHEET_ROOF_LBL = "Lámina acanalada";
var SPANISH_ROOF_LBL = "Teja";
var OTHER_ROOF_LBL = "Otra";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL, OTHER_ROOF_LBL];

var CEMENT_ROOF_LBL_LOWER = "concreto";
var SHEET_ROOF_LBL_LOWER = "lámina acanalada";
var SPANISH_ROOF_LBL_LOWER = "teja";
var OTHER_ROOF_LBL_LOWER = "-- otra --";
var ROOF_TYPES_LOWER = [CEMENT_ROOF_LBL_LOWER, SHEET_ROOF_LBL_LOWER, SPANISH_ROOF_LBL_LOWER, OTHER_ROOF_LBL_LOWER];
//////		CALCULATE BUTTON 	    //////
var CALC_BUTTON_LBL = "Calcula";

//////////////////////////////////////////
//										//
//		LEFT HAND SIDE DISPLAY 			//
//										//
//////////////////////////////////////////

//////		GO BACK BUTTON 	   	 	//////
var BACK2INPUTS_BUTTON_LBL = "Cambiar mi información";

var LHS_DISPLAY_TITLE = "¡Buen trabajo!";
var LHS_INSTRUCTIONS = "Estos resultados se refieren a la necesidad de <b>agua esencial</b> de tu hogar - la cantidad de agua necesaria para beber y cocinar solamente.";
var PS_NOTE = "<i>Nota: Estos resultados suponen que tu captación de agua de lluvia comienza al inicio de la estación lluviosa. Comenzar en cualquier otra época del año aumenta el riesgo de no tener siempre suficiente agua de lluvia almacenada durante el primer año de tu sistema.</i>";

var MUN_TXT = ["Vives en <b>","</b>."];
var MONTHLY_USE_TXT = "Has elegido ingresar tus datos de precipitación mensual en milímetros. Ten en cuenta que el área de tu azotea a la derecha será ligeramente menor ya que no sabemos dónde vives ni con qué frecuencia llueve.</i><br><br>Has registrado:"
var UNITS = "mm";
var PPL_TXT = ["Tu hogar tiene <b>"," </b>persona."," </b>personas."];
var LEN_WID_TXT = ["Tu techo es de <b>"," de largo por <b>"," de ancho."];
var SINGULAR_DIMENSION = "</b> metro";
var PLURAL_DIMENSION = "</b> metros";
var ROOF_TYPE_TXT = ["Tienes un techo de <b>","</b>."];

var DISPLAY_TXT = [];

//////////////////////////////////////////
//										//
//		 RESULTS DISPLAY 		 		//
//										//
//////////////////////////////////////////

var MIN_ROOF_LBL_RED = ["<b><big>Área mínima del techo</big></b><br>Para satisfacer esta necesidad de agua anual, tu hogar necesita al menos","metros cuadrados (m2) de la superficie del techo. Parece que tu techo actual no es lo suficientemente grande."];
var MIN_ROOF_LBL_GREEN = ["<b><big>Área mínima del techo</big></b><br>Para satisfacer esta necesidad de agua anual, tu hogar necesita al menos","metros cuadrados (m2) de la superficie del techo. ¡Parece que el tamaño actual de tu techo es suficientemente grande!"];
var MIN_TANK_LBL = ["<b><big>Volumen mínimo de la cisterna</big></b><br><br>Para capturar toda el agua del área mínima de tu techo, necesitas al menos una cisterna de", "litros."];
var MIN_WATER_LBL = ["<b><big>Necesidad de agua anual</big></b><br><br>Tu hogar necesita","litros de agua <a href='http://caminosdeaguamexico.org/agua-segura-sana-sustentable' target='_blank'>sana</a> al año para beber y cocinar. Esto satisface las necesidades diarias esenciales de\xa0","\xa0litros para tu hogar."];

var REAL_ROOF_LBL = ["<b><big>Área actual de tu techo</big></b>","metros cuadrados (m<sup>2</sup>)."];
var REAL_TANK_LBL = ["<b><big>Volumen de cisterna requerido usando tu techo actual</big></b>","litros."];
var REAL_WATER_LBL = ["<b><big>Tu captación anual máxima de agua</big></b>","litros."];

var TOOLTIP_TEXT = {
	min_water: "<b><big>Captación anual mínima de agua</big></b><br>Esto se calcula simplemente suponiendo que cada miembro de tu hogar utiliza un promedio de 5 litros por día para usos esenciales (beber y cocinar). Los 5 litros por día se multiplican por el número de personas en tu hogar y el número de días en un año (365).",
	min_roof: "<b><big>Superficie mínima del techo</big></b><br>Este número indica el área de techo mínima requerida para que puedas captar suficiente agua de lluvia para satisfacer la necesidad de agua esencial de tu hogar durante todo el año. <br><br><i>Este resultado supone que tu cisterna comienza a captar el agua al inicio de la estación de lluvias y se basa en los datos de precipitación promedio</i>. ",
	min_tank: "<b><big>Volumen mínimo de la cisterna</big></b><br>Si utilizas el área de techo mínima inidicada a la izquierda, necesitas este volumen de cisterna para captar toda el agua que baja de tu techo. Esta cisterna será lo suficientemente grande como para satisfacer las necesidades esenciales de agua de tu hogar durante todo el año con </i>la precipitación promedio</i>.",
	real_water: "<b><big>Tu captación anual máxima de agua</big></b><br>El agua que tu techo actual puede acumular durante un año promedio.<br><br><i>Precaución: incluso si tu techo actual puede captar más agua (este cuadro) de la que necesitas (el cuadro de arriba), ten cuidado. A menos que los cuadros de arriba sean verdes, tu cisterna podría secarse.</i>",
	real_roof: "<b><big>El área de tu techo</big></b><br>Esta es el área de tu azotea. Se calcula multiplicando el largo y el ancho de tu techo.",
	real_tank: "<b><big>Volumen de cisterna requerido usando tu techo actual</big></b><br>Si recoges toda el agua que cae en tu techo durante un año promedio, necesitarías este volumen de cisterna."
}

var MIN_HEADER = "<b>Requisitos mínimos para beber y cocinar</b>";
var REAL_HEADER = "<b>Capacidad máxima de tu techo</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='http://nbviewer.jupyter.org/github/caminosdeagua/rainwater-calculator/blob/master/data/Explanation.pdf' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";


//////////////////////////////////////////
//										//
//		MOBILE BRWOSER DISPLAY	 		//
//										//
//////////////////////////////////////////

var MOBILE_BROWSER_MESSAGE = "<big><b>¡Lo sentimos!</b></big><br>Esta Calculadora de Captación de Lluvia no está disponible para navegadores móviles. Puedes verla en una laptop,  computadora de escritorio o Tablet. Para más información sobre captación de lluvia visita nuestra <a href='https://www.caminosdeaguamexico.org'>página web</a>.";
