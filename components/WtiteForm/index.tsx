import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor").then((m) => m.Editor), { ssr: false });

import styles from "./WriteForm.module.scss";
import { Api } from "../../utils/api";
import { OutputBlockData } from "@editorjs/editorjs";
import { PostProps } from "../../utils/api/types";
import { useRouter } from "next/router";

interface WriteFormProps {
  data?: PostProps;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [title, setTitle] = useState(data?.title || "");
  const [blocks, setBlocks] = useState(data?.body || []);
  const [isLoading, setIsLodaing] = useState(false);

  const onAddPost = async () => {
    try {
      setIsLodaing(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`write/${post.id}`);
      }
      if (data) {
        await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.warn("Create post", error);
      alert(error);
    } finally {
      setIsLodaing(false);
    }
  };

  return (
    <div className={styles.writeRow}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        fullWidth
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(blocks) => setBlocks(blocks)} />
      </div>
      <Button
        className={styles.inButton}
        disabled={isLoading || !blocks.length || !title}
        onClick={onAddPost}
        variant="contained"
        color="primary"
      >
        {data ? "Сохранить" : "Опубликовать"}
      </Button>
    </div>
  );
};
