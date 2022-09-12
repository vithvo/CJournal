import { stepperClasses } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { Post } from "../components/Post";
import { MainLayout } from "../layuots/MainLayout";
import { setUserData } from "../redux/slices/user";
import { wrapper } from "../redux/store";
import { UserApi } from "../utils/api";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { token } = parseCookies(ctx);

      const userData = await UserApi.getMe(token);

      store.dispatch(setUserData(userData));

      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  }
);

export default Home;
