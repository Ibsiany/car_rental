export interface IAdminDTO {
  cpf: string;
  senha: string;
}

export interface IAdminVerifyDTO {
  data: {
    admin: boolean;
    senha: string;
  };
}
