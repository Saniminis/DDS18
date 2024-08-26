/*
//fazeer com array
var alunos = ["Pedro", "Tiago", "João"]
var notas = [7, 8, 9]

//console.log(alunos[0], "=",notas[0])

//declarando um objeto
var aluno={
    nome: "Pedro", nota: 8
}

console.log(aluno.nome)
console.log(aluno.nota)
console.log(aluno.nome, "-", aluno.nota)

//
var pessoa = {
    nome: "Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

//adicionando novas propriedades
pessoa.rg= "11111111111"
console.log(pessoa);

pessoa["profissao"] = "diretora"
console.log(pessoa);

//adicionando propriedades com uma variavel
var novaProp="sobrenome"
pesoa[novaProp]="do bairro"
console.log(pessoa)


//criando metodos
var animal={
    nome:"mel",
    raca:"poodle",
    latir: function(){
        console.log("au au")
    },
    andar: function(){
        console.log("Andando")
    }
}

console.log(animal.nome)
console.log(animal["raca"])
animal.latir()
animal.andar()


var aluno={
    nome:"Cris",
    notas: [7, 7, 4],
    media: function(n1, n2, n3){
        return((n1+n2+n3) / 3)
    }
}

console.log("o nome do aluno é:", aluno.nome)
console.log("sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]))


//metodo de função externa
function calculoMedia(n1,n2){
    return((n1+n2) / 2)
}

var aluno1={
    nome:"Ronald",
    notas: [7, 8],
    media: calculoMedia
}

var aluno2={
    nome:"messi",
    notas: [8, 8],
    media: calculoMedia

}

console.log("o nome do aluno é:", aluno2.nome)
console.log("sua média foi:", aluno2.media(aluno2.notas[0], aluno2.notas[1]))
console.log("o nome do aluno é:", aluno1.nome)
console.log("sua média foi:", aluno1.media(aluno1.notas[0], aluno1.notas[1]))


var aluno = {
    nome:"Neymar",
    notas: [1000,11],
    media: function(){
        return ((this.notas[0]+this.notas[1]) / 2)
    }
}

console.log(aluno.media())

*/
// uso do This, fora do proprio objeto

function calculoMediaORetorno(){
    return ((this.notas[0]+this.notas[1]) / 2)
}

var aluno = {
    nome:"João",
    notas: [6,8],
    media: calculoMediaORetorno
}

var aluno = {
    nome:"Maria",
    notas: [8,9],
    media: calculoMediaORetorno
}

console.log(aluno1.media())
console.log(aluno2.media())

