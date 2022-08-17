var elemento_pai = document.getElementById("results")
const input = document.querySelector("#search")
input.value = ""

for(let i=0; i <= 1000; i++){
  let titulo = document.createElement('p');
  let texto = document.createTextNode(i+" x "+i+" = "+i*i);
  titulo.appendChild(texto);
  elemento_pai.appendChild(titulo);
  const att = document.createAttribute("class")
  att.value = "resultado"
  document.getElementsByTagName("p")[i].setAttributeNode(att);
}

input.addEventListener('change', function () {
  console.log("incio")
  let valor = input.value.toString()
  valor=valor.toLowerCase();
  let elementos = document.getElementsByClassName('resultado');
  let elementos_formatado

for(let i = 0; i <= elementos.length; i++){
  elementos_formatado = elementos[i].textContent.toString().split("=")[1].split(" ")[1]
  if(valor==elementos_formatado){ 
      
  }else{
    elementos[i].style.display = "none"
  }
}
});