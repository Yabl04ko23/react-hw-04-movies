(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[4],{65:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(18),s=n(21),c=n(20),i=n(0),o=n(19),h=n(1),u=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={reviews:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;o.a.fetchReviewsInfo(t).then((function(t){e.setState((function(){return{reviews:t.data.results}}))}))}},{key:"render",value:function(){var e=this.state.reviews;return Object(h.jsx)(h.Fragment,{children:e.length>0?Object(h.jsx)("ul",{children:e.map((function(e){return Object(h.jsxs)("div",{className:"reviewItem",children:[Object(h.jsx)("li",{className:"reviewAuthor",children:e.author}),Object(h.jsx)("span",{children:e.content})]},e.id)}))}):Object(h.jsx)("h3",{children:"We don't have any reviews for this movie."})})}}]),n}(i.Component);t.default=u}}]);
//# sourceMappingURL=4.f771c026.chunk.js.map