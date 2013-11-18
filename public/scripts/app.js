/*global angular*/
'use strict';

var traduccionesEs = {
  ver_mas: 'VER MÁS',
  MAS_INFORMACION: 'Más informacion',
  INSCRIBETE: 'Inscríbete',
  IMG_CABECERA: '/img/banner.png',
  
  inicio: 'Inicio',
  hackx24_var: 'Hackx24',
  que_es: '¿Qué es?',
  BIME: 'BIME',
  horarios: 'Horarios',
  conferencias: 'Conferencias',
  premios: 'Premios',
  comunidad: 'Comunidad',
  info: '+ Info',
  main:{
    titulo: '¿Que es BIME Hack Day?',
    h4: 'Con la tecnología y soporte técnico de:',
    activida_titulo: 'Actividades',
    premios: 'Premio BIME Hack Day de <strong>1500€</strong> al mejor desarrollo',
    subpremios: 'Premio para el mejor desarrollo en cada nodo de <strong>DOS BONOS</strong> para el <strong>BILBAO BBK LIVE 2014</strong> y <strong>DOS BONOS</strong> para el <strong>BIME LIVE</strong>',
    partners: 'Premios de nuestros partners',
    spotify: 'Cuenta Premium para un año.',
    deezer: 'Cuenta Premium para un año.',
    aws: 'Cuenta Premium para un año.',
    delirum: ' Videojuegos: "Los Ríos de Alice" & "Los Delirios de Von Sottendorff para 3DS".',
    asoma: 'Jornada de Formación y asesoramiento',
    cooking: 'Kit de arduino.',
    sca: 'Tablet Nexus 7 al mejor desarrollo en el nodo Mobile App.',
    sound:'Cuenta para un año SoundCloud Pro Unlimited Service'
  },
  PRESENTACION:{
    TITULO: '',
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
    TEXTO_CHARLAS: 'Descubre y prueba nuevas tecnologías y técnicas de la mano de grandes profesionales. Tendrás acceso a todas estas experiencias, participa!!.<br> El aforo es limitado así que rellena el “formulario de inscripción”',
    SOLO: '100 puestos de trabajo, ¿Te vas a quedar sin el tuyo?'
  },
  PREMIOS:{
    TITULO: 'Premios'
  },
  comunidadSeccion: {
    comun:'Comunidad',
    texto: 'Para mantenerte informado sobre todas las novedades que van surgiendo alrededor de BIME Hack Day únete a nuestras comunidades!',
    google: 'Google+',
    twitter: 'Twitter'
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
    p11: '<strong>PREMIOS</strong><br>Los PREMIOS consisten por una parte, en un premio de 1.500 € (Mil quinientos euros) al ganador del mejor desarrollo BIME Hack Day, así como dos bonos para el Bilbao BBK Live 2014 y BIME Live para el ganador de cada nodo del Hackx24. También habrá premios patrocinados de cada partner. El ganador no podra exigir el cambio del PREMIO por otro, ni por su valor en dinero en efectivo, ni por un bien o servicio distinto de los indicados como PREMIO, de modo que el PREMIO no será negociable. Los premios son de carácter personal, y en consecuencia no se podrán ceder los mismos a un tercero. Last Tour y los PARTNERS se reservan el derecho de cancelar, suspender o modificar estos PREMIOS, por caso fortuito o fuerza mayor u otras circunstancia/s que a criterio de Last Tour así lo justifiquen. En ningún caso el ejercicio de tales derechos por parte de Last Tour dará derecho al participante a reclamo alguno.'
  },
  conferenciasSeccion: {
    breadcrumb: 'Conferencias y workshops',
    titulo: 'Conferencias y workshops',
    texto: 'Durante BIME Hack Day se celebrarán conferencias y workshops repartidas durante los dos días de la siguiente manera:',
    dia20: 'Día 20',
    dia21: 'Día 21',
    copyleft: 'Estos son tus derechos: CopyLeft ',
    copyleft_titulo: 'Estos son tus derechos: CopyLeft',
    copyleft_texto: 'Qué hay detrás del Creative Commons? Qué tipos de licencias utiliza la música libre? Conferencia debate alrededor de las cuestiones relacionadas a la creación musical y derechos de autor.',
    copyleft_bio: ' Xavi Balderas es miembro de AUDIOLAB, una asociación cultural dedicada a la investigación sonora. Basado en la experiencia acumulada durante años gracias a proyectos desarrollados por varios miembros de la asociación, tales como la organización del festival de Otras músicas ERTZ, el laboratorio sonoro del centro de arte contemporáneo ARTELEKU, proyectos editoriales (SERIES NEGRAS, NOISE & CAPITALISM), organización de exposiciones (TABAKALERA SUENA, ENTZUNGOR, ZOOO), de investigación ([UN]COMMON SOUNDS, RONA MAUBERE, OPEN SOUND) esta asociación pretende crear una plataforma abierta y colaborativa para fomentar la cultura sonora en la sociedad actual.',
    gracias: 'Gracias por su Netlabel',
    gracias_titulo: 'Gracias por su Netlabel',
    gracias_texto: 'Ética y contemporaneidad  de los Netlabels... Sello propio, el sentido de hacértelo tú mismo. ¿Qué está pasando con los netlabels? ¿Qué queda de lo que fue un auténtico fenómeno hace unos años? En dos horas prácticas debatiremos y se plantearán todas estas cuestiones además de aprender en sencillos pasos cómo construir el tuyo propio.',
    gracias_bio: 'Mikel R. Nieto: Nacido en Donostia - San Sebastián. Ha estudiado Arte en San Sebastián, Madrid y Barcelona. Desde hace años está inmerso en la práctica fonográfica y en la teoría que se desprende de ella. Ha impartido talleres en distintos centros culturales y universidades. Es parte del equipo del mapa sonoro del País Vasco, coordinador de Hots! Radio y co-editor en la plataforma ./mediateletipos. http://mikelrnieto.net/ + http://www.soinumapa.net/+ http://www.hots-radio.info/ + http://www.mediateletipos.net/',
    experimental: 'Concepción de la música Experimental',
    experimental_titulo: 'Concepción de la música Experimental',
    experimental_texto: 'Qué inspira a un músico experimental? Qué técnicas utiliza a la hora de crear sus composiciones?',
    experimental_bio: ' Fernando Carvalho nació en Lisboa, 1976. Actualmente reside en Bilbao Empezó a interesarse por la música electrónica a finales de los años 90. En ella encuentra una forma de expresión que le permite acercarse a la música como siempre había deseado. Al principio su trabajo es experimental y de búsqueda, y más adelante se orienta hacia estilos más populares ligados a la música de baile, pero sin dejar de tener un pie en su pasado indagador. Actualmente ha vuelto a su faceta experimental y esta volcando su interés y esfuerzos en el diseño de sonido y la manipulación de grabaciones de campo.',
    opensource: 'OpenSource Audio Tools',
    opensource_titulo: 'OpenSource Audio Tools',
    opensource_texto: 'Workshop práctico en el que se repasarán las tecnologías  para componer y trabajar Audio desde un enfoque abierto, opensource. ',
    opensource_bio: 'Luca Rullo -- Experto en Software y hardware Libre, Experimentador del sonido y trabajador de la escucha.  Trabaja con herramientas GNU así como con su propio hardware como micros DIY',
    instrumentos: 'Inventos que se convierten en instrumentos',
    instrumentos_titulo: 'Inventos que se convierten en instrumentos',
    instrumentos_texto: 'A través de sus creaciones TuniPanea nos hará viajar con sus sonidos y los instrumentos salidos de una de las mentes más creativas de la escena underground.',
    instrumentos_bio: 'Jonathan García Lana, también conocido como TUNIPANEA. Bélgica-Navarra-Bilbao, es Artista visual, músico y luthier 2.0. Ahora trabaja sobre todo en torno a la experimentación sonora, diseñando, construyendo e interpretando sus propios artefactos hechos a partir de desechos y electrónica. Sus proyectos recientes que experimentan con la ropa electrónica, la proyección monumental y los jardines sonoros pueden consultarse en su website.',
    d3: 'Impresión 3D Softs y Hards',
    d3_titulo: 'Impresión 3D  Softs y Hards',
    d3_texto: 'La gran revolución tecnológica de los últimos años es sin duda la fabricación digital. En este workshop repasaremos el software necesario para diseñar y modelar figuras en 3D e imprimirlos con la impresora 3D. Ya hemos visto los primeros vinilos imprimidos en casa!! A tí, qué se te ocurre?',
    d3_bio: 'Ivan Blasco Bilbaomakers http://blog.bilbaomakers.org/ Uno de los principales expertos do it yourself en impresión 3D en el País Vasco, tanto en montaje como en calibración. Coordinador de uno de talleres de impresión 3D en Summerlabs. Diez años de experiencia como oficial de máquinas de control numérico. (Bilbao Makers)',
    generatividad: 'Interactividad y generatividad en Arte y Música',
    generatividad_titulo: 'Interactividad y generatividad en arte y música',
    generatividad_texto: 'Un recorrido a través de las obras que hibridan Música, Arte Sonoro y Experimentación tecnológica. La  vinculación de estos campos se tratará a partir de obras de artistas como John Cage, un antecedente al Arte NewMedia.',
    generatividad_bio: 'Enrique Hurtado (Arte Electrónico y Música Automática). Formado en BBAA es desarrollador y músico. Crea su propio software para realizar música dentro del colectivo ixi-audio.net. Actualmente compagina su actividad profesional con estudios de doctorado en la EHU/UPV',
    arduino: 'Arduino como instrumento DIY',
    arduino_titulo: 'Arduino como instrumento DIY',
    arduino_texto: 'En este workshop aprenderemos conceptos básicos de Arduino en especial aquellos temas más relacionados con la creación musical. Diego nos explicará el funcionamiento de la shield mp3 para la placa de Hardware Libre por excelencia y así mismo trataremos los pasos para construirnos nuestro propio instrumento electrónico.',
    arduino_bio: 'Diego Casado Mansilla (@dieguich) es estudiante de doctorado en el grupo MORElab-Internet de la Universidad de Deusto. Su investigación versa sobre el uso de técnicas de motivación y persuasión hacia comportamientos pro-ambientales (energía, reciclaje, ruido) a través de la interacción con objetos cotidianos eco-sensibles (p.ej. cafeteras, impresoras, pantallas y electrodomésticos en general). Diego Casado hará en el taller una introducción a la plataforma Arduino y repasará algunas de las plataformas electrónicas que se han usado en el ámbito educativo. Por último se realizará una vista rápida sobre a las herramientas de programación visual para Arduino (Scratch, Amici, S4A, ModKit) y se presentará la Edushield (una shield OSHW diseñada en la Universidad de Deusto).',
    flow: 'Flow based programming, el nuevo hype',
    flow_titulo: 'Flow based programming, el nuevo hype',
    flow_texto: 'La programación orientada a Flujos (una mala traducción) es algo que ha estado desde muchos años copando la escena del coding/art.  Programas como: pure-data, max, vvvv son referencias. Pero ahora el proyecto noflo viene pisando fuerte y con ganas de buscar nuevos paradigmas en el mundo del desarrollo. Con esta charla se quiere hacer un repaso del potencial de esta forma de programar, de crear código.',
    flow_bio: 'Karlos g Liberal (Patxangas): Cyberpunk de espíritu, cree que en el código se puede encontrar la “belleza” Miembro del colectivo de experimentación electrónica Teknotrakitana y socio fundador de la cooperativa Investic y actualmente embarcado en Interzonas.info, lleva mas de 12 años de experiencia trabajando con tecnologías web, software libre y hardware abierto.',
    nvivo_titulo: 'Yo me lo guiso, yo me lo como: saca el mayor rendimiento a las herramientas de promoción',
    nvivo_texto: 'Cada vez hay más redes sociales, más herramientas de promoción, crowdfunding, ticketing y APIs, trataremos de dar sentido a todo este ecosistema y descubrir la mejor forma de sacar partido a todas estas herramientas.La idea es acercar a los profesionales del sector las posibilidades con las que cuentan en el mercado, seleccionar aquellas que mejor se adapten a sus necesidades, optimizar, automatizar y poder cuantificar los resultados.',
    nvivo_bio: 'Carla Saiz, con 6 años de experiencia en el sector de Internet, Clara Saiz es Responsable de Marketing Online en nvivo.es y 5gig. Es co-fundadora de Yolafilmo.com, colectivo de proyectos audiovisuales para promover la cultura. Licenciada en Comunicación Audiovisual por Universidad Francisco de Vitoria de Madrid, cuenta con un Master en Analítica Web en KSchool.',
    guifi_titulo: 'Tecnologías para la participación y el empoderamiento colectivo',
    guifi_texto: 'Guifi.net es una red de telecomunicaciones abierta, libre y neutral que nació en los alrededores de la localidad catalana de Gurb y tras mas de 12 años de trayectoria cuenta con más de 20.000 nodos operativos. Los propietarios de los nodos son particulares, empresas y organizaciones que libremente se conectan a ésta, ayudando así a extenderla. Actualmente se trata del modelo más cercano a la ciudadanía y al procomún, permitiendo el acceso a una auténtica red abierta de telecomunicaciones, haciendo llegar allí donde hagan falta la infraestructura y los contenidos que de otra manera no serían accesibles.',
    guifi_bio: 'Dabid Martinez, trabaja en la dirección de proyectos en la cooperativa Gaueko, especialistas en trabajos bajo software libre. Comenzó a apasionarse por la informática desde bien pequeño y al crecer se dio cuenta de que esta podía ayudar al desarrollo de una sociedad mas consciente, ética y justa. Actualmente colabora en diferentes colectivos tecno-sociales como pueden ser guifi.net, hack.in#badakigu, Reciclanet o la misma cooperativa de la que es socio, Gaueko.'





  },
  inscribir:{
    titulo: '¿Te lo vas a perder?',
    subtitulo: '¿A que tengo derecho con la entrada?',
    p1: 'A asistir a todas las charlas y workshops del BIME Hack day.',
    p2: 'A participar de manera individual ó en equipo en el Hackx24 y optar a los premios correspondientes.',
    p3: 'A traer tu material de trabajo y equipo, exponerlo y compartirlo.',
    p4: 'A comida y bebida durante todo el evento.',
    h3: 'Precio de la inscripción: 10€ <span class="gastos">+ gastos de gestión</span>',
    gastos: '+ gastos de gestión',
    condiciones: '*Consulta las condiciones de participación',
    enlace: ' Inscríbete'
  },
  horariosSeccion:{
    breadcrumb: 'Horarios BIME Hack Day',
    titulo: 'Horarios BIME Hack Day',
    dia20: 'Día 20',
    dia21: 'Día 21',
    d1: 'Registro de participantes',
    d2: 'Presentación APIs(zona esparcimiento)',
    d3: 'Conferencia: NVIVO, "Yo me lo guiso, yo me lo como": saca el mayor rendimiento a las herramientas de promoción (zona esparcimiento)',
    d4: 'Conferencia: Napster (zona esparcimiento)',
    d5: 'Conferencia: GUIFI Net (zona esparcimiento)',
    d6: 'Micrófono abierto (zona esparcimiento)',
    d7: 'Inicio de Hack x 24! (salas 3-8)',
    d8: 'Conferencia: Estos son tus derechos: Copyleft (sala 2)',
    d9: 'Workshop: Gracias por su Net Label (sala 2)',
    d10: 'Conferencia: Concepción de la música experimental (sala 2)',
    d11: 'Workshop: Open source audio tools (sala 2)',

    d12: 'Conferencia: Inventos que se convierten en instrumentos (zona esparcimiento)',
    d13: 'Workshop: Impresión 3D; Softs y Hards (zona esparcimiento)',
    d14: 'Red Bull Music Academy (sala 2)',
    d15: 'Conferencia: Interactividad y generatividad en Arte y Música (zona esparcimiento)',
    d16: 'Workshop: Arduino como instrumento DIY (zona esparcimiento)',
    d17: 'Final del Hack x 24(salas 3-8)',
    d18: 'Conferencia: Flow based programming, el nuevo Hype (zona esparcimiento)',
    d19: 'Conferencias: Asoma / Delirium Studios(zona esparcimiento)',
    d20: 'Presentaciones finales (sala 1B)',
    d21: 'Entrega de premios y clausura sala 1B)',
    d22: 'Horarios comida.<br> Día 20: Comida 13:30h. Cena 22:00.<br> Día 21: Desayuno 9:00h. Comida 15:00h'
  },
  infoSeccion: {
   breadcrumbs: '+info',
   titulo: '+ Info',  
   donde: '¿Dónde se realizará el BIME Hack Day?',
   mapa: 'Mapa',
   llegar: 'Como llegar a BEC',
   parking: 'Parking BEC',
   dudas: 'Para cualquier duda o consulta no dudes en contactar con nosotros',
   p1: 'Todas las actividades de BIME así como BIME Hack Day tendrán lugar en el BEC(Bilbao Exhibition Centre) . El Hack Day será en la quinta planta;',
   p2: '<strong>Dirección</strong><br>BEC (5ª planta)<br>Ronda de Azkue, 1  48902 Ansio<br> Barakaldo, Vizcaya',
   p3: '<strong>En Metro</strong><br> Línea 2 Portugalete, salida Ansio (estación en acceso norte de BEC)',
   p4: '<strong>En Coche</strong><br> Desde Bilbao/Bilbo, por la A-8 dirección "Santander", salida 8: Barakaldo/Bilbao Exhibition Centre BEC.',
   p5: 'Desde Álava/Araba por la A-68 dirección “Bilbao” tomar la A-8 dirección "Santander", salida 8 Barakaldo/Bilbao Exhibition Centre BEC',
   p6: 'Desde Guipúzcoa/Gipuzkoa, por la A-8 dirección “Bilbao” salida 19: Aeropuerto/Getxo y posteriormente dirección Santander por puente Rontegi, salida 9: Barakaldo/Bilbao Exhibition Centre BEC.',
   p66: 'Desde Santander, por la A-8 dirección “Bilbao” , salida 9: Baracaldo/ Bilbao Exhibition Centre BEC',
   p7: 'El parking de BEC tiene 3 entradas y 3 salidas. A, B y C.( Ver plano) Cuenta con 4.000 plazas que se ubican en 3 niveles. Cada nivel se divide en tres espacios identificados por colores:',
   p8: 'La zona azul se sitúa bajo los pabellones 1 y 2 La zona naranja se sitúa bajo los pabellones 3 y 4 La zona verde se sitúa bajo los pabellones 5 y 6.',
   p9: 'Las maquinas de pago se encuentran situadas a lo largo del atrio. Están indicadas con la P de parking. Existe un acceso peatonal exterior situado junto a la estación de Metro Ansio. (Ver plano). Este acceso tiene también 2 máquinas de pago de parking. El horario de apertura del parking es el siguiente: Puerta C: 24 horas Puertas A y B: desde las 7,30 horas',
   p10: 'CONTACTO: <a href="mailto:info@bimehackday.net?Subject=Contacto desde bimehackday.net" target="_top">info@bimehackday.net</a>',
  },
  hackx24: {
    breadcrumb: 'Hackx24',
    h4: 'Mapa Nodos',
    titulo: 'Hackx24',
    texto: 'Es un encuentro de desarrolladores de tecnología (hardware y software) cuyo objetivo es llevar a cabo un proyecto colaborativo innovador durante 24 horas. Además las empresas colaboradoras quieren premiar tu trabajo a través de los contests. Los mejores proyectos serán premiados dentro de las siguientes categorías:',
    l1: '<strong>Premio BIME Hack Day al mejor desarrollo: 1500 €</strong><br> Todos los proyectos desarrollados en Hackx24 podrán optar a este premio. ',
    l2: '<strong>Premio genérico: 2 bonos para el Bilbao BBK Live + 2 bonos BIME Live</strong><br> Todos los premios entregados irán acompañados de estas 4 entradas para cada ganador',
    l3: '<strong>Premios patrocinados:</strong><br>Cada empresa colaboradora en el evento ofrecerá <a target="_blank" href="/#/premios">diferentes premios</a>'
  },
  premiosSeccion: {
    breadcrumbs: 'Premios',
    titulo: 'Premios',
    texto: 'Premio BIME Hack Day de <strong>1500€</strong> al mejor desarrollo',
    subtexto: 'Premio para el mejor desarrollo en cada nodo de <strong>DOS BONOS</strong> para el <strong>BILBAO BBK LIVE 2014</strong> y <strong>DOS BONOS</strong> para el <strong>BIME LIVE</strong>',
    h4: 'Premios de nuestros partners',
    spotify: 'Cuenta Premium para un año.',
    deezer: 'Cuenta Premium para un año.',
    aws: 'Cuenta Premium para un año.',
    delirum: 'Pack de videojuegos.',
    asoma: 'Jornada de Formación y asesoramiento.',
    cooking: 'Kit de arduino.',
    gogear: 'Merchandising oficial & Cuenta Premium.',
    mobme: 'Auriculares Bluetooth Energy wireless Bt5 dark iron.',
    nvivo: 'Entrada doble para cualquier concierto en territorio nacional 2013/2014 (Max.100€ ambas entradas).',
    ludei: 'Cuenta premium CocoonJS.',
    sca: 'Tablet Nexus 7 al mejor desarrollo en el nodo Mobile App.',
  },
  que_esSeccion: {
    breadcrumbs: '¿Qué es BIME Hack Day?',
    titulo: '¿Qué es BIME Hack Day?',
    p1: '¿Te imaginas juntar a las empresas más innovadoras y a los mejores desarrolladores en un mismo espacio?',
    p2: '¡Ahí faltas tu! Si eres amante de la música y las nuevas tecnologías reserva esta fecha!!!',
    p3: '20 y 21 de Noviembre',
    p4: 'El mayor encuentro unconference del estado, especialmente creado para fomentar la <strong>CREATIVIDAD</strong> y la <strong>INVENCIÓN</strong> y que reunirá a amantes de la musica y las nuevas tecnologías con los profesionales de las empresas más destacadas en este sector. Dos jornadas en las que <strong>MAKERS</strong>, <strong>HACKERS</strong> y <strong>DESARROLLADORES</strong> crearán las nuevas bases para las plataformas del futuro.',
    p5: 'Los asistentes poseen  la oportunidad única de testear las últimas novedades del mercado así como contactar profesionalmente con grandes empresas, mostrar sus trabajos a públicos especializados y generar comunidad, así como ganar grandes premios. Una intensa jornada de 36h donde se genera el futuro de la música, pero sobretodo donde se aprende  y se comparte.',
    p6: '<strong>BIME Hack Day</strong> ofrece  la ocasión única de participar en workshops y asistir a conferencias ,presentaciones técnicas sobre las APIs, desarrollo software, experiencias personales, casos de éxito y un hackaton de 24h en el que recibirás el soporte técnico de nuestros partners.',
  },
  PIE:{
    TITULO:'Sigue BIME Hack Day' 
  }
}

