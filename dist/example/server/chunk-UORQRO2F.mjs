import './polyfills.server.mjs';
import{A as _,B as I,E as j,I as B,L as b,M as C,N as D,O as v,a as x,b as w,c as p,d as L,e as E,f as l,g as h,h as y,i as c,j as t,k as i,l as m,m as u,n as a,o as d,p as f,w as F,y as N,z as S}from"./chunk-CKXNLLOH.mjs";var M=(()=>{let e=class e{constructor(){this.isMenuClicked=new x(!1),this.isMenuClicked$=this.isMenuClicked.asObservable()}changeMenuClicked(){this.isMenuClicked.next(!this.isMenuClicked.getValue())}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var R=(()=>{let e=class e{constructor(o){this.menuhandlingdataServic=o}HandleClick(){this.menuhandlingdataServic.changeMenuClicked()}};e.\u0275fac=function(r){return new(r||e)(h(M))},e.\u0275cmp=p({type:e,selectors:[["app-navbarmenu"]],standalone:!0,features:[d],decls:2,vars:0,consts:[[1,"btn","btn-outline-warning","d-lg-none","d-block",3,"click"],[1,"navbar-toggler-icon"]],template:function(r,s){r&1&&(t(0,"button",0),u("click",function(){return s.HandleClick()}),m(1,"span",1),i())}});let n=e;return n})();var A=()=>({exact:!0}),z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-navabr"]],standalone:!0,features:[d],decls:14,vars:6,consts:[["href","index.html",1,"navbar","navbar-dark","bg-dark","text-white","w-100","px-sm-2","px-md-5",2,"height","100px"],[1,"navbar-brand","ms-4","ms-lg-0","align-content-start","w-25","h-100","d-inline"],["src","assets/images/logo.png","alt","logo",1,"img-fluid","m-1","d-inline",2,"height","100%"],[1,"mt-2","m-auto","bg-transparent","text-warning","d-inline"],[1,"m-3","d-inline","w-50","d-flex","flex-row-reverse","text-white"],[1,"bg-transparent","d-none","d-lg-inline",2,"margin-top","1px"],["routerLinkActive","text-warning ","routerLink","/",1,"nav-item","nav-link","d-inline","m-2",3,"routerLinkActiveOptions"],["routerLinkActive","text-warning ","routerLink","about",1,"nav-item","nav-link","d-inline","m-2",3,"routerLinkActiveOptions"],["routerLinkActive","text-warning ","routerLink","ourteam",1,"nav-item","nav-link","d-inline","m-2",3,"routerLinkActiveOptions"]],template:function(r,s){r&1&&(t(0,"div",0)(1,"a",1),m(2,"img",2),t(3,"h1",3),a(4,"D\u0142ugie Bagiety"),i()(),t(5,"div",4)(6,"div",5)(7,"a",6),a(8,"Home"),i(),t(9,"a",7),a(10,"About"),i(),t(11,"a",8),a(12,"Our Team"),i()(),m(13,"app-navbarmenu"),i()()),r&2&&(l(7),c("routerLinkActiveOptions",f(3,A)),l(2),c("routerLinkActiveOptions",f(4,A)),l(2),c("routerLinkActiveOptions",f(5,A)))},dependencies:[R,v,b,C]});let n=e;return n})();var T=()=>({exact:!0}),V=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-menu"]],standalone:!0,features:[d],decls:7,vars:6,consts:[[1,"navbar-nav","w-100","bg-dark","text-white","z-2","d-lg-none","position-absolute","border-1","border-black","border-top","border-bottom",2,"margin-top","1px"],["routerLinkActive","text-warning text","routerLink","/",1,"nav-item","nav-link",3,"routerLinkActiveOptions"],["routerLinkActive","text-warning ","routerLink","about",1,"nav-item","nav-link",3,"routerLinkActiveOptions"],["routerLinkActive","text-warning  ","routerLink","ourteam",1,"nav-item","nav-link",3,"routerLinkActiveOptions"]],template:function(r,s){r&1&&(t(0,"div",0)(1,"a",1),a(2,"Home"),i(),t(3,"a",2),a(4,"About"),i(),t(5,"a",3),a(6,"Our Team"),i()()),r&2&&(l(),c("routerLinkActiveOptions",f(3,T)),l(2),c("routerLinkActiveOptions",f(4,T)),l(2),c("routerLinkActiveOptions",f(5,T)))},dependencies:[v,b,C],styles:[".active[_ngcontent-%COMP%]{color:#b8860b}"]});let n=e;return n})();function U(n,e){n&1&&m(0,"app-menu")}var G=(()=>{let e=class e{constructor(o){this.menuhandlingdataServic=o,this.isClicked=!1,this.title="angProj"}ngOnInit(){this.menuhandlingdataServic.isMenuClicked$.subscribe(o=>{this.isClicked=o})}};e.\u0275fac=function(r){return new(r||e)(h(M))},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:4,vars:1,consts:[[1,"position-fixed","fixed-top"],[4,"ngIf"]],template:function(r,s){r&1&&(t(0,"div",0),m(1,"app-navabr"),y(2,U,1,0,"app-menu",1),i(),m(3,"router-outlet")),r&2&&(l(2),c("ngIf",s.isClicked))},dependencies:[v,B,z,S,V]});let n=e;return n})();var $=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[d],decls:11,vars:0,consts:[[1,"z-1","bg-transparent","text-white","h-100","container","mt-5","bg-dark","align-items-center","justify-content-center","d-flex"],[1,"row","h-50"],[1,"col-12","col-lg-6"],["routerLink","about",1,"btn","btn-warning"],["src","assets/images/bagieta.png","alt","bagieta",1,"w-100"]],template:function(r,s){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),a(4,"Best Baguettes In the World "),i(),t(5,"h5"),a(6,"Welcome to Baguetes Bakery, where we're all about the simple joy of great baguettes. Our golden-crusted loaves are baked fresh daily, delivering that perfect crunch on the outside and soft, fluffy goodness inside. From sandwiches to snacking, our baguettes make every bite a delight. Come taste the difference at Baguetes Bakery"),i(),t(7,"button",3),a(8,"Learn More"),i()(),t(9,"div",2),m(10,"img",4),i()()())},dependencies:[v,b]});let n=e;return n})();var P=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-about"]],standalone:!0,features:[d],decls:35,vars:0,consts:[[1,"container","w-100","h-100","justify-content-center","align-items-center","d-flex","text-white"],[1,"row","w-75"],[1,"col-12","col-lg-6"],["src","assets/images/crafting.png","alt","crafting",2,"width","90%"],[1,"container","w-100","h-100","text-white","text-center"],[1,"row"],[1,"col-12"],[1,"row","pt-2"],[1,"col-12","col-lg-4","p-2"],[2,"height","150px"],["src","assets/images/Gordonek.png","alt","gordon",2,"height","200px"],["src","assets/images/makaroniarz.png","alt","emanuel",1,"",2,"height","200px"],[1,"col-12","col-lg-4"],[2,"height","150px","margin-bottom","8px"],[1,""],["src","assets/images/gessler.png","alt","madzia",1,"",2,"height","200px"]],template:function(r,s){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),m(3,"img",3),i(),t(4,"div",2)(5,"h1"),a(6,"A little bit about our porduct"),i(),t(7,"h4"),a(8," At D\u0142ugie Bagiety, we take immense pride in the art of baguette making, treating each loaf as a masterpiece. Our baguettes are carefully crafted to deliver the perfect blend of crispiness and softness, embodying the essence of traditional French baking with a touch of our unique expertise "),i()()()(),t(9,"div",4)(10,"div",5)(11,"h1",6),a(12,"Expert Opinions"),i()(),t(13,"div",7)(14,"div",8)(15,"div",9)(16,"h1"),a(17,"Gordon Ramsay"),i(),t(18,"h6"),a(19,"Indulge in the baguette's crispy perfection, its aroma a prelude to pure culinary bliss. A testament to baking's artistry, it never fails to satisfy."),i()(),m(20,"img",10),i(),t(21,"div",8)(22,"div",9)(23,"h1"),a(24,"Emmanuel Macron"),i(),t(25,"h6"),a(26,"*Happy Frog Eater Noises*"),i()(),m(27,"img",11),i(),t(28,"div",12)(29,"div",13)(30,"h1"),a(31,"Magda Gessler"),i(),t(32,"h6",14),a(33,"Najlepsze bagietki na \u015Bwiecie"),i()(),m(34,"img",15),i()()())}});let n=e;return n})();var W=(()=>{let e=class e{constructor(){this.teamMember=new x(1),this.teamMember$=this.teamMember.asObservable()}IncriseNumber(){this.teamMember.next(this.teamMember.getValue()+1),this.teamMember.getValue()>=3&&this.teamMember.next(0)}DecreseNumber(){this.teamMember.next(this.teamMember.getValue()-1),this.teamMember.getValue()<0&&this.teamMember.next(2)}SetNumber(o){this.teamMember.next(o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Y(n,e){n&1&&(t(0,"div")(1,"div",15)(2,"div",1),m(3,"img",16),t(4,"h1",17),a(5,"koks"),i()()()())}function Z(n,e){n&1&&(t(0,"div")(1,"div",15)(2,"div",1),m(3,"img",18),t(4,"h1",17),a(5,"Boss"),i()()()())}function ee(n,e){n&1&&(t(0,"div")(1,"h1"),a(2,"bobas3"),i()())}var q=(()=>{let e=class e{constructor(o){this.TeamService=o,this.teamNumber=1}ngOnInit(){this.TeamService.teamMember$.subscribe(o=>{this.teamNumber=o}),console.log(this.teamNumber)}RightArrowHandle(){this.TeamService.IncriseNumber()}LeftArrowHandle(){this.TeamService.DecreseNumber()}ButtonHandle(o){this.TeamService.SetNumber(o)}};e.\u0275fac=function(r){return new(r||e)(h(W))},e.\u0275cmp=p({type:e,selectors:[["app-ourteam"]],standalone:!0,features:[d],decls:19,vars:6,consts:[[1,"z-1","bg-transparent","text-white","h-100","container","mt-5","bg-dark","justify-content-center","align-content-center"],[1,"row"],[1,"col-1","d-flex","align-items-center"],[1,"btn","btn-secondary",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-compact-left"],["fill-rule","evenodd","d","M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"],[1,"col-10","text-info"],[4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-compact-right"],["fill-rule","evenodd","d","M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"],[1,"row","justify-content-center"],[1,"col-4","d-flex","justify-content-center"],["type","button",1,"btn",2,"height","10px",3,"click","ngClass"],["type","button",1,"btn","btn-secondary",3,"click","ngClass"],[1,"container"],["src","assets/images/koks.jpg","alt","koks",1,"col-6",2,"height","300px","width","auto"],[1,"col-6"],["src","assets/images/szefito.jpg","alt","koks",1,"col-6",2,"height","300px","width","auto"]],template:function(r,s){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),u("click",function(){return s.LeftArrowHandle()}),L(),t(4,"svg",4),m(5,"path",5),i()()(),E(),t(6,"div",6),y(7,Y,6,0,"div",7)(8,Z,6,0,"div",7)(9,ee,3,0,"div",7),i(),t(10,"div",2)(11,"button",8),u("click",function(){return s.RightArrowHandle()}),L(),t(12,"svg",9),m(13,"path",10),i()()(),E(),t(14,"div",11)(15,"div",12)(16,"button",13),u("click",function(){return s.ButtonHandle(0)}),i(),t(17,"button",14),u("click",function(){return s.ButtonHandle(1)}),i(),t(18,"button",14),u("click",function(){return s.ButtonHandle(2)}),i()()()()()),r&2&&(l(7),c("ngIf",s.teamNumber===0),l(),c("ngIf",s.teamNumber===1),l(),c("ngIf",s.teamNumber===2),l(7),c("ngClass",s.teamNumber==0?"btn-warning":"btn-secondary"),l(),c("ngClass",s.teamNumber==1?"btn-warning":"btn-secondary"),l(),c("ngClass",s.teamNumber==2?"btn-warning":"btn-secondary"))},dependencies:[S,N]});let n=e;return n})();var te=[{path:"",component:$,title:"Home Page"},{path:"about",component:P,title:"About"},{path:"ourteam",component:q,title:"Our Team"}],J=te;var K={providers:[D(J),I()]};var ne={providers:[j()]},Q=F(K,ne);var ie=()=>_(G,Q),Ge=ie;export{Ge as a};
