(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Coe3:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),o=u("Ip0R"),i=function(){function l(l,n,u){this.http=l,this.router=n,this.stockService=u}return l.prototype.ngOnInit=function(){var l=this;this.stockService.getStocks().subscribe((function(n){l.stock=n}),(function(l){console.log(l)}))},l.prototype.update=function(l){this.router.navigate(["stock/update",l])},l}(),c=u("t/Na"),b=u("ZYCi"),s=u("8hSh"),r=t.tb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Available"]))],null,null)}function v(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"span",[["class","badge badge-danger"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Not Available"]))],null,null)}function p(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t.vb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(2,null,["",""])),(l()(),t.vb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(4,null,["",""])),(l()(),t.vb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(6,null,["",""])),(l()(),t.vb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(8,null,["",""])),(l()(),t.vb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(10,null,["",""])),(l()(),t.vb(11,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,d)),t.ub(13,16384,null,0,o.n,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,v)),t.ub(15,16384,null,0,o.n,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.vb(16,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t.vb(17,0,null,null,2,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.update(l.context.$implicit.id)&&t),t}),null,null)),(l()(),t.vb(18,0,null,null,0,"i",[["class","fa fa-dot-circle-o"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Update"]))],(function(l,n){l(n,13,0,n.context.$implicit.isAvailableOnSell),l(n,15,0,!n.context.$implicit.isAvailableOnSell)}),(function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.productName),l(n,6,0,n.context.$implicit.stockType),l(n,8,0,n.context.$implicit.maximumQuantity),l(n,10,0,n.context.$implicit.availableQuantity)}))}function g(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock List"])),(l()(),t.vb(2,0,null,null,22,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(3,0,null,null,21,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.vb(4,0,null,null,20,"div",[["style","overflow-x:auto;"]],null,null,null,null,null)),(l()(),t.vb(5,0,null,null,19,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),t.vb(6,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t.vb(7,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.vb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock Id"])),(l()(),t.vb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product Name"])),(l()(),t.vb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock Type"])),(l()(),t.vb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Maximum Quantity"])),(l()(),t.vb(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Currently Available Quantity"])),(l()(),t.vb(18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["On Sell"])),(l()(),t.vb(20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Actions"])),(l()(),t.vb(22,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,p)),t.ub(24,278528,null,0,o.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,24,0,n.component.stock)}),null)}function m(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"app-view",[],null,null,null,g,r)),t.ub(1,114688,null,0,i,[c.c,b.l,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t.rb("app-view",i,m,{},{},[]),I=u("gIcY"),f=u("yHTb"),S=u("3i2G"),k=u("PSD3"),C=u.n(k),y=function(){function l(l,n,u,t){this.stockService=l,this.productService=n,this.route=u,this.router=t,this.product=new f.a,this.stock=new S.a}return l.prototype.ngOnInit=function(){var l=this;this.stockId=this.route.snapshot.params.id,this.productService.getProduct(this.stockId).subscribe((function(n){l.product=n}),(function(l){console.log(l)})),this.stockService.getStock(this.stockId).subscribe((function(n){l.stock=n}),(function(l){console.log(l)}))},l.prototype.update=function(l){var n=this;this.stockService.updateStock(this.stock,l).subscribe((function(l){l.id&&(C.a.fire("Done...","Stock update has completed.","success"),n.router.navigate(["/stock/view"]))}))},l}(),T=u("Gdn9"),A=t.tb({encapsulation:0,styles:[[""]],data:{}});function N(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,78,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(1,0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.vb(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock"])),(l()(),t.vb(4,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Update"])),(l()(),t.vb(6,0,null,null,65,"article",[["class","card-body"]],null,null,null,null,null)),(l()(),t.vb(7,0,null,null,64,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(8,0,null,null,1,"aside",[["class","col-md-6 border-right"]],null,null,null,null,null)),(l()(),t.vb(9,0,null,null,0,"img",[["src","../../../assets/img/svg/fork.svg"]],null,null,null,null,null)),(l()(),t.vb(10,0,null,null,61,"aside",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.vb(11,0,null,null,4,"dl",[["class","item-property"]],null,null,null,null,null)),(l()(),t.vb(12,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product Name"])),(l()(),t.vb(14,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Sb(15,null,["",""])),(l()(),t.vb(16,0,null,null,4,"dl",[["class","item-property"]],null,null,null,null,null)),(l()(),t.vb(17,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product Type"])),(l()(),t.vb(19,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Sb(20,null,["",""])),(l()(),t.vb(21,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(22,0,null,null,1,"label",[["for","stockType"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock Type"])),(l()(),t.vb(24,0,null,null,13,"select",[["class","form-control"],["id","stockType"],["name","productStockType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==t.Ib(l,25).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,25).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.stock.stockType=u)&&e),e}),null,null)),t.ub(25,16384,null,0,I.p,[t.C,t.k],null,null),t.Nb(1024,null,I.g,(function(l){return[l]}),[I.p]),t.ub(27,671744,[["productStockType",4]],0,I.l,[[8,null],[8,null],[8,null],[6,I.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,I.h,null,[I.l]),t.ub(29,16384,null,0,I.i,[[4,I.h]],null,null),(l()(),t.vb(30,0,null,null,3,"option",[["value","ANYTIME_AVAILABLE"]],null,null,null,null,null)),t.ub(31,147456,null,0,I.m,[t.k,t.C,[2,I.p]],{value:[0,"value"]},null),t.ub(32,147456,null,0,I.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["ANYTIME AVAILABLE"])),(l()(),t.vb(34,0,null,null,3,"option",[["value","INSTANT_PRODUCTION"]],null,null,null,null,null)),t.ub(35,147456,null,0,I.m,[t.k,t.C,[2,I.p]],{value:[0,"value"]},null),t.ub(36,147456,null,0,I.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["INSTANT_PRODUCTION"])),(l()(),t.vb(38,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(39,0,null,null,1,"label",[["for","maxQuantity"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Maximum quantity(for a one time stock)"])),(l()(),t.vb(41,0,null,null,6,"input",[["class","form-control"],["id","maxQuantity"],["name","productStockMaximumQuantity"],["placeholder","Quantity units will be considerd as previous given SI units."],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Ib(l,42)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,42).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,42)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,42)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ib(l,43).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ib(l,43).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,43).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.stock.maximumQuantity=u)&&e),e}),null,null)),t.ub(42,16384,null,0,I.d,[t.C,t.k,[2,I.a]],null,null),t.ub(43,16384,null,0,I.n,[t.C,t.k],null,null),t.Nb(1024,null,I.g,(function(l,n){return[l,n]}),[I.d,I.n]),t.ub(45,671744,[["productStockMaximumQuantity",4]],0,I.l,[[8,null],[8,null],[8,null],[6,I.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,I.h,null,[I.l]),t.ub(47,16384,null,0,I.i,[[4,I.h]],null,null),(l()(),t.vb(48,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(49,0,null,null,1,"label",[["for","maxQuantity"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Current availability"])),(l()(),t.vb(51,0,null,null,6,"input",[["class","form-control"],["id","curAvailability"],["name","productStockCurrentAvailability"],["placeholder","no of units available to buy"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Ib(l,52)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,52).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,52)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,52)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ib(l,53).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ib(l,53).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,53).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.stock.availableQuantity=u)&&e),e}),null,null)),t.ub(52,16384,null,0,I.d,[t.C,t.k,[2,I.a]],null,null),t.ub(53,16384,null,0,I.n,[t.C,t.k],null,null),t.Nb(1024,null,I.g,(function(l,n){return[l,n]}),[I.d,I.n]),t.ub(55,671744,[["productStockCurrentAvailability",4]],0,I.l,[[8,null],[8,null],[8,null],[6,I.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,I.h,null,[I.l]),t.ub(57,16384,null,0,I.i,[[4,I.h]],null,null),(l()(),t.vb(58,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(59,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(60,0,null,null,2,"div",[["class","form-group col-sm-10"]],null,null,null,null,null)),(l()(),t.vb(61,0,null,null,1,"label",[["for","ava"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Is available to sell?"])),(l()(),t.vb(63,0,null,null,8,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),t.vb(64,0,null,null,7,"label",[["class","switch switch-3d switch-primary"]],null,null,null,null,null)),(l()(),t.vb(65,0,null,null,5,"input",[["checked",""],["class","switch-input"],["id","ava"],["name","productStockIsAvailableOnSell"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==t.Ib(l,66).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ib(l,66).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.stock.isAvailableOnSell=u)&&e),e}),null,null)),t.ub(66,16384,null,0,I.b,[t.C,t.k],null,null),t.Nb(1024,null,I.g,(function(l){return[l]}),[I.b]),t.ub(68,671744,[["productStockIsAvailableOnSell",4]],0,I.l,[[8,null],[8,null],[8,null],[6,I.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,I.h,null,[I.l]),t.ub(70,16384,null,0,I.i,[[4,I.h]],null,null),(l()(),t.vb(71,0,null,null,0,"span",[["class","switch-slider"]],null,null,null,null,null)),(l()(),t.vb(72,0,null,null,6,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.vb(73,0,null,null,2,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.update(e.product.id)&&t),t}),null,null)),(l()(),t.vb(74,0,null,null,0,"i",[["class","fa fa-dot-circle-o"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Update"])),(l()(),t.vb(76,0,null,null,2,"button",[["class","btn btn-sm btn-danger"],["type","reset"]],null,null,null,null,null)),(l()(),t.vb(77,0,null,null,0,"i",[["class","fa fa-ban"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Reset"]))],(function(l,n){var u=n.component;l(n,27,0,"productStockType",u.stock.stockType),l(n,31,0,"ANYTIME_AVAILABLE"),l(n,32,0,"ANYTIME_AVAILABLE"),l(n,35,0,"INSTANT_PRODUCTION"),l(n,36,0,"INSTANT_PRODUCTION"),l(n,45,0,"productStockMaximumQuantity",u.stock.maximumQuantity),l(n,55,0,"productStockCurrentAvailability",u.stock.availableQuantity),l(n,68,0,"productStockIsAvailableOnSell",u.stock.isAvailableOnSell)}),(function(l,n){var u=n.component;l(n,15,0,u.product.name),l(n,20,0,u.product.type),l(n,24,0,t.Ib(n,29).ngClassUntouched,t.Ib(n,29).ngClassTouched,t.Ib(n,29).ngClassPristine,t.Ib(n,29).ngClassDirty,t.Ib(n,29).ngClassValid,t.Ib(n,29).ngClassInvalid,t.Ib(n,29).ngClassPending),l(n,41,0,t.Ib(n,47).ngClassUntouched,t.Ib(n,47).ngClassTouched,t.Ib(n,47).ngClassPristine,t.Ib(n,47).ngClassDirty,t.Ib(n,47).ngClassValid,t.Ib(n,47).ngClassInvalid,t.Ib(n,47).ngClassPending),l(n,51,0,t.Ib(n,57).ngClassUntouched,t.Ib(n,57).ngClassTouched,t.Ib(n,57).ngClassPristine,t.Ib(n,57).ngClassDirty,t.Ib(n,57).ngClassValid,t.Ib(n,57).ngClassInvalid,t.Ib(n,57).ngClassPending),l(n,65,0,t.Ib(n,70).ngClassUntouched,t.Ib(n,70).ngClassTouched,t.Ib(n,70).ngClassPristine,t.Ib(n,70).ngClassDirty,t.Ib(n,70).ngClassValid,t.Ib(n,70).ngClassInvalid,t.Ib(n,70).ngClassPending)}))}function G(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"app-update",[],null,null,null,N,A)),t.ub(1,114688,null,0,y,[s.a,T.a,b.a,b.l],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.rb("app-update",y,G,{},{},[]),M=u("rj1t"),O=u("lGQG"),x={title:"Stock"},P={title:"Stock"},Q=function(){return function(){}}();u.d(n,"StockModuleNgFactory",(function(){return V}));var V=t.sb(e,[],(function(l){return t.Fb([t.Gb(512,t.j,t.X,[[8,[a.a,h,w]],[3,t.j],t.w]),t.Gb(4608,o.p,o.o,[t.t]),t.Gb(4608,c.h,c.n,[o.e,t.A,c.l]),t.Gb(4608,c.o,c.o,[c.h,c.m]),t.Gb(5120,c.a,(function(l,n){return[l,new M.a(n)]}),[c.o,O.a]),t.Gb(4608,c.k,c.k,[]),t.Gb(6144,c.i,null,[c.k]),t.Gb(4608,c.g,c.g,[c.i]),t.Gb(6144,c.b,null,[c.g]),t.Gb(4608,c.f,c.j,[c.b,t.q]),t.Gb(4608,c.c,c.c,[c.f]),t.Gb(4608,I.r,I.r,[]),t.Gb(4608,s.a,s.a,[c.c,O.a]),t.Gb(4608,T.a,T.a,[c.c,O.a]),t.Gb(1073742336,o.c,o.c,[]),t.Gb(1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),t.Gb(1073742336,Q,Q,[]),t.Gb(1073742336,c.e,c.e,[]),t.Gb(1073742336,c.d,c.d,[]),t.Gb(1073742336,I.q,I.q,[]),t.Gb(1073742336,I.e,I.e,[]),t.Gb(1073742336,e,e,[]),t.Gb(1024,b.j,(function(){return[[{path:"view",component:i,data:x},{path:"update/:id",component:y,data:P}]]}),[]),t.Gb(256,c.l,"XSRF-TOKEN",[]),t.Gb(256,c.m,"X-XSRF-TOKEN",[])])}))}}]);