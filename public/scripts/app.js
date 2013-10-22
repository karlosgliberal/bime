/*global angular*/
'use strict';

var traduccionesEs = {
  HEADLINE: '<b>hola<b>',
  VER_MAS: 'VER MÁS',
  MAS_INFORMACION: 'Más informacion',
  INSCRIBETE: 'Inscríbete',
  IMG_CABECERA: '/img/banner.png',
  
  inicio: 'Inicio',
  hackx24: 'Hackx24',
  que_es: '¿Qué es?',
  BIME: 'BIME',
  horarios: 'Horarios',
  conferencias: 'Conferencias',
  premios: 'Premios',
  comunidad: 'Comunidad',
  info: '+ Info',
  PRESENTACION:{
    TITULO: '¿Que es BIME Hack Day?',
    SUBTEXTO: 'El mayor encuentro unconference del estado, especialmente creado para fomentar la <strong>CREATIVIDAD</strong> y la <strong>INVENCIÓN</strong> y que reunirá a amantes de la musica y las nuevas tecnologías con los profesionales de las empresas más destacadas en este sector. Dos jornadas en las que <strong>MAKERS</strong>, <strong>HACKERS</strong> y <strong>DESARROLLADORES</strong> crearán las nuevas bases para las plataformas del futuro.',          
    TEXTO: 'Participarán durante dos días en diferentes actividades abiertas como concursos, charlas y talleres y un hackx24 (hackaton de 24h), todo ello relacionado con la industria musical. Los asistentes poseen la oportunidad única de testear las últimas novedades del mercado así como contactar profesionalmente con grandes empresas, mostrar sus trabajos a públicos especializados y generar comunidad, Una intensa jornada de 36h donde se genera el futuro de la música, pero sobretodo donde se aprende y se comparte.'
  },
  bime: {
    breadcrumb:'¿Qué es Bime?',
    titulo: '¿Qué es BIME?',
    pro: 'El objetivo es el desarrollo comercial, el intercambio de conocimientos y experiencias, la creación de negocio y la formación e innovación en el sector de la música. BIME quiere proporcionar un espacio de encuentro donde los profesionales de la música y de otras industrias puedan intercambiar y crear nuevas vías de negocio. <strong>BIME</strong> quiere ser un espacio de reflexión sobre las temáticas más actuales inherentes a la industria de la música, pero se privilegiaran también las temáticas transversales, haciendo participe a profesionales del mundo de las nuevas tecnologías, de la moda y de los videojuegos.',
    live:'<strong>BIME</strong> acogerá a los artistas más importantes y relevantes de la actualidad musical, así como a las futuras promesas de la escena local e internacional, convirtiéndole en uno de los mayores festivales de invierno en Europa. Muchas de estas bandas vendrán a presentar sus nuevos lanzamientos discográficos, y algunas de ellas actuaran en fecha exclusiva en el estado español. El público acudirá de todos los rincones del estado español y de varios países europeos.</p>',
    market: '<strong>BIME MARKET</strong> es el lugar expositivo donde el público que asistirá a los conciertos del <strong>BIME LIVE</strong> podrá estar en contacto con las principales empresas de la Industria Musical. Donde las discográficas, los festivales, las plataformas digitales, las redes sociales, los centros de formación darán a conocer sus actividades, sus ultimas novedades o vender sus productos.Será también un marco idóneo para todos los profesionales que quieran acercarse a estas empresas y concretar negocios. Dispondrá de un escenario donde los expositores podrán realizar presentaciones concretas y relevantes, donde los artistas podrán estar respondiendo a entrevistas o firmando discos.',
    city: 'Bizkaia y la ciudad de Bilbao gozan todo el año de una gran agenda cultural; Y, durante el mes de Noviembre, se realizaran actividades de gran relevancia estatal e internacional. BIME ha llegado a acuerdos con estos eventos para una promoción mutua y el desarrollo de acciones de colaboración. El objetivo es favorecer los intercambios entre profesionales y facilitar el descubrimiento de la riqueza cultural de Bizkaia.</p>'
  },
  ACTIVIDADES:{
    TITULO: 'Actividades',
    SUBTITULO_24: 'Hackathon <br> Hackx24',
    TEXTO_24: 'Haz de tu sueño una realidad junto a tu equipo y tus empresas preferidas. Tienes 24 horas, las mejores aplicaciones serán premiadas. Las zonas de acción están divididas por <a target="_blank" href="/#/hackx24">NODOS</a>.',
    SUBTITULO_CHARLAS: 'Conferencias y Workshops',
    TEXTO_CHARLAS: 'Descubre y prueba nuevas tecnologías y técnicas de la mano de grandes profesionales. Tendrás acceso a todas estas experiencias, participa!!. El aforo es limitado así que rellena el “formulario de inscripción”',
    SOLO: '100 puestos de trabajo, ¿Te vas a quedar sin el tuyo?'
  },
  comunidadSeccion: {
    comun:'Comunidad',
    texto: 'Para mantenerte informado sobre todas las novedades que van surgiendo alrededor de BIME Hack Day únete a nuestras comunidades!',
    google: 'Google+',
    twitter: 'Titter'
  },
  condiciones: {
    breadcrumb:'Condiciones de participación',
    titulo: 'Condiciones de participación',
    subtitulo: 'Normas generales BIME HackDay',
    p1: 'La participación en el BIME HACK DAY implica el total y estricto conocimiento y aceptación de las bases y condiciones aquí detalladas, así como aceptación de las decisiones que posteriormente pueda adoptar Last Tour de acuerdo a lo previsto en las presentes Bases.',
    p2: 'Last Tour no se hará responsable de errores técnicos o derivados del mal funcionamiento electrónico de cualquier red, “hardware” o “software”; error humano, técnico o de cualquier otro tipo que pueda ocurrir durante el evento.',
    p3: '<strong>Derechos de participación:</strong><br> El bime hack day está abierto a todas los públicos mayores de 18 años que deseen tomar parte en él, ó entendiendo que los menores de edad irán acompañados de su responsable legal. Los asistentes podrán participar tanto de manera individual como en grupos. Asimismo será necesario cumplimentar el formulario de inscripción individualmente o en su defecto comprar la entrada en taquilla el mismo día. El aforo está limitado a 100 personas y no se realizará selección alguna de proyectos o participantes, el más rápido asegurará su asistencia.',
    p4: 'Es de gran importancia leer y entender las directrices de participación y ser conscientes de ellas durante el Bime HackDay para el correcto funcionamiento del evento. El acceso a las instalaciones conlleva el conocimiento y la aceptación de estas normas.',
    p5: '<strong>Instalaciones e infraestructura:</strong><br> Los espacios donde se llevarán a cabo todas las actividades del HackDay han sido alquilados ya que cumplen todos los requisitos necesarios para el correcto desarrollo del evento. La organización velará en todo momento por todas las necesidades de los participantes. Por otra parte el material necesario para las actividades también es alquilado o propiedad de colaboradores por lo que se necesita la implicación de todos para la correcta utilización de los mismos y sobre todo resaltar la importancia que tiene dejar tanto las instalaciones como el material y todo lo que se utilice en el mismo estado en el que se encontró o mejor de lo que estaba.',
    p6: '<strong>Horarios, acreditación y estancia</strong><br>La apertura de puertas a BIME HD se hará el día 20 de noviembre a las 9:00h. Para poder acceder al recinto habrá que pasar por taquilla y dar el nombre y  DNI para recoger una pulsera que habilitará la entrada. No estará permitido entrar o salir por la noche a partir de las 22:30h. Se habilitará una zona donde los asistentes podrán dormir con sacos de dormir y esterilla, este espacio se abrirá a partir de las 23:30h y deberá estar vacío a las 10:00h. Habrá un servicio de comida y bebida self service que asegurará que durante dos horas haya comida para todo aquel que la solicite. Fuera de esas dos horas no está garantizado el suministro de alimentos.',
    p7: '<strong>Hackx24, contest, charlas y workshops</strong><br> Los participantes podrán participar en todas estas actividades al mismo tiempo. Cada uno deberá organizar su tiempo en función de sus intereses. Todos aquellas personas o equipos que reciban un premio deberán estar presentes en la entrega final de premios. El premio económico será entregado mediante transferencia en cuenta bancaria y estarán sujetos a las retenciones pertienentes. El resto de premios serán entregados en persona por el jurado. Todos los desarrollos realizados en el contest de 24 horas serán abiertos en su presentación y no estarán sujetos a ningún tipo de propiedad intelectual. Las charlas y worshops no están restringidos en asistencia por inscripción, pero los espacios y el material destinado para cada uno de ellos si que es limitado.',
    p8: '<strong>Protección de datos</strong><br>El participante autoriza que los datos obtenidos a partir de su participación en la Hackathon se utilicen en el material publicitario relacionado con el presente concurso, incluido internet, sin percibir contraprestación alguna. Todos los datos que se soliciten a este efecto son de cumplimentación obligada. En cumplimiento de la LOPD y con arreglo al artículo 5 se informa que los datos facilitados para participar en el concurso serán incorporados temporalmente en un fichero de datos de su titularidad siendo eliminados una vez finalizado el concurso y que en caso de ser finalista y/o ganador será necesario que facilite datos adicionales para la entrega del premio.',
    p9: '<strong>DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL. </strong><br>Los participantes, por el mero hecho de aceptar estas bases legales declaran expresamente que el código desarrollado para la aplicación es enteramente original y que no está protegido por derechos de terceras personas y otorgan a Last tour y los patrocinadores una indemnidad por cualquier eventual reclamación por parte de un tercero, incluidos costes legales de representación. La aceptación de un proyecto por parte de Last tour y los patrocinadores ó  la concesión de un premio por parte del Jurado no conlleva ningún tipo de aceptación implícita o explícita acerca de las originalidad de la idea. Los participantes en el concurso consienten el uso de sus ideas, aplicaciones y de sus datos para incorporar y/ó publicar a través de, entre otras, la Appstore o Google Play, sin que dicha utilización les confiera derecho alguno a ningún tipo de compensación económica. Los equipos ganadores o participantes en el concurso pueden estar sujetos a la firma de un documento de cesión de derechos a favor de Last tour ó los patrocinadores. Todos los derechos sobre el concurso son propiedad de last Tour. Los participantes se hacen responsables de la legalidad del software utilizado en el proyecto presentado. TODOS LOS PARTICIPANTES, INCLUIDO LOS NO PREMIADOS, SE COMPROMETEN A QUE LAS PROPUESTAS QUE PRESENTAN SON ORIGINALES Y QUE LA CESIÓN SEÑALADA EN PÁRRAFOS ANTERIORES NO VULNERAN DERECHOS DE TERCEROS DE CUALQUIER NATURALEZA O DISPOSICIONES NORMATIVAS Y ESTÁN LIBRES DE CARGAS, GRAVÁMENES Y DERECHOS DE TERCEROS. Los participantes, por tanto, mantendrán indemne en todo momento a los promotores ante reclamaciones de terceros y serán responsables asumiendo íntegramente a su cargo cualquier coste o carga que pudiera derivarse a favor de terceros como consecuencias de acciones, reclamaciones o conflictos derivados del incumplimiento de las obligaciones establecidas en las presentes Bases. Last tour se reserva la facultad de adoptar cuantas medidas resulten oportunas para evitar cualquier conducta de la que sospeche que tenga por finalidad o efecto cualquier intento de actuar en fraude del presente Concurso o en incumplimiento de sus normas o en perjuicio de otros participantes, cuya primera e inmediata consecuencia será la exclusión del participante y la pérdida de todo derecho al premio que eventualmente hubiese obtenido. Asimismo, Last tour se reserva el derecho a excluir a los participantes en caso de aportar o colgar material que contenga virus, gusanos o cualquier otro código informático dirigido a o apto para dañar, interferir, interceptar o vulnerar la seguridad de cualquier sistema, información o datos, así como cuando los datos personales facilitados sean incorrectos o falsos, sin perjuicio de las correspondientes acciones legales que correspondan.',
    p10: '<strong>ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</strong><br> Los participantes, por el mero hecho de concursar, aceptan sus bases y el criterio de Last tour en cuanto la resolución de cualquier cuestión derivada del presente Concurso. Last tour se reserva el derecho a introducir cambios en la mecánica o funcionamiento de este Concurso en cualquier momento y/o finalizarla de forma anticipada si fuera necesario por justa causa, sin que de ello pueda derivarse responsabilidad alguna. No obstante, estos cambios se comunicarán debidamente. Last tour hará todo lo posible para evitar que ningún cambio perjudique a unos participantes respecto de otros. Last tour no se responsabiliza de las posibles pérdidas, deterioros, robos, retrasos o cualquier otra circunstancia de fuerza mayor como huelgas u otras ajenas a la compañía, que pudieran afectar al disfrute de los premios, sin asumir por tanto contraprestación o indemnización alguna por estos u otros motivos. Last tour no se responsabiliza de las posibles eventualidades fortuitas que puedan afectar al desarrollo del concurso. En ningún caso Last tour será responsable de los errores en la prestación de los servicios de cualquier otra persona o entidad cuya participación sea necesaria para que el ganador pueda disfrutar el premio. Para el conocimiento de cualquier litigio que pudiera plantearse en cuanto a la interpretación o aplicación de las presentes bases, la ley aplicable será española. Tanto Last tour como los participantes en este Concurso se someten expresamente a la jurisdicción y competencia de los Juzgados y Tribunales de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.',
    p11: '<strong>PREMIOS</strong><br>Los PREMIOS consisten en un premio de 1.500 € (Mil quinientos euros) así como dos bonos para el   Bilbao BBK Live 2014 para el ganador de cada nodo del Hackx24 y los premios patrocinados de cada partner. El ganador no podrá exigir el cambio del PREMIO por otro, ni por su valor en dinero en efectivo, ni por un bien o servicio distinto de los indicados como PREMIO, de modo que el PREMIO no será negociable. Los premios son de carácter personal, y en consecuencia no se podrán ceder los mismos a un tercero. Last Tour y los PARTNERS se reservan el derecho de cancelar, suspender o modificar estos PREMIOS, por caso fortuito o fuerza mayor u otras circunstancia/s que a criterio de Last Tour así lo justifiquen. En ningún caso el ejercicio de tales derechos por parte de Last Tour dará derecho al participante a reclamo alguno.'
  },
  PIE:{
    TITULO:'Sigue Bime Hack Day' 
  }
}

