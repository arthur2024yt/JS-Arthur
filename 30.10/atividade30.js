// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}
console.log(parOuImpar(4))


// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.
function maiorDeTres(num1, num2, num3) {
    if(num1 > num2 && num1 > num3 )
    return num1
}
console.log(maiorDeTres(3, 7, 5))

// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".
function verificaIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}
console.log(verificaIdade(16))

// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".
function classificaNota(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else if (nota >= 4) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(classificaNota(8))


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.
function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
        default:
            return "Número inválido. Por favor, insira um número de 1 a 7."
    }
}
console.log(diaDaSemana(1))

// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".
function classificaAnimal(animal) {
    switch (animal.toLowerCase()) {
        case 'cachorro':
        case 'gato':
            return "mamifero"
        case 'passarinho':
            return "ave"
        case 'lagarto':
            return "Anfíbio"
        case 'salmão':
            return 'Peixe'
        default:
            return 'Animal desconhecido'
    }
}
console.log(classificaAnimal('cachorro'))
console.log(classificaAnimal('gato'))
console.log(classificaAnimal('passarinho'))

// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.
function calculadora(num1, num2, operacao) {
    switch (operacao.toLowerCase()) {
        case 'soma':
            return num1 + num2
        case 'subtração':
            return num1 - num2
        case 'multiplicação':
            return num1 * num2
        case 'divisão':
            if (num2 === 0) {
                return 'Erro: Divisão por zero!'
            }
            return num1 / num2;
        default:
            return 'Operação desconhecida'
    }
} 
console.log(calculadora(10, 5, 'soma'))          
console.log(calculadora(10, 5, 'subtração'))    
// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".
function mensagemBoasVindas(nome, horario) {
    let saudacao

    if (horario >= 5 && horario < 12) {
        saudacao = 'Bom dia'
    } else if (horario >= 12 && horario < 18) {
        saudacao = 'Boa tarde'
    } else if (horario >= 18 && horario < 24) {
        saudacao = 'Boa noite'
    } else {
        return 'Horário inválido. Por favor, insira um horário entre 0 e 23.'
    }
    return `${saudacao}, ${nome}!`
}
console.log(mensagemBoasVindas('maria', 10)) 
console.log(mensagemBoasVindas('kaua', 15))
// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).
function classificaFilme(nome, nota){
     if(nota >= 8){
     console.log(`${nome} nota ${nota} e eh excelente `)
     }else if (nota < 7 && nota >= 5){
    console.log(`${nome} recebeu nota ${nota} e eh bom `)
     }else{
     console.log(`${nome}recebeu ${nota} e eh muito ruim`)
     }
}
//clasificafilme(6.5)
classificaFilme("shrek", 9.5)
classificaFilme("gente grabde", 10)
classificaFilme("dora aventuteira", 2)