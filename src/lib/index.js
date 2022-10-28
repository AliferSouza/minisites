import router from"./src/router.js"
import reload from"./src/reload.js"
import addBanco from"./src/addBanco.js"
import pegarUrlData from"./src/pegarUrlData.js"
import gerarQueryString from"./src/gerarQueryString.js"
import link from "./src/link.js"
import select from "./src/select.js"

const Emitter = {
   events: {},
   
   
   
   on(event, cb) {
      Emitter.events[event] = Emitter.events[event] || []
      Emitter.events[event].push(cb)
   
   },
   
   emit(event, ...rest) {
      if (event in Emitter.events === false) {
          return;
      }
   
      Emitter.events[event].forEach((e) => {
          e(...rest)
      })
   }
}

export{
   router,
   reload,
   addBanco,
   pegarUrlData,
   gerarQueryString,
   link,
   select,
   Emitter
}