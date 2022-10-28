import {addBanco, router} from "../lib/index.js"
import gerarLinks from"../page/gerarLinks.js"

export default function home() {

    window.salvarLoja = () => {
        const Nome = document.querySelector(".Name").value
        const Logo = document.querySelector(".Logo").value
        const Cor = document.querySelector(".Cor").value

        if (!Nome || !Logo || !Cor) {
            alert("Valores obrigatorios para todos os campos")
        } else {
            const miniSite = {
                Nome,
                Logo,
                Cor
            }

            addBanco("dono", miniSite) 

            window.history.pushState( null, null, "/gerarLinks");
            router({gerarLinks})
         
        }
    }

return `
<div class="container">
    <div class="forms">
        <div class="form login">
            <span class="title">Crie seu mini MINI-SITE</span>

            <form action="#">
                <div class="input-field">
                    <input type="text" class="Name" placeholder="Digite o nome" required>
                </div>

                <div class="input-field">
                    <input type="text" class="Logo" placeholder="URL da logo" required>
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

</script>
`

}