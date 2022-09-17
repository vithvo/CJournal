import React, { ChangeEventHandler, SyntheticEvent, useEffect, useState } from "react";
import {
  SmsOutlined,
  NotificationsNone,
  MenuOutlined,
  Search,
  AddOutlined,
  PersonOutlineRounded,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Avatar, Button, List, ListItem, ListItemButton, Paper } from "@mui/material";

import styles from "./Header.module.scss";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";
import { PostProps } from "../../utils/api/types";
import { Api } from "../../utils/api";
import { isPlainObject } from "@reduxjs/toolkit";

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState<PostProps[]>([]);

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

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.headerLeft}>
        <Button className={styles.burgerLogo}>
          <MenuOutlined />
        </Button>
        <Link href="/">
          <a>
            <img className={styles.headerLogo} src="/static/logo.svg" alt="LOGO" />
          </a>
        </Link>
      </div>
      <div className={styles.postTop}>
        <div className={styles.searchBox}>
          <Search />
          <input
            value={searchValue}
            onChange={handleChangeInput}
            type="text"
            placeholder="Поиск по названию статьи"
          />
          {posts.length > 0 && searchValue && (
            <Paper className={styles.searchPopup}>
              {posts.map((obj) => (
                <Link key={obj.id} href={`/posts/${obj.id}`}>
                  <a>
                    <List>
                      <ListItem>
                        <ListItemButton
                          onClick={() => {
                            setSearchValue("");
                            setPosts([]);
                          }}
                          className={styles.searchPopupbutton}
                        >
                          {obj.title}
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </a>
                </Link>
              ))}
            </Paper>
          )}
        </div>
        <Link href="/write">
          <a>
            <Button className={styles.headerPenButton} variant="contained">
              <AddOutlined /> Создать
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <SmsOutlined className={styles.headerSms} />
        <NotificationsNone className={styles.headerNotification} />
        {userData ? (
          <>
            <Link href="/profile/1">
              <a>
                <Avatar className={styles.headerAvatar} variant="rounded" alt="Avatar">
                  {userData.fullName.substr(0, 1)}
                </Avatar>
              </a>
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
