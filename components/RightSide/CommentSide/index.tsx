import { Avatar, Button, Divider } from "@mui/material";
import { purple } from "@mui/material/colors";
import Link from "next/link";
import React from "react";
import { PostProps, ResponseUser } from "../../../utils/api/types";

import styles from "./Comment.module.scss";

interface CommentSideProps {
  text: string;
  id: number;
  user: ResponseUser;
  post: PostProps;
}

export const CommentSide: React.FC<CommentSideProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <Link href={`/profile/${user.id}`}>
        <a>
          <Button className={styles.commentHeader}>
            <Avatar
              className={styles.commentAvarar}
              sx={{ bgcolor: purple[400] }}
              variant="rounded"
              alt="Remy Sharp"
            >
              {user.fullName.substr(0, 1)}
            </Avatar>
            <p>{user.fullName}</p>
          </Button>
        </a>
      </Link>
      <div className={styles.commentContent}>{text}</div>
      <Link href={`/posts/${post.id}`}>
        <a>
          <div className={styles.commentFooter}>{post.title}</div>
        </a>
      </Link>
    </div>
  );
};
