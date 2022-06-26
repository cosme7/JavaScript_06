//* Crie um objeto que receba ao menos três propriedades sobre você.

let dados = {
    nome: "Cosme",
    idade: "9000",
    cidade: "Rio de Janeiro"
};

//* Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.vampiro = true;
console.log(dados);

//* Remova uma propriedade desse objeto.

delete dados.vampiro;

//* Mostre no console todas as propriedades desse objeto.

console.log(dados);

//* Crie um array chamado "cadastro" contendo ao menos 5 objetos. 
//* Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

let cadastro = [
    {
        nome: "Cosme",
        idade: "5000",
        telefone: "98623-3888",
        amigos: ["Felipe Silva", "Izaias"]
    },
    {
        nome: "Felipe Silva",
        idade: "6000",
        telefone: "97777-8888",
        amigos: ["Rafael", "Mariana Melo"]
    },
    {
        nome: "Rafael",
        idade: "7000",
        telefone: "98888-3333",
        amigos: ["Felipe Correa", "Luis"]
    },
    {
        nome: "Felipe Correa",
        idade: "8000",
        telefone: "93333-2222",
        amigos: ["Luan", "Marcus"]
    },
    {
        nome: "Mariana Melo",
        idade: "10000",
        telefone: "92222-1111",
        amigos: ["Eliana", "Mariana Merlin"]
    }
];
console.log(cadastro);

//* Na propriedade amigos, adicione ao menos 4 itens.

// console.log(cadastro[1].amigos.unshift("Rian", "Marcus", "Luciana", "Maria Alessandra"));
console.log(cadastro[0].amigos.splice(1, 0, "Rian", "Marcus", "Lucas Gabriel", "Rafael"));
// console.log(cadastro[2].amigos.push("Mariana Merlin", "Marcus", "Luciana", "Rafael"));
cadastro[0].amigos.sort();

//* Mostre no console o nome de um amigo de cada lista.

console.log(`Nome do Amiguinho:`, cadastro[0].amigos[0]);
console.log(`Nome do Amiguinho:`, cadastro[1].amigos[1]);
console.log(`Nome do Amiguinho:`, cadastro[2].amigos[0]);
console.log(`Nome do Amiguinho:`, cadastro[3].amigos[1]);
console.log(`Nome do Amiguinho:`, cadastro[4].amigos[0]);

console.log("===== PERGUNTAR AO PROF =====")
//* Na propriedade amigos, adicione ao menos 4 itens.

// for (let add = 0; add < cadastro.length; add++){
//     console.log(cadastro[add].amigos.push("Rian", "Luccas Correa", "Eliana", "Lucas Gabriel"));
//     cadastro[add].amigos.sort();
// }

//* Mostre no console o nome de um amigo de cada lista.

// for(let lista = 0; lista <= 4; lista++){
//     console.log(cadastro[lista].amigos[lista])
// }
console.log("===== PERGUNTAR AO PROF END=====")