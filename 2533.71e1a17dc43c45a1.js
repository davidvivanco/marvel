"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2533],{2533:(j,h,c)=>{c.r(h),c.d(h,{HomeWebPageModule:()=>y});var g=c(4755),r=c(5030),a=c(712),p=c(7270),m=c(727),u=c(8505),f=c(2099),x=c(3900),P=c(7548),e=c(3020),C=c(8627),v=c(5830),d=c(9485);function _(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-row",22),e.NdJ("click",function(){const l=e.CHM(t).$implicit,J=e.oxw();return e.KtG(J.getCharacters(l.name))}),e.TgZ(1,"ion-col",23),e._UZ(2,"img",24),e.qZA(),e.TgZ(3,"ion-col",25),e._uU(4),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(2),e.Q6J("src","./assets/icon/"+t.icon+".png",e.LSH),e.xp6(2),e.hij(" ",t.label," ")}}function M(n,i){if(1&n&&e._UZ(0,"div",26),2&n){const t=e.oxw();e.Q6J("innerHTML",(null==t.heroeActive?null:t.heroeActive.description)||"No description aviable",e.oJD)}}function b(n,i){if(1&n&&e._UZ(0,"img",27),2&n){const t=e.oxw();e.Q6J("src",(null==t.heroeActive?null:t.heroeActive.thumbnail.path)+"."+(null==t.heroeActive?null:t.heroeActive.thumbnail.extension),e.LSH)}}function O(n,i){1&n&&(e.TgZ(0,"div",28),e._UZ(1,"img",29),e.qZA())}function w(n,i){1&n&&(e.TgZ(0,"div",30),e._uU(1," No coincidences!. Hulk Mad!!!! "),e.qZA())}function A(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",34),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().index,l=e.oxw(2);return e.KtG(l.toggleActiveHeroe(s))}),e._UZ(1,"img",35),e.TgZ(2,"div",36),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.ekj("active",(null==t?null:t.id)===(null==o.state||null==o.state.characterSelected?null:o.state.characterSelected.id)),e.xp6(1),e.ekj("active",(null==t?null:t.id)===(null==o.state||null==o.state.characterSelected?null:o.state.characterSelected.id)),e.Q6J("src",t.thumbnail.path+"."+t.thumbnail.extension,e.LSH),e.xp6(1),e.ekj("active",(null==t?null:t.id)===(null==o.state||null==o.state.characterSelected?null:o.state.characterSelected.id)),e.xp6(1),e.hij(" ",t.name," ")}}function H(n,i){1&n&&e.YNc(0,A,4,8,"ng-template",33)}function Z(n,i){if(1&n&&(e.TgZ(0,"swiper",31),e.YNc(1,H,1,0,null,32),e.qZA()),2&n){const t=e.oxw();e.Q6J("config",t.config),e.xp6(1),e.Q6J("ngForOf",t.heroes)}}function S(n,i){1&n&&e._UZ(0,"ion-spinner",37)}const T=[{path:"",component:(()=>{class n{constructor(t,o,s,l){this.cdr=t,this.store=o,this.api=s,this.formBuilder=l,this.menuConfig=P.k,this.config={slidesPerView:5.2,spaceBetween:5,navigation:!1,pagination:{clickable:!1,enabled:!1},scrollbar:{draggable:!0,enabled:!1}},this.navActive=0,this.subs=new m.w0,this.formGroup=this.formBuilder.group({search:[]}),this.state=this.store.getStateValue(),this.getCharacters(this.menuConfig[0].name)}ngOnInit(){this.subs.add(this.store.getState().subscribe(t=>{var o;this.state=t,console.log("ssd",t),this.heroes=t.characters,(null===(o=this.heroes)||void 0===o?void 0:o.length)>0&&(this.heroeActive=this.state.characterSelected||this.heroes[0]),this.state.characterSelected||(this.state.characterSelected=this.heroeActive)})),this.subs.add(this.formGroup.valueChanges.pipe((0,u.b)(()=>{this.heroes=[],this.store.updateState({...this.state,loading:!0})}),(0,f.g)(500),(0,x.w)(t=>this.api.getCharactersObs(t.search,this.state))).subscribe(t=>{this.heroeActive=null,this.store.updateState({...this.state,characters:t,loading:!1,characterSelected:(null==t?void 0:t.length)>0?t[0]:null})}))}toggleActiveHeroe(t){this.heroeActive=this.heroes[t],this.store.updateState({...this.state,characterSelected:this.heroeActive}),this.cdr.detectChanges()}getCharacters(t,o,s=!1){this.api.getCharacters(t,this.state)}back(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(C.d),e.Y36(v.s),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home-web"]],decls:23,vars:10,consts:[["id","main-content"],[1,"container","flex"],[1,"menu"],[1,"flex","fd-col","ion-padding","ai-c","jc-c"],["width","100","alt","Silhouette of a person's head",2,"position","absolute","top","3%",3,"src"],["class","cp",3,"click",4,"ngFor","ngForOf"],[1,"main"],[1,"ion-padding","ion-no-border"],[1,"ion-padding"],[3,"formGroup"],["mode","ios","formControlName","search",1,"custom-searchbar"],["searchInput",""],[1,"hero","flex",2,"justify-content","space-around"],[1,"flex","fd-col","ion-padding","text"],[1,"fs32","flex","jc-c","ai-c","t-center","uppercase"],["class","ion-margin-top t-center","style","opacity: 0.8",3,"innerHTML",4,"ngIf"],[1,"img"],["class","hero-img","alt","",3,"src",4,"ngIf"],["style","background-color: white; border-radius: 5px","class","flex jc-c ai-c fd-col",4,"ngIf"],["class","flex jc-c ion-margin-top uppercase","style","color: white; font-size: 28px",4,"ngIf"],[3,"config",4,"ngIf"],["color","primary",4,"ngIf"],[1,"cp",3,"click"],["size","2"],["width","30","height","30","alt","Silhouette of a person's head",3,"src"],[1,"text-white","fs18","uppercase",2,"margin-top","4px"],[1,"ion-margin-top","t-center",2,"opacity","0.8",3,"innerHTML"],["alt","",1,"hero-img",3,"src"],[1,"flex","jc-c","ai-c","fd-col",2,"background-color","white","border-radius","5px"],["src","./assets/images/hulk.svg","alt","",1,"hero-img","ion-padding"],[1,"flex","jc-c","ion-margin-top","uppercase",2,"color","white","font-size","28px"],[3,"config"],[4,"ngFor","ngForOf"],["swiperSlide",""],[1,"card","flex","fd-col","jc-c",3,"click"],["width","120","height","120","alt","Silhouette of mountains",1,"thumbnail",3,"src"],[1,"title","t-center","uppercase"],["color","primary"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.YNc(5,_,5,2,"ion-row",5),e.qZA()(),e.TgZ(6,"div",6)(7,"ion-header",7)(8,"ion-toolbar",8)(9,"form",9),e._UZ(10,"ion-searchbar",10,11),e.qZA()()(),e.TgZ(12,"div",12)(13,"div",13)(14,"div",14),e._uU(15),e.qZA(),e.YNc(16,M,1,1,"div",15),e.qZA(),e.TgZ(17,"div",16),e.YNc(18,b,1,1,"img",17),e.YNc(19,O,2,0,"div",18),e.YNc(20,w,2,0,"div",19),e.qZA()(),e.YNc(21,Z,2,2,"swiper",20),e.qZA()()(),e.YNc(22,S,1,0,"ion-spinner",21)),2&t&&(e.xp6(4),e.Q6J("src","./assets/icon/marvel-logo.jpeg",e.LSH),e.xp6(1),e.Q6J("ngForOf",o.menuConfig),e.xp6(4),e.Q6J("formGroup",o.formGroup),e.xp6(6),e.hij(" ",null==o.heroeActive?null:o.heroeActive.name," "),e.xp6(1),e.Q6J("ngIf",o.heroeActive),e.xp6(2),e.Q6J("ngIf",o.heroeActive),e.xp6(1),e.Q6J("ngIf",!o.heroeActive),e.xp6(1),e.Q6J("ngIf",!o.heroeActive),e.xp6(1),e.Q6J("ngIf",null==o.heroes?null:o.heroes.length),e.xp6(1),e.Q6J("ngIf",o.state.loading))},dependencies:[g.sg,g.O5,r._Y,r.JJ,r.JL,d.nF,d.YC,r.sg,r.u,a.wI,a.W2,a.Gu,a.Nd,a.VI,a.PQ,a.sr,a.j9],styles:[".hide[_ngcontent-%COMP%]{display:none!important}@media (min-width: 0px) and (max-width: 567px){.hide-mobile[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 960px){.hide-desktop[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 568px) and (max-width: 959px){.hide-tablet[_ngcontent-%COMP%]{display:none!important}}ion-toolbar[_ngcontent-%COMP%]{--background: black;--border-width: 0}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1120px;margin:0 auto;box-sizing:border-box;padding:0 24px;height:100%}@media (min-width: 1120px){ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{box-sizing:content-box;max-width:1024px;padding:0}}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{background:black;width:30%}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%;background:var(--ion-color-primary);border-top-right-radius:20px;border-bottom-right-radius:20px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:100vh;width:75%;background:black;position:relative}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{width:100%;color:#fff;position:absolute;right:0}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%]{max-width:350px;border-radius:3px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]{position:absolute;bottom:3%;right:0;width:95%;border-radius:20px;padding:16px 16px 16px 20px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer;justify-content:flex-start;max-width:110px;background-color:#fff;border-radius:20px;border:1px solid black;color:#000;min-height:180px;transition:ease-in-out .3s}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-top-left-radius:20px;border-top-right-radius:20px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:10px;padding:10px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title.active[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}"]}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(T),p.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,r.u5,d.kz,r.UX,a.Pc,W]}),n})()}}]);