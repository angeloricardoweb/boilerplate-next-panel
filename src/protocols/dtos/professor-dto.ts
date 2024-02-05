import { ProjectDTO } from "./project-dto";

export interface ProfessorDTO {
    id: string,
    nome: string,
    projetos: ProjectDTO[]
}