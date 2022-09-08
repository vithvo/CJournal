import React from "react";
import { Button, Typography } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../AuthDialog.module.scss";
import { LoginSchema } from "../../../utils/validations";
import { FormField } from "../../WtiteForm/FormField";

interface LoginProps {
  setFormTypeMain: () => void;
  setFormTypeRegistr: () => void;
}

export const Login: React.FC<LoginProps> = ({ setFormTypeMain, setFormTypeRegistr }) => {
  const form = useForm({ resolver: yupResolver(LoginSchema), mode: "onSubmit" });
  const onSubmit = (data: {}) => console.log(data);

  return (
    <div className={styles.rightLogin}>
      <div onClick={setFormTypeMain} className={styles.back}>
        <ArrowBackIosNewRounded />
        <span>Назад</span>
      </div>
      <Typography variant="h5">Войти через почту</Typography>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField holder="Почта" name="email" />
          <FormField holder="Пароль" name="password" />

          <Button
            type="submit"
            style={{ backgroundColor: "#A3C1EC", color: "#fff" }}
            fullWidth
            variant="contained"
          >
            Войти
          </Button>
        </form>
      </FormProvider>
      <div onClick={setFormTypeRegistr} className={styles.registration}>
        Регистрация
      </div>
    </div>
  );
};
