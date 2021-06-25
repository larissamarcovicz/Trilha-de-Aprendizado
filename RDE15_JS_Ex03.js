/*Elabore um programa em que solicite ao usuario dois numeros n1 e n2. Realize a subtracao dos dois valores. O programa nao deve exibir numeros negativos */

var n1, n2, subtracao
n1= parseInt(prompt("Entre com um valor: "))
n2= parseInt(prompt("Entre com outro valor: "))

if(n1>n2){
    subtracao=n1-n2alert("O resultao é "+subtracao)    
}
else{
    subtracao=n2-n1
    alert("O resultado é "+subtracao)
}