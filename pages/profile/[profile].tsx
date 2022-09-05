import { SettingsOutlined, TextsmsOutlined } from "@mui/icons-material";
import { Avatar, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Post } from "../../components/Post";
import { MainLayout } from "../../layuots/MainLayout";

import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <div className={styles.profileRow}>
        <Paper className={styles.profile} elevation={0}>
          <div className="d-flex justify-between">
            <div className={styles.profileLeft}>
              <Avatar
                style={{ width: 120, height: 120, borderRadius: 6 }}
                src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"
              />
              <Typography style={{ fontWeight: "bold" }} className="mt-10" variant="h4">
                Vit Hvo
              </Typography>
              <div className="d-flex mb-10 mt-10">
                <Typography style={{ fontWeight: "bold", color: "#35AB66" }} className="mr-15">
                  +208
                </Typography>
                <Typography>2 подписчика</Typography>
              </div>
              <Typography>На проекте с 15 сен 2016</Typography>

              <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                <Tab label="Статьи" />
                <Tab label="Комментарии" />
                <Tab label="Закладки" />
              </Tabs>
            </div>
            <div>
              <Link href="/profile/settings">
                <Button
                  style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                  variant="contained"
                >
                  <SettingsOutlined />
                </Button>
              </Link>
              <Button
                style={{ height: 42, maxWidth: 137, backgroundColor: "#4683D9", color: "#fff" }}
                variant="contained"
                color="primary"
              >
                <TextsmsOutlined className="mr-10" style={{ fill: "#fff" }} />
                Написать
              </Button>
            </div>
          </div>
        </Paper>
        <div className=" mt-30 d-flex align-start">
          <div className="mr-20 d-flex">
            <Post />
          </div>
          <Paper style={{ width: 300, borderRadius: "8px" }} className="p-20 mb-20" elevation={0}>
            <b>Подписчики</b>
            <div className="d-flex mt-15">
              <Avatar
                className="mr-10"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
              <Avatar
                className="mr-10"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
            </div>
          </Paper>
        </div>
      </div>
    </MainLayout>
  );
}
