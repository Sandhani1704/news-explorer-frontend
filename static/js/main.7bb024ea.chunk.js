(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(22),o=n.n(r),i=(n(29),n(16)),l=n(2),u=(n(30),n(3)),d=n(9);n(31),n(32);var p=function(e){var t=e.onLogin,n=e.loggedIn,s=e.loggedOut,r=e.currentUser,o=Object(c.useState)(!1),i=Object(l.a)(o,2),p=i[0],j=i[1],h=Object(u.h)();return Object(a.jsxs)("nav",{className:"header__nav",children:[Object(a.jsx)("button",{className:"header__nav-hamburger ".concat("/saved-news"===h.pathname&&"header__nav-hamburger_black"," ").concat(p&&"header__nav-hamburger_clicked"),onClick:function(){j(!0)}}),Object(a.jsxs)("div",{className:"header__nav-conteiner ".concat(p?"header__nav-conteiner_opened":""),children:[Object(a.jsxs)("div",{className:"header__nav-header",children:[p&&Object(a.jsx)(d.b,{to:"/",className:"header__nav-logo",children:"NewsExplorer"}),Object(a.jsx)("button",{className:"header__nav-close",onClick:function(){j(!1)}})]}),Object(a.jsxs)("ul",{className:"header__nav-list ".concat(p&&"header__nav-list_opened"),children:[Object(a.jsx)("li",{className:"header__nav-list-item ".concat("/"===h.pathname&&"header__nav-list-item_active"),children:Object(a.jsx)(d.b,{className:"header__nav-link ".concat("/saved-news"===h.pathname&&"header__nav-link_black"),to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(a.jsx)("li",{className:"header__nav-list-item ".concat("/saved-news"===h.pathname&&"header__nav-list-item_active_black"),children:n?Object(a.jsx)(d.b,{className:"header__nav-link ".concat("/saved-news"===h.pathname&&"header__nav-link_black"),to:"/saved-news",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}):Object(a.jsx)("button",{onClick:t,className:"header__nav-button",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),Object(a.jsx)("li",{className:"header__nav-list-item",children:n&&Object(a.jsxs)("button",{className:"header__nav-button ".concat("/saved-news"===h.pathname&&"header__nav-button_black"),onClick:s,children:[r.name,Object(a.jsx)("i",{className:"header__nav-logout-icon ".concat("/saved-news"===h.pathname&&"header__nav-logout-icon_black")})]})})]})]})]})},j=s.a.createContext();var h=function(e){var t=e.onLogin,n=e.loggedIn,c=e.loggedOut,r=s.a.useContext(j),o=Object(u.h)();return Object(a.jsxs)("header",{className:"header ".concat("/saved-news"===o.pathname&&"header_black"),children:[Object(a.jsx)(d.b,{to:"/",className:"header__nav-logo ".concat("/saved-news"===o.pathname&&"header__nav-logo_black"),children:"NewsExplorer"}),Object(a.jsx)(p,{onLogin:t,loggedIn:n,loggedOut:c,currentUser:r})]})};n(38);var m=function(e){var t=e.handleSerchNews,n=s.a.useState(""),c=Object(l.a)(n,2),r=c[0],o=c[1],i=s.a.useState(""),u=Object(l.a)(i,2),d=u[0],p=u[1];return Object(a.jsxs)("form",{className:"search-form",name:"search-form",noValidate:!0,onSubmit:function(e){e.preventDefault(),r?(t(r),p("")):p("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")},children:[Object(a.jsx)("h1",{className:"search-form__title",children:"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"}),Object(a.jsx)("p",{className:"search-form__description",children:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."}),Object(a.jsxs)("div",{className:"search-form__input-container",children:[Object(a.jsx)("input",{className:"search-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",name:"search-text",value:r||"",required:!0,onChange:function(e){o(e.target.value)}}),Object(a.jsx)("span",{id:"search-error",className:"search__input-error",children:d}),Object(a.jsx)("button",{type:"submit",className:"search-form__button-find",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})},b=(n(39),n.p+"static/media/avatar-2.3a727bb8.jpg");var g=function(){return Object(a.jsxs)("section",{className:"about",children:[Object(a.jsx)("div",{className:"about__avatar-conteiner",children:Object(a.jsx)("img",{className:"about__avatar",src:b,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),Object(a.jsxs)("div",{className:"about__text-conteiner",children:[Object(a.jsx)("h1",{className:"about__title",children:"A\u043d\u043d\u0430"}),Object(a.jsx)("p",{className:"about__description",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"}),Object(a.jsx)("p",{className:"about__description",children:"\u041f\u0440\u043e\u0448\u043b\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435 \u043d\u0430 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430."}),Object(a.jsx)("p",{className:"about__description",children:"\u041c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0434\u0435\u043b\u044f\u044e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044e \u0441\u0432\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043a\u043e\u0434\u0430. \u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u044e \u0443\u0434\u0435\u043b\u044f\u0442\u044c \u0435\u0433\u043e \u043a\u043d\u0438\u0433\u0430\u043c \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u043c\u0430\u043c. \u041b\u044e\u0431\u043b\u044e \u0431\u0435\u0433\u0430\u0442\u044c \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0435. \u0420\u0430\u043d\u044c\u0448\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u043b\u0430\u0441\u044c \u0442\u0430\u043d\u0446\u0430\u043c\u0438."})]})]})};n(40);var A=function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Supersite, Powered by News API"}),Object(a.jsxs)("nav",{className:"footer__nav",children:[Object(a.jsxs)("ul",{className:"footer__nav-list",children:[Object(a.jsx)("li",{className:"footer__nav-list-item",children:Object(a.jsx)("a",{href:"/",className:"footer__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(a.jsx)("li",{className:"footer__nav-list-item",children:Object(a.jsx)("a",{href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})})]}),Object(a.jsxs)("ul",{className:"footer__social-list",children:[Object(a.jsx)("li",{className:"footer__nav-list-item",children:Object(a.jsx)("a",{href:"https://www.facebook.com/NyushaGalkina",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:Object(a.jsx)("img",{className:"footer__icon-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBoCg+AAAADnRSTlMAP7+fHxDvf2/fgGBfMLCyw3oAAABKSURBVAjXY9B7BwWPGN7BASazhEEOynzBwOAHZU5gCIGJKrDmwdQaML7DZB50YBXsgzAdGBgY9iGYdRCm0gJepTwkbWQz9WDMRwBmXZHXy19HNQAAAABJRU5ErkJggg==",alt:"Facebook"})})}),Object(a.jsx)("li",{className:"footer__nav-list-item",children:Object(a.jsx)("a",{href:"https://github.com/Sandhani1704",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:Object(a.jsx)("img",{className:"footer__icon-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAMAAAB1/u6nAAAAP1BMVEUAAAAYFxcYFxcYFhYZFhYQEBAZFhYYFhYYFhYYFhYYFxcZFhYYFhYaGBgYFxcWFhYYGBgXFxcgICAbFRUZFxfL7TKCAAAAFHRSTlMAH79/7xCvn49f389ggHBQQG8QMPPmRYAAAACnSURBVBjTXZBbFoMgDEQhRBBQq/buf61teRyw85PDZUgmmCFrzb+WXQAkPq4OpWsfVmGSXxr2PCSV7hDegZRFcTbAUQIA0Zj+dANdauUa01fAfasAdkqvtTvgzaQA1NZuxitgCw4z9rUpkGecgDbyHHRrCzlAY6cvBX6nW/OZSaGMU+h5D8Qm1pZiBBNi291NX2Vuj3evjqU62tHVqpeZZLfiPl2zfgA6FAxPNU+C6gAAAABJRU5ErkJggg==",alt:"Github"})})})]})]})]})},_=n(10),O=n(5);n(14);var f=function(e){var t=e.name,n=e.title,c=e.children,s=e.isOpen,r=e.onClose,o=e.onSubmit;return Object(a.jsxs)("section",{className:"popup ".concat(t," ").concat(s&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__overlay"}),Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__button-close-icon",onClick:r}),Object(a.jsx)("h3",{className:"popup__title",children:n}),Object(a.jsx)("form",{className:"popup__form",name:t,onSubmit:o,children:c})]})]})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.buttonText,r=e.onSignup,o=e.onLogin,i=e.message,u=s.a.useState({password:"",email:""}),d=Object(l.a)(u,2),p=d[0],j=d[1],h=s.a.useState({email:!1,password:!1}),m=Object(l.a)(h,2),b=m[0],g=m[1],A=s.a.useState({email:"",password:""}),v=Object(l.a)(A,2),x=v[0],w=v[1];function N(e){var t=e.target,n=t.name,a=t.value;j(Object(O.a)(Object(O.a)({},p),{},Object(_.a)({},n,a))),g(Object(O.a)(Object(O.a)({},b),{},Object(_.a)({},n,e.target.validity.valid))),w(Object(O.a)(Object(O.a)({},x),{},Object(_.a)({},n,e.target.validationMessage)))}s.a.useEffect((function(){j({password:"",email:""}),w({email:"",password:""}),g({email:!1,password:!1})}),[t]);var k=Object.values(b).every(Boolean);return Object(a.jsxs)(f,{name:"popup-signin",title:"\u0412\u0445\u043e\u0434",buttonText:c,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o(p.password,p.email)},children:[Object(a.jsx)("label",{className:"popup__label",children:"Email"}),Object(a.jsx)("input",{className:"popup__input",onChange:N,value:p.email,id:"email-input",type:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",required:!0,minLength:"6",maxLength:"50"}),Object(a.jsx)("span",{id:"email-input-error",className:"popup__input-error ".concat(!b.name&&"popup__input-error_active"),children:x.email}),Object(a.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("input",{className:"popup__input",onChange:N,value:p.password,id:"password-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",required:!0,minLength:"6",maxLength:"50"}),Object(a.jsx)("span",{id:"password-input-error",className:"popup__input-error popup__input-error_active",children:x.password}),Object(a.jsx)("span",{id:"register-error",className:"popup__register-error",children:i}),Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(!k&&"popup__button_inactive"),disabled:!k,children:c}),Object(a.jsxs)("p",{className:"popup__choice",children:["\u0438\u043b\u0438 ",Object(a.jsx)("button",{type:"button",className:"popup__button-link",onClick:r,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.buttonText,r=e.onSignin,o=e.onRegister,i=e.message,u=s.a.useState({password:"",email:"",name:""}),d=Object(l.a)(u,2),p=d[0],j=d[1],h=s.a.useState({email:!1,password:!1,name:!1}),m=Object(l.a)(h,2),b=m[0],g=m[1],A=s.a.useState({email:"",password:"",name:""}),v=Object(l.a)(A,2),x=v[0],w=v[1],N=function(e){var t=e.target,n=t.name,a=t.value;j(Object(O.a)(Object(O.a)({},p),{},Object(_.a)({},n,a))),g(Object(O.a)(Object(O.a)({},b),{},Object(_.a)({},n,e.target.validity.valid))),w(Object(O.a)(Object(O.a)({},x),{},Object(_.a)({},n,e.target.validationMessage)))};s.a.useEffect((function(){j({password:"",email:"",name:""}),w({email:"",password:"",name:""}),g({email:!1,password:!1,name:!1})}),[t]);var k=Object.values(b).every(Boolean);return Object(a.jsxs)(f,{name:"popup-signup",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:c,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o(p.password,p.email,p.name)},children:[Object(a.jsx)("label",{className:"popup__label",children:"Email"}),Object(a.jsx)("input",{className:"popup__input",onChange:N,value:p.email,id:"email",type:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",required:!0,minLength:"6",maxLength:"50"}),Object(a.jsx)("span",{id:"email-error",className:"popup__input-error ".concat(!b.email&&"popup__input-error_active"),children:x.email}),Object(a.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("input",{className:"popup__input",onChange:N,value:p.password,id:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",required:!0,minLength:"6",maxLength:"50"}),Object(a.jsx)("span",{id:"password-error",className:"popup__input-error ".concat(!b.password&&"popup__input-error_active"),children:x.password}),Object(a.jsx)("label",{className:"popup__label",children:"\u0418\u043c\u044f"}),Object(a.jsx)("input",{className:"popup__input",onChange:N,value:p.name,id:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",type:"text",name:"name",required:!0,minLength:"2",maxLength:"50"}),Object(a.jsx)("span",{id:"name-error",className:"popup__input-error ".concat(!b.name&&"popup__input-error_active"),children:x.name}),Object(a.jsx)("span",{id:"register-error",className:"popup__register-error",children:i}),Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(!k&&"popup__button_inactive"),disabled:!k,children:c}),Object(a.jsxs)("p",{className:"popup__choice",children:["\u0438\u043b\u0438 ",Object(a.jsx)("button",{type:"button",className:"popup__button-link",onClick:r,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var w=function(e){var t=e.isOpen,n=e.onClose,c=e.onSignin;return Object(a.jsx)(f,{name:"popup-info",title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!",isOpen:t,onClose:n,children:Object(a.jsx)("p",{className:"popup__choice popup-info__choice",children:Object(a.jsx)("button",{type:"button",onClick:c,className:"popup__button-link",children:"\u0412\u043e\u0439\u0442\u0438"})})})};n(41);var N=function(e){var t=e.tagTitle,n=e.imageLink,c=e.imageAlt,r=e.date,o=e.title,i=e.description,d=e.source,p=e.sourceLink,j=e.loggedIn,h=e.keyword,m=e.handleArticleDelete,b=e.saveArticles,g=e._id,A=e.findMySevedNews,_=e.article,O=e.myArticle,f=e.handleLoginPopupClick,v=Object(u.h)(),x=s.a.useState(!1),w=Object(l.a)(x,2),N=w[0],k=w[1];return console.log(r),s.a.useEffect((function(){b&&k(b.find((function(e){return e.title===o})))}),[b,o]),Object(a.jsxs)("div",{className:"news-card",children:[Object(a.jsxs)("div",{className:"news-card__content-container",children:[Object(a.jsxs)("div",{className:"news-card__image-container",children:["/saved-news"===v.pathname&&Object(a.jsx)("button",{type:"button",className:"news-card__delete-button",onClick:function(){m(g)},children:j&&Object(a.jsx)("span",{className:"news-card__button-tooltip",children:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445"})}),"/"===v.pathname&&Object(a.jsx)("button",{type:"button",className:"news-card__save-button ".concat(N?"news-card__save-button_marked":""),onClick:function(){j?A({keyword:h,title:o,text:i,date:r,source:d,link:p,image:n,article:_,myArticle:O}):f()},children:!j&&Object(a.jsx)("span",{className:"news-card__button-tooltip",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438"})}),"/saved-news"===v.pathname&&Object(a.jsx)("div",{className:"news-card__tag",children:t}),Object(a.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"news-card__source-link",children:Object(a.jsx)("img",{className:"news-card__image",src:n,alt:c})})]}),Object(a.jsx)("p",{className:"news-card__date",children:function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()],", ").concat(t.getFullYear())}(r)}),Object(a.jsx)("h3",{className:"news-card__title",children:o}),Object(a.jsx)("p",{className:"news-card__description",children:i})]}),Object(a.jsx)("p",{className:"news-card__source",children:d})]})};n(42);var k=function(e){var t=e.children;return Object(a.jsx)("div",{className:"news-card-list",children:t})};n(43);var S=function(e){var t=e.articles,n=e.handleSaveNews,c=e.loggedIn,s=e.keyword,r=e.saveArticles,o=e.currentUser,i=e.handleArticleDelete;return Object(a.jsx)("section",{className:"saved-news",children:Object(a.jsx)(k,{children:r.map((function(e,l){return Object(a.jsx)(N,{tagTitle:e.keyword,sourceLink:e.link,imageLink:e.image,imageAlt:e.keyword,date:e.date,title:e.title,description:e.text,source:e.source,_id:e._id,loggedIn:c,handleSaveNews:n,keyword:s,myArticle:e,articles:t,currentUser:o,handleArticleDelete:i,saveArticles:r},l)}))})})};n(44);var y=function(e){var t=e.saveArticles,n=s.a.useContext(j),c=t.map((function(e){return e.keyword})),r=Object(i.a)(new Set(c));function o(e){return e?e[0].toUpperCase()+e.slice(1):e}var l,u="".concat(o(r[0])),d="".concat(o(r[1])),p="".concat(o(r[2])),h="".concat(0!==r.length?"saved-news__keywords":"saved-news__keywords_none"),m="".concat(r.length>3?"saved-news__keywords-span":"saved-news__keywords-span_none"),b="".concat(3===r.length?" ".concat(u,", ").concat(d,", ").concat(p):" ".concat(u,", ").concat(d));return Object(a.jsxs)("section",{className:"saved-news",children:[Object(a.jsx)("h2",{className:"saved-news__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(a.jsx)("p",{className:"saved-news__subtitle",children:"".concat(n.name,", \u0443 \u0432\u0430\u0441 ").concat(t.length," ").concat((l=t.length,l>=5||0===l?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439":l>1&&l<5?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438":1===l?"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f":void 0))}),Object(a.jsxs)("p",{className:h,children:[function(e){return e>=2?"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c":e<2?"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443":void 0}(r.length),Object(a.jsxs)("span",{className:"saved-news__keywords-span",children:[" ",r.length<2?" ".concat(u):"".concat(b)]}),Object(a.jsxs)("span",{className:m,children:[" \u0438 ",r.length-2,function(e){return e>=4?"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c":""}(r.length)]})]})]})};n(45);var C=function(e){var t=e.articles,n=e.keyword,c=e.loggedIn,r=e.handleSaveNews,o=e.saveArticles,i=e.handleArticleDelete,u=e.findMySevedNews,d=e.handleLoginPopupClick,p=s.a.useContext(j),h=s.a.useState([]),m=Object(l.a)(h,2),b=m[0],g=m[1],A=s.a.useState(!1),_=Object(l.a)(A,2),O=_[0],f=_[1];return s.a.useEffect((function(){g(t.slice(0,3)),t.length<=3?f(!1):f(!0)}),[t]),Object(a.jsxs)("main",{className:"main ".concat(b.length>0?"":"main_none"),children:[Object(a.jsx)("h1",{className:"main__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(a.jsx)(k,{children:b.map((function(e,s){return Object(a.jsx)(N,{tagTitle:n,sourceLink:e.url,imageLink:e.urlToImage||"https://ik.arhano.ru/wp-content/uploads/2020/03/shutterstock_126595589-1-1600x900.jpg",imageAlt:n,date:e.publishedAt,title:e.title,description:e.description,source:e.source.name,loggedIn:c,handleSaveNews:r,saveArticles:o,articles:t,keyword:n,article:e,currentUser:p,handleArticleDelete:i,findMySevedNews:u,handleLoginPopupClick:d},s)}))}),O&&Object(a.jsx)("button",{className:"main__showmore-button",onClick:function(){g(t.slice(0,b.length+3)),b.length>=t.length-3&&f(!1)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})};n(46);var B=function(){return Object(a.jsxs)("section",{className:"not-found",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfeSURBVHgB7Z1bWhpJFMdPVaO8OisY8pjEiL0CcAXiCjAr0KxAXYG6goEVRFYgWUFzifgYXMGYt2isU3NOAd4m3Oyq7gbq9335JJFAd/2rTl3OpQE8Ho/H4/F4VhEBGSGKog2A3DbIYFsIXaRL26CL2x7+uvDq7X3Q+lYLcas1tgFkH1C1wvBTExaMVAWIom5ZSlmihixzY2vQN1rrpmlQQY2sRIvfF4bv+y//33UBQG1ALtgA1CQSFqSQLFZJAzS1hgYgNsNwswUZJ3EBuKdLuX6gQVSEgAJqrFOvv4CHX9SDw1uISdS9LkvU+3RnJSA1EPEE4DeJEfYhgyQmADV8AeTaIfXUXWr0Bjd6+Ol9ExzyTIwqja6aVvcnWRPCuQDGtsu1M254stvniPdnNnr6fNdwXZASSQjBQjSzJIRTAaL2d+7xB9Tw9TQa/n/X8ygE0DXBWbH48QRSxokAbG5EkP+HPlygEvuvJ9G0GQpxRpdXRLzbyer88Ca417c7vR9t+gkZx1xru/cjitK7VqsjgG7mlD6xQr1+J2u9fhxmNAT6ksxkLQ2TZEUAnmgDMjm06vsL1V0lbVs/L6Pr59dK3X1O8vpjCzBc118i6G9hcTPzZmcSZDZ5XijRgmEnKREkxOCx8REai974THFwDw2+p8HRiHtiCcDD1vT88OMxLAk0DxwD3dPIJGWWbvfqqNPpfYUlpdPtXdJq7hQc86YRwMs31GKfJyxYUtTD3R79qLheos49CfMmSwb5y0Vaar6VwYZNX7rcrM09AqTM05oZz5e98Rm+RwQ8F1mZD9jutztXF7Bi8HzgyhTNPALY9JDdP0QlF365OS/qQXwmx9GBi6Xp7CZIrh2j0ithel4zuGddF8G69VXRTAKYiVfIEr29BisKH6cL8uIZx5JFZhsBg95fX8XeP8IcTZBDib16YJGpAgx7f3WVe/8IHgUS5K7NuWCGEbBWpqFXW+XeP4JHAS1LGwDr1kbBVAFo9j9SCurgGSD1hZRiF5KA1r7b7N0CzwuoTf7lmCawwOQRICWbnyZYZrCh6+l2++oIHOHyO0wsE8gyWGCiAIGEXRfmhzZ0x+aFGP50gNPvIDMkAlECC0wUQGso0+TbBNtobXyvtLR154N1+R0PDy0OpXTqtIm63XLU7jXB80fa7V5kYx4YPwIw4KDXzAe3pgUtR7+BFNsQk9z4X2EBOAzcMwbZF0IUISZjR0AgZZFGgR8B40DoC41/QUzGjgCNQBOMWqj4nmQRLfInuhsBGjSpG3gB0oI3MeCZiI02ihUX5ImPFyBlvAApM34S1vpmkI3o+RPDtulDTPwIeDNqg5ahsVeJE5ah0IJAx95qLy05vYEIPyEmE44iBDmhzXFEapgIhGCtDFrSplA/nTwK3QdFf+ChlVoyiKWzsgkCAH94ARJkkNKa3xcCdk3mvIafQusWHXz1TYcYIrWo0FkJCRKUyOFCv+fM+Ptassl2ds7KxgsgVUtCUIUEGGXPk/Nkn/56gyBqWv3am6V3PyZjB/nLVqfX10qdJFEzgs/K1IOIHaY5NjraNEqw/gPV/TtXw/xFw1vIJY463/clyKMkkrF5F1zc+hA7xWvsJMwNQcetLVPBxAEm3kjmI/qObQ5158yUuEKHW5s1apR3QsMNdZ7IVUAtO6tQwzewwGSXJGp2OlTAMlHUqXCOAdnR862tD3u2Y45YTFQylIE8cOL4RzaVaCVKfKIAKLEphbA6D7Tb36syyJ2iwr1icfMMHGFi+9VdSFa20ulcWY3vJzNXIn9AE5Kg3bXj+2RGcUZJ7rB5njH+W0uZ+2x+bMZKTd8Jo27YMkNcQCnp1CYTToh3O4C/a2ADMj+0LLYWaTF1Fh+sVPIR3US4aBnwthnmx9HKULyz1YmmjgAXAamLSi63XrUdqDzbYRwGZzKAgyih7PEsYlK0kFNzwWqg10wCGMW1WOlRYHq/EE3b89fMx9E0BxxKKaq2U3QWgVGCou3ez8wswHAuyE7ObIIEQf40MwmKLnNms8ioAhg4Ym6P2LOc2QIsOcP8uAPeu4Aj5hZglL7PJQuWeVU03P84L8vwJp9waM5wsEHzwdKWqzG1kFDXXZ5XxYbrBSVRUydpuPhgUrWQYkVFmHpBGsouc72ShnPL6CC+nFQtpFgCPB500ZHvMowE7vmIUOHS+QBrBUgAq2Ur+XXSZR9twNfP8xn1xttBz18jb538ioh7rkvgWy7cenVMH1ldpHLAQ9foJR84Pq/8yL6LpESwShbKAc/KtDLLxoE0uBdnAWqOincPygFzdJ1Wd1+yNhrmKS7ueiQ4LV9vTJIQXL7+DPG+nrYQL8Ng8HzWNb5LERJ4gIOpPHhML0u0vKulIcSzhj8kh8qFUr++zLtQcCVCgo8wGQrx+DgRrLuOYDPBBOTPfnxsCjmW4hwruBAhhYf4XBcgUGWOYOMQbC04is2OGE+PwjKNXqXP79M3NGw+vcO2CCk/xopWF1KWpeDNz+gRVE/PBRsE5P6+fW2ynk5iA/r/uYJ5jBWIEpkY/vc2zTlNlLLp6iFBNkXIzIPcGA60ff5cMM0h6VpsCAF/P3+f1nDDPwVw5LSJmm5Rr2/ZehTWTNe6qPuEZSKJfYJnCl6EDOBFyABehAzgRcgAXoQM4EXIALOK4DPlHWFyIWiTJiWUwePxeDwej8fjyRb/AUN/y9O8kms9AAAAAElFTkSuQmCC",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u0433\u0440\u0443\u0441\u0442\u043d\u043e\u0439 \u043b\u0443\u043f\u043e\u0439",className:"not-found__image"}),Object(a.jsx)("h2",{className:"not-found__title",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(a.jsx)("p",{className:"not-found__text",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]})},E="https://news-explorer-api.nomoredomains.work",I=new Date,L=I.toISOString().slice(0,10);I.setDate(I.getDate()-7);var P=I.toISOString().slice(0,10);n(47);var F=function(){return Object(a.jsxs)("div",{className:"circle-preloader__conteiner",children:[Object(a.jsx)("i",{className:"circle-preloader"}),Object(a.jsx)("p",{className:"circle-preloader__text",children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})};n(48);var Y=function(){return Object(a.jsx)("section",{className:"server-error",children:Object(a.jsx)("p",{className:"server-error__text",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})},D=function(e){return fetch("".concat(E,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))},T=function(e){return Object(a.jsx)(u.b,{children:function(){return localStorage.getItem("token")?e.children:(e.handleLoginPopupClick(),Object(a.jsx)(u.a,{to:"/"}))}})};var R=function(){var e=s.a.useState({}),t=Object(l.a)(e,2),n=t[0],c=t[1],r=s.a.useState(!1),o=Object(l.a)(r,2),d=o[0],p=o[1],b=s.a.useState(!1),_=Object(l.a)(b,2),O=_[0],f=_[1],N=s.a.useState(!1),k=Object(l.a)(N,2),I=k[0],R=k[1],U=s.a.useState(!1),Q=Object(l.a)(U,2),X=Q[0],G=Q[1],M=s.a.useState([]),z=Object(l.a)(M,2),J=z[0],V=z[1],Z=s.a.useState([]),W=Object(l.a)(Z,2),q=W[0],K=W[1],H=s.a.useState(!1),$=Object(l.a)(H,2),ee=$[0],te=$[1],ne=s.a.useState(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],re=s.a.useState(!1),oe=Object(l.a)(re,2),ie=oe[0],le=oe[1],ue=s.a.useState(""),de=Object(l.a)(ue,2),pe=de[0],je=de[1],he=s.a.useState(""),me=Object(l.a)(he,2),be=me[0],ge=me[1],Ae=s.a.useState(""),_e=Object(l.a)(Ae,2),Oe=_e[0],fe=_e[1],ve=Object(u.g)();function xe(){localStorage.removeItem("token"),localStorage.removeItem("articles"),G(!1),ve.push("/")}var we=function(){var e=localStorage.getItem("token");e&&D(e).then((function(e){e&&(c({id:e._id,name:e.name}),G(!0))}))};function Ne(){p(!0),ge("")}function ke(){f(!1),R(!1),p(!1)}function Se(){f(!1),p(!0),R(!1)}function ye(){if(X)return fetch("".concat(E,"/articles"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e.message)})).then((function(e){var t=e.filter((function(e){return e.owner===n.id}));K(t)})).catch((function(e){console.log(e)}))}function Ce(e){return function(e){var t={keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image};return fetch("".concat(E,"/articles"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e.message)}))}({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image}).then((function(e){K([e].concat(Object(i.a)(q)))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 - "+e)}))}s.a.useEffect((function(){we();var e=localStorage.getItem("articles")?JSON.parse(localStorage.getItem("articles")):[];V(e);var t=localStorage.getItem("keyword");je(t),ye()}),[]),s.a.useEffect((function(){function e(e){"Escape"===e.key&&ke()}function t(e){e.target.classList.contains("popup__overlay")&&ke()}return document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}));var Be=function(e){(function(e){return fetch("".concat(E,"/articles/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e.message)}))})(e).then((function(){var t=q.filter((function(t){return t._id!==e}));K(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 : ",e)}))};return s.a.useEffect((function(){ye()}),[n.id,X]),Object(a.jsx)(j.Provider,{value:n,children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(u.d,{children:[Object(a.jsxs)(T,{handleLoginPopupClick:Ne,loggedIn:X,preloader:ee,currentUser:n,tokenCheck:we,path:"/saved-news",children:[Object(a.jsx)(h,{onLogin:Ne,loggedIn:X,loggedOut:xe}),Object(a.jsx)(y,{saveArticles:q}),Object(a.jsx)(S,{articles:J,keyword:pe,handleSaveNews:Ce,loggedIn:X,saveArticles:q,getMySaveNews:ye,handleArticleDelete:Be}),Object(a.jsx)(A,{})]}),Object(a.jsxs)(u.b,{path:"/",children:[Object(a.jsxs)("div",{className:"header-image",children:[Object(a.jsx)(h,{onLogin:Ne,loggedIn:X,userName:Oe,loggedOut:xe}),Object(a.jsx)(m,{handleSerchNews:function(e){return V([]),localStorage.removeItem("articles"),localStorage.removeItem("keyword"),te(!0),se(!1),le(!1),function(e){return fetch("".concat("https://nomoreparties.co/news/v2/everything?","q=").concat(e,"&apiKey=").concat("4d20677ef0194e41b36c1126d9b92ea8","&from=").concat(P,"&to=").concat(L,"&sortBy=publishedAt&pageSize=100"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return 200===e.status?e.json():Promise.reject("Error: ".concat(e.status))}))}(e).then((function(t){localStorage.setItem("articles",JSON.stringify(t.articles)),localStorage.setItem("keyword",e),te(!1),V(t.articles),je(e),se(!1),0===t.articles.length&&se(!0)})).catch((function(e){console.log(e),le(!0)})).finally((function(){te(!1)}))}})]}),Object(a.jsx)(C,{loggedIn:X,articles:J,keyword:pe,preloader:ee,handleSaveNews:Ce,handleArticleDelete:Be,findMySevedNews:function(e){var t=e.article,n=e.myArticle,a=e.keyword,c=e.title,s=e.text,r=e.date,o=e.source,i=e.link,l=e.image,u=q.find((function(e){return n?e.title===n.title&&e.text===n.text:t?e.title===t.title&&e.text===t.description:void 0}));u?Be(u._id):Ce({keyword:a,title:c,text:s,date:r,source:o,link:i,image:l})},saveArticles:q,handleLoginPopupClick:Ne}),ce&&Object(a.jsx)(B,{}),ee&&Object(a.jsx)(F,{}),ie&&Object(a.jsx)(Y,{}),Object(a.jsx)(g,{}),Object(a.jsx)(v,{isOpen:d,onClose:ke,onSignup:function(){p(!1),f(!0),ge("")},onLogin:function(e,t){(function(e,t){return fetch("".concat(E,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){e.token?(localStorage.setItem("token",e.token),G(!0),ke(),D(e.token).then((function(e){e&&c({id:e._id,name:e.name})}))):e.message?ge(e.message):ge("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).catch((function(e){console.log(e)}))},message:be,buttonText:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)(x,{isOpen:O,onClose:ke,onSignin:Se,onRegister:function(e,t,n){(function(e,t,n){return fetch("".concat(E,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t,name:n})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,t,n).then((function(e){e.data?(R(!0),f(!1),fe(e.data.name)):e.message?ge(e.message):ge("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).catch((function(e){console.log(e)}))},message:be,buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(w,{isOpen:I,onSignin:Se,onClose:ke}),Object(a.jsx)(A,{})]})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(R,{})})}),document.getElementById("root")),U()}],[[49,1,2]]]);
//# sourceMappingURL=main.7bb024ea.chunk.js.map