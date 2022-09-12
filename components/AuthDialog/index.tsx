import React, { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";

import styles from "./AuthDialog.module.scss";
import { Main } from "./Forms/Main";
import { Login } from "./Forms/Login";
import { Registr } from "./Forms/Registr";

interface AuthDialogPops {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogPops> = ({ onClose, open }) => {
  const [formType, setFormType] = useState<"main" | "login" | "registr">("main");
  return (
    <Dialog open={open} className={styles.login} onClose={onClose}>
      <DialogContent className={styles.loginContent}>
        <DialogContentText component={"div"} className={styles.loginContentText}>
          <div className={styles.leftLogin}>
            <img className={styles.headerLogo} src="/static/logo.svg" alt="LOGO" />
          </div>
          {formType === "main" && (
            <Main
              setFormTypeLogin={() => setFormType("login")}
              setFormTypeRegistr={() => setFormType("registr")}
            />
          )}
          {formType === "login" && (
            <Login
              onClose={onClose}
              setFormTypeMain={() => setFormType("main")}
              setFormTypeRegistr={() => setFormType("registr")}
            />
          )}
          {formType === "registr" && (
            <Registr
              setFormTypeLogin={() => setFormType("login")}
              setFormTypeMain={() => setFormType("main")}
            />
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