var traduccionesEu = {
  HEADLINE: 'Kaixo',
  VER_MAS: 'IKUSI GEIAGO',
  MAS_INFORMACION: 'Informazio geiago',
  IMG_CABECERA: '/img/banner-eu.png',
  MENU: {
    INICIO: 'Hasiera',
    NODOS: 'Nodoak',
    QUE_ES: 'Zer da?',
    BIME: 'Bime',
    HORARIOS: 'Ordutegia',
    DONDE: 'Non',
    PREMIOS: 'Sariak',
    COMUNIDAD: 'Komunitatea',
    FAQ: 'FAQ'
  },
  PRESENTACION:{
    TITULO: 'EU ¿Que es Bime hack Day?',
    SUBTEXTO: 'EU Es el mayor encuentro­ conference del estado. Especialmente creado para fomentar la <strong>CREATIVIDAD</strong> y la invención reúne a amantes y profesionales de la Música y la Tecnología, <strong>MAKERS</strong> y <strong>HACKERS</strong>.',
    TEXTO: 'EU Participarán durante dos días en diferentes actividades abiertas como concursos, charlas y talleres y un hackx24 (hackaton de 24h), todo ello relacionado con la industria musical. Los asistentes poseen la oportunidad única de testear las últimas novedades del mercado así como contactar profesionalmente con grandes empresas, mostrar sus trabajos a públicos especializados y generar comunidad, Una intensa jornada de 36h donde se genera el futuro de la música, pero sobretodo donde se aprende y se comparte.'
  },
  PIE:{
    TITULO:'Sigue Bime Hack Day' 
  }
}

