import React, { useEffect } from "react";
import {
  SmsOutlined,
  NotificationsNone,
  MenuOutlined,
  Search,
  AddOutlined,
  PersonOutlineRounded,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Avatar, Button, Paper } from "@mui/material";

import styles from "./Header.module.scss";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && userData) {
      setOpen(false);
    }
  }, [open, userData]);

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
        {userData ? (
          <>
            <Link href="/profile/1">
              <Avatar className={styles.headerAvatar} variant="rounded" alt="Avatar">
                {userData.fullName.substr(0, 1)}
              </Avatar>
            </Link>
            <KeyboardArrowDown className={styles.headerAvatarIcon} />
          </>
        ) : (
          <div onClick={handleClickOpen} className={styles.headerAvatar}>
            <PersonOutlineRounded />
            <span>Войти</span>
          </div>
        )}
      </div>
      <AuthDialog onClose={handleClose} open={open} />
    </Paper>
  );
};
