import home from"./page/home.js"
import gerarLinks from"./page/gerarLinks.js"
import miniSite from "./page/minisite.js"
import erro from"./page/erro.js"
import {router}  from"./lib/index.js"

const URL = location.href.includes("?") 


//Auth
if (URL) {   
     router({"/minisite": miniSite})  
} else if(localStorage.hasOwnProperty("dono")) {
     router({"/gerarLinks": gerarLinks, "/minisite": miniSite, "/erro": erro})
} else{
     router({"/": home, "/erro": erro})
}









