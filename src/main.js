import home from"./page/home.js"
import gerarLinks from"./page/gerarLinks.js"
import minisite from "./page/minisite.js"
import {router, link}  from"./lib/index.js"

const URL = location.href.includes("?") 


//Auth
if (URL) {   
     router({minisite})  
} else if(localStorage.hasOwnProperty("dono")) {
     router({gerarLinks, minisite})
} else{
     router({home})
}









