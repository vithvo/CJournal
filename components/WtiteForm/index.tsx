import React from "react";
import { Button, Input } from "@mui/material";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor").then((m) => m.Editor), { ssr: false });

import styles from "./WriteForm.module.scss";
import { TextsmsOutlined } from "@mui/icons-material";

interface WriteFormProps {
  title: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div className={styles.writeRow}>
      <Input
        classes={{ root: styles.titleField }}
        fullWidth
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button
        style={{
          height: 42,
          maxWidth: 167,
          backgroundColor: "#4683D9",
          color: "#fff",
          fontSize: "16px",
        }}
        variant="contained"
        color="primary"
      >
        Опубликовать
      </Button>
    </div>
  );
};
