export default function gerarQueryString(props){
    const  texto = JSON.stringify(props);
    const parametroQyuery = `?data=${texto}`
    console.log(texto)
    return parametroQyuery
}


