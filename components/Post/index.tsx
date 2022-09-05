import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from "./Post.module.scss";
import Link from "next/link";
import { PostActions } from "../PostActions";

export const Post: React.FC = () => {
  return (
    <div className={styles.post}>
      <Paper elevation={0} className="p-15" classes={{ root: styles.paper }}>
        <Link href="/posts/1">
          <Typography variant="h5" className={styles.title}>
            55 стран за три года: моя работа бортпроводницей в религиозном Катаре
          </Typography>
        </Link>
        <Typography className="mt-15 mb-15">
          Отбор в компанию, сотни странных пассажиров и ноль друзей ирл.
        </Typography>
        <div className={styles.postImageRow}>
          <Image
            className={styles.postImage}
            width={640}
            height={500}
            src="https://leonardo.osnova.io/48922d1f-4dde-596e-bf40-ea083ab0a914/-/preview/900/-/format/webp/"
          />
        </div>
        <PostActions />
      </Paper>
    </div>
  );
};
