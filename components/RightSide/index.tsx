import React, { useState } from "react";

import { Button, Typography } from "@mui/material";
import { ChevronRightOutlined, CommentsDisabled } from "@mui/icons-material";

import { CommentSide } from "./CommentSide";

import styles from "./RightSide.module.scss";
import clsx from "clsx";
// import CommentPostProps from "../Comment";

const comments = [
  {
    id: 1,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 2,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 3,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
];

export const RightSide: React.FC = ({}) => {
  const [visible, setVisible] = useState(true);

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
              <CommentSide key={item.id} user={item.user} text={item.text} post={item.post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
