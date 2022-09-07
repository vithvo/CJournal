import { Button, Input } from "@mui/material";
import React, { useRef, useState } from "react";

import styles from "./AddCommentForm.module.scss";

export const AddCommentForm = () => {
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.form}>
      <Input
        onFocus={() => setClicked(true)}
        onChange={(event) => {
          setText(event.target.value);
        }}
        classes={{ root: styles.textarea }}
        minRows={clicked ? 5 : 1}
        value={text}
        fullWidth
        multiline
        placeholder="Написать комментарий..."
      />
      {clicked && (
        <Button
          onClick={(e) => {
            onButtonClick();
            e.stopPropagation();
          }}
          variant="contained"
          className={styles.button}
        >
          Отправить
        </Button>
      )}
    </div>
  );
};
