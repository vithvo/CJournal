import { CreateUserDto, ResponseUser, UserLoginDto } from "./types";
import  { AxiosInstance } from "axios";

export const UserApi = (instance: AxiosInstance) => ({
  async registr(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      "/auth/registr",
      dto
    );
    return data;
  },

  async login(dto: UserLoginDto): Promise<ResponseUser> {
    const { data } = await instance.post<UserLoginDto, { data: ResponseUser }>("/auth/login", dto);
    return data;
  },

  async getMe() {
    const { data } = await instance.get<ResponseUser>("/users/me");
    return data;
  },
});
