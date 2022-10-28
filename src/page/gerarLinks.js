import { apiGerar } from "../apiQueryString/api.js"
import addBanco from "../lib/src/addBancoMiasIntens.js"
export default function gerarLinks() {
    const data = []

    const dados = apiGerar("dono", "link")


    window.addEventListener("DOMContentLoaded", () => {       
        const pegarIcon = window.document.querySelector("fieldset")
        const url = window.document.querySelector(".url")
        pegarIcon.addEventListener("click", e => {               
                 const valores = {
                    URL: url.value,
                    ICONE: e.target.src,
                    NOME_ICONE: e.target.id
                }  
            data.push(valores)
        })
        
    })


    window.salvarLink = () => {    
        const dataIndexFinal = data[data.length - 1]
         addBanco("link", dataIndexFinal)
            while (data.length) {
                data.pop();
            }
        }
    


    window.link = () => {
        window.location.href = "minisite" + dados
    }


    console.log(dados)


    return `
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
                            
                            <img src="./src/img/facebook.png"id="facebook" name="facebook" class="escolha" alt="facebook"
                                height="45px">
                        </label>

                        <label for="F">
                           
                            <img src="./src/img/instagram.png" id="instagram" class="escolha" alt="instagram"
                                height="45px">
                        </label>

                        <label for="A">
                           
                            <img src="./src/img/whatsapp.png" id="whatsapp" class="escolha" alt="whatsapp"
                                height="45px">
                        </label>
                        <label for="B">
                            
                            <img src="./src/img/youtube.png" id="youtube" class="escolha" alt="youtube" height="45px">
                        </label>
                    </fieldset>

                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLink()">
                </div>
                <br />

                <input type="button" value="miniSite" onclick="link()">

            

            </form>

        </div>
    </div>
</div>
  
    `

} 
