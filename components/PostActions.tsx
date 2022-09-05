import React from "react";

import {
  BookmarkBorderOutlined,
  ModeCommentOutlined,
  RepeatRounded,
  ShareRounded,
} from "@mui/icons-material";

import styles from "./Post/Post.module.scss";
import { IconButton } from "@mui/material";

export const PostActions = () => {
  return (
    <div className={styles.postFooter}>
      <ul className="d-flex align-center">
        <li>
          <IconButton>
            <ModeCommentOutlined />
          </IconButton>
          <p>2</p>
        </li>
        <li>
          <IconButton>
            <RepeatRounded />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <BookmarkBorderOutlined />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareRounded />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};
