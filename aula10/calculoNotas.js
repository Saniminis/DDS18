var alunos = ["Pedro", "Tiago", "João"]
var notasA = [8.0, 7.0, 6.0]
var notasB = [7.0, 5.7, 6.3]

function media(nota1, nota2) {
    var n1 = nota1
    var n2 = nota2
    var media = (nota1 + nota2) / 2
    return media
}

function mostrarResultados() {
    for (var index in alunos) {
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        console.log("O aluno", alunos[index], "teve média de", mediaAtual)
    }
}

function situacao(mediaAtual){
// Verificando a situação do aluno
if (mediaAtual >= 7) {
    console.log("Aprovado");
} else if (mediaAtual >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
}

function mostrarResultados() {
    for (var index in alunos) {
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        var final = (mediaAtual)
        console.log("O aluno", alunos[index], "teve média de", mediaAtual, ".E sua situação final é:", final)
    }
}