angular.module('bimeApp', ['cabecera', 'footer', 'footerInscribir', 'footerPartner', 'EnvioCorreoService', 'pascalprecht.translate', 'ngCookies'])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/que-es', {
        templateUrl: 'views/que-es.html',
        controller: 'MainCtrl'
      })
      .when('/bime', {
        templateUrl: 'views/bime.html',
        controller: 'MainCtrl'
      })
      .when('/horarios', {
        templateUrl: 'views/horarios.html',
        controller: 'MainCtrl'
      })
      .when('/premios', {
        templateUrl: 'views/premios.html',
        controller: 'MainCtrl'
      })
      .when('/hackx24', {
        templateUrl: 'views/hackx24.html',
        controller: 'MainCtrl'
      })
      .when('/comunidad', {
        templateUrl: 'views/comunidad.html',
        controller: 'MainCtrl'
      })
      .when('/condiciones', {
        templateUrl: 'views/condiciones.html',
        controller: 'MainCtrl'
      })
      .when('/conferencias', {
        templateUrl: 'views/conferencias.html',
        controller: 'MainCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
 
    $translateProvider.translations('es', traduccionesEs)
    $translateProvider.translations('eu', traduccionesEu)
    $translateProvider.preferredLanguage('es');
    $translateProvider.useCookieStorage();
  });
