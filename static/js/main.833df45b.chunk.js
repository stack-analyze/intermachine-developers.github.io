(this.webpackJsonpintermachine=this.webpackJsonpintermachine||[]).push([[0],{106:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),l=t(42),i=t(7),c=t(12),s=t(5),m=t(9),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("meta",{name:"description",content:"empresa de desarrollo web, aplicaciones multiplataforma y sesiones fotograficas en implementar licencias propietarias"}),r.a.createElement("meta",{name:"keywords",content:"intermachine developers, desarrollo web, aplicaciones multiplataforma, sesiones de fotos, intermachine Cali github intermachine"}),r.a.createElement("meta",{name:"og:title",property:"og:title",content:"Intermachine Developers"}),r.a.createElement("meta",{name:"og:description",property:"og:description",content:"creamos dinanismo para el usuario desarrollado sitios web, aplicaciones multiplataforma y fotografia"}),r.a.createElement("meta",{name:"robots",content:"index, follow"}),r.a.createElement("title",null,"Intermachine Developers")),r.a.createElement("main",{className:"card-panel grey lighten-2 jumbotronStyle"},r.a.createElement("header",{className:"card-content"},r.a.createElement("h1",null,"Intermachine Developers")),r.a.createElement("p",{id:"typewriter"},"creamos dinamismo para el usuario. ",r.a.createElement("br",null)," consiguiendo experiencias unicas con los clientes")))},p=t(35),u=t(36),g=t(37),h=t(43),E=t(38),f=t(44),b=t(39),v=t(25),N=t.n(v);N.a.initializeApp({apiKey:"AIzaSyB1_74-WheE2xiyCZwch98op3g4q9z1x-I",authDomain:"intermachine-developers.firebaseapp.com",databaseURL:"https://intermachine-developers.firebaseio.com",projectId:"intermachine-developers",storageBucket:"intermachine-developers.appspot.com",messagingSenderId:"91359592431",appId:"1:91359592431:web:0910e6fdee63dccd0c801a"});var w=N.a,y="enviado datos...",k=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={nombres:"",phone:"",email:"",asunto:"",mensaje:""},t.onSubmit=function(e){e.preventDefault();var a=w.firestore();a.settings({timestampsInSnapshots:!0});a.collection("users").add({nombres:t.state.nombres,phone:t.state.phone,email:t.state.email,asunto:t.state.asunto,mensaje:t.state.mensaje});t.setState({nombres:"",phone:"",email:"",asunto:"",mensaje:""}),Object(b.toast)({html:y}),console.warn("el cliente ",t.state.nombres," esta de acuerdo con la ley de datos personales")},t.onChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t}return Object(f.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"card"},r.a.createElement("h2",{className:"center-align card-title margin-title"},"Formulario"),r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("fieldset",{className:"row"},r.a.createElement("div",{className:"input-field col m6"},r.a.createElement("label",{htmlFor:"inputNombres4"},"Nombres"),r.a.createElement("input",{type:"text",className:"form-control validate",id:"inputNombres4",name:"nombres",onChange:this.onChange,value:this.state.nombres,required:!0}),r.a.createElement("span",{className:"helper-text","data-error":"por favor digite el nombre y apellido","data-success":"right"},"Nombres y Apellidos")),r.a.createElement("div",{className:"input-field col m6"},r.a.createElement("label",{htmlFor:"inputPhone4"},"Phone"),r.a.createElement("input",{type:"tel",className:"form-control validate",id:"inputPhone4",name:"phone",onChange:this.onChange,value:this.state.phone,required:!0}),r.a.createElement("span",{className:"helper-text","data-error":"por favor digite el numero","data-success":"right"},"numero de Celular"))),r.a.createElement("fieldset",{className:"row"},r.a.createElement("div",{className:"input-field col m6"},r.a.createElement("label",{htmlFor:"inputEmail4"},"Email"),r.a.createElement("input",{type:"email",className:"form-control validate",id:"inputEmail4",name:"email",onChange:this.onChange,value:this.state.email,required:!0}),r.a.createElement("span",{className:"helper-text","data-error":"ingrese un correo valido","data-success":"right"},"Email del cliente")),r.a.createElement("div",{className:"input-field col m6"},r.a.createElement("label",{htmlFor:"inputAsunto4"},"Asunto"),r.a.createElement("input",{type:"text",className:"form-control validate",id:"inputAsunto4",name:"asunto",onChange:this.onChange,value:this.state.asunto,required:!0}),r.a.createElement("span",{className:"helper-text","data-error":"este campo es obligatorio","data-success":"right"},"Motivo"))),r.a.createElement("fieldset",{className:"row"},r.a.createElement("div",{className:"input-field col m12"},r.a.createElement("label",{htmlFor:"inputMensaje4"},"mensaje"),r.a.createElement("textarea",{className:"materialize-textarea validate",id:"inputMensaje4",name:"mensaje",onChange:this.onChange,value:this.state.mensaje,required:!0}),r.a.createElement("span",{className:"helper-text","data-error":"el mensaje no puede estar vacio","data-success":"right"},"Ingrese su Mensaje"))),r.a.createElement("button",{type:"submit",className:"btn waves-effect btn-block light-blue"},"Enviar"))))}}]),a}(n.Component),x=function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6582348179886!2d-76.47307558573729!3d3.4330896523000565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a76fd51b396b%3A0x773fd8b64db0e0dd!2sCra.%2024q%20%2386-26%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1575510068580!5m2!1ses!2sco",className:"maps",allowFullScreen:!0,title:"google maps"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("h2",{className:"card-title"},"intermachine developers"),r.a.createElement("p",{className:"card-stacked"},"desarrollo web, aplicaciones moviles multiplataforma y fotografia. ",r.a.createElement("br",null),"julian cordoba ",r.a.createElement("b",null,"Desarrollador multimedia"),". ",r.a.createElement("br",null),"correo: ",r.a.createElement("a",{href:"mailto:omegamatrix5351@gmail.com"},"omegamatrix5351@gmail.com")," ",r.a.createElement("br",null))))},j=function(e){return r.a.createElement("h1",{className:"center-align flow-text"},e.title)},C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"description",content:"pagina de contacto de intermachine developers para la solicitud de producto con el cliente."}),r.a.createElement("title",null,"intermachine developers pagina de contacto")),r.a.createElement("main",{className:"container"},r.a.createElement(j,{title:"Pagina de Contacto"}),r.a.createElement("section",{className:"row"},r.a.createElement("article",{className:"col l6"},r.a.createElement(k,null)),r.a.createElement("article",{className:"col l6"},r.a.createElement(x,null)))))},S=(t(106),function(e){return r.a.createElement("svg",Object.assign({x:"0px",y:"0px",viewBox:"0 0 200 82.7",enableBackground:"new 0 0 200 82.7"},e),r.a.createElement("text",{transform:"matrix(1.2187 0 0 1 13 75.64)",className:"st0 st1"},"4"),r.a.createElement("text",{transform:"matrix(1.2187 0 0 1 133 73.64)",className:"st0 st1"},"4"),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M81.8 29.2c4.1-5.7 10.7-9.4 18.3-9.4 6.3 0 12.1 2.7 16.1 6.9.6-.4 1.1-.7 1.7-1.1-4.4-4.8-10.8-7.9-17.8-7.9-8.3 0-15.6 4.2-20 10.6.6.2 1.2.5 1.7.9zM118.1 53.7c-4 5.7-10.7 9.5-18.2 9.5-6.3 0-12.1-2.6-16.2-6.8-.6.4-1.1.7-1.7 1.1 4.4 4.8 10.8 7.8 17.9 7.8 8.3 0 15.6-4.3 19.9-10.7-.6-.1-1.2-.5-1.7-.9z"}),r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"360 100 41.3",to:"0 100 41.3",dur:"10s",repeatCount:"indefinite"})),r.a.createElement("circle",{className:"circle",cx:100,cy:41,r:1}),r.a.createElement("defs",null,r.a.createElement("filter",{x:-20,y:-20,width:200,height:200},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2}))),r.a.createElement("path",{className:"st2",d:"M103.8 16.7c.1.3.1.6.1.9 11.6 1.9 20.4 11.9 20.4 24.1 0 13.5-10.9 24.4-24.4 24.4s-24.3-11-24.3-24.4c0-3.2.6-6.3 1.7-9.1-.3-.2-.5-.3-.7-.5-1.2 3-1.9 6.2-1.9 9.6C74.7 55.7 86 67 100 67s25.3-11.3 25.3-25.3c0-12.7-9.4-23.2-21.5-25z"})))}),A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"description",content:"la pagina que solicito no existe en la pagina web error 404 no encotrado"}),r.a.createElement("title",null,"page not found")),r.a.createElement("main",{id:"container"},r.a.createElement(S,null),r.a.createElement("p",{className:"message"},"Page not found")))},I=[{src:"https://firebasestorage.googleapis.com/v0/b/intermachine-developers.appspot.com/o/Web.png?alt=media&token=1d34e25b-3a8c-4f19-9483-d9125479af6a",alt:"web programming",title:"desarrollo web",content:"\n        desarrollo web usando python con django, nodejs con express, php con laravel, \n        desarrollo frontend usado webpack o gulp \n        (gulp es un ejecutor de tareas de javascript y php un lenguaje de lado de servidor \n            se implementara browsersync un servidor de desarrollo para observar los cambios),\n            wordpress y frameworks o librerias basados en componetes.\n            se implementa las bases de datos mysql o mongodb\n        "},{src:"https://firebasestorage.googleapis.com/v0/b/intermachine-developers.appspot.com/o/Sessions.jpg?alt=media&token=f42f5297-4ba8-446e-a257-1b16cd4205d4",alt:"photography sessions",title:"sessiones fotogr\xe1ficas",content:"\n        desarrollo de sesiones fotogr\xe1ficas usando tecnicas como light painting, ambiental, bokeh, multiexposici\xf3n (camara o digital), experimental, monocromatico y fitros (nativos de la camara como digitales).\n        usamos software como Photoshop, lightroom, Gimp, darktable y como opcional Affinity photo.\n        para bautizos, primera comuni\xf3n, 15 a\xf1os, matrimonio y publicitaria.\n        "},{src:"https://firebasestorage.googleapis.com/v0/b/intermachine-developers.appspot.com/o/CrossPlatform.jpg?alt=media&token=fec4c33d-2e6d-4e74-a6e4-158e6ebce345",alt:"cross platform programming",title:"desarrollo multiplataforma",content:"\n        desarrollo multiplaforma usando Ionic, Xamarin, Flutter y React Native.\n        ellos se puede implentar api's en cualquier lenguaje de backend y base de datos\n        dipositivos: Android, dispositivos Apple (Ios) y PWA (aplicaci\xf3nes web progresivas)\n        "}],F=[{titulo:"Historia",classes:"caption center-align gradient1",descripcion:r.a.createElement("p",{className:"center-align"},"sobre una empresa enfocada al desarrollo de sitios o aplicaciones para web, moviles multiplataforma y sesiones fotograficas. el nombre proviene de las palabras en ingles inter-machine siginifica entremaquinas y developers de desarrolladores. usando nuevos conceptos del desarrollo web moderno usando servidores de desarrollo, moviles usando tecnologia web y la entrega de la fotos puede en impreso o digital innovamos con una photobook o album digital an formato aplicacion usando react native o ionic.")},{titulo:"Misi\xf3n",classes:"caption center-align gradient2",descripcion:r.a.createElement("p",{className:"center-align"},"Proveer servicios de desarrollo de aplicaciones o sitios web implementando un stack \xfanico y original. Tambi\xe9n sesiones fotogr\xe1ficas \xfanicas y especiales para recordar, creando experiencias innovadoras con el cliente.")},{titulo:"Visi\xf3n",classes:"caption center-align gradient3",descripcion:r.a.createElement("p",{className:"center-align"},"En tres a\xf1os Seremos la primera empresa implementar el stack de tecnolog\xedas basado en el sitio web de StackShare para el desarrollo de sitio y aplicaciones multiplataforma, y el uso de sesiones de fotos creativas utilizando t\xe9cnicas y \xe1lbum fotogr\xe1ficos con opci\xf3n para publicar en las redes sociales y la creaci\xf3n de \xe1lbumes tipo aplicaci\xf3n usando frameworks de desarrollo multiplataforma fotogr\xe1ficas en Cali.")},{titulo:"Valores",classes:"caption center-align gradient4 white-text",descripcion:r.a.createElement("ul",{className:"center-align"},r.a.createElement("li",null,"pasion."),r.a.createElement("li",null,"honestidad."),r.a.createElement("li",null,"Confianza."),r.a.createElement("li",null,"respeto."),r.a.createElement("li",null,"creatividad."),r.a.createElement("li",null,"mente abierta."),r.a.createElement("li",null,"motivacion."))}],q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("meta",{name:"description",content:"los servicios que ofrece intermachine developers para resolver lo que se va a necesitar."}),r.a.createElement("meta",{name:"keywords",content:"intermachine developers, intermachine desarrollo web, intermachine desarrollo multiplataforma, intemachine fotograf\xeda"}),r.a.createElement("meta",{name:"og:title",property:"og:title",content:"intermachine productos"}),r.a.createElement("meta",{name:"og:description",property:"og:description",content:"los servicios que ofrece intermachine developers para resolver lo que se va a necesitar."}),r.a.createElement("meta",{name:"robots",content:"index, follow"}),r.a.createElement("title",null,"intermachine servicios")),r.a.createElement("main",{className:"row center-cols center-align"},r.a.createElement(j,{title:"Servicios del Intermachine Developers"}),I.map((function(e,a){return r.a.createElement("article",{className:"col m4 s12",key:a},r.a.createElement("section",{className:"card sticky-action small grey lighten-5"},r.a.createElement("section",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"img-stick responsive-img activator",src:e.src,alt:e.alt})),r.a.createElement("section",{className:"card-content"},r.a.createElement("span",{className:"card-title activator"},e.title,r.a.createElement("i",{className:"material-icons right"},"more_vert")),r.a.createElement("p",{className:"grey-text text-darken-4"},r.a.createElement(i.b,{to:"#"},"Mas informaci\xf3n"))),r.a.createElement("section",{className:"card-reveal"},r.a.createElement("h2",{className:"card-title"},e.title,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",{className:"grey-text text-darken-4"},e.content))))}))))},z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("meta",{name:"description",content:"informaci\xf3n de la empresa como la historia, misi\xf3n, visi\xf3n y valores."}),r.a.createElement("meta",{name:"keywords",content:"intermachine developers, intermachine misi\xf3n, intermachine historia, intemachine visi\xf3n, acerca de intermachine"}),r.a.createElement("meta",{name:"og:title",property:"og:title",content:"Acerca de Intermachine"}),r.a.createElement("meta",{name:"og:description",property:"og:description",content:"informaci\xf3n de la empresa como la historia, misi\xf3n, visi\xf3n y valores."}),r.a.createElement("meta",{name:"robots",content:"index, follow"}),r.a.createElement("title",null,"Acerca de Intermachine")),r.a.createElement("main",null,r.a.createElement(j,{title:"Acerca de Intermachine Develepors"}),r.a.createElement(s.Carousel,{options:{fullWidth:!0,indicators:!0}},F.map((function(e,a){return r.a.createElement("article",{className:e.classes,key:a},r.a.createElement("h2",null,e.titulo),e.descripcion)})))))};function B(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{id:"sidenav-image",src:"https://firebasestorage.googleapis.com/v0/b/intermachine-developers.appspot.com/o/menu.jpg?alt=media&token=580bc028-3864-480d-968f-4d95045e8e91",alt:"background"})),r.a.createElement("span",{className:"white-text name"},"Intermachine Developers"),r.a.createElement("span",{className:"white-text email"},"menu mobile"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",className:"sidenav-close"},r.a.createElement("i",{className:"material-icons"},"home")," Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/services",className:"sidenav-close"},r.a.createElement("i",{className:"material-icons"},"collections")," Servicios")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about",className:"sidenav-close"},r.a.createElement("i",{className:"material-icons"},"info_outline")," Acerca de")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/contact",className:"sidenav-close"},r.a.createElement("i",{className:"material-icons"},"account_circle")," Contacto")))}var O=function(){return r.a.createElement("header",{className:"brand-logo"},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/intermachine-developers.appspot.com/o/intermachine.svg?alt=media&token=35798da5-e5e2-48e6-84d9-e16231a29905",alt:"logo",className:"brand-img"}))},P=function(){return r.a.createElement(i.a,null,r.a.createElement(s.Navbar,{brand:r.a.createElement(O,null),alignLinks:"right",sidenav:r.a.createElement(B,null),className:"blue lighten-3"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/services"},"Servicios"),r.a.createElement(i.b,{to:"/about"},"Acerca de"),r.a.createElement(i.b,{to:"/contact"},"Contacto")),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:d}),r.a.createElement(c.a,{path:"/services",component:q}),r.a.createElement(c.a,{path:"/about",component:z}),r.a.createElement(c.a,{path:"/contact",component:C}),r.a.createElement(c.a,{component:A})))},W=t(16),_=t(17),D=function(){return r.a.createElement(s.Button,{floating:!0,fab:{direction:"top",hoverEnabled:!1},className:"black",large:!0,icon:r.a.createElement(s.Icon,null,"pages")},r.a.createElement(s.Button,{floating:!0,className:" whatsapp",node:"a",href:"https://wa.me/573107230981",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:_.d,size:"lg"})),r.a.createElement(s.Button,{floating:!0,className:"github",node:"a",href:"https://github.com/intermachine-developers",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:_.b,size:"lg"})),r.a.createElement(s.Button,{floating:!0,className:"facebook",node:"a",href:"https://www.facebook.com/juliomixtreria/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:_.a,size:"lg"})),r.a.createElement(s.Button,{floating:!0,className:"youtube",node:"a",href:"https://youtube.com/omega5300",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:_.e,size:"lg"})),r.a.createElement(s.Button,{floating:!0,className:"blue",node:"a",href:"https://stackshare.io/intermachine-developers/intermachine-developers",target:"_blank",rel:"noopener noreferrer",icon:r.a.createElement(s.Icon,null,"share")}),r.a.createElement(s.Button,{floating:!0,className:"slack",node:"a",href:"https://intermachined-r171337.slack.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:_.c,size:"lg"})))},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"page-footer footer-copyright blue lighten-5 black-text footer"},r.a.createElement("div",{className:"container"},"\xa9 2019 intermachine developers telefono: +57 (2) 343-4575",r.a.createElement("a",{className:"black-text text-lighten-4 right",href:"http://www.sena.edu.co/",target:"_blank",rel:"noopener noreferrer"},"Sitio de SENA"))))};t(112),t(113);var H=function(){var e=Object(n.useState)(!0),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){new Promise((function(e){return setTimeout((function(){return e()}),2500)})).then((function(){return o(!1)}))})),t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(D,null),r.a.createElement(M,null))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=document.getElementById("root");L.hasChildNodes()?Object(o.hydrate)(r.a.createElement(H,null),L):Object(o.render)(r.a.createElement(H,null),L),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");R?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(a,e)}))}}()},45:function(e,a,t){e.exports=t(114)}},[[45,1,2]]]);
//# sourceMappingURL=main.833df45b.chunk.js.map