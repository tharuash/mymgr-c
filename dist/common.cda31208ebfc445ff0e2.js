(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3i2G":function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(){return function(){}}()},"8hSh":function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e("pbEK"),o=e("CcnG"),u=e("t/Na"),s=e("lGQG"),i=function(){function t(t,r){this.http=t,this.auth=r}return t.prototype.getStocks=function(){return this.http.get(n.a+"/products/stocks/"+this.auth.getUserId())},t.prototype.getStock=function(t){return this.http.get(n.a+"/products/stocks/"+this.auth.getUserId()+"/"+t)},t.prototype.updateStock=function(t,r){return this.http.put(n.a+"/products/stocks/"+this.auth.getUserId()+"/"+r,t)},t.ɵprov=o.Zb({factory:function(){return new t(o.ac(u.c),o.ac(s.a))},token:t,providedIn:"root"}),t}()},Gdn9:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e("pbEK"),o=e("CcnG"),u=e("t/Na"),s=e("lGQG"),i=function(){function t(t,r){this.http=t,this.auth=r}return t.prototype.addProduct=function(t){return this.auth.getUserId(),this.http.post(n.a+"/products/"+this.auth.getUserId(),t)},t.prototype.getProducts=function(){return this.http.get(n.a+"/products/"+this.auth.getUserId())},t.prototype.getProduct=function(t){return this.http.get(n.a+"/products/"+this.auth.getUserId()+"/"+t)},t.prototype.getProductOrders=function(t){return this.http.get(n.a+"/products/"+this.auth.getUserId()+"/"+t+"/orders")},t.prototype.getRequiredProducts=function(t){return this.http.get(n.a+"/products/"+this.auth.getUserId()+"/req")},t.prototype.getAllProducts=function(){return this.http.get(n.a+"/products")},t.prototype.getProductToBuy=function(t){return this.http.get(n.a+"/products/buy/"+t)},t.prototype.getProductSells=function(t){return this.http.get(n.a+"/products/"+this.auth.getUserId()+"/"+t+"/sells")},t.ɵprov=o.Zb({factory:function(){return new t(o.ac(u.c),o.ac(s.a))},token:t,providedIn:"root"}),t}()},Rb4e:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(){return function(){this.orderedProducts=[]}}()},kVqo:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e("pbEK"),o=e("CcnG"),u=e("t/Na"),s=e("lGQG"),i=function(){function t(t,r){this.http=t,this.auth=r}return t.prototype.getOrders=function(){return this.http.get(n.a+"/orders/"+this.auth.getUserId())},t.prototype.addManualOrder=function(t){return this.http.post(n.a+"/orders/"+this.auth.getUserId(),t)},t.prototype.getOrder=function(t){return this.http.get(n.a+"/orders/"+this.auth.getUserId()+"/"+t)},t.prototype.updateManualOrder=function(t){return this.http.put(n.a+"/orders/"+this.auth.getUserId(),t)},t.prototype.addOnlineOrder=function(t){return this.http.post(n.a+"/orders/buyer/"+this.auth.getUserId()+'?action=""',t)},t.prototype.getOnlineOrders=function(){return this.http.get(n.a+"/orders/buyer/"+this.auth.getUserId())},t.prototype.updateOnlineOrder=function(t){return this.http.put(n.a+"/orders/buyer/"+this.auth.getUserId()+'?action="u"',t)},t.ɵprov=o.Zb({factory:function(){return new t(o.ac(u.c),o.ac(s.a))},token:t,providedIn:"root"}),t}()},mxDV:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e("pbEK"),o=e("CcnG"),u=e("t/Na"),s=e("lGQG"),i=function(){function t(t,r){this.http=t,this.auth=r}return t.prototype.getComments=function(t){return this.http.get(n.a+"/comments/"+t)},t.prototype.addComment=function(t,r){return this.http.post(n.a+"/comments/"+r,t)},t.prototype.getRate=function(t){return this.http.get(n.a+"/comments/"+t+"/rate")},t.ɵprov=o.Zb({factory:function(){return new t(o.ac(u.c),o.ac(s.a))},token:t,providedIn:"root"}),t}()},yHTb:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(){return function(){this.requiredQuantity=0}}()}}]);