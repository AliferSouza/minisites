
export default function buttonVoltar(dadosUrl){

    window.routertMiniSite = () => {
        window.history.back()
    }

    return`
    <button onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `
  
}