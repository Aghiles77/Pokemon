(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(15),r=a.n(s),l=a(8),m=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}],o=(a(22),function(e){return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}),p=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},i=a(1),d=function(e){var t=e.pokemon,a=e.borderColor,s=void 0===a?"#009688":a,r=Object(n.useState)(),m=Object(l.a)(r,2),d=m[0],u=m[1],E=Object(i.f)();return c.a.createElement("div",{className:"col s6 m4",onClick:function(){return e=t.id,void E.push("/pokemons/".concat(e));var e},onMouseEnter:function(){u(s)},onMouseLeave:function(){u("#f5f5f5")}},c.a.createElement("div",{className:"card horizontal",style:{borderColor:d}},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,c.a.createElement("b",null,t.name)),c.a.createElement("p",null,o(t.created)),t.types.map((function(e){return c.a.createElement("span",{key:e,className:p(e)},e)}))))))},u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){s(m)}),[]),c.a.createElement("div",null,c.a.createElement("h1",{className:"center"},"Pok\xe9dex"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(d,{key:e.id,pokemon:e,borderColor:"red"})})))))},E=a(6),k=function(e){var t=e.match,a=Object(n.useState)(null),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){m.forEach((function(e){t.params.id===e.id.toString()&&i(e)}))}),[t.params.id]),c.a.createElement("div",null,r?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("h2",{className:"header center"},r.name),c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:r.picture,alt:r.name,style:{width:"250px",margin:"0 auto"}})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("table",{className:"bordered striped"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Nom"),c.a.createElement("td",null,c.a.createElement("strong",null,r.name))),c.a.createElement("tr",null,c.a.createElement("td",null,"Points de vie"),c.a.createElement("td",null,c.a.createElement("strong",null,r.hp))),c.a.createElement("tr",null,c.a.createElement("td",null,"D\xe9g\xe2ts"),c.a.createElement("td",null,c.a.createElement("strong",null,r.cp))),c.a.createElement("tr",null,c.a.createElement("td",null,"Types"),c.a.createElement("td",null,r.types.map((function(e){return c.a.createElement("span",{key:e,className:p(e)},e)})))),c.a.createElement("tr",null,c.a.createElement("td",null,"Date de cr\xe9ation"),c.a.createElement("td",null,o(r.created)))))),c.a.createElement("div",{className:"card-action"},c.a.createElement(E.b,{to:"/"},"Retour")))))):c.a.createElement("h4",{className:"center"},"Aucun pok\xe9mon \xe0 afficher !"))},g=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),c.a.createElement("h1",null,"Hey, tu fou quoi sur cette page?!"),c.a.createElement(E.b,{to:"/",className:"waves-effect waves-red btn-large"},c.a.createElement("b",null,"Retour")))},h=function(){return c.a.createElement(E.a,null,c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal"},c.a.createElement(E.b,{to:"/",className:"brand-logo center"},"Pod\xe9dix"))),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:u}),c.a.createElement(i.a,{exact:!0,path:"/pokemons",component:u}),c.a.createElement(i.a,{exact:!0,path:"/pokemons/:id",component:k}),c.a.createElement(i.a,{component:g}))))};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2f84fe8c.chunk.js.map