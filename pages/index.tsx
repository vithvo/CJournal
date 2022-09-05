import type { NextPage } from "next";
import Head from "next/head";
import { Post } from "../components/Post";
import { MainLayout } from "../layuots/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Post />
      <Post />
    </MainLayout>
  );
};

export default Home;
