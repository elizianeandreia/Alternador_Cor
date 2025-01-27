const CoresEscuras=[
    #000000,
    #00008B,
    #778899,
    #5F9EA0,
    #2F4F4F,
    #8B4513,
    #4B0082,
    #DC143C,

];

function obterIndiceIndex(){
 const indiceIndex =Math.floor(CoresEscuras.length * Math.random());
 return indiceIndex;
}

const body = document.querySelector("body");
const bgCodigoHexSpanElement =document.querySelector("bg-codigo-hex");

function mudeCordeFundo(){
const cor= CoresEscuras[obterIndiceIndex()];
bgCodigoHexSpanElement.innerText =cor;
body.style.background =cor;
}

const btn;

