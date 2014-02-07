/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-teststyles-prefixes
 */window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function i(e,t){return r(m.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}var a="2.7.1",f={},l=t.documentElement,c="modernizr",h=t.createElement(c),p=h.style,d,v={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),g={},y={},b={},w=[],E=w.slice,S,x=function(e,n,r,i){var s,o,u,a,f=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:c+(r+1),f.appendChild(u);return s=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),f.id=c,(h?f:p).innerHTML+=s,p.appendChild(f),h||(p.style.background="",p.style.overflow="hidden",a=l.style.overflow,l.style.overflow="hidden",l.appendChild(p)),o=n(f,e),h?f.parentNode.removeChild(f):(p.parentNode.removeChild(p),l.style.overflow=a),!!o},T={}.hasOwnProperty,N;!s(T,"undefined")&&!s(T.call,"undefined")?N=function(e,t){return T.call(e,t)}:N=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=E.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(E.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(E.call(arguments)))};return r}),g.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:x(["@media (",m.join("touch-enabled),("),c,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9}),n};for(var C in g)N(g,C)&&(S=C.toLowerCase(),f[S]=g[C](),w.push((f[S]?"":"no-")+S));return f.addTest=function(e,t){if(typeof e=="object")for(var r in e)N(e,r)&&f.addTest(r,e[r]);else{e=e.toLowerCase();if(f[e]!==n)return f;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(l.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),h=d=null,f._version=a,f._prefixes=m,f.testStyles=x,f}(this,this.document);