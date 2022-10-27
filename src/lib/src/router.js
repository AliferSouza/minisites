
export default function Router(Paginas, dados){

    function navigateTo(url){
       history.pushState(null, null, url)
       App()
     }
   
   App()   
   function App(){ 
       const pathname = location.pathname   

       console.log(Paginas)

         Paginas[pathname] ? Render(Paginas[pathname]) : Render(Paginas["/home"])   
       
   
       function Render(paginaASerRenderizada, dados){   
             window.document.querySelector(".root").innerHTML = paginaASerRenderizada()
       }


       window.addEventListener("popstate", App)
       
       window.document.addEventListener("DOMContentLoaded", () => {

           document.body.addEventListener("click", e => {

               if(e.target.matches("[ali-link]")){
                 e.preventDefault()
                 navigateTo(e.target.href)
                }
           })
       })}
      
   }
   