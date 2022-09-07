import React from "react";
import {
  SmsOutlined,
  NotificationsNone,
  MenuOutlined,
  KeyboardArrowDown,
  Search,
  AddOutlined,
} from "@mui/icons-material";
import { Avatar, Button, Paper } from "@mui/material";

import styles from "./Header.module.scss";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <Button className={styles.burgerLogo}>
          <MenuOutlined />
        </Button>
        <Link href="/">
          <img className={styles.headerLogo} src="/static/logo.svg" alt="LOGO" />
        </Link>
      </div>
      <div className={styles.postTop}>
        <div className={styles.searchBox}>
          <Search />
          <input type="text" placeholder="Поиск" />
        </div>
        <Link href="/write">
          <Button className={styles.headerPenButton} variant="contained">
            <AddOutlined /> Создать
          </Button>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <SmsOutlined className={styles.headerSms} />
        <NotificationsNone className={styles.headerNotification} />
        <Link href="/profile/1">
          <Avatar
            className={styles.headerAvatar}
            alt="Avatar"
            src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"
          />
        </Link>
        <KeyboardArrowDown className={styles.headerAvatarIcon} />
      </div>
    </Paper>
  );
};
