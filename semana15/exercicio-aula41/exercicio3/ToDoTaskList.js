const tarefas = ["Arrumar casa", "Lavar Louça", "Ir para a academia"]
tarefas.push(process.argv[2])
console.log(`Tarefas atualizades! Tarefas:${tarefas}`)
