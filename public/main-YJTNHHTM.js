import{b as pe}from"./chunk-CHYCQ2AE.js";import{d as re,f as ae}from"./chunk-C4SECMBV.js";import{A as oe,B as ne,C as ie,w as ee,x as te}from"./chunk-LSQM6BLU.js";import{d as se,e as y,j as le,l as ce}from"./chunk-J7KBKSMN.js";import"./chunk-ICTHBN6B.js";import{b as X,d as Y,e as Z,f as $,g as q,h as G,i as J,j as K,k as Q}from"./chunk-CJWJOAWH.js";import{d as H,j as W,m as f}from"./chunk-SZWDHQBB.js";import{Bb as c,Cb as B,Ia as I,Jb as g,Na as v,Nb as U,Oa as h,Pa as O,Ra as R,Ta as D,Va as E,Wa as F,Z as A,aa as k,bb as P,db as L,e as x,ga as d,hb as l,ib as s,jb as p,ka as u,kb as N,lb as T,nb as j,oa as M,pa as S,pb as z,qb as b,ua as _,va as w,zb as V}from"./chunk-ISEL6VX3.js";var me=[{path:"login",loadComponent:()=>import("./chunk-SJBDC6AW.js").then(t=>t.LoginComponent)},{path:"home",loadComponent:()=>import("./chunk-HSE4VNVJ.js").then(t=>t.HomeComponent)},{path:"aboutus",loadComponent:()=>import("./chunk-2AWBY2F6.js").then(t=>t.AboutusComponent)},{path:"register",loadComponent:()=>import("./chunk-X3YWLDDF.js").then(t=>t.RegisterAuthComponent)},{path:"ahorcado",loadComponent:()=>import("./chunk-OWOAKX44.js").then(t=>t.AhorcadoComponent)},{path:"mayormenor",loadComponent:()=>import("./chunk-WFFAMQJ4.js").then(t=>t.MayormenorComponent)},{path:"preguntados",loadComponent:()=>import("./chunk-LFDHCW6W.js").then(t=>t.PreguntadosComponent)},{path:"resistenciazombie",loadComponent:()=>import("./chunk-J6G2MQZH.js").then(t=>t.ResistenciazombieComponent)},{path:"chat",loadComponent:()=>import("./chunk-M7WCRQ4G.js").then(t=>t.ChatComponent)},{path:" ",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home",pathMatch:"full"}];var be="@",ye=(()=>{let e=class e{constructor(n,i,r,a,m){this.doc=n,this.delegate=i,this.zone=r,this.animationType=a,this.moduleImpl=m,this._rendererFactoryPromise=null,this.scheduler=d(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-YHKV5HIV.js")).catch(i=>{throw new A(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(n,i){let r=this.delegate.createRenderer(n,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new C(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(m=>{let ve=m.createRenderer(n,i);a.use(ve)}).catch(m=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){O()},e.\u0275prov=k({token:e,factory:e.\u0275fac});let t=e;return t})(),C=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,n,i){this.delegate.insertBefore(e,o,n,i)}removeChild(e,o,n){this.delegate.removeChild(e,o,n)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,n,i){this.delegate.setAttribute(e,o,n,i)}removeAttribute(e,o,n){this.delegate.removeAttribute(e,o,n)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,n,i){this.delegate.setStyle(e,o,n,i)}removeStyle(e,o,n){this.delegate.removeStyle(e,o,n)}setProperty(e,o,n){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,n)),this.delegate.setProperty(e,o,n)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,n){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,n)),this.delegate.listen(e,o,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(be)}};function ue(t="animations"){return E("NgAsyncAnimations"),M([{provide:D,useFactory:(e,o,n)=>new ye(e,o,n,t),deps:[H,Y,F]},{provide:I,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var he={providers:[Q(me),ee(()=>te({projectId:"sala-de-juegos-6a481",appId:"1:1060868848914:web:bb147d11e696e109e3c7cb",storageBucket:"sala-de-juegos-6a481.appspot.com",apiKey:"AIzaSyCWYxD4F04BE-NbyO3jTbDHwXywHDa0qZo",authDomain:"sala-de-juegos-6a481.firebaseapp.com",messagingSenderId:"1060868848914"})),oe(()=>ne()),re(()=>ae()),X(),ue(),{provide:se,useValue:{hasBackdrop:!1}},S(le,pe,ce)]};function Ce(t,e){if(t&1){let o=j();N(0),l(1,"li",9)(2,"a",13),c(3),s()(),l(4,"li",9)(5,"a",14),c(6,"Sala Chat"),s()(),l(7,"li",9)(8,"a",15),z("click",function(){_(o);let i=b();return w(i.logOut())}),c(9,"LogOut"),s()(),T()}if(t&2){let o=b();v(3),B(o.userValue.email)}}function xe(t,e){t&1&&(l(0,"li",9)(1,"a",16),c(2,"LogIn"),s()())}var ge=(()=>{let e=class e{constructor(n,i,r){this.dialog=n,this.router=i,this.miDialog=r,this.navigationSubscription=null,this.authservice=d(ie),this.userObs$=this.authservice.getUser(),this.userObs$.subscribe(a=>{this.userValue=a})}ngOnInit(){this.navigationSubscription=this.router.events.subscribe(n=>{n instanceof $&&(this.dialog.closeAll(),this.miDialog.closeAll())})}logOut(){return x(this,null,function*(){try{yield this.authservice.logOut()}catch(n){console.log(n)}this.router.navigateByUrl("/home")})}};e.\u0275fac=function(i){return new(i||e)(h(y),h(G),h(y))},e.\u0275cmp=u({type:e,selectors:[["app-nav"]],standalone:!0,features:[g],decls:17,vars:2,consts:[["MostrarUsuario",""],[1,"navbar","navbar-expand-lg",2,"background-color","rgb(42, 45, 70)","position","fixed","width","100%","z-index","1000"],[1,"container-fluid",2,"position","relative"],["href","",1,"navbar-brand"],["src","../../../assets/icon.png","alt","Bootstrap","width","65","height","24"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse",2,"position","absolute","top","50%","left","50%","transform","translate(-50%, -50%)"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item","opciones"],["routerLink","home","routerLinkActive","active-route",1,"nav-link","active","text-white","oscurecer"],["routerLink","aboutus","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"],[4,"ngIf","ngIfElse"],[1,"nav-link","text-white","oscurecer",2,"user-select","none"],["routerLink","chat","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"],[1,"nav-link","text-white","oscurecerLogOut",2,"user-select","none","cursor","pointer",3,"click"],["routerLink","login","routerLinkActive","active-route",1,"nav-link","text-white","oscurecer"]],template:function(i,r){if(i&1&&(l(0,"nav",1)(1,"div",2)(2,"a",3),p(3,"img",4),s(),l(4,"button",5),p(5,"span",6),s(),l(6,"div",7)(7,"ul",8)(8,"li",9)(9,"a",10),c(10,"Inicio"),s()(),l(11,"li",9)(12,"a",11),c(13,"Quien Soy"),s()(),P(14,Ce,10,1,"ng-container",12)(15,xe,3,0,"ng-template",null,0,U),s()()()()),i&2){let a=V(16);v(14),L("ngIf",r.userValue!=null)("ngIfElse",a)}},dependencies:[J,K,f,W],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.opciones[_ngcontent-%COMP%]{margin-left:20px}.oscurecer[_ngcontent-%COMP%]:hover{background-color:#999;color:#fff}.oscurecerLogOut[_ngcontent-%COMP%]:hover{background-color:#c04040;color:#fff}"]});let t=e;return t})();var fe=(()=>{let e=class e{constructor(){this.title="SalaDeJuegos"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:2,vars:0,template:function(i,r){i&1&&p(0,"app-nav")(1,"router-outlet")},dependencies:[q,f,ge],styles:['.background-image[_ngcontent-%COMP%]{position:relative;z-index:0}.background-image[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background-image:url(https://i.blogs.es/4d650a/gogga/1366_2000.jpeg);background-size:cover;background-position:center;opacity:.3;z-index:-1}']});let t=e;return t})();Z(fe,he).catch(t=>console.error(t));
