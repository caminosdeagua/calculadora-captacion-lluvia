//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Calculadora: Captación de lluvia";

var HEADER = "Calculadora de Captación de Agua de Lluvia";

var SUB_HEADER = "Esta calculadora puede usarse para dimensionar un sistema de recolección de agua de lluvia que proporcione suficiente agua potable para beber y cocinar - la necesidad de agua esencial en tu hogar. Si tienes preguntas, comentarios o colaboraciones, por favor <a href='http://caminosdeaguamexico.org/contactenos/' target = '_blank'>contáctanos</a>!";

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

var CHECKBOX_LBL = "Tengo mis datos de precipitación mensual en milimetros<br>(lluvia que cae por mes)";

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Selecciona tu domicilio haciendo clic en el mapa de abajo:";
var MUNIS = [];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "¿Cuantas personas viven en tu casa?";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "¿Cuál es la longitud de tu techo (<b>metros</b>)?";
var WIDTH0_LBL = "¿Cuál es el ancho de tu techo (<b>metros</b>)?";

//////		ROOF TYPE				//////
var ROOF0_LBL = "¿Qué tipo de techo tienes?";
var CEMENT_ROOF_LBL = "Concreto";
var SHEET_ROOF_LBL = "Lámina acanalada";
var SPANISH_ROOF_LBL = "Teja";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL];

var CEMENT_ROOF_LBL_LOWER = "concreto";
var SHEET_ROOF_LBL_LOWER = "lámina acanalada";
var SPANISH_ROOF_LBL_LOWER = "teja";
var ROOF_TYPES_LOWER = [CEMENT_ROOF_LBL_LOWER, SHEET_ROOF_LBL_LOWER, SPANISH_ROOF_LBL_LOWER];

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
var LHS_INSTRUCTIONS = "Asegúrate de que la información siguiente se introdujo correctamente. Si no, presiona el botón de abajo para cambiar tu información. Los resultados se muestran en el panel de la derecha. Para una explicación de cada resultado, pasa el ratón sobre la casilla correspondiente. <br><br>Estos resultados se refieren a la necesidad de <b>agua esencial</b> de tu hogar - la cantidad de agua necesaria para beber y cocinar solamente.";
var PS_NOTE = "<i>Nota: Estos resultados suponen que tu captación de agua de lluvia comienza al inicio de la estación de lluvia. Comenzar en cualquier otra época del año aumenta el riesgo de no tener siempre suficiente agua de lluvia almacenada durante el primer año de tu sistema.</i>";

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

var MIN_ROOF_LBL = ["Tu hogar necesita un mínimo de", "metros cuadrados del área del techo para captar suficiente agua de lluvia para cubrir tus necesidades esenciales de agua."];
var MIN_TANK_LBL = ["Si utilizas el área mínima del techo, necesitas al menos una cisterna de ", "litros."];
var REAL_ROOF_LBL_GREEN = ["El área de tu techo de", "metros cuadrados <b><big>puede</big></b> recoger suficiente agua para proporcionar al menos", "litros por día, que es la necesidad de agua esencial de tu hogar."]; 
var REAL_ROOF_LBL_RED = ["El área de tu techo de", "metros cuadrados <b>no puede</b> recoger suficiente agua para proporcionar ", " litros por día, que es la necesidad de agua esencial de tu hogar."];
var REAL_TANK_LBL = ["Si deseas captar toda el agua de lluvia de tu techo actual, necesitas una cisterna con capacidad mínima de", "litros."];

var TOOLTIP_TEXT = {
	min_roof: "<b><big>Superficie mínima del techo</big></b><br>Este número indica el área de techo mínima requerida para que puedas captar suficiente agua de lluvia para satisfacer la necesidad de agua esencial de tu hogar durante todo el año. <br><br><i>Este resultado supone que tu cisterna comienza a captar el agua al comienzo de la estación de lluvias y se basa en los datos de precipitación promedio</i>. ",
	min_tank: "<b><big>Volumen mínimo de la cisterna</big></b><br>Si utilizas el área de techo mínima inidicada a la izquierda, necesitas este volumen de cisterna para captar todo el agua que baja de tu techo. Esta cisterna será lo suficientemente grande como para satisfacer las necesidades esenciales de agua de tu hogar durante todo el año con <i>la precipitación promedio</i>.",
	real_roof: "<b><big>El área de tu techo</big></b><br>Esta es el área de tu azotea. Se calcula multiplicando el largo y el ancho de tu techo.",
	real_tank: "<b><big>Volumen de cisterna necesario usando tu techo actual</big></b><br>Si captas toda el agua que cae en tu techo durante un año promedio, necesitarías este volumen de cisterna."
}

var MIN_HEADER = "<b>Requisitos Esenciales Mínimos	</b>";
var REAL_HEADER = "<b>Capacidad de tu Techo</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='https://www.caminosdeagua.org' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";


//////////////////////////////////////////
//										//
//		MOBILE BRWOSER DISPLAY	 		//
//										//
//////////////////////////////////////////

var MOBILE_BROWSER_MESSAGE = "<big><b>We're sorry!</b></big><br>This rainwater harvesting calculator is not get available for mobile browers. You can view it on a laptop, desktop computer, or tablet. For more information on rainwater harvesting, check out our <a href='https://www.caminosdeagua.org'>website</a>.";