import { ClienteDto } from './cliente-dto';
import * as moment from 'moment';

export class Cliente {
  public id?: string;
  public nome: string;
  public dataNascimento: string;
  public cpf: string;
  public idFoto: string;
  public creditoHabilitado?: boolean;

  public static fromDto(clienteDto: ClienteDto): Cliente {
    const model: any = { ...clienteDto };

    model.dataNascimento =
      model.dataNascimento && moment(model.dataNascimento).toDate();

    return model as Cliente;
  }

  public static toDto(cliente: Cliente): ClienteDto {
    const dto: any = { ...cliente };

    dto.dataNascimento =
      dto.dataNascimento && moment(dto.dataNascimento).format('YYYY-MM-DD');

    delete dto.label;

    return dto;
  }
}
