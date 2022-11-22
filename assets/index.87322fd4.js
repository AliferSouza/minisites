(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();function l(e){history.pushState(null,null,e)}function u(e){window.document.querySelector("#app").innerHTML=e()}function s(e){window.document.location.pathname.replace(/^.*\//g,"");const o=window.location.hash.replace(/([?][a-zA-Z0-9]*)/,"").replace("#","");e[o]?u(e[o]):u(e.home),window.document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",n=>{n.target.matches("[ali-link]")&&(n.preventDefault(),l(n.target.href))})})}function f(e,t){localStorage.setItem(e,JSON.stringify(t)||"[]")}function g(e){return`?data=${JSON.stringify(e)}`}function a(e){return window.document.querySelector(e)}function m(e,t){const o=JSON.parse(localStorage.getItem(e)),n=JSON.parse(localStorage.getItem(t));return g({a:o,b:n})}function x(e,t){const o=JSON.parse(localStorage.getItem(e)||"[]");o.push(t),localStorage.setItem(e,JSON.stringify(o))}function h(e){return window.routertMiniSite=()=>{l("#gerarLinks"),s({gerarLinks:p})},`
    <button onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `}function b(e){const t=e;let o="";return t.forEach(n=>{o+=`       
        <a href="${n.URL}" class="link" style="" target="_blank">
            <img class="icone"
                src="${n.ICONE}">
            <h1>${n.NOME_ICONE}</h1>
        </a>      
        `}),o}function d(){const e=JSON.parse(localStorage.getItem("dono")),t=JSON.parse(localStorage.getItem("link")),o=document.querySelector("head"),n=document.querySelector("title");return o.innerHTML+=`<link rel="icon" type="image/svg+xml" href="${e.LogoImput}" />`,n.innerHTML=`${e.Nome}`,`

    
    <div class="componete-link">  
   
    <div class="container-link">
 
    ${localStorage.hasOwnProperty("dono")?h():""}         
    <img src="${e.LogoImput}" class="logo"  loading=lazy  class="mini-site-logo">          
    </div> 
     <span>${e.Nome}</span>

    <h1 style="color:" > </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>
       
   ${b(t)}
      
    <br>    
    <h1  style=" color:"> </h1>
    </a>
    </div>
    <div>
`}function p(){const e=[];return m("dono","link"),window.pegar=(t,o)=>{const i={URL:a(".url").value,ICONE:o,NOME_ICONE:t};e.push(i)},window.salvarLink=()=>{const t=a(".url").value,o=e[e.length-1];if(!t)alert("preencha o campo URL!");else for(x("link",o),a("form").reset(),a(".buttonSite").innerHTML='<input type="button" value="miniSite" onclick="link()">';e.length;)e.pop()},window.link=()=>{l("#minisite"),s({minisite:d})},`
    <div class="container">
    <div class="forms">

        <div class="form login">

            <span class="title">Crie seus links</span>

            <form action="#">

                <div class="input-field">
                    <input type="text" class="url" placeholder="" required>
                </div>

                <div class="input-field" >

                    <fieldset class="radio-image escolhaFoto">
                        <label for="M">
                            
                            <img src=".././img/facebook.png"id="facebook" onclick="pegar(id, src)" name="facebook" class="escolha" alt="facebook"
                                height="45px">
                        </label>

                        <label for="F">
                           
                            <img src=".././img/instagram.png" id="instagram" onclick="pegar(id, src)"  class="escolha" alt="instagram"
                                height="45px">
                        </label>

                        <label for="A">
                           
                            <img src=".././img/whatsapp.png" id="whatsapp" onclick="pegar(id, src)"  class="escolha" alt="whatsapp"
                                height="45px">
                        </label>
                        <label for="B">
                            
                            <img src=".././youtube.png" id="youtube" onclick="pegar(id, src)" class="escolha" alt="youtube" height="45px">
                        </label>
                    </fieldset>

                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLink()">
                </div>
                <br />
                <div class="buttonSite">
                ${localStorage.hasOwnProperty("link")?'<input type="button" value="miniSite" onclick="link()">':""}      
                <div>   
               </form>

        </div>
    </div>
</div>
  
    `}function v(){const e=document.querySelector("head");return e.innerHTML+='<link rel="icon" type="image/svg+xml" href=".././img/facebook.png" />',window.salvarLoja=()=>{const t=a(".Name").value,o=a(".Cor").value,n=a(".Logo").files[0],i=new FileReader;i.addEventListener("load",()=>{const r=i.result;!t||!n||!o?alert("Valores obrigatorios para todos os campos"):(f("dono",{Nome:t,LogoImput:r,Cor:o}),l("#gerarLinks"),s({gerarLinks:p}))}),i.readAsDataURL(n)},`
<div class="container">
    <div class="forms">
        <div class="form login">
            <span class="title">Crie seu mini MINI-SITE</span>

            <form action="#">
                <div class="input-field">
                    <input type="text" class="Name" placeholder="Digite o nome" required>
                </div>

                <div class="input-field">
                    <input type="file" class="Logo" placeholder="" accept="image/png, image/jpeg" multiple required >
                </div>

                <div class="input-field">
                    <input type="text" class="Cor" placeholder="Cor #fff hexadecimal " required>
                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLoja()">
                </div>
            </form>
        </div>
    </div>
</div>

<script>

<\/script>
`}const y=location.href.includes("?");y?s({minisite:d}):localStorage.hasOwnProperty("dono")?(l("#gerarLinks"),s({gerarLinks:p,minisite:d})):(l("#link"),s({link:v}));
