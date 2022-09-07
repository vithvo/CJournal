import { Avatar, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

import styles from "./Comment.module.scss";

interface CommentSideProps {
  text: string;

  user: {
    fullname: string;
    avatarUrl: string;
  };
  post: { title: string };
}

export const CommentSide: React.FC<CommentSideProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
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
      <div className={styles.commentContent}>{text}</div>
      <div className={styles.commentFooter}>{post.title}</div>
    </div>
  );
};
