import { MoreHorizOutlined } from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import styles from "./Comment.module.scss";

export interface CommentPostProps {
  text: string;
  id: number;
  createdAt: string;
  user: {
    id: number;
    fullname: string;
    avatarUrl: string;
  };
}

export const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
  return (
    <div className={styles.row}>
      <Link href={`/posts/${user.id}`}>
        <div className={styles.title}>
          <img src={user.avatarUrl} alt="Avatar" />
          <div className={styles.titleText}>
            <b>{user.fullname}</b>
            <span>{createdAt}</span>
          </div>
        </div>
      </Link>
      <Typography className={styles.text}>{text}</Typography>
      <div className="d-flex align-center">
        <Button className={styles.button}>Ответить</Button>
        <Button className={(styles.button, styles.buttonDots)}>
          <MoreHorizOutlined />
        </Button>
      </div>
      <Divider className="mt-30 mb-40" />
    </div>
  );
};
