import React from "react";

import { FullPost } from "../../components/FullPost";
import { PostComments } from "../../components/PostComments";

import { MainLayout } from "../../layuots/MainLayout";

import styles from "./Slug.module.scss";


export default function Slug() {


  return (
    <MainLayout contentFullWidth>
      <div className={styles.slugRow}>
        <FullPost />
        <PostComments />
      </div>
    </MainLayout>
  );
}
