import { Avatar, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

import styles from "./Comment.module.scss";

export const Comment = () => {
  return (
    <div className={styles.commentItem}>
      <Button className={styles.commentHeader}>
        <Avatar
          className={styles.commentAvarar}
          sx={{ bgcolor: purple[400] }}
          variant="rounded"
          alt="Remy Sharp"
        >
          S
        </Avatar>
        <p>Дмитрий Иванов</p>
      </Button>
      <div className={styles.commentContent}>
        Движение металлов вниз, вероятно, продолжится и уже в ближайшие недели мы увидим новые
        постпандемийные ценовые минимумы. Снижение цен больно ударит по российским производителям
        металлов, которые вынуждены реализовывать продукцию с дисконтом к мировым ценам.
      </div>
      <div className={styles.commentFooter}>Что проиходит с нефтью?</div>
    </div>
  );
};
