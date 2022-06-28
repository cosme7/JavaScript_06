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
//* Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Cosme",
        idade: "5000",
        telefone: "98623-3888",
        amigos: ["Felipe Silva", "Izaias","Rafael", "Rian" ]
    },
    {
        nome: "Felipe Silva",
        idade: "6000",
        telefone: "97777-8888",
        amigos: ["Rafael", "Mariana Melo", "Felipe Correa", "Eliana"]
    },
    {
        nome: "Eliana",
        idade: "7000",
        telefone: "98888-3333",
        amigos: ["Isabel", "Luis", "Marcus", "Luciana"]
    },
    {
        nome: "Felipe Correa",
        idade: "8000",
        telefone: "93333-2222",
        amigos: ["Gabriel", "Marcus", "Felipe Silva", "Luan", "Lucas Correa"]
    },
    {
        nome: "Mariana Melo",
        idade: "10000",
        telefone: "92222-1111",
        amigos: ["Eliana", "Mariana Merlin", "Maria Alessandra", "Mylene"]
    }
];
console.log(cadastro);

//* Mostre no console o nome de um amigo de cada lista.

console.log(`Nome do Amiguinho:`, cadastro[0].amigos[3]);
console.log(`Nome do Amiguinho:`, cadastro[1].amigos[2]);
console.log(`Nome do Amiguinho:`, cadastro[2].amigos[1]);
console.log(`Nome do Amiguinho:`, cadastro[3].amigos[0]);
console.log(`Nome do Amiguinho:`, cadastro[4].amigos[3]);

console.log("===== BÔNUS Aula 27/06/2022 =====")
//* Mostre no console o nome de um amigo de cada lista.

for (let count = 0; count < cadastro.length; count++){
    console.log("Feito com FOR:", cadastro[count].amigos[0]);
    cadastro[count].amigos.sort();
}
console.log("===== BÔNUS Aula 27/06/2022 =====")