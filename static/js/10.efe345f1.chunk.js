"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[10],{5573:function(e,t,n){n.d(t,{$w:function(){return m},Df:function(){return d},FL:function(){return f},Xj:function(){return p},ZF:function(){return h},yA:function(){return u}});var r=n(1413),a=n(5861),i=n(7757),o=n.n(i),c=n(4569),s=n.n(c),u="https://image.tmdb.org/t/p/",l=function(){var e=(0,a.Z)(o().mark((function e(t){var n,a,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pathName,a=t.param,i=void 0===a?{}:a,s().defaults.baseURL="https://api.themoviedb.org/3",c=new URLSearchParams((0,r.Z)({api_key:"52716180676151a953209f62b256c6ee"},i)),e.abrupt("return",s().get("".concat(n,"?").concat(c)).then((function(e){return 200!==e.status?Promise.reject("Error: ".concat(e.message)):0===e.data.total_results?Promise.reject("Sorry, no matches found. Please try again."):e.data})).catch((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){return l({pathName:"/trending/movie/day"})},h=function(e){return l({pathName:"/search/movie",param:{query:e}})},f=function(e){return l({pathName:"/movie/".concat(e)})},m=function(e){return l({pathName:"/movie/".concat(e,"/credits")})},p=function(e){return l({pathName:"/movie/".concat(e,"/reviews")})}},2010:function(e,t,n){n.r(t);var r=n(885),a=n(7689),i=n(6731),o=n(2791),c=n(8174),s=n(1966),u=n(5573),l=n(184);t.default=function(){var e,t,n=(0,a.TH)();console.log(n.state);var d=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",h=(0,a.UO)().movieId,f=(0,o.useState)({}),m=(0,r.Z)(f,2),p=m[0],v=m[1],j=p.poster_path,_=p.title,x=p.vote_average,g=p.overview,b=p.genres;return(0,o.useEffect)((function(){(0,u.FL)(h).then((function(e){v(e)})).catch((function(e){return c.Am.error(e)}))}),[h]),console.log(n),(0,l.jsxs)("div",{className:s.Z.page,children:[(0,l.jsx)("button",{type:"button",className:s.Z.btn,children:(0,l.jsx)(i.rU,{to:d,children:"Go back"})}),!(null!==p&&void 0!==p&&p.length)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:j?(0,l.jsx)("img",{src:"".concat(u.yA,"w400/").concat(j),alt:_}):(0,l.jsx)("p",{children:"no image"})}),(0,l.jsx)("h3",{children:_}),(0,l.jsxs)("p",{children:["User Score: ",x?x.toFixed(1):"-"]}),(0,l.jsx)("p",{children:"Overview"}),(0,l.jsx)("p",{children:g||"-"}),(0,l.jsx)("p",{children:"Genres"}),(0,l.jsx)("p",{children:(null===b||void 0===b?void 0:b.map((function(e){return e.name})).join(", "))||"-"}),(0,l.jsxs)("div",{className:s.Z.container,children:["Additional information",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{state:n.state,to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{state:n.state,to:"reviews",children:"Reviews"})})]})]}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Suspense,{fallback:"...loading",children:(0,l.jsx)(a.j3,{})})})]})]})}},1966:function(e,t){t.Z={container:"MovieDetails_container__6fEfu",page:"MovieDetails_page__toqZW",btn:"MovieDetails_btn__qOcdK",form:"MovieDetails_form__SUhRW",input:"MovieDetails_input__t92rt",input_btn:"MovieDetails_input_btn__anL8-"}}}]);
//# sourceMappingURL=10.efe345f1.chunk.js.map