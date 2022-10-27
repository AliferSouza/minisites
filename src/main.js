import home from"./page/home.js"
import gerarLinks from"./page/gerarLinks.js"
import miniSite from "./page/minisite.js"
import {router, link}  from"./lib/index.js"

const URL = location.href.includes("?") 


//Auth
if (URL) {   
     router({"/minisite": miniSite})  
} else if(localStorage.hasOwnProperty("dono")) {
     link("/gerarLinks", gerarLinks)
     router({"/minisite": miniSite})
} else{
     router({"/home": home})
}









