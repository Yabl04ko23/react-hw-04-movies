(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[0],{12:function(e,t,n){"use strict";t.a={home:"/",movies:"/movies",movieDetails:"/movies/:movieId",cast:"/movies/:movieId/cast",reviews:"/movies/:movieId/reviews"}},19:function(e,t,n){"use strict";var c=n(10),i=n.n(c),a="https://api.themoviedb.org",o="621bc2ed45fa45e70bd11c99e4fa5812";t.a={fetchFilmesOfHomePage:function(){var e="".concat(a,"/3/trending/movie/day?api_key=").concat(o);return i.a.get(e)},fetchFilmesWithQuery:function(e){var t="".concat(a,"/3/search/movie?api_key=").concat(o,"&query=").concat(e);return i.a.get(t)},fetchGetInfoAboutFilm:function(e){var t="".concat(a,"/3/movie/").concat(e,"?api_key=").concat(o);return i.a.get(t)},fetchCastInfo:function(e){var t="".concat(a,"/3/movie/").concat(e,"/credits?api_key=").concat(o);return i.a.get(t)},fetchReviewsInfo:function(e){var t="".concat(a,"/3/movie/").concat(e,"/reviews?api_key=").concat(o);return i.a.get(t)}}},37:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(31),o=n.n(a),r=(n(37),n(38),n(2)),s=n(8),u=n(1);var j=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(s.b,{className:"navText",to:"/",children:"Home "}),Object(u.jsx)(s.b,{className:"navText",to:"/movies",children:"Movies"})]})})})},l=n(12),m=n(17),h=n(18),v=n(21),d=n(20),b=n(19),f=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={filmes:[]},e.componentDidMount=function(){b.a.fetchFilmesOfHomePage().then((function(t){e.setState((function(){return{filmes:t.data.results}}))}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.filmes;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Trending today"}),Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/movies/".concat(e.id),children:e.original_title},e.id)},e.id)}))})]})}}]),n}(c.Component),O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,66))})),x=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,67))}));var p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:l.a.home,component:f}),Object(u.jsx)(r.a,{exact:!0,path:l.a.movies,component:x}),Object(u.jsx)(r.a,{path:l.a.movieDetails,component:O})]})]})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(p,{})})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.3b7cdd81.chunk.js.map