var traduccionesEu = {
  ver_mas: 'GEHIAGO',
  MAS_INFORMACION: 'Informazio gehiago',
  INSCRIBETE: 'Izena eman',
  IMG_CABECERA: '/img/banner.png',
  
  inicio: 'Hasiera',
  hackx24_var: 'Hackx24',
  que_es: 'Zer da?',
  BIME: 'BIME',
  horarios: 'Hordutegia',
  conferencias: 'Hitzaldiak',
  premios: 'Sariak',
  comunidad: 'Elkartea',
  info: 'Info +',
  main:{
    titulo: 'Zer da BIME Hack Day?',
    h4: 'Gure partnerren sariak',
    activida_titulo: 'Jarduera',
    premios: 'Garapen hoberenari <strong>1500€-ko</strong> BIME Hack Day Saria',
    subpremios: 'Saria BILBAO BBK LIVE 2014rako BI TXARTEL izango da nodo bakoitzeko, eta beste BI TXARTEL BIME LIVErako.',
    partners: 'Gure partnerren sariak',
    spotify: 'Urte oso baterako Premium Kontua',
    deezer: 'Urte oso baterako Premium Kontua',
    aws: 'Urte oso baterako Premium Kontua',
    delirum: 'Videojokoak: "Los Ríos de Alice" & "Los Delirios de Von Sottendorff 3DSrako".',
    asoma: 'Formazio eta aholkatze saioa',
    cooking: 'Arduino kita',
    sca: 'Tablet Nexus 7 garapen hoberena Mobile App arean.',
    sound:'Urte oso baterako SoundCloud Pro Unlimited service'
  },

  PRESENTACION:{
    TITULO: '',
    SUBTEXTO: 'Estatuko topaketa profesionalik handiena da. <strong>SORMENA</strong> eta <strong>ASMAKETA</strong> sustatzea du helburu eta horretarako musikazale eta teknologia berrizale amorratuak musika-arloko enpresa nagusien ordezkariekin bilduko ditu. Bi egunetan zehar, <strong>MAKERREK</strong>; <strong>HACKERREK</strong> eta <strong>GARATZAILEEK</strong> etorkizuneko plataformen oinarriak ezarriko dituzte.',
    TEXTO: 'Bi egunez, hainbat jarduera irekitan parte hartuko dute, esate baterako, lehiaketak, hitzaldiak, tailerrak eta hackx24 (24 ordutako hackatoia), hori guztia musikaren industriari lotua. Bertara hurbiltzen direnek merkatuko azken berritasunez gozatzeko aukera izango dute, baita ere enpresa nagusiekin harremanetan jartzeko, euren lanak publiko adituari erakusteko eta harremanak indartzeko. 36 orduko jardunaldi egitekotsu honetan, musikaren etorkizuna xedatuko da, baina, batez ere, ikasteko eta elkarbanatzeko parada bikaina dugu.',
  },
  bime: {
    breadcrumb:'Zer da Bime?',
    titulo: 'Zer da Bime?',
    pro: 'BIME-k musikan diharduten profesionalen arteko bilerak erraztu nahi ditu, baita beste industria batzuen artekoenak ere, hala nola, teknologia berriak, telefonia eta aplikazioak, bideojokoak edota moda, negozioak sortzeko eta elkartrukatzeko bide berriak topa ditzaten. Xede honetarako prestatutako esparruetara mundu osoko akreditatuak etorriko dira entzutera, elkartrukatzera, igartzera. BIME ideia eta proposamen berriak merkaturatzeko leku bikaina izango da baina, batez ere, aisialdirako aukera gehiago eskaini nahi ditu.',
    live:'Gaur egungo musikaren munduan diharduten artistarik garrantzitsuenak egongo dira BIME-n, baita hemengo eta nazioarteko esperantzak ere; beraz, BIME neguko jaialdi handienetakoen artean dugu Europan. Hauetariko talde askok euren disko berriak aurkeztera etorriko dira eta batzuentzat Espainian emango duten kontzertu bakarra izango da. Estatuko bazter guztietatik etorriko da jendea, Europako hainbat herrialdetatik ere bai!',
    market: 'BIME LIVEra datozen guztiek BIME MARKET erakusketa gunean musikaren industrian aritzen diren enpresa nagusiekin harremanetan jartzeko aukera izango dute, hau da: diskoetxe, jaialdi, plataforma digital, gizarte-sare, eta trebakuntza-zentro ugarik, besteak beste, euren jarduerak, azken berriak edota euren produktuak zuzenean salduko dituzte. Halaber, jakingura duten profesionalei une aparta eskaintzen diegu aipatutako enpresei hurreratzeko, baita ere negozioak gauzatzeko. Bertako agertokian erakusleek aurkezpen zehatzak eta adierazgarriak egiteko aukera izango dute; are gehiago, artistek elkarrizketak emateko edota diskoak sinatzeko erabili ahalko dute.',
    city: 'Bizkaiak eta Bilbok agenda kultural zabala dute urte osoan zehar eta, horretaz gain, azaroan jarduera nabarmenak gauzatuko dira estatu mailari eta nazioarteari dagokienez. BIME-k hitzarmenak sinatu ditu esandako ekitaldiekin elkarri laguntza emateko eta elkarlanean aritzeko. Profesionalen artean ideiak trukatzea eta Bizkaiko kultura aberastasuna ohartzea da helburua.'
  },
  ACTIVIDADES:{
    TITULO: 'Jarduerak',
    SUBTITULO_24: 'Hackathon <br> Hackx24',
    TEXTO_24: 'Zure ametsa egi bihur ezazu zure lantaldearekin eta zure enpresarik gustukoenekin batera. 24 ordu dauzkazu, aplikaziorik onenak sarituko dira! ekintza-guneak NODOTAN banatuta daude.',
    SUBTITULO_CHARLAS: 'Hitzaldiak eta Workshopak',
    TEXTO_CHARLAS: 'Teknologia berri ugari ohar eta proba itzazu profesional aparten eskutik. Esperientzia guztiez goza dezakezu, parte har ezazu! Edukiera mugatua da, beraz, “izena emateko eskaera” lehenbailehen bete ezazu.',
    SOLO: '100 lanpostu, zeurea daukazu zain!'
  },
  PREMIOS:{
    TITULO: 'Sariak'
  },
  comunidadSeccion: {
    comun:'Elkartea',
    texto: 'BIME Hack Dayren inguruan agertzen diren berriei buruz jakiteko, gure elkarteekin bat egizu!',
    google: 'Google+',
    twitter: 'Twitter'
  },
  condiciones: {
    breadcrumb:'Parte hartze baldintzak',
    titulo: 'Parte hartze baldintzak',
    subtitulo: 'BIME Hack Dayren arau orokorrak',
    p1: 'BIME Hack Dayn parte hartzeak hemen aipatzen diren baldintza eta oinarri guztiak zorrotz eta goitik behera jakitea eta onartzea esan nahi du. Halaber, aurrerantzean Last Tourrek, oinarri hauek kontuak hartuz, erabaki dezakeena onartzea adierazten du.', 
    p2: 'Last Tourrek ez du akats teknikoen edota edozein sareren funtzionamendu txarraren ardura hartuko, ezta “hardware” edota “software” eta ekitaldian zehar gerta litekeen giza-hutsegite edota edozein motakorena ere.',
    p3: 'Parte hartze eskubideak: BIME Hack Day 18 urtetik gorako edonorentzat zabalik dago. Adingabeak legezko zaindariarekin joango dira. Bertaratutakoek banaka zein taldeka parte hartu ahal izango dute. Halaber, izena emateko eskaera banaka betetzea beharrezkoa da, edo, hala ez bada, egunean bertan sarrera leihatilan erostea. Edukier 100 pertsonentzat da eta ez da proiekturik edota parte hartzailerik aukeratuko: azkarrenek euren parte hartzea ziurtatuko dute.',
    p4: 'Nahitaezkoa da parte hartzeko baldintzak irakurtzea eta ulertzea eta BIME Hack Dayk irauten duen bitartean gogoan edukitzea, ekitaldia ahalik eta hoberen garatzearren. Gunera sartzeak arau hauek ezagutzea eta onartzea berekin dakar.',
    p5: 'Hornikuntzak eta azpiegitura: Hack Dayren jarduera guztiak gauzatuko diren gune guztiak alokatu dira eta ekitaldia behar bezala burutzeko beharrezkoak diren baldintza guztiak betetzen dituzte. Antolaketak parte hartzaileen beharrak zainduko ditu uneoro. Bestalde, beharrezkoa den materiala ere alokatua edota kolaboratzaileena da, eta, beraz, guztion borondate ona beharrezkoa da materialaren erabilera zuzena izateko. Hornikuntzak eta materiala aurkitu dugun moduan edota hobeto uztea garrantzitsua dela azpimarratu nahi dugu.',
    p6: 'Ordutegiak, egiaztatzeak eta egonaldia: BIME HD azaroaren 20an, goizeko 9:00etan irekiko da. Eremura sartzeko lehendabizi leihatilatik igaro behar izango da izena emateko eta NANa aurkezteko, eta, baita ere, sartzeko eskumuturrekoa hartzeko. Gaueko 22:30etatik aurrera sartzea edota irtetea debekatuta dago. Bertaratutakoek lo-zakuekin lo egiteko aukera izango dute, horretarako gune bat jarriko baita. Gune hau 23:30etatik aurrera irekiko da eta goizeko 10:00etarako hutsik egon beharko da. Self service zerbitzua eskainiko da, jateko eta edateko: bi orduz, guztientzako janaria eta edaria egongo da. bi ordu horietatik kanpo, ez da ziurra guztientzako janaria eta edaria egongo denik.',
    p7: 'Hackx24, lehiaketak, hitzaldiak eta workshopak. Parte hartzaileek jarduera hauetan guztietan aldi berean parte hartzeko aukera izango dute. Bakoitzak bere denbora antolatu beharko du, bere interesen arabera. Saria jasoko duten talde edota pertsona guztiak sari ematean egon beharko dira. diru-saria banku-transferentzia bidez emango da eta dagozkien atxikipenak izango ditu. Gainontzeko sariak epaimahaiak emango ditu. Lehiaketan zehar gauzatzen diren proiektuek ez dute jabetza intelektualik izango. Hitzaldietarako eta workshopetarako sarrera askea da, hau da, ez da izenik eman behar, baina esparrua eta banatuko den materiala mugatua da.',
    p8: 'Datu babesa: parte hartzaileak Hackatoian parte hartzeko eman dituen datuak lehiaketa iragartzeko erabiltzea onartzen du, internet barne, ordainik jaso gabe. Beraz, eskatzen diren datu guztiak ematea beharrezkoa da. Datuak Babesteari buruzko Lege Organikoaren arabera eta 5. artikuluari jarraituz, lehiaketan parte hartzeko eman diren datuak behin-behineko fitxategi batean bilduko direla adierazten dizuegu; lehiaketaren ostean ezabatuko dira, baina irabazlea edota finalista izanez gero datu gehiago eman beharko dituzu saria jaso ahal izateko.',
    p9: 'JABETZA INTELEKTUALAREN ETA INDUSTRIALAREN ESKUBIDEAK. Parte hartzaileek, aipatutako arauak onartze hutsarekin, aplikaziorako garatutako kodea goitik behera orijinala dela aitortzen dute eta hirugarren baten eskubideek babesten ez dutela. Halaber, Last Tour eta babesleak ez dira kanpoko edonoren erreklamazioen erantzule izango, ordezkarien kostu legalak barne. Last Tour eta babesleek proiektu jakin bat onartzeak edota Epaimahaiak sari bat emateak ez du esan nahi ideia orijinala dela edo ez dela esplizituki edota inplizituki onartzen dela. Parte hartzaileek euren ideiak erabiliko direla onartzen dute, baita euren aplikazioak, eta datuak ere, azken hiru hauek erabiltzeko, adibidez, Appstoren edota Google Playen, eta honek ez die dirua jasotzeko eskubiderik emango. Irabazleek eta parte hartzaileek dokumentu bat sinatu ahal dute, eskubideak Last Tourren eta babesleen esku uzten direla esanez. Lehiaketako eskubide guztiak Last Tourrenak dira. Parte hartzaileak dira lehiaketan erabilitako softwarearen legezkotasunaren arduradun. PARTE HARTZAILE GUZTIEK, EZ SARIDUNEK BARNE, AURKEZTUTAKO PROPOSAMENAK ORIJINALAK DIRELA AGINTZEN DUTE; BAITA ERE, GORAGO AIPATUTAKO UZTEAK EZ DUELA INOREN ESKUBIDEAK ZAPUZTEN, EDONOLAKOAK DIRELA ERE, EZTA ARAURIK ERE, ETA ZERGETATIK ETA KANPOKO NORBAITEN ESKUBIDEETATIK GARBI DAUDELA. Beraz, parte hartzaileek sustatzaileak babestuko dituzte edonork erreklamaziorik egiten badu, eta guztiz erantzule izango dira hirugarren baten alde zerbait ordaindu behar bada, ekintza, erreklamazio zein arazoak egonez gero Arau hauek ez betetzearen ondorioz. Last Tourrek beharrezkoak diren neurri guztiak hartuko ditu lehiaketa zapuzteko edota parte hartzaileak izorratzeko jarrerarik edota ekintzarik dagoela susmatzen badu. Zuzenean parte hartzaile erruduna lehiaketatik kanporatuko da eta saria irabazteko aukera galduko du. Halaber, Last Tourrek birusak edota material informatikoa zapuzteko edozer dakarrena kanporatzeko eskubidea du, edozein sistemaren segurtasuna haustekoa eta datuak hartzekoa barne. Era berean, emandako datuak gezurrezkoak badira parte hartzailea kaleratuko da eta beharrezkoak diren neurriak hartuko dira.',
    p10: 'BALDINTZAK ONARTZEA. Parte hartzaileek, parte hartze hutsarekin, arauak onartzen dituzte, baita ere Last Tourren iritzia lehiaketa honen edozein arazori buruz. Last Tourrek lehiaketa honen funtzionamenduan edozer aldatzeko eskubidea du, baita ere aurrez amaitzeko, hala uste badu, zergatia motiboduna bada, eta ez da horren erantzule izango. Hala ere, aldaketa hauek behar bezala jakinaraziko dira. Last Tourrek bere esku dagoen guztia egingo du edozein aldaketak inor ez kaltetzeko. Galerak, hondaketak, lapurretak, atzerapenak edota ezinbesteko arrazoiak badaude, esaterako, grebak edota bestelakoak, Last Tourrek ez du ardura hartuko, sarietan eragiten badute ere, eta, beraz, ez dute kalte-ordainik emango. Last Tour ez da ustekabez gertatzen den edozeren erantzule izango, lehiaketan eragiten badu ere. Inola ere ez, Last Tour ez da erantzule izango beste enpresa bat sariduna sariaz gozatzeko beharrezkoa bada eta bere lana txarto burutzen badu. Arau hauek burutzeko arazorik balego, kontuan hartu behar den legea espainola da. Last Tour eta lehiaketa honetako parte hartzaileak Bartzelonako Epaitegien jurisdikzio eta eskumenen menpe daude eta dagokien edozein foruri uko egiten diote.',
    p11: 'SARIAK. Hauexek dira SARIAK: 1500€-ko saria (mila eta bostehun euro) eta Bilbao BBK Live 2014rako bi txartel, Hackx24-ko nodo bakoitzeko irabazlearentzat, eta partner bakoitzaren babestutako sariak. Irabazleak ezin izango du SARI bat beste baten truke aldatzeko eskatu, ezta bere diru-balioaren truke, ezta beste edozeren truke. Beraz, saria ez da negoziagarria. Banakakoak dira sariak, eta, beraz, ezin izango dira beste norbaiti eman. Last Tourrek eta partnerrek SARI hauek aldatzeko edota deuseztatzeko eskubidea dute, Last Tourrek hala uste badu. Horrela izatekotan, parte hartzaileak ez du erreklamatzeko eskubiderik izango.'
  },
  conferenciasSeccion: {
    breadcrumb: 'Hitzaldiak eta workshopak',
    titulo: 'Hitzaldiak eta workshopak',
    texto: 'BIME Hack Dayren bi egunetan zehar hitzaldiak eta workshopak egongo dira eta horrelaxe banatuko dira:',
    dia20: '20a',
    dia21: '21a',
    copyleft: 'Hona hemen zure eskubideak: CopyLeft',
    copyleft_titulo: 'Hona hemen zure eskubideak: CopyLeft',
    copyleft_texto: 'Zer dago Creative Commonsen atzean? Zer nolako lizentziak erabiltzen ditu musika askeak? Musikaren eta egileen eskubideen inguruko hitzaldia-solasaldia.',
    copyleft_bio: 'Xavi Balderas AUDIOLABeko kidea da, soinuari buruzko ikerketan diharduen kultur elkartea. Elkarte honen helburua gaur egungo gizartearen soinu-kultura sustatzea da, elkarlanerako plataforma irekia sortuz. Horretarako, azken urteotako esperientzian oinarritzen dira, elkarteko hainbat kidek burututako ondorengo proiektuetakoa, alegia: ERTZ Bertze Musiken Jaialdiaren antolaketa, ARTELEKU arte garaikidearen zentroaren soinu laborategia, proiektu editorialak (SERIES NEGRAS, NOISE & CAPITALISM), erakusketak (TABAKALERA SUENA, ENTZUNGOR, ZOOO) eta ikerketa ([UN]COMMON SOUNDS, RONA MAUBERE, OPEN SOUND).',
    gracias: 'Eskerri asko zure Netlabelarengatik',
    gracias_titulo: 'Eskerri asko zure Netlabelarengatik',
    gracias_texto: 'Netlabelen etika eta garaikidetasuna… Zure marka sortzearen zergatia. Zer gertatzen ari da netlabelekin? Urte batzuk lehenago fenomeno itzela izan zenarekin zer gertatu ote da? Bi orduz, gauza hauek guztiak eztabaidatuko ditugu eta zure marka sortzeko oinarriak ikasiko dituzu.',
    gracias_bio: 'Mikel R. Nieto: Donostian jaio zen eta bertan Artea ikasi zuen, baita Madrilen eta Bartzelonan ere. Praktika fonografikoan murgilduta dabil eta hortik ateratzen den teorian. Tailerrak eman ditu hainbat kultur elkarteetan eta unibertsitateetan, Euskal Herriko soinu-taldekidea da, Hots! Radioko koordinatzailea eta ./mediateletipos plataformako argitaratzaileetako bat. http://mikelrnieto.net/ + http://www.soinumapa.net/+ http://www.hotsradio.info/ + http://www.mediateletipos.net/',
    experimental: 'Musika esperimentalaren ikusmoldea',
    experimental_titulo: 'Musika esperimentalaren ikusmoldea',
    experimental_texto: 'Zein da musikari esperimentalen inspirazioa? Zein teknika erabiltzen dituzte?',
    experimental_bio: 'Fernando Calvalho Lisboan jaion zen 1976an. Gaur egun Bilbon bizi da. Musika elektronikoaz interesatzen hasi zen 90ko hamarkadaren amaieran, beti nahi izan duen modura adierazi ahal baitu bere burua musikan. Hasieran, esperimentazioan eta bilaketan ziharduen, baina gero estilo popularretara hurbildu zen, dantza egitekoak, baina bilaketa utzi gabe. Gaur egun bere esperimentaziora itzuli da eta bere esfortzu guztiak soinuaren diseinuan eta grabaketen manipulazioan jartzen ditu.',
    opensource: 'OpenSource Audio Tools',
    opensource_titulo: 'OpenSource Audio Tools',
    opensource_texto: 'Audioa ikuspuntu irekiaz sortzeko eta lantzeko erabiltzen diren teknologiei buruzko workshop praktikoa.',
    opensource_bio: 'Luca Rullo – Software eta hardware askean aditua. Soinu esperimentalista eta entzumenaren langilea. GNU tresnekin lan egiten du, baita mikro DIYrekin eta bere hardwarearekin.',
    instrumentos: 'Instrumentuetan bilakatzen diren asmakizunak',
    instrumentos_titulo: 'Instrumentuetan bilakatzen diren asmakizunak',
    instrumentos_texto: 'Bere sorketen bidez, TuniPaneak underground munduko buru sortzaileenetako batetik ateratako soinu eta instrumentuak eskainiko dizkigu.',
    instrumentos_bio: 'Jonathan García Lana, TUNIPANEA ezizenez. Belgika-Nafarroa-Bilbo. Artista bisuala, musikaria eta luthier 2.0. Gaur egun soinu esperimentazioan dihardu batez ere: bere lehergailuak diseinatu, eraiki eta interpretatzen ditu, elektronikaz eta hondakinez egindakoak. Bere azken proiektuak bere web orrian ikus daitezke, besteak beste, soinu lorategiak edota arropa elektronikoa.',
    d3: '3D soft eta Hard inprimaketa',
    d3_titulo: '3D soft eta Hard inprimaketa',
    d3_texto: 'Azken urteotako teknologia iraultza fabrikazio digitala da, zalantzarik gabe. Workshop honetan 3D figurak diseinatzeko eta modelatzeko softwarea ikusiko dugu, baita ere 3D inprimatzailearekin inprimatuko dugu. Etxean inprimatutako lehen biniloak ikusi ditugu, baina, zerbait darabilzu buruan?',
    d3_bio: 'Ivan Blasco Bilbaomakers http://blog.bilbaomakers.org/ Euskal Herriko 3D inprimaketan, do it yourself aditu nagusietako bat, bai muntaian, bai kalibrazioan. 3D inprimaketako tailer bateko koordinatzailea Summerlabsen. CNC makinetan hamar urteko esperientzia (Bilbao Makers).',
    generatividad: 'Elkarreragina eta sorketa Artean eta Musikan',
    generatividad_titulo: 'Elkarreragina eta sorketa Artean eta Musikan',
    generatividad_texto: 'Musika, soinu-artea eta esperimentazio teknologikoa nahasten duten lanak. Oinarriak John Cage artistan ditu nahasketa honek, Art NewMediaren aitzindarietako bat.',
    generatividad_bio: 'Enrique Hurtado (Arte Elektronikoa eta Musika Automatikoa). BBAA-n prestatu zen eta garatzailea eta musikaria da. Bere softwarea sortu zuen ixi-audio.net taldean musika egiteko. Gaur egun bere lana EHU-ko doktoretzarekin batera egiten du.',
    arduino: 'Arduino DIY instrumentu gisa',
    arduino_titulo: 'Arduino DIY instrumentu gisa',
    arduino_texto: 'Workshop honetan Arduinoren oinarriak ikasiko ditugu, batez ere musikaren sorketaren lotutakoak. Diegok shield mp3-ren funtzionamendua azalduko digu, eta gure instrumentu elektronikoa sortzeko pausuak ikasiko ditugu.',
    arduino_bio: 'Diego Casado Mansilla (@dieguich) Deustuko Unibertsitateko MORElab-Internet taldeko doktoretza ikaslea da. Pertsuasio eta motibazio teknikak ikertzen ditu, ingurugiroari dagokionez (energia, birziklapena, zarata), eguneroko objektuekin harremanetan dagoenean (adibidez, kafeterak, inprimatzaileak, pantailak eta etxeko aparatuak, orokorrean). Diegok Arduino plataforma azalduko du eta heziketan erabili diren plataforma elektronikoei buruz hitz egingo du. Azkenik, Arduinorako programazio bisualeko tresnak birpasatuko dira (Scratch, Amici, S4A, ModKit) eta Edushiel aurkeztuko da (Deustuko Unibertsitatean diseinatutako shield OSHW-a).',
    flow:'Flow based programming, hype berria',
    flow_titulo: 'Flow based programming, hype berria',
    flow_texto: 'Pure-data, max edota vvvv programak dira aitzindari, baina Noflo proiektua eroso dator garapenaren munduan paradigma berrien bila. Hitzaldi honetan programatzeko era honen indarra azpimarratu nahi du.',
    flow_bio: 'Karlos g Liberal (Patxangas): Cyberpunka dauka barnean eta kodean edertasuna aurki daitekeela uste du. Teknotrakitana esperimentazio elektronikoko taldekidea da, Investic kooperatibako sortzaileetako bat eta gaur egun Interzonas.info gunean dago. Web teknologietan, software askeetan eta hardware irekietan hamabi urte baino gehiagoko esperientzia dauka.',
    nvivo_titulo: 'Neuk egin eta neuk jan: sustapen-tresnei ahalik eta etekin gehien atera iezaiezu.',
    nvivo_texto: 'Gero eta gizarte-sare gehiago dago, baita gero eta sustapen-tresna gehiago ere, masa finantzaketa, ticketing eta API-ak… ekosistema berri honen esanahia aurkitzen saiatuko gara, baita ere tresna hauei guztiei ahalik eta etekin gehien ateratzen.Gure asmoa merkatuan dauden aukera guztien berri ematea da, profesionalek eurentzat hoberenak direnak aukeratzearren, emaitzak hobetzeko, automatizatzeko eta zenbatzeko',
    nvivo_bio: 'Carla Saiz, sei urteko esperientzia du Interneten eta gaur egun online marketineko arduraduna da, NVIVO eta 5gig taldeetan. Yolafilmo.comeko sortzaileetako bat da, kultura sustatzeko ikus-entzunezko proiektuetan diharduen taldea, alegia.  Madrileko Francisco de Vitoria Unibertsitatean Ikus-entzunezko Komunikazioan Lizentziaduna da eta KSchooleko Web Analitikan Masterduna ere.',
    guifi_titulo: 'Guifi',
    guifi_texto: 'GUIFI Telekomunikazio sare irekia da, askea eta neutrala. Kataluniako Gurb herriaren inguruetan hasi zen eta, gaur egun, hamabi urteko ibilbidea duelarik, 20.000 nodo eragile baino gehiago du. Nodoen jabeak sarera aske konektatzen diren partikularrak, enpresak edota erakundeak dira, horrela sarea hedatzen lagunduz. Gaur egun, herritarretik hurbilen dagoen modeloa da. Izan ere, benetako telekomunikazio sare batera konektatzeko aukera ematen du, edozein tokira beharrezkoak diren azpiegiturak eta edukiak heltzea ahalbidetzen baitu, horrela ez izatekotan ez bailitzateke posible izango.',
    guifi_bio: 'Dabid Martinezek proiektuak zuzentzen ditu Gaueko Kooperatiban, software askearekin egindako lanetan espezialistak. Txikitatik informatikazale amorratua da, eta, haztean, gizarte ohartuagoa, etikoagoa eta bidezkoagoa garatzen lagun zezakeela konturatu zen. Orain hainbat kolektibotan lan egiten du, esaterako: guifi.net, hack.in#badakigu, Reciclanet edota Gaueko Kooperatiba, bertako kidea denez gero.'

  },
  inscribir:{
    titulo: 'Aukeraz baliatu!',
    subtitulo: 'Zer nolako eskubideak dauzkat sarrerarekin?',
    p1: 'BIME Hack Dayko hitzaldi eta workshop guztietara sartzeko eskubidea.',
    p2: 'Hackx24an banaka zein taldeka parte hartzeko eskubidea eta dagokion saria irabazteko aukera.',
    p3: 'Zure lan-materiala ekartzeko, erakusteko eta elkarbanatzeko eskubidea.',
    p4: 'Ekitaldi osoan zehar janaria eta edaria jasotzeko eskubidea.',
    h3: 'Izena emateko prezioa: 10€ + banaketa gastuak',
    gastos: '+ banaketa gastuak',
    condiciones: '*Parte hartzeko baldintzak begiratu',
    enlace: 'Izena eman ezazu'
  },
  horariosSeccion:{
    breadcrumb: 'BIME Hack Day ordutegiak',
    titulo: 'BIME Hack Day ordutegiak',
    dia20: '20a',
    dia21: '21a',
    d1: 'Parte hartzaileen izena ematea eta harrera',
    d2: 'Hitzaldiak: Amazon (AWS), nvivo',
    d3: 'Mikrofono irekia',
    d4: 'API aurkezpena: Spotify, Deezer, Goear, Nvivo',
    d5: 'Hackx24ren hasiera',
    d6: 'Hitzaldia: Hona hemen zure eskubideak: CopyLeft',
    d7: 'Workshop: Eskerrik asko zure Netlabelarengatik',
    d8: 'Hitzaldia: Musika esperimentalaren ikusmoldea',
    d9: 'Workshop: OpenSource Audio Tools',
    d10: 'Hackina aurrera doa!',
    d11: 'Gosaria',
    d12: 'Hitzaldia: Musika esperimentalaren ikusmoldea',
    d13: '3D inprimaketa. Softak eta Hardak',
    d14: 'Hitzaldia: Elkarreragina eta sorketa Artean eta Musikan',
    d15: 'Workshop: Arduino eta musika',
    d16: 'Hackx24ren amaiera',
    d17: 'Hitzaldia: Flow based programming, hype berria',
    d18: 'Hitzaldia: zure ekitaldia antola ezazu (Asoma), Delirium Studios',
    d19: 'Hackx24 aurkezpenak',
    d20: 'Sariak',
    d21: 'Itxiera',
    d22: '*Bazkaria 13:00tik 15:30ra emango da. afaria 22:00tik aurrera'
  },
  infoSeccion: {
   breadcrumbs: 'Info +',
   titulo: 'Info +',  
   donde: 'Non izango da BIME Hack Day?',
   mapa: 'Mapa',
   llegar: 'BEC-era nola heldu',
   parking: 'BEC-eko parkinga',
   dudas: 'Edozein zalantzarik edo galderarik baduzu gurekin harremanetan jar zaitez',
   p1: 'BIME-ren zein BIME Hack Dayren jarduera guztiak BEC-ean izango dira (Bilbao Exhibition Centre). Hack Daya 5. solairuan izango da.',
   p2: 'Helbidea: BEC (5. solairua) Ronda de Azkue, 1, 48902 Ansio, Barakaldo, Bizkaia',
   p3: 'Metroz: 2. linea (Portugalete), irteera: Ansio (Bec-eko iparraldera ematen du)',
   p4: 'Autoz: Bilbotik, A-8 Santanderrerako bidean, 8. irteera: Barakaldo/Bilbao Exhibition Centre BEC',
   p5: 'Arabatik: A-68tik, Bilborako bidean, A-8 errepidea hartu Santanderrerako bidean, 8. irteera: Barakaldo/Bilbao Exhibition Centre BEC',
   p6: 'Gipuzkoatik: A-8tik, Bilborako bidean, 19. Irteera: aireportua/Getxo; gero Santanderrerako bidea hartu Errontegiko zubitik, 9. irteera: Barakaldo/Bilbao Exhibition Centre BEC',
   p66: 'Santanderretik, A-8tik Bilborako bidean, 9. irteera: Barakaldo/Bilbao Exhibition Centre BEC',
   p7: 'BEC-eko parkingak 3 sarrera eta 3 irteera ditu: A, B eta C (ikusi planoa). 3 mailatan banatutako 4.000 aparkaleku ditu. Maila bakoitzak kolorez desberdindutako hiru gune ditu.',
   p8: 'Gune urdina: 1go eta 2. pabilioien azpian. Gune laranja: 3. Eta 4. pabilioien azpian. Gune berdea: 5. Eta 6. pabilioien azpian.',
   p9: 'Ordaintzeko makinak atarian daude. Parking hitzeko P letra daukatelako ezagut ditzakezu. Ansioko geltokiaren ondoan oinezkoentzako sarrera bat dago (ikusi planoa). Sarrera honek ere bi ordaintzeko makina dauzka. Hauxe da parkineko ordutegia: C atea: 24 ordu. A eta B ateak: goizeko 7:30etatik aurrera.',
   p10: 'HARREMANETAN JARTZEKO: <a href="mailto:info@bimehackday.net?Subject=Contacto desde bimehackday.net" target="_top">info@bimehackday.net</a>',
  },
  hackx24: {
    breadcrumb: 'Hackx24',
    h4: 'Mapa Nodos',
    titulo: 'Hackx24',
    texto: 'Hackx24. Teknologia garatzaileen topaketa da (hardware eta software garatzaileak). Elkarren arteko proiektu berriztatzailea 24 ordutan egitea dute helburu. Gainera, enpresa kolaboratzaileek zure lana saritu nahi dute lehiaketa baten bidez. Proiekturik hoberenak sarituko dira ondorengo mailatan sailkatuta:',
    l1: 'Garapen hoberenari BIME Hack Day saria: 1500€. Hackx24-n garatutako priektu guztiek sari hau jasotzeko aukera izango dute.',
    l2: 'Sari orokorra: Bi txartel Bilbao BBK Live + BIME Live beste bi txartel. Sari guztiak irabazle bakoitzarentzako lau sarrera hauekin datoz.',
    l3: 'Babestutako sariak: enpresa kolaboratzaileek sari desberdinak banatuko dituzte.'
  },
  premiosSeccion: {
    breadcrumbs: 'Sariak',
    titulo: 'Sariak',
    texto: 'Garapen hoberenari 1500€-ko BIME Hack Day saria',
    subtexto: 'Saria BILBAO BBK LIVE 2014rako BI TXARTEL izango da nodo bakoitzeko, eta beste BI TXARTEL BIME LIVErako.',
    h4: 'Gure partnerren sariak',
    spotify: 'Urte oso baterako Premium Kontua',
    deezer: 'Urte oso baterako Premium Kontua',
    aws: 'Urte oso baterako Premium Kontua',
    delirum: 'Videojokoak: "Los Ríos de Alice" & "Los Delirios de Von Sottendorff 3DSrako"',
    asoma: 'Formazio eta aholkatze saioa',
    cooking: 'Arduino kita',
    gogear: 'Merchandising ofiziala eta Premium Kontua.',
    mobme: 'Entzungauilu Bluetooth Energy wireless Bt5 dark iron.',
    nvivo: 'Sarrera bikoitza edozein kontzerturako Espainan 2013/2014an (Max. 100€ bi sarrerak).',
    ludei: 'CocoonJS Premium Kontua.',
    sca: 'Tablet Nexus 7 garapen hoberena Mobile App arean.'
  },
  que_esSeccion: {
    breadcrumbs: 'Zer da BIME Hack Day?',
    titulo: 'Zer da BIME Hack Day?',
    p1: 'Enpresarik berriztatzaileenak eta garatzailerik hoberenak elkarrekin, pentsa!',
    p2: 'Zeu zara hurrengoa! Musikazale eta teknologia berrizale amorratua bazara, egun hauek gorde itzazu!',
    p3: 'Azaroaren 20a eta 21a',
    p4: 'Estatuko topaketa profesionalik handiena da. SORMENA eta ASMAKETA sustatzea du helburu eta horretarako musikazale eta teknologia berrizale amorratuak musika-arloko enpresa nagusien ordezkariekin bilduko ditu. Bi egunetan zehar, MAKERREK; HACKERREK eta GARATZAILEEK etorkizuneko plataformen oinarriak ezarriko dituzte.',
    p5: 'Bertara hurbiltzen direnek merkatuko azken berritasunez gozatzeko aukera izango dute, baita ere enpresa nagusiekin harremanetan jartzeko, euren lanak publiko adituari erakusteko eta harremanak indartzeko. 36 orduko jardunaldi egitekotsu honetan, musikaren etorkizuna xedatuko da, baina, batez ere, ikasteko eta elkarbanatzeko parada bikaina dugu.',
    p6: 'BIME Hack Day aukera bikaina duzu ondorengoetan parte hartu nahi baduzu: hitzaldiak, API-ei buruzko aurkezpen teknikoak , software garapena, esperientzia pertsonalen partekatzea, egoera arrakastatsuak ezagutzera ematea eta aita ere 24 orduko hackatoia, gure partnerren laguntza teknikoarekin.',
  },
  PIE:{
    TITULO:'BIME Hack Day jarraitu' 
  }
}

