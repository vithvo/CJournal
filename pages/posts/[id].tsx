import { GetServerSideProps, NextPage } from "next";
import React from "react";

import { FullPost } from "../../components/FullPost";
import { PostComments } from "../../components/PostComments";

import { MainLayout } from "../../layuots/MainLayout";
import { Api } from "../../utils/api";
import { PostProps } from "../../utils/api/types";

import styles from "./Slug.module.scss";

interface SlugProps {
  post: PostProps;
}

const Slug: NextPage<SlugProps> = ({ post }) => {
  return (
    <MainLayout contentFullWidth>
      <div className={styles.slugRow}>
        <FullPost title={post.title} blocks={post.body} />
        <PostComments />
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params?.id;
    const post = await Api(ctx).post.getOne(+id);
    console.log(post.body);
    return {
      props: { post },
    };
  } catch (error) {
    console.log("Full post page", error);
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Slug;
