export type UserLoginDto = {
  email: string;
  password: string;
  createdAt: string;
};
export type CreateUserDto = {
  fullName: string;
  email: string;
  password: string;
};

export type ResponseUser = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updatedAt: string;
};
