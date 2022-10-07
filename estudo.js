let tabuada = 6;

function escreva(){
    document.write("<h3> Tabuada do " + tabuada + "</h3>");
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
} 

let lista = ["Jesus","Spessato","Duarte","Jorge","Neuza","Gilmar","Jossyara"];

function mostraLista(){
    document.write("Tamanho da lista: " + lista.length + "<br>");
    
    for(let i = 0; i < lista.length; i++){
        document.write("Professor(a): " + lista[i] + "<br>");
    }
}

function multiplica(){
    for(let i = 1; i <= 10; i++){
document.write("Tabuada do " + i + "<br>");
for(let j = 1; j <= 10; j++){
    document.write(i + " x " +j+" = " + (i*j) + "<br>");
    }
    document.write("<br>");
  }
}

function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i=1; i <= t; i++){
        r = v * (1+(j/100));
        document.write("Mês "  + i +" valor: " + r + "<br>");
        v = r;
    }
    
    document.write("Resultado: " + r );
}
