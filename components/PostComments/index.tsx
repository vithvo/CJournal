import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddCommentForm } from "../AddCommentForm";
import { Comment } from "../Comment";

import { commetsItems } from "../../data";

import styles from "./PostComments.module.scss";

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [datetime, setDatetime] = useState("");
  const comments = commetsItems[activeTab ? "new" : "popular"];

  React.useEffect(() => {
    setDatetime(new Date().toLocaleString());
  }, []);
  return (
    <Paper elevation={0} className="mt-40 pt-30 pr-30 pl-30">
      <Typography variant="h6">42 комментария</Typography>
      <Tabs
        onChange={(_, newValue) => setActiveTab(newValue)}
        className="mt-20"
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Популярные" />
        <Tab label="По порядку" />
      </Tabs>
      <Divider className={styles.divider} />

      <AddCommentForm />

      {comments.map((obj) => (
        <Comment key={obj.id} {...obj} user={obj.user} text={obj.text} createdAt={datetime} />
      ))}
    </Paper>
  );
};
