import { OutputData } from "@editorjs/editorjs";
import { AxiosInstance } from "axios";
import { PostProps } from "./types";

type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostProps[]>("/posts");
    return data;
  },

  async getOne(id: number) {
    const { data } = await instance.get<PostProps>(`/posts/${id}`);
    return data;
  },

  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostProps }>("/posts", dto);
    return data;
  },
  async update(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostProps }>(`/posts/${id}`, dto);
    return data;
  },
});
