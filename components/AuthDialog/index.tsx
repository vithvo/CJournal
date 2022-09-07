import React, { useState } from "react";
import { ArrowBackIosNewRounded, CloseRounded, MailOutlineRounded } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Input,
  TextField,
  Typography,
} from "@mui/material";

import styles from "./AuthDialog.module.scss";
import { AddCommentForm } from "../AddCommentForm";

interface AuthDialogPops {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogPops> = ({ onClose, open }) => {
  const [formType, setFormType] = useState<"main" | "email">("main");
  return (
    <Dialog open={open} className={styles.login} onClose={onClose}>
      <DialogContent className={styles.loginContent}>
        <DialogContentText className={styles.loginContentText}>
          <div className={styles.leftLogin}>
            <img className={styles.headerLogo} src="/static/logo.svg" alt="LOGO" />
          </div>
          {formType === "main" ? (
            <div className={styles.rightLogin}>
              <Typography variant="h5">Вход в аккаунт</Typography>
              <Button onClick={() => setFormType("email")} fullWidth variant="contained">
                <MailOutlineRounded /> Почта
              </Button>
              <Button fullWidth variant="contained">
                <img src="/static/vk.svg" alt="vk" /> ВКонтакте
              </Button>
              <Button fullWidth variant="contained">
                <img src="/static/google.svg" alt="Google" /> Google
              </Button>
              <div className={styles.buttonFutter}>
                <Button variant="contained">
                  <img src="/static/facebook.svg" alt="" />
                </Button>
                <Button variant="contained">
                  <img src="/static/twitter.svg" alt="" />
                </Button>
                <Button variant="contained">
                  <img src="/static/apple.svg" alt="" />
                </Button>
              </div>
            </div>
          ) : (
            <div className={styles.rightLogin}>
              <div onClick={() => setFormType("main")} className={styles.back}>
                <ArrowBackIosNewRounded />
                <span>Назад</span>
              </div>
              <Typography variant="h5">Войти через почту</Typography>
              <Input
                fullWidth
                size="small"
                className={styles.textarea}
                id="outlined"
                placeholder="Почта"
              />
              <Input
                fullWidth
                size="small"
                className={styles.textarea}
                id="outlined"
                placeholder="Пароль"
                type="password"
              />

              <Button
                style={{ backgroundColor: "#A3C1EC", color: "#fff" }}
                fullWidth
                variant="contained"
              >
                Войти
              </Button>
            </div>
          )}
        </DialogContentText>
      </DialogContent>

      <CloseRounded
        onClick={() => {
          onClose();
          setFormType("main");
        }}
        className={styles.close}
      />
    </Dialog>
  );
};
