import { Button } from "@mui/material";
import React from "react";
import {
  WhatshotOutlined,
  MarkChatReadOutlined,
  TrendingUpOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

import styles from "./LeftSide.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { text: "Популярное", icon: <WhatshotOutlined />, path: "/" },
  { text: "Сообщения", icon: <MarkChatReadOutlined />, path: "/messages" },
  { text: "Рейтинг TJ", icon: <TrendingUpOutlined />, path: "/rating" },
  { text: "Подписки", icon: <FormatListBulletedOutlined />, path: "/follows" },
];

export const LeftSide = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div className={styles.leftSideRow}>
      <div className={styles.menu}>
        <ul>
          {menu.map((obj) => (
            <li key={obj.path}>
              <Link href={obj.path}>
                <Button variant={router.asPath === obj.path ? "contained" : "text"}>
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
