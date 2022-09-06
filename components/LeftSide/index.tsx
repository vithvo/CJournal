import { Button } from "@mui/material";
import React from "react";
import {
  WhatshotOutlined,
  MarkChatReadOutlined,
  BookmarkBorderOutlined,
  TrendingUpOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

import styles from "./LeftSide.module.scss";
import Link from "next/link";

const menu = [
  { text: "Популярное", icon: <WhatshotOutlined />, path: "/" },
  { text: "Сообщения", icon: <MarkChatReadOutlined />, path: "/messages" },
  { text: "Рейтинг TJ", icon: <TrendingUpOutlined />, path: "/rating" },
  { text: "Подписки", icon: <FormatListBulletedOutlined />, path: "/follows" },
];

export const LeftSide = () => {
  return (
    <div className={styles.leftSideRow}>
      <div className={styles.menu}>
        <ul>
          {menu.map((obj) => (
            <li key={obj.path}>
              <Link href={obj.path}>
                <Button>
                  {obj.icon}
                  {obj.text}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
