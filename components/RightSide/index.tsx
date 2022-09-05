import React from "react";

import { Button, Typography } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";

import { Comment } from "./Comment";

import styles from "./RightSide.module.scss";

export const RightSide = () => {
  return (
    <div className={styles.rightSideRow}>
      <div className={styles.rightSide}>
        <Button className="mb-5">
          <Typography variant="h5">Комментарии</Typography>
          <ChevronRightOutlined />
        </Button>
        <div className={styles.rightSideContent}>
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};
