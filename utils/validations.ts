import * as yup from "yup";

export const LoginSchema = yup
  .object({
    email: yup.string().email("Неверная почта").required("Почта обязательна"),
    password: yup.string().min(6, "Минимум символов - 6").required("Пароль обязателен"),
    fullname: yup.string().required("Имя и фамилии обязательны"),
  })
  .required();
export const RegistrSchema = yup
  .object({
    fullname: yup.string().required("Имя и фамилии обязательны"),
  })
  .concat(LoginSchema)
  .required();
