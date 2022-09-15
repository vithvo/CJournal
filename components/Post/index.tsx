import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from "./Post.module.scss";
import Link from "next/link";
import { PostActions } from "../PostActions";

interface PostProps {
  id: number;
  title: string;
  description: string;
}

export const Post: React.FC<PostProps> = ({ title, description, id }) => {
  return (
    <div className={styles.post}>
      <Paper elevation={0} className="p-25" classes={{ root: styles.paper }}>
        <Link href={`/posts/${id}`}>
          <Typography variant="h5" className={styles.title}>
            {title}
          </Typography>
        </Link>
        <Typography className="mt-15 mb-15">{description}</Typography>
        {/* <div className={styles.postImageRow}>
          {imageUrl && (
            <Image
              className={styles.postImage}
              width={640}
              height={500}
              alt="Title"
              src="https://leonardo.osnova.io/48922d1f-4dde-596e-bf40-ea083ab0a914/-/preview/900/-/format/webp/"
            />
          )}
        </div> */}
        <PostActions />
      </Paper>
    </div>
  );
};
