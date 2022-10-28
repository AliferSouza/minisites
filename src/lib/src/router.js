
export default function Router(Paginas){

    function navigateTo(url){
       history.pushState(null, null, url)
       App()
     }
   
   App()   
   function App(){ 
       const pathname = location.pathname   
       const pathnameTratado = pathname.replace("/", '')
     //  console.log(Paginas)
     //  console.log(pathnameTratado)

      // console.log(Paginas[pathnameTratado])

         Paginas[pathnameTratado] ? Render(Paginas[pathnameTratado]) : Render(Paginas["home"])   
       
   
       function Render(paginaASerRenderizada){      
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
   