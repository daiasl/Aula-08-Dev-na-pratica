import { Cliente } from './cliente';

export interface ClienteDto {
  id?: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  idFoto: string;
  creditoHabilitado: boolean;
}
