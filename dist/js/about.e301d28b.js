(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"89a1":function(t,e,i){"use strict";i("bc61")},bc61:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var c=i("7a23"),a={class:"pt-4 mt-5"};function n(t,e,i,n,d,b){var h=Object(c["B"])("AboutMe");return Object(c["u"])(),Object(c["f"])("div",a,[Object(c["h"])(h)])}var d=Object(c["K"])("data-v-11cab56a");Object(c["x"])("data-v-11cab56a");var b={class:"container mt-md-5 mt-sm-0"},h={class:"row justify-content-around my-md-3 my-sm-0"},s={class:"col-12 col-md-5"},m={class:"row"},o={class:"col-12 col-md-6"},l={key:0},r=Object(c["h"])("br",null,null,-1),u=Object(c["h"])("br",null,null,-1),j={key:1},O={class:"row"};Object(c["v"])();var w=d((function(t,e,i,a,n,d){var w=Object(c["B"])("SkeletonBox"),f=Object(c["B"])("prismic-rich-text");return Object(c["u"])(),Object(c["f"])("div",b,[Object(c["h"])("div",h,[Object(c["h"])("div",s,[Object(c["h"])("div",m,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.images,(function(t){return Object(c["u"])(),Object(c["f"])("div",{class:"col-12 mb-4",key:t.id},[Object(c["h"])("img",{class:"bio-image lazyload img-fluid","data-src":t.image.url,"data-expand":"-20",alt:"",width:t.image.dimensions.width,height:t.image.dimensions.height},null,8,["data-src","width","height"])])})),128))])]),Object(c["h"])("div",o,[n.textLoaded?(Object(c["u"])(),Object(c["f"])("div",l,[Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":98,"max-width":100}),Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":98,"max-width":100}),Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":70,"max-width":80}),r,u,Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":97,"max-width":100}),Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":98,"max-width":100}),Object(c["h"])(w,{"min-width":99,"max-width":100}),Object(c["h"])(w,{"min-width":70,"max-width":80})])):Object(c["g"])("",!0),n.textLoaded?Object(c["g"])("",!0):(Object(c["u"])(),Object(c["f"])("p",j,[Object(c["h"])(f,{field:n.about,class:"col-sm pb-3"},null,8,["field"])])),Object(c["h"])("div",O,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.links,(function(t){return Object(c["u"])(),Object(c["f"])("div",{class:"col-md-6 col-sm-12 mb-4",key:t},[Object(c["h"])(f,{field:t.list},null,8,["field"])])})),128))])])])])})),f=i("1da1"),v=(i("96cf"),{name:"AboutMe",data:function(){return{about:[],links:[],images:[],textLoaded:!0}},methods:{getContent:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$prismic.client.getSingle("about");case 2:i=e.sent,t.about=i.data.about,t.links=i.data.links,t.images=i.data.gallery,t.textLoaded=!1;case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.getContent()}});i("89a1");v.render=w,v.__scopeId="data-v-11cab56a";var x=v,g={name:"Home",components:{AboutMe:x}};g.render=n;e["default"]=g}}]);
//# sourceMappingURL=about.e301d28b.js.map