var traduccionesEn = {
  ver_mas: 'MORE',
  MAS_INFORMACION: 'For more information',
  INSCRIBETE: 'Sign up',
  IMG_CABECERA: '/img/banner.png',
  
  inicio: 'Home',
  hackx24_var: 'Hackx24',
  que_es: 'What is it?',
  BIME: 'BIME',
  horarios: 'Schedule',
  conferencias: 'Lectures',
  premios: 'Rewards',
  comunidad: 'Community',
  info: '+ Info',
  main:{
    titulo: 'What is BIME Hack Day?',
    h4: 'With technology and technical support:',
    activida_titulo: 'Activities',
    premios: '<strong> 1500 € </strong > BIME Hack Day Reward for best development',
    subpremios: '',
    partners: 'Rewards from our Partners',
    spotify: '1-year Premium Account.',
    deezer: '1-year Premium Account.',
    aws: '1-year Premium Account.',
    delirum: 'Videogames: "Los Ríos de Alice" & "Los Delirios de Von Sottendorff for 3DS”',
    asoma: 'Professional Internship.',
    cooking: 'Arduino Kit.',
    sca: 'Tablet Nexus 7 for the best develop on Mobile App area.',
    sound:'One-year subscription to the SoundCloud Pro Unlimited service'
  },
  PRESENTACION:{
    TITULO: 'Reward for best development in each node <strong>TWO PASSES </strong> for <strong> BILBAO BBK LIVE 2014 </strong> and <strong> TWO PASSES </strong> for <strong> BIME LIVE </strong >',
    SUBTEXTO: 'Spain’s largest unconference meeting, specially created to encourage <strong> CREATIVITY </strong> and <strong> INVENTION </strong>, it will bring together music lovers, fans of new technologies and professionals working at leading companies of this field. Two days during which <strong>MAKERS </strong>, <strong>HACKERS</strong> and <strong>DEVELOPERS </strong> will lay the foundation for the platforms of the future.',          
    TEXTO: 'For two days, different activities will take place, such as contests, talks, workshops and a hackx24 (24 hour hackathon), all related to the music industry. Attendees will have the unique opportunity of testing the latest products in the market, contacting the most important companies, showing their works to a specialized public, growing a community and winning great prizes. An intense day lasting 36 hours which will create the future of music, and especially where there will be something to be learned and to be shared.'
  },
  bime: {
    breadcrumb:'What is BIME?',
    titulo: 'What is BIME?',
    pro: 'BIME wants to provide a meeting place where professionals in music and other industries, such as new technologies, telephony and applications, video games or fashion, can exchange and create new business. Enclosures adapted to host professional meetings will welcome authorized visitors from all over the world coming to listen, share, discover. Enclosures adapted to host professional meetings will welcome authorized visitors from all over the world coming to listen, share, discover.',
    live:'BIME LIVE will host the most important and relevant artists in music today as well as the future promises of the local and international scene, turning it into one of the mayor winter festivals in Europe. Many of these bands will come to present their new record releases, some of them acting in exclusive date in Spain. Public will arrive from all corners of Spain as well as from various European countries.',
    market: 'BIME MARKET will be the exhibition area where the public attending BIME LIVE will have the opportunity of making contact with the music industry’s major companies: labels, festivals, digital platforms, social networks, training centers and many others. They will present their activities and innovations, apart from  selling their products to the public. It will also be a perfect setting for all professionals who want to approach these companies and close deals. There will also be a stage for exhibitors to make presentations of their businesses, as for artists to respond to interview questions and sign albums.',
    city: 'Biscay and the city of Bilbao have during all year a large cultural agenda. Therefore, during the month of November, activities of national and international importance will take place in Bilbao. BIME has reached agreements with the people in charge of these national and international events to make mutual promotion and develop collaborative activities. The purpose is to encourage exchanges between professionals and make the cultural richness of Biscay widely known.'
  },
  ACTIVIDADES:{
    TITULO: 'Activities',
    SUBTITULO_24: 'Hackathon <br> Hackx24',
    TEXTO_24: 'Make your dream come true with your team and your favorite companies. You have 24 hours; the best applications will be awarded. Action areas are divided into <a target="_blank" href="/#/hackx24">NODOS</a>.',
    SUBTITULO_CHARLAS: 'Lectures and Workshops',
    TEXTO_CHARLAS: 'Discover and test new technologies and techniques given by professionals.<br> Youll have access to all these experiences, participate! Seating is limited, so please fill in the registration form',
    SOLO: '100 Jobs, are you going to go without yours?'
  },
  PREMIOS:{
    TITULO: 'Rewards'
  },
  comunidadSeccion: {
    comun:'Community',
    texto: 'Join our community in order to be informed of all the news concerning BIME Hack Day!',
    google: 'Google+',
    twitter: 'Twitter'
  },
  condiciones: {
    breadcrumb:'Conditions of participation',
    titulo: 'Conditions of participation',
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
    p11: '<strong>PREMIOS</strong><br>Los PREMIOS consisten por una parte, en un premio de 1.500 € (Mil quinientos euros) al ganador del mejor desarrollo BIME Hack Day, así como dos bonos para el Bilbao BBK Live 2014 y BIME Live para el ganador de cada nodo del Hackx24. También habrá premios patrocinados de cada partner. El ganador no podra exigir el cambio del PREMIO por otro, ni por su valor en dinero en efectivo, ni por un bien o servicio distinto de los indicados como PREMIO, de modo que el PREMIO no será negociable. Los premios son de carácter personal, y en consecuencia no se podrán ceder los mismos a un tercero. Last Tour y los PARTNERS se reservan el derecho de cancelar, suspender o modificar estos PREMIOS, por caso fortuito o fuerza mayor u otras circunstancia/s que a criterio de Last Tour así lo justifiquen. En ningún caso el ejercicio de tales derechos por parte de Last Tour dará derecho al participante a reclamo alguno.'
  },
  conferenciasSeccion: {
    breadcrumb: 'Lectures and workshops',
    titulo: 'Lectures and workshops',
    texto: 'During BIME Hack Day’s two days, lectures and workshops will take place distributed as follows:',
    dia20: 'Day 20',
    dia21: 'Day 21',
    copyleft: 'Know your rights: CopyLeft',
    copyleft_titulo: 'Know your rights: CopyLeft',
    copyleft_texto: 'What’s behind the Creative Commons? What type of licenses does free music use? Lecture - discussion about issues related to music creation and copyright.',
    copyleft_bio: 'Xavi Balderas is member of AUDIOLAB, a cultural association dedicated to sound research. Based on the experience accumulated over the years in projects developed by several members of the association, such as the organization of festival Otras músicas ERTZ, ARTELEKU contemporary art center’s laboratory of sound, publishing projects (SERIES NEGRAS, NOISE & CAPITALISM) organization of exhibitions (TABAKALERA SUENA, ENTZUNGOR, ZOOO), research ([UN] COMMON SOUNDS, RONA MAUBERE, OPEN SOUND) this association aims to create an open and collaborative platform to promote sound culture in today´s society.',
    gracias: 'Thank you for your Netlabel',
    gracias_titulo: 'Thank you for your Netlabel',
    gracias_texto: 'Net labels Ethics and contemporaneity ... Your own label, the sense of doing it yourself. What is happening with net labels? What remains of this phenomenon after some years? During two hours, we will not only debate and speak about these issues, but we will also learn how to build your own net label in simple steps.',
    gracias_bio: 'Mikel R. Nieto: Born in Donostia - San Sebastián. He holds a Bachelors Degree in Fine Arts, which he studied in San Sebastian, Madrid and Barcelona. Since quite a lot of years ago, he investigates phonographic practice and its theory. He has conducted workshops in different cultural centers and universities. He is part of the Basque Country’s sound map team, Hots! Radio’s coordinator and co –editor of the platform. http://mikelrnieto.net/ + http://www.soinumapa.net/+ http://www.hots-radio.info/ + http://www.mediateletipos.net/',
    experimental: 'Idea of Experimental Music',
    experimental_titulo: 'Idea of Experimental Music',
    experimental_texto: 'Where does an experimental musician find inspiration? What techniques does he use when creating his compositions?',
    experimental_bio: 'Fernando Carvalho was born in Lisbon in 1976 . He currently lives in Bilbao. He first became interested in electronic music in the late 90s. Electronic music allows him to approach music as he had always wanted. At first, his work was more experimental, and later he developed a different style more linked to dance music, but still keeping his past curiosity. Nowadays, he has returned to his experimental side and he is dedicated to sound design and field-recording-manipulation.',
    opensource: 'OpenSource Audio Tools',
    opensource_titulo: 'OpenSource Audio Tools',
    opensource_texto: 'Practical workshop which will go over technology used for composing and working open source audio.',
    opensource_bio: 'Luca Rullo - Expert in Free software and hardware, experimenter of sound and worker of listening. He works with GNU tools and with his own hardware, so as DIY microphones',
    instrumentos: 'Inventions that become instruments',
    instrumentos_titulo: 'Inventions that become instruments',
    instrumentos_texto: 'Helped by his TuniPanea creations, he will make us travel with his sounds and instruments coming from one of the most creative minds of the underground scene.',
    instrumentos_bio: 'Jonathan Garcia Lana, also known as TUNIPANEA. Belgium - Navarra -Bilbao, he is visual artist, musician and luthier 2.0. Currently, he is dedicated to sound experimentation. He designs, constructs and interprets his own gadgets, made from waste and electronics. In his recent projects he experiments with electronic clothing, monumental projection and sound gardens, which can be found in his website.',
    d3: 'Soft and Hard 3D printing',
    d3_titulo: 'Soft and Hard 3D printing',
    d3_texto: 'The great technological revolution of recent years is certainly digital manufacturing. During this workshop, we will take a look at the necessary software for designing and modeling 3D figures, so as how to print them on a 3D printer. We have already seen the first vinyl printed at home! What comes to your mind?',
    d3_bio: 'Ivan Blasco Bilbaomakers http://blog.bilbaomakers.org/ One of the most important do it yourself experts in 3D printing in the Basque Country, both in set-up and in calibration. He is coordinator of one of the Summerlabs 3D printing workshops. He has ten years of experience as CNC machine operator.(Bilbao Makers)',
    generatividad: 'Interactivity and generativity in Art and Music',
    generatividad_titulo: 'Interactivity and generativity in Art and Music',
    generatividad_texto: 'A journey through all those works hybridizing Music, sound art and technological experimentation. The linking of these fields will be explained while revising works of artists such as John Cage, pioneer in New Media Art.',
    generatividad_bio: 'Enrique Hurtado (Electronic Art and Automatic Music). Having a Bachelors Degree in Fine Arts, he works as developer and musician. He creates his own software in order to perform music within the collective ixi- audio.net. He currently combines his professional activity with PhD studies at the EHU / UPV (University of the Basque Country)',
    arduino: 'Arduino as a DIY instrument',
    arduino_titulo: 'Arduino as a DIY instrument',
    arduino_texto: 'During this workshop, we will learn Arduino’s basics. Above all, issues related to the creation of music . Diego will explain us how an mp3 shield works with the main Free Hardware plate and we will also follow the necessary steps to build our own electronic instrument.',
    arduino_bio: 'Diego Casado Mansilla ( @dieguich ) is a PhD student at the University of Deusto’s MORELab – Internet group. His research focuses on the use of motivational and persuasive techniques to promote pro -environmental behavior (energy , recycling , noise) through interaction with eco- sensitive everyday objects ( eg. coffee machines, printers, screens and electrical appliances in general) . During the workshop, Diego Casado will introduce the Arduino platform and he will go over some of the electronic platforms that have been used in education . Finally, we will revise the visual programming tools that work with Arduino (Scratch , Amici , S4A , ModKit ) and we will introduce Edushield (OSHW shield designed at the University of Deusto).',
    flow: 'FFlow based programming, the new hype',
    flow_titulo: 'Flow based programming, the new hype',
    flow_texto: 'Flow-based programming has been for many years monopolizing the coding / art scene. Some references are programs such as pure-data, max and vvvv. Nevertheless, the noflo project is currently all the rage and is eager to seek new ways within the development world . This talk aims to check the potential of this form of programming , of creating code.',
    flow_bio: 'Karlos g Liberal (Patxangas): Cyberpunk in spirit, he believes that beauty can be found in codes. Member of Teknotrakitana, electronic experimentation collective, founding member of the cooperative business Investic, and currently occupied with Interzonas.info, he has over 12 years experience in the field of web technology, free software and open hardware.',
    nvivo_titulo: 'I cook it, I eat it": take the most out of promotional tools',
    nvivo_texto: 'Nowadays, the number of social networks, promotional tools, crowdfunding, ticketing and APIs is growing, so we will try to give sense to this ecosystem and discover the best way to take advantage of all these tools. The idea is to bring closer the different possibilities that are on the market to professionals in this field, to select those that best suit their needs, to optimize, to make automatic and to quantify the results.',
    nvivo_bio: 'Carla Saiz, Having six years of experience in the Internet sector, Clara Saiz is Online Marketing Manager at nvivo.es and 5gig. She is also co -founder of Yolafilmo.com, a group that makes audiovisual projects in order to promote culture. She has a Degree in Audiovisual Communication from the University Francisco de Vitoria in Madrid, and a Master’s Degree in Web Analytics from KSchool.',
    guifi_titulo: 'Guifi',
    guifi_text: 'Guifi.net is a free, open and neutral telecommunications network which came into being near the Catalonian town of Gurb and which after more than 12 years of career has more than 20,000 operational nodes. The owners of the nodes are individuals, companies and organizations that voluntarily connect to this network, thus helping to expand it. Currently, this model is considered the closest to citizens and common good, it enables to access to a big open telecommunications network, which helps to obtain wherever it may be necessary infrastructure and content that would otherwise may not be accessible.',
    guifi_bio: 'Dabid Martinez works in project management at cooperative Gaueko, company dedicated to producing free software. Since he was a child, computers were his passion, so when he grew up he realized that he could contribute to develop a more conscious, ethical and fair society. Currently, he works with different techno- social associations such as guifi.net, hack.in # badakigu, Reciclanet and Gaueko, the cooperative of which he is partner.'


  },
  inscribir:{
    titulo: 'Are you going to miss it?',
    subtitulo: 'What does the ticket include?',
    p1: 'You can attend all of BIME Hack day’s talks and workshops.',
    p2: 'You can participate individually or as part of a team in the Hackx24 and aim for the corresponding rewards.',
    p3: 'You can bring your materials and equipment, show them and share them.',
    p4: 'You can eat and drink throughout the entire event.',
    h3: 'Registration fee : 10 € <span class="gastos">+ expenses </span>',
    gastos: '+ booking fee',
    condiciones: '* Read conditions of participation',
    enlace: 'Sign up'
  },
  horariosSeccion:{
    breadcrumb: 'BIME Hack Day Schedule',
    titulo: 'BIME Hack Day Schedule',
    dia20: 'Day 20',
    dia21: 'Day 21',
    d1: 'Registration of participants and welcome',
    d2: 'Lectures: Amazon (AWS), nvivo',
    d3: 'Open Mic',
    d4: 'API Presentation: Spotify, Deezer, Goear, Nvivo',
    d5: 'Hackx24 Start',
    d6: 'Lecture : Know your rights: Copyleft',
    d7: 'Workshop : Thanks for your Netlabel',
    d8: 'Lecture: Idea of Experimental Music',
    d9: 'Workshop: OpenSource Audio Tools',
    d10: 'Hacking continues!',
    d11: 'Breakfast',
    d12: 'Lecture: Idea of Experimental Music',
    d13: '3D printing, Softs and Hards',
    d14: 'Lecture : Interactivity and generativity in Art and Music',
    d15: 'Workshop : Arduino and music',
    d16: 'Ending of Hackx24',
    d17: 'Lecture: Flow based programming, the new hype',
    d18: 'Lecture: Organize your own event (Asoma), Delirium Studios',
    d19: 'Hackx24 Presentations',
    d20: 'Awards Ceremony',
    d21: 'Closure',
    d22: '* Lunch will be served between 1 p.m. and 3.30 p.m. Dinner will be served at 10 p.m.'
  },
  infoSeccion: {
   breadcrumbs: '+info',
   titulo: '+ Info',  
   donde: 'Where will BIME Hack Day take place?',
   mapa: 'Map',
   llegar: 'How to get to the BEC',
   parking: 'Parking BEC',
   dudas: 'Should you have any questions please do not hesitate to contact us',
   p1: 'All BIME and BIME Hack Day activities will be held at the BEC (Bilbao Exhibition Centre). BIME Hack Day will take place on the fifth floor',
   p2: '<strong> Address </strong> <br> BEC ( 5th floor) <br> 1, Ronda de Azkue 48902 Ansio <br> Barakaldo, Biscay',
   p3: '<strong> Take the Underground </strong > <br>Line 2 Portugalete, exit Ansio (the station is in the northern entrance to the BEC)',
   p4: '<strong> By car </strong > <br> From Bilbao / Bilbo, take the A-8 towards "Santander", exit 8: Barakaldo / Bilbao Exhibition Centre BEC.',
   p5: 'From Álava / Araba take the A- 68 towards " Bilbao " take the A-8 towards "Santander" exit 8 Barakaldo / Bilbao Exhibition Centre BEC',
   p6: 'From Guipúzcoa / Gipuzkoa, take the A-8 towards " Bilbao " Exit 19 : Airport / Getxo and then head towards Santander through the Rontegi bridge, Exit 9: Barakaldo/ Bilbao Exhibition Centre BEC.',
   p66:'From Santander, take the A-8 towards "Bilbao", Exit 9 : Baracaldo / Bilbao Exhibition Centre BEC',
   p7: 'The BEC’s parking has 3 entrances and 3 exits . A, B and C. (See map) Altogether, it has 4,000 spaces divided into 3 levels. Each level is divided into three color-coded areas',
   p8: 'The blue area is located under halls 1 and 2. The orange area is placed under halls 3 and 4. The green area is located under halls 5 and 6.',
   p9: 'The parking ticket paying machines are located throughout the atrium. They are clearly labeled through the letter P for parking . There is an outdoor pedestrian access located next to the Underground station Ansio. (See map). This access has also 2 parking ticket paying machines. The opening hours of the parking are: Gate C: 24 hours Gates A and B: from 7.30 am on',
   p10: 'CONTACT: <a href="mailto:info@bimehackday.net?Subject=Contacto desde bimehackday.net" target="_top">info@bimehackday.net</a>',
  },
  hackx24: {
    breadcrumb: 'Hackx24',
    h4: 'Nodos map',
    titulo: 'Hackx24',
    texto: 'Hackx24 is an encounter between technology developers (hardware and software) which aim to carry out an innovative collaborative project during 24 hours. Besides, partner companies want to reward your work by means of different contests . The best projects will be awarded in the following categories:',
    l1: '<strong> First BIME Hack Day Reward for best development: 1500 € </strong > <br> All projects developed during Hackx24 will be eligible for this award.',
    l2: '<strong> Second Common Reward: 2 Passes for Bilbao BBK Live + 2 Passes for BIME Live </strong> <br> All rewards will be accompanied by these 4 Passes for each winner',
    l3: '<strong> Sponsored Awards: </strong> <br> Each partner company will offer <a target="_blank" href="/#/rewards"> different rewards </a>'
  },
  premiosSeccion: {
    breadcrumbs: 'Rewards',
    titulo: 'Rewards',
    texto: '<strong> 1500 € </strong>BIME Hack Day Reward for best development',
    subtexto: 'Reward for best performance in each node: <strong> TWO PASSES </strong > for <strong> BILBAO BBK LIVE 2014 </strong > and <strong> TWO PASSES </strong> for <strong>BIME LIVE </strong >',
    h4: 'Rewards from our partners',
    spotify: 'Cuenta Premium para un año.',
    deezer: 'Cuenta Premium para un año.',
    aws: 'Cuenta Premium para un año.',
    delirum: 'Pack de videojuegos.',
    asoma: 'Jornada de Formación y asesoramiento.',
    cooking: 'Kit de arduino.',
    gogear: 'Merchandising oficial & Premium Account.',
    mobme: 'Headphones Bluetooth Energy wireless Bt5 dark iron.',
    nvivo: 'Two tickets for any music show in Spain btw 2013/2014 (Max. 100€ both tickets)',
    ludei: 'CocoonJS Premium Account.',
    sca: 'Tablet Nexus 7 for the best develop on Mobile App area.'
  },


  que_esSeccion: {
    breadcrumbs: 'What is BIME Hack Day?',
    titulo: 'What is BIME Hack Day?',
    p1: 'Can you imagine bringing together in the same place the most innovative companies and the best developers?',
    p2: 'There’s just you left! If you love music and new technologies write down this date!',
    p3: 'November 20 and 21',
    p4: 'Spain’s largest unconference meeting, specially created to encourage <strong>CREATIVITY</strong> and <strong> INVENTION </strong>, it will bring together music lovers, fans of new technologies and professionals working at leading companies of this field. Two days during which <strong>MAKERS </strong>, <strong>HACKERS </strong> and <strong>DEVELOPERS </strong> will lay the foundation for the platforms of the future.',
    p5: 'Attendees will have the unique opportunity of testing the latest products in the market, contacting the most important companies, showing their works to a specialized public, growing a community and winning great prizes. An intense day lasting 36 hours which will create the future of music, and especially where there will be something to be learned and to be shared.',
    p6: '<strong> BIME Hack Day </strong > offers you the unique opportunity to participate in workshops and attend lectures, technical presentations on APIs, software development, personal experiences, success stories and a 24 hour hackathon during which you are entitled to receive technical support from our partners.',
  },
  PIE:{
    TITULO:'Follow BIME Hack Day' 
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
    $translateProvider.translations('en', traduccionesEn)
    $translateProvider.preferredLanguage('es');
    $translateProvider.useCookieStorage();
  });
