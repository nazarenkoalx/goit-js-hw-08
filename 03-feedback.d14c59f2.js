var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,f,u,l=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,f=setTimeout(j,t),c?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=o}function j(){var e=d();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?m(n,o-(e-l)):n}(e))}function O(e){return f=void 0,y&&r?b(e):(r=i=void 0,a)}function S(){var e=d(),n=h(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return T(u);if(g)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},S.flush=function(){return void 0===f?a:O(d())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.elements.email.value||""===e.currentTarget.elements.message.value)return void alert("to continue, plese, fill all the empty fields!");e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear()})),function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(y.elements.email.value=e.email),e.message&&(y.elements.message.value=e.message)}catch(e){e.name,e.message}}();const b={};
//# sourceMappingURL=03-feedback.d14c59f2.js.map
