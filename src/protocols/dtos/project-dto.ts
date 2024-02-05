export interface ProjectDTO {
    id: string,
    nome: string,
    status: "Em andamento" | "Concluído" | "Cancelado",
    permite_colaboracao: boolean
    colaboracao_solicitada: boolean
}