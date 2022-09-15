import React, { useEffect, useState } from "react";

import { Button, Typography } from "@mui/material";
import { ChevronRightOutlined, CommentsDisabled } from "@mui/icons-material";

import { CommentSide } from "./CommentSide";

import styles from "./RightSide.module.scss";
import clsx from "clsx";

import { useComments } from "../../hooks/useComments";
import { CommentProps } from "../../utils/api/types";

export const RightSide: React.FC = ({}) => {
  const [visible, setVisible] = useState(true);
  const { comments, setComments } = useComments();

  const onAddComment = (obj: CommentProps) => {
    setComments((prev) => [...prev, obj]);
  };

  return (
    <div className={clsx(styles.rightSideRow, !visible && styles.rotate)}>
      <div className={styles.rightSide}>
        <Button onClick={() => setVisible(!visible)} className="mb-5">
          <Typography variant="h5">Комментарии</Typography>
          <ChevronRightOutlined />
        </Button>
        {visible && (
          <div className={styles.rightSideContent}>
            {comments.map((item) => (
              <CommentSide
                {...item}
                key={item.id}
                user={item.user}
                text={item.text}
                post={item.post}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
