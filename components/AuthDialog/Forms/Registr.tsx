import React from "react";
import { Button, Typography } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormField } from "../../WtiteForm/FormField";
import { RegistrSchema } from "../../../utils/validations";

import styles from "../AuthDialog.module.scss";

interface RegistrProps {
  setFormTypeLogin: () => void;
  setFormTypeMain: () => void;
}

export const Registr: React.FC<RegistrProps> = ({ setFormTypeLogin, setFormTypeMain }) => {
  const form = useForm({ resolver: yupResolver(RegistrSchema), mode: "onSubmit" });
  const onSubmit = (data: {}) => console.log(data);
  return (
    <div className={styles.rightLogin}>
      <div onClick={setFormTypeMain} className={styles.back}>
        <ArrowBackIosNewRounded />
        <span>Назад</span>
      </div>
      <Typography variant="h5">Регистрация</Typography>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField holder="Имя и фамилия" name="fullname" />
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
      <div className="d-flex align-center">
        <div className="mr-5">Есть аккаунт?</div>
        <div onClick={setFormTypeLogin} className={styles.registration}>
          Регистрация
        </div>
      </div>
    </div>
  );
};
