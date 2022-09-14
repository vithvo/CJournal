import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { MainLayout } from "../../layuots/MainLayout";

import styles from "./Profile.module.scss";

export default function Settings() {
  return (
    <MainLayout contentFullWidth hideComments>
      <div className={styles.settingsRow}>
        <Paper className="p-15" elevation={0} classes={{ root: styles.paper }}>
          <Typography className="mb-10" variant="h6">
            Основные настройки
          </Typography>
          <Divider className="mb-30" />
          <TextField
            fullWidth
            size="small"
            className="mb-20"
            label="Отображаемое имя"
            variant="outlined"
          />
          <TextField
            className="mb-30"
            fullWidth
            size="small"
            id="outlined"
            label="Электронная почта"
            variant="outlined"
          />
          <Divider className="mb-20" />
          <Button
            style={{
              maxWidth: 2000,
              backgroundColor: "#4683D9",
              color: "#fff",
              textTransform: "inherit",
              fontSize: "16px",
            }}
            variant="contained"
            color="primary"
          >
            Сохранить изменения
          </Button>
        </Paper>
      </div>
    </MainLayout>
  );
}
