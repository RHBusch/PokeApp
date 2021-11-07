let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(t,e){t.addEventListener("click",function(){l(e)})}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrlFront=e.sprites.other.home.front_default,t.height=e.height,t.types=e.types,t.weight=e.weight,t.habitat=e.habitat}).catch(function(t){console.error(t)})}function l(t){o(t).then(function(){!function(t){let e=$(".modal-title"),n=$(".modal-body");e.empty(),n.empty();let o=$("<h1>"+t.name+"</h1>");$(o).addClass("customModalTitle");let l=$("<p>Pokemon Height: "+t.height+" .ft</p>"),i=$("<p>Pokemon Weight: "+t.weight+" .lbs</p>"),c=[];t.types.forEach(t=>{let e=t.type.name;c.push(e)});let a=`Pokemon Type(s): ${c.join(" & ")}`,s=$("<img>");$(s).addClass("modalImgSize"),s.attr("src",t.imageUrlFront),e.append(o),n.append(l),n.append(i),n.append(a),n.append(s)}(t)})}function i(e){"object"==typeof e?t.push(e):console.log("Can't add a non-object")}let c=document.querySelector("#searchForm");return c.addEventListener("input",()=>{let t=document.querySelectorAll(".list-group-item"),e=c.value.toLowerCase();t.forEach(function(t){t.innerText.toLowerCase().indexOf(e)>-1?t.style.display="":t.style.display="none"})}),{getAll:function(){return t},add:i,addListItem:function(t){let e=document.querySelector(".pokemonList"),o=document.createElement("li");o.classList.add("list-group-item","col-xl-3","col-lg-4","col-md-6");let l=document.createElement("button");l.innerText=t.name,l.classList.add("customButton"),l.classList.add("btn"),l.classList.add("btn-block"),l.classList.add("btn-outline-dark"),l.classList.add("btn-active"),l.setAttribute("data-toggle","modal"),l.setAttribute("data-target","#modal-container"),n(l,t),o.appendChild(l),e.appendChild(o)},eventListenerButton:n,loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){i({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:l}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});let caretBtn=document.getElementById("btn-top");function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?caretBtn.style.display="block":caretBtn.style.display="none"}function backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},caretBtn.addEventListener("click",backToTop);
