import React from "react";
import {
  EditOutlined,
  SmsOutlined,
  NotificationsNone,
  MenuOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Avatar, Button, Paper } from "@mui/material";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <Button className={styles.burgerLogo}>
          <MenuOutlined />
        </Button>
        <img className={styles.headerLogo} src="static/logo.svg" alt="LOGO" />

        
      </div>
      <div className={styles.headerRight}>
        <SmsOutlined className={styles.headerSms} />
        <NotificationsNone className={styles.headerNotification} />
        <Avatar
          className={styles.headerAvatar}
          alt="Remy Sharp"
          src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"
        />
        <KeyboardArrowDown />
      </div>
    </Paper>
  );
};
