(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),c=n(2),s=n(1),r=(n(9),n(10),n(0)),l=function(t){var e=t.images,n=t.frameWidth,i=t.itemWidth,a=t.step,l=t.animationDuration,o=t.infinite,u=Object(s.useState)(0),m=Object(c.a)(u,2),j=m[0],b=m[1],d=i*(e.length-n);return Object(r.jsxs)("div",{className:"Carousel",children:[Object(r.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*i,"px")},children:e.map((function(t,e){return Object(r.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(-".concat(j,"px)"),transition:"".concat(l,"ms")},children:Object(r.jsx)("img",{src:"".concat(t),style:{width:"".concat(i,"px")},alt:"".concat(e+1)})},t)}))}),Object(r.jsx)("button",{type:"button",onClick:function(){(o||j>0)&&b(j-a*i<0&&o?d:j-a*i)},children:"Prev"}),Object(r.jsx)("button",{"data-cy":"next",type:"button",onClick:function(){(o||j<d)&&b(j+a*i>d&&o?0:j+a*i)},children:"Next"})]})},o=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],u=function(){var t=Object(s.useState)(130),e=Object(c.a)(t,2),n=e[0],i=e[1],a=Object(s.useState)(3),u=Object(c.a)(a,2),m=u[0],j=u[1],b=Object(s.useState)(3),d=Object(c.a)(b,2),h=d[0],p=d[1],g=Object(s.useState)(1e3),O=Object(c.a)(g,2),x=O[0],f=O[1],v=Object(s.useState)(!1),y=Object(c.a)(v,2),I=y[0],C=y[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{"data-cy":"title",children:["Carousel with",o.length," ","images"]}),Object(r.jsx)("label",{htmlFor:"itemId",children:"itemWidth"}),Object(r.jsx)("input",{id:"itemId",type:"number",min:130,max:260,value:n,onChange:function(t){i(+t.target.value)}}),Object(r.jsx)("label",{htmlFor:"frameId",children:"frameWidth"}),Object(r.jsx)("input",{id:"frameId",type:"number",min:1,max:10,value:m,onChange:function(t){j(+t.target.value)}}),Object(r.jsx)("label",{htmlFor:"stepId",children:"Step"}),Object(r.jsx)("input",{id:"stepId",type:"number",min:1,max:10,value:h,onChange:function(t){p(+t.target.value)}}),Object(r.jsx)("label",{htmlFor:"animationId",children:"Animation duration"}),Object(r.jsx)("input",{id:"animationId",type:"number",min:500,max:3e3,value:x,onChange:function(t){f(+t.target.value)}}),Object(r.jsx)("label",{htmlFor:"infiniteId",children:"Infinite"}),Object(r.jsx)("input",{id:"infiniteId",type:"checkbox",checked:I,onChange:function(){return C(!I)}}),Object(r.jsx)(l,{images:o,itemWidth:n,frameWidth:m,step:h,animationDuration:x,infinite:I})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.dd88a95c.chunk.js.map