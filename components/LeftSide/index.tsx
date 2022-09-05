import { Button } from "@mui/material";
import React from "react";
import {
  WhatshotOutlined,
  AccessTimeOutlined,
  MarkChatReadOutlined,
  BookmarkBorderOutlined,
  TrendingUpOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

import styles from "./LeftSide.module.scss";

export const LeftSide = () => {
  return (
    <div className={styles.leftSideRow}>
      <div className={styles.menu}>
        <ul>
          <li>
            <Button>
              <WhatshotOutlined />
              Популярное
            </Button>
          </li>
          <li>
            <Button>
              <AccessTimeOutlined />
              Свежее
            </Button>
          </li>
          <li>
            <Button>
              <MarkChatReadOutlined />
              Моя лента
            </Button>
          </li>
          <li>
            <Button>
              <BookmarkBorderOutlined />
              Закладки
            </Button>
          </li>
          <li>
            <Button>
              <TrendingUpOutlined />
              Рейтинг TJ
            </Button>
          </li>
          <li>
            <Button>
              <FormatListBulletedOutlined />
              Подписки
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
