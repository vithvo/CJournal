import React, { useEffect } from "react";
import { Input } from "@mui/material";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor").then((m) => m.Editor), { ssr: false });

import styles from "./WriteForm.module.scss";

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
      <div className={styles.editor}></div>
      <Editor />
    </div>
  );
};
