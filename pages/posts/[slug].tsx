import { Button, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Comment } from "../../components/Comment";
import { FullPost } from "../../components/FullPost";

import { MainLayout } from "../../layuots/MainLayout";

import styles from "./Slug.module.scss";

export default function Slug() {
  return (
    <MainLayout contentFullWidth>
      <div className={styles.slugRow}>
        <FullPost />
        <Paper elevation={0} className="mt-40 pt-30 pr-30 pl-30">
          <Typography variant="h6">42 комментария</Typography>
          <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Популярные" />
            <Tab label="По порядку" />
          </Tabs>
          <Divider className={styles.divider} />

          <form className={styles.form} action="textarea">
            <textarea className={styles.textarea} placeholder="Написать комментарий..."></textarea>
            <Button disabled variant="contained" className={styles.button}>
              Отправить
            </Button>
          </form>
          <Comment />
          <Comment />
          <Comment />
        </Paper>
      </div>
    </MainLayout>
  );
}
