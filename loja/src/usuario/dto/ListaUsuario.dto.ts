export class ListaUsuarioDTO {
  constructor(
    readonly id: string, //readonly = permite que a propriedade seja "vista"(propriedade publica)
    readonly nome: string,
  ) {}
}
