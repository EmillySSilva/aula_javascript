function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>";
    //console.log(documento.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://www.google.com");
}
function trocar(elemento){
    document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function soma(n1, n2){
     return n1 + n2;
}*/
/*var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual sua idade?");
validaIdade(idade);
console.log(validar);
//alert(soma(5, 10));
*/
