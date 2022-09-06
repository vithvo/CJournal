import { MoreHorizOutlined } from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";
import React from "react";

import styles from "./Comment.module.scss";

export const Comment = () => {
  return (
    <div className={styles.row}>
      <div className={styles.title}>
        <img src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg" alt="Avatar" />
        <div className={styles.titleText}>
          <b>Вакулий Шныряев</b>
          <span>5 часов </span>
        </div>
      </div>
      <Typography className={styles.text}>
        это деревня на пару тысяч человек. скорее всего, они просто ходили по улице и выцепляли по
        одному человеку, а не в толпу просто бросились
      </Typography>
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
