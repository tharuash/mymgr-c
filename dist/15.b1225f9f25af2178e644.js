(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VtMw:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),a=u("Ip0R"),i=function(){function l(l,n){this.router=l,this.productService=n}return l.prototype.ngOnInit=function(){var l=this;this.productService.getProducts().subscribe((function(n){l.products=n}),(function(l){console.log(l)}))},l.prototype.detail=function(l){this.router.navigate(["products/detail",l])},l}(),r=u("ZYCi"),s=u("Gdn9"),c=t.tb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,15,"div",[["class","card"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.detail(l.context.$implicit.id)&&t),t}),null,null)),(l()(),t.vb(1,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(2,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.vb(3,0,null,null,0,"img",[["class","img img-thumbnail"],["height","100px"],["src","../../../assets/img/svg/fork.svg"],["style","margin: 10px"],["width","100px"]],null,null,null,null,null)),(l()(),t.vb(4,0,null,null,11,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.vb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Sb(6,null,["",""])),(l()(),t.vb(7,0,null,null,1,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(l()(),t.Sb(8,null,["",""])),(l()(),t.vb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.vb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(11,null,[""," ",""])),(l()(),t.Sb(-1,null,[" for "])),(l()(),t.vb(13,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Sb(14,null,[" ",""])),t.Mb(15,1)],null,(function(l,n){l(n,6,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.type),l(n,11,0,n.context.$implicit.unitQuantity,n.context.$implicit.siUnit);var u=t.Tb(n,14,0,l(n,15,0,t.Ib(n.parent,0),n.context.$implicit.unitPrice));l(n,14,0,u)}))}function d(l){return t.Vb(0,[t.Kb(0,a.d,[t.t]),(l()(),t.vb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["My Products"])),(l()(),t.fb(16777216,null,null,1,null,b)),t.ub(4,278528,null,0,a.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.products)}),null)}function g(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"app-view",[],null,null,null,d,c)),t.ub(1,114688,null,0,i,[r.l,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var p=t.rb("app-view",i,g,{},{},[]),v=u("Zseb"),h=u("yHTb"),m=function(){function l(l,n,u){this.productService=l,this.router=n,this.route=u,this.lineChartData=[{data:[65,44,25,48,12,45,52,32,14,12,15,12],label:"Series A"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Product Sales"}}]}},this.lineChartColours=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.product=new h.a,this.productsOrders=[]}return l.prototype.ngOnInit=function(){var l=this;this.productId=this.route.snapshot.params.id,this.productService.getProductOrders(this.productId).subscribe((function(n){l.productsOrders=n,console.log(n)}),(function(l){console.log(l)})),this.productService.getProduct(this.productId).subscribe((function(n){l.product=n}),(function(l){console.log(l)})),this.productService.getProductSells(this.productId).subscribe((function(n){for(var u=new Array(12),t=0;t<12;t++)u[t]=new Number,u[t]=0;n.forEach((function(l){u[l.month-1]=u[l.month-1]+l.requiredQuantity}));for(var e=0;e<l.lineChartData.length;e++)l.lineChartData[e]={data:u,label:"Product Sells"}}))},l.prototype.chartClicked=function(l){},l.prototype.chartHovered=function(l){},l}(),C=t.tb({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.vb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(2,null,["",""])),(l()(),t.vb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(4,null,["",""])),(l()(),t.vb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(6,null,["",""])),(l()(),t.vb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(8,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.orderStartDate),l(n,6,0,n.context.$implicit.requiredQuantity),l(n,8,0,n.context.$implicit.subTotal)}))}function f(l){return t.Vb(0,[t.Kb(0,a.d,[t.t]),(l()(),t.vb(1,0,null,null,48,"div",[],null,null,null,null,null)),(l()(),t.vb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Sb(3,null,["Product ",""])),(l()(),t.vb(4,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(5,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(6,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.vb(7,0,null,null,0,"img",[["class","img img-thumbnail"],["height","100px"],["src","../../../assets/img/svg/fork.svg"],["style","margin: 10px"],["width","100px"]],null,null,null,null,null)),(l()(),t.vb(8,0,null,null,11,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.vb(9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Sb(10,null,["",""])),(l()(),t.vb(11,0,null,null,1,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(l()(),t.Sb(12,null,["",""])),(l()(),t.vb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.vb(14,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(15,null,[""," ",""])),(l()(),t.Sb(-1,null,[" for "])),(l()(),t.vb(17,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Sb(18,null,[" ",""])),t.Mb(19,1),(l()(),t.vb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Sb(21,null,["Orders on Product ",""])),(l()(),t.vb(22,0,null,null,16,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(23,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.vb(24,0,null,null,14,"div",[["style","overflow-x:auto;"]],null,null,null,null,null)),(l()(),t.vb(25,0,null,null,13,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),t.vb(26,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.vb(27,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.vb(28,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Order Id"])),(l()(),t.vb(30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Date"])),(l()(),t.vb(32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Ordered Quantity"])),(l()(),t.vb(34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Total Amount"])),(l()(),t.vb(36,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,I)),t.ub(38,278528,null,0,a.m,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.vb(39,0,null,null,10,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(40,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Line Chart "])),(l()(),t.vb(42,0,null,null,3,"div",[["class","card-header-actions"]],null,null,null,null,null)),(l()(),t.vb(43,0,null,null,2,"a",[["href","http://www.chartjs.org"]],null,null,null,null,null)),(l()(),t.vb(44,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["docs"])),(l()(),t.vb(46,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.vb(47,0,null,null,2,"div",[["class","chart-wrapper"]],null,null,null,null,null)),(l()(),t.vb(48,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],(function(l,n,u){var t=!0,e=l.component;return"chartHover"===n&&(t=!1!==e.chartHovered(u)&&t),"chartClick"===n&&(t=!1!==e.chartClicked(u)&&t),t}),null,null)),t.ub(49,999424,null,0,v.a,[t.k,v.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"})],(function(l,n){var u=n.component;l(n,38,0,u.productsOrders),l(n,49,0,u.lineChartData,u.lineChartLabels,u.lineChartOptions,u.lineChartType,u.lineChartColours,u.lineChartLegend)}),(function(l,n){var u=n.component;l(n,3,0,u.product.id),l(n,10,0,u.product.name),l(n,12,0,u.product.type),l(n,15,0,u.product.unitQuantity,u.product.siUnit);var e=t.Tb(n,18,0,l(n,19,0,t.Ib(n,0),u.product.unitPrice));l(n,18,0,e),l(n,21,0,u.product.id)}))}function y(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"app-detail",[],null,null,null,f,C)),t.ub(1,114688,null,0,m,[s.a,r.l,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=t.rb("app-detail",m,y,{},{},[]),k=u("gIcY"),T=u("3i2G"),P=u("PSD3"),N=u.n(P),M=function(){function l(l,n){this.productService=l,this.router=n,this.product=new h.a,this.stock=new T.a}return l.prototype.ngOnInit=function(){},l.prototype.register=function(){var l=this;this.product.stock=this.stock,console.log(this.product);var n=new FormData;n.append("product",JSON.stringify(this.product)),n.append("image",this.image),this.productService.addProduct(this.product).subscribe((function(n){N.a.fire({title:"Product Successfully Added.",text:"A stock has been reserved for the product. Please update it.",icon:"success",showCancelButton:!0,cancelButtonText:"Add Another Product",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Go to Stock"}).then((function(n){n.value?l.router.navigate(["stock/view"]):n.dismiss===N.a.DismissReason.cancel&&l.ngOnInit()}))}),(function(l){N.a.fire("Ooops...","Something went wrong. Please Retry.","error")}))},l.prototype.onEvent=function(l){var n=this;console.log(l),this.image=l.target.files[0],console.log(this.image);var u=new FileReader;u.readAsDataURL(l.target.files[0]),u.onload=function(l){n.imgURL=u.result}},l}(),w=t.tb({encapsulation:0,styles:[[""]],data:{}});function U(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,157,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.vb(1,0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.vb(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product"])),(l()(),t.vb(4,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Form"])),(l()(),t.vb(6,0,null,null,144,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.vb(7,0,null,null,143,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ib(l,9).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ib(l,9).onReset()&&e),e}),null,null)),t.ub(8,16384,null,0,k.t,[],null,null),t.ub(9,4210688,null,0,k.k,[[8,null],[8,null]],null,null),t.Nb(2048,null,k.c,null,[k.k]),t.ub(11,16384,null,0,k.j,[[4,k.c]],null,null),(l()(),t.vb(12,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(13,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product Name"])),(l()(),t.vb(15,0,null,null,5,"input",[["class","form-control"],["id","name"],["name","productName"],["placeholder","Alloy Wheels"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ib(l,16)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,16).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,16)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,16)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.product.name=u)&&e),e}),null,null)),t.ub(16,16384,null,0,k.d,[t.C,t.k,[2,k.a]],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.d]),t.ub(18,671744,[["productName",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(20,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(21,0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(22,0,null,null,1,"label",[["for","type"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Product Type"])),(l()(),t.vb(24,0,null,null,17,"select",[["class","form-control"],["id","type"],["name","productType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ib(l,25).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,25).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.product.type=u)&&e),e}),null,null)),t.ub(25,16384,null,0,k.p,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.p]),t.ub(27,671744,[["productType",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(29,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(30,0,null,null,3,"option",[["value","Food"]],null,null,null,null,null)),t.ub(31,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(32,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Food"])),(l()(),t.vb(34,0,null,null,3,"option",[["value","Fashion"]],null,null,null,null,null)),t.ub(35,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(36,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Fashion"])),(l()(),t.vb(38,0,null,null,3,"option",[["value","Decoration"]],null,null,null,null,null)),t.ub(39,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(40,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Decoration"])),(l()(),t.vb(42,0,null,null,66,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(43,0,null,null,32,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t.vb(44,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(45,0,null,null,9,"div",[["class","form-group col-sm-8"]],null,null,null,null,null)),(l()(),t.vb(46,0,null,null,1,"label",[["for","unitQuantity"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Unit Quantity"])),(l()(),t.vb(48,0,null,null,6,"input",[["class","form-control"],["id","unitQuantity"],["name","productUnitQuantity"],["placeholder","Enter quantity per 1 unit of sell"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ib(l,49)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,49).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,49)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,49)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ib(l,50).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ib(l,50).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,50).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.product.unitQuantity=u)&&e),e}),null,null)),t.ub(49,16384,null,0,k.d,[t.C,t.k,[2,k.a]],null,null),t.ub(50,16384,null,0,k.n,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l,n){return[l,n]}),[k.d,k.n]),t.ub(52,671744,[["productUnitQuantity",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(54,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(55,0,null,null,20,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),t.vb(56,0,null,null,1,"label",[["for","siUnit"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["SI Unit"])),(l()(),t.vb(58,0,null,null,17,"select",[["class","form-control"],["id","siUnit"],["name","productSiUnit"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ib(l,59).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,59).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.product.siUnit=u)&&e),e}),null,null)),t.ub(59,16384,null,0,k.p,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.p]),t.ub(61,671744,[["productSiUnit",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(63,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(64,0,null,null,3,"option",[["value","kg"]],null,null,null,null,null)),t.ub(65,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(66,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Kg"])),(l()(),t.vb(68,0,null,null,3,"option",[["value","m"]],null,null,null,null,null)),t.ub(69,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(70,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["m"])),(l()(),t.vb(72,0,null,null,3,"option",[["value","unit"]],null,null,null,null,null)),t.ub(73,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(74,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["unit"])),(l()(),t.vb(76,0,null,null,32,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t.vb(77,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(78,0,null,null,9,"div",[["class","form-group col-sm-8"]],null,null,null,null,null)),(l()(),t.vb(79,0,null,null,1,"label",[["for","unitPrice"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Unit Price"])),(l()(),t.vb(81,0,null,null,6,"input",[["class","form-control"],["id","unitPrice"],["name","productUnitPrice"],["placeholder","Enter product unit price"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ib(l,82)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,82).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,82)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,82)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ib(l,83).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ib(l,83).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,83).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.product.unitPrice=u)&&e),e}),null,null)),t.ub(82,16384,null,0,k.d,[t.C,t.k,[2,k.a]],null,null),t.ub(83,16384,null,0,k.n,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l,n){return[l,n]}),[k.d,k.n]),t.ub(85,671744,[["productUnitPrice",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(87,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(88,0,null,null,20,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),t.vb(89,0,null,null,1,"label",[["for","currencyType"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Currency Type"])),(l()(),t.vb(91,0,null,null,17,"select",[["class","form-control"],["id","currencyType"],["name","productCurrencyType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ib(l,92).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,92).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.product.currencyType=u)&&e),e}),null,null)),t.ub(92,16384,null,0,k.p,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.p]),t.ub(94,671744,[["productCurrencyType",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(96,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(97,0,null,null,3,"option",[["value","USD"]],null,null,null,null,null)),t.ub(98,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(99,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["USD"])),(l()(),t.vb(101,0,null,null,3,"option",[["value","Rs"]],null,null,null,null,null)),t.ub(102,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(103,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Rs"])),(l()(),t.vb(105,0,null,null,3,"option",[["value","EURO"]],null,null,null,null,null)),t.ub(106,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(107,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["Euro"])),(l()(),t.vb(109,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.vb(110,0,null,null,1,"label",[["for","stockType"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Stock Type"])),(l()(),t.vb(112,0,null,null,13,"select",[["class","form-control"],["id","stockType"],["name","productStockType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ib(l,113).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,113).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.stock.stockType=u)&&e),e}),null,null)),t.ub(113,16384,null,0,k.p,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.p]),t.ub(115,671744,[["productStockType",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(117,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(118,0,null,null,3,"option",[["value","ANYTIME_AVAILABLE"]],null,null,null,null,null)),t.ub(119,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(120,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["ANYTIME AVAILABLE"])),(l()(),t.vb(122,0,null,null,3,"option",[["value","INSTANT_PRODUCTION"]],null,null,null,null,null)),t.ub(123,147456,null,0,k.m,[t.k,t.C,[2,k.p]],{value:[0,"value"]},null),t.ub(124,147456,null,0,k.s,[t.k,t.C,[8,null]],{value:[0,"value"]},null),(l()(),t.Sb(-1,null,["INSTANT_PRODUCTION"])),(l()(),t.vb(126,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(127,0,null,null,9,"div",[["class","form-group col-sm-6"]],null,null,null,null,null)),(l()(),t.vb(128,0,null,null,1,"label",[["for","maxQuantity"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Maximum quantity(for a one time stock)"])),(l()(),t.vb(130,0,null,null,6,"input",[["class","form-control"],["id","maxQuantity"],["name","productStockMaximumQuantity"],["placeholder","Quantity units will be considerd as previous given SI units."],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ib(l,131)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,131).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ib(l,131)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ib(l,131)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ib(l,132).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Ib(l,132).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ib(l,132).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.stock.maximumQuantity=u)&&e),e}),null,null)),t.ub(131,16384,null,0,k.d,[t.C,t.k,[2,k.a]],null,null),t.ub(132,16384,null,0,k.n,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l,n){return[l,n]}),[k.d,k.n]),t.ub(134,671744,[["productStockMaximumQuantity",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(136,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(137,0,null,null,13,"div",[["class","form-group col-sm-6"]],null,null,null,null,null)),(l()(),t.vb(138,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.vb(139,0,null,null,2,"div",[["class","form-group col-sm-10"]],null,null,null,null,null)),(l()(),t.vb(140,0,null,null,1,"label",[["for","ava"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Is available to sell?"])),(l()(),t.vb(142,0,null,null,8,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),t.vb(143,0,null,null,7,"label",[["class","switch switch-3d switch-primary"]],null,null,null,null,null)),(l()(),t.vb(144,0,null,null,5,"input",[["checked",""],["class","switch-input"],["id","ava"],["name","productStockIsAvailableOnSell"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ib(l,145).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Ib(l,145).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.stock.isAvailableOnSell=u)&&e),e}),null,null)),t.ub(145,16384,null,0,k.b,[t.C,t.k],null,null),t.Nb(1024,null,k.g,(function(l){return[l]}),[k.b]),t.ub(147,671744,[["productStockIsAvailableOnSell",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,k.h,null,[k.l]),t.ub(149,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.vb(150,0,null,null,0,"span",[["class","switch-slider"]],null,null,null,null,null)),(l()(),t.vb(151,0,null,null,6,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.vb(152,0,null,null,2,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.register()&&t),t}),null,null)),(l()(),t.vb(153,0,null,null,0,"i",[["class","fa fa-dot-circle-o"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Register"])),(l()(),t.vb(155,0,null,null,2,"button",[["class","btn btn-sm btn-danger"],["type","reset"]],null,null,null,null,null)),(l()(),t.vb(156,0,null,null,0,"i",[["class","fa fa-ban"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Reset"]))],(function(l,n){var u=n.component;l(n,18,0,"productName",u.product.name),l(n,27,0,"productType",u.product.type),l(n,31,0,"Food"),l(n,32,0,"Food"),l(n,35,0,"Fashion"),l(n,36,0,"Fashion"),l(n,39,0,"Decoration"),l(n,40,0,"Decoration"),l(n,52,0,"productUnitQuantity",u.product.unitQuantity),l(n,61,0,"productSiUnit",u.product.siUnit),l(n,65,0,"kg"),l(n,66,0,"kg"),l(n,69,0,"m"),l(n,70,0,"m"),l(n,73,0,"unit"),l(n,74,0,"unit"),l(n,85,0,"productUnitPrice",u.product.unitPrice),l(n,94,0,"productCurrencyType",u.product.currencyType),l(n,98,0,"USD"),l(n,99,0,"USD"),l(n,102,0,"Rs"),l(n,103,0,"Rs"),l(n,106,0,"EURO"),l(n,107,0,"EURO"),l(n,115,0,"productStockType",u.stock.stockType),l(n,119,0,"ANYTIME_AVAILABLE"),l(n,120,0,"ANYTIME_AVAILABLE"),l(n,123,0,"INSTANT_PRODUCTION"),l(n,124,0,"INSTANT_PRODUCTION"),l(n,134,0,"productStockMaximumQuantity",u.stock.maximumQuantity),l(n,147,0,"productStockIsAvailableOnSell",u.stock.isAvailableOnSell)}),(function(l,n){l(n,7,0,t.Ib(n,11).ngClassUntouched,t.Ib(n,11).ngClassTouched,t.Ib(n,11).ngClassPristine,t.Ib(n,11).ngClassDirty,t.Ib(n,11).ngClassValid,t.Ib(n,11).ngClassInvalid,t.Ib(n,11).ngClassPending),l(n,15,0,t.Ib(n,20).ngClassUntouched,t.Ib(n,20).ngClassTouched,t.Ib(n,20).ngClassPristine,t.Ib(n,20).ngClassDirty,t.Ib(n,20).ngClassValid,t.Ib(n,20).ngClassInvalid,t.Ib(n,20).ngClassPending),l(n,24,0,t.Ib(n,29).ngClassUntouched,t.Ib(n,29).ngClassTouched,t.Ib(n,29).ngClassPristine,t.Ib(n,29).ngClassDirty,t.Ib(n,29).ngClassValid,t.Ib(n,29).ngClassInvalid,t.Ib(n,29).ngClassPending),l(n,48,0,t.Ib(n,54).ngClassUntouched,t.Ib(n,54).ngClassTouched,t.Ib(n,54).ngClassPristine,t.Ib(n,54).ngClassDirty,t.Ib(n,54).ngClassValid,t.Ib(n,54).ngClassInvalid,t.Ib(n,54).ngClassPending),l(n,58,0,t.Ib(n,63).ngClassUntouched,t.Ib(n,63).ngClassTouched,t.Ib(n,63).ngClassPristine,t.Ib(n,63).ngClassDirty,t.Ib(n,63).ngClassValid,t.Ib(n,63).ngClassInvalid,t.Ib(n,63).ngClassPending),l(n,81,0,t.Ib(n,87).ngClassUntouched,t.Ib(n,87).ngClassTouched,t.Ib(n,87).ngClassPristine,t.Ib(n,87).ngClassDirty,t.Ib(n,87).ngClassValid,t.Ib(n,87).ngClassInvalid,t.Ib(n,87).ngClassPending),l(n,91,0,t.Ib(n,96).ngClassUntouched,t.Ib(n,96).ngClassTouched,t.Ib(n,96).ngClassPristine,t.Ib(n,96).ngClassDirty,t.Ib(n,96).ngClassValid,t.Ib(n,96).ngClassInvalid,t.Ib(n,96).ngClassPending),l(n,112,0,t.Ib(n,117).ngClassUntouched,t.Ib(n,117).ngClassTouched,t.Ib(n,117).ngClassPristine,t.Ib(n,117).ngClassDirty,t.Ib(n,117).ngClassValid,t.Ib(n,117).ngClassInvalid,t.Ib(n,117).ngClassPending),l(n,130,0,t.Ib(n,136).ngClassUntouched,t.Ib(n,136).ngClassTouched,t.Ib(n,136).ngClassPristine,t.Ib(n,136).ngClassDirty,t.Ib(n,136).ngClassValid,t.Ib(n,136).ngClassInvalid,t.Ib(n,136).ngClassPending),l(n,144,0,t.Ib(n,149).ngClassUntouched,t.Ib(n,149).ngClassTouched,t.Ib(n,149).ngClassPristine,t.Ib(n,149).ngClassDirty,t.Ib(n,149).ngClassValid,t.Ib(n,149).ngClassInvalid,t.Ib(n,149).ngClassPending)}))}function A(l){return t.Vb(0,[(l()(),t.vb(0,0,null,null,1,"app-add",[],null,null,null,U,w)),t.ub(1,114688,null,0,M,[s.a,r.l],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.rb("app-add",M,A,{},{},[]),x=u("t/Na"),D=u("rj1t"),G=u("lGQG"),V={title:"Products"},E={title:"Products"},Q={title:"Products"},R=function(){return function(){}}();u.d(n,"ProductModuleNgFactory",(function(){return F}));var F=t.sb(e,[],(function(l){return t.Fb([t.Gb(512,t.j,t.X,[[8,[o.a,p,S,O]],[3,t.j],t.w]),t.Gb(4608,a.p,a.o,[t.t]),t.Gb(4608,k.r,k.r,[]),t.Gb(4608,x.h,x.n,[a.e,t.A,x.l]),t.Gb(4608,x.o,x.o,[x.h,x.m]),t.Gb(5120,x.a,(function(l,n){return[l,new D.a(n)]}),[x.o,G.a]),t.Gb(4608,x.k,x.k,[]),t.Gb(6144,x.i,null,[x.k]),t.Gb(4608,x.g,x.g,[x.i]),t.Gb(6144,x.b,null,[x.g]),t.Gb(4608,x.f,x.j,[x.b,t.q]),t.Gb(4608,x.c,x.c,[x.f]),t.Gb(4608,s.a,s.a,[x.c,G.a]),t.Gb(1073742336,a.c,a.c,[]),t.Gb(1073742336,r.p,r.p,[[2,r.u],[2,r.l]]),t.Gb(1073742336,R,R,[]),t.Gb(1073742336,v.b,v.b,[]),t.Gb(1073742336,k.q,k.q,[]),t.Gb(1073742336,k.e,k.e,[]),t.Gb(1073742336,x.e,x.e,[]),t.Gb(1073742336,x.d,x.d,[]),t.Gb(1073742336,e,e,[]),t.Gb(1024,r.j,(function(){return[[{path:"view",component:i,data:V},{path:"detail/:id",component:m,data:E},{path:"add",component:M,data:Q}]]}),[]),t.Gb(256,x.l,"XSRF-TOKEN",[]),t.Gb(256,x.m,"X-XSRF-TOKEN",[])])}))}}]);