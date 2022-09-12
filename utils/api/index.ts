import { CreateUserDto, ResponseUser, UserLoginDto } from "./types";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8888/",
});

export const UserApi = {
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

  async getMe(token: string) {
    const { data } = await instance.get<ResponseUser>("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },
};
