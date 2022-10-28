import Links from "../component/buttomLink.js";
import buttonVoltar from "../component/buttonVoltar.js"
import { apiGerar } from "../apiQueryString/api.js";

import {pegarUrlData} from"../lib/index.js"

export default function miniSite() {

   const data =  pegarUrlData()    

 
    return `
    <div class="componete-link">  
   
    <div class="container-link">

    ${localStorage.hasOwnProperty("link") ? buttonVoltar() : ''}
         
    <img src="${data.a.Logo}" class="logo"  loading=lazy  class="mini-site-logo">
       
    </div>   
    <h1 style="color:" > </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>
       
    ${Links(data.b)}
      
    <br>    
    <h1  style=" color:"> </h1>
    </a>
    </div>
    <div>
`;




}