import { Avatar, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import Link from "next/link";
import React from "react";

import styles from "./Comment.module.scss";

interface CommentSideProps {
  text: string;
  id: number;
  user: {
    id: number;
    fullname: string;
    avatarUrl: string;
  };
  post: {
    id: number;
    title: string;
  };
}

export const CommentSide: React.FC<CommentSideProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <Link href={`/profile/${user.id}`}>
        <Button className={styles.commentHeader}>
          <Avatar
            className={styles.commentAvarar}
            sx={{ bgcolor: purple[400] }}
            variant="rounded"
            alt="Remy Sharp"
          >
            {user.fullname.substr(0, 1)}
          </Avatar>
          <p>{user.fullname}</p>
        </Button>
      </Link>
      <div className={styles.commentContent}>{text}</div>
      <Link href={`/posts/${user.id}`}>
        <div className={styles.commentFooter}>{post.title}</div>
      </Link>
    </div>
  );
};
