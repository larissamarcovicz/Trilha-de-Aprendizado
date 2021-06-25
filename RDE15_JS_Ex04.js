/* Permita ao usuario inserir um valor que exiba a tabuada */
var t, n, cont=0
n= parseInt(prompt("Entre com o valor da tabuada"))

/*while(cont<11)
{
    t=n*cont
    document.write("<h2>"+t+"</h2>")
    cont++
}*/

for(cont=0; cont<11;cont++){
    t=n&contdocument.write("<h2>"+t+"</h2>")
}

switch(op){
    case 1 :{
        while(cont<11)
        {
            t=n*cont
            document.write("<h2>"+t+"</h2>")
            cont++
        }
        break
    }
    case 2:{
        for(cont=0;cont<11;cont++){
            t=n*cont
            document.write("<h2>"+t+"</h2>")            
        }
        break
    }
    default:{
        alert("Opcao Invalida")
        break
    }
       
}
    