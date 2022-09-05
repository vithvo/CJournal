import React from "react";
import { Button, Divider, Paper, Typography } from "@mui/material";

import styles from "./FullPost.module.scss";
import { PostActions } from "../PostActions";
import { PersonAddAltOutlined, SmsOutlined } from "@mui/icons-material";

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.fullPost}>
      <div>
        <Typography className={styles.title} variant="h5">
          Правительство обязало госорганы вести аккаунты в «Одноклассниках» или «ВКонтакте»
        </Typography>
        <Typography>
          С 1 декабря органам власти придётся выбрать хотя бы одну соцсеть, где будут публиковаться
          отчёты с мероприятий и актуальная информация.
        </Typography>
        <Typography>
          Премьер-министр Михаил Мишустин подписал распоряжение, по которому органы власти будут
          обязаны вести аккаунты в российских соцсетях — «ВКонтакте» или «Одноклассниках»,
          сообщается на сайте правительства.
        </Typography>
        <Typography>
          {" "}
          Согласно документу, госорганы обязаны публиковать отчёты о мероприятиях, комментарии по
          актуальным вопросам, контактную информацию, включая номера телефонов и адреса электронной
          почты. Требования вступят в силу с 1 декабря 2022 года.
        </Typography>
        <Typography>
          {" "}
          Распоряжение подготовили для реализации изменений в Федеральный закон «Об обеспечении
          доступа к информации о деятельности государственных органов и органов местного
          самоуправления», приятых в июле. В документе отмечается, что представители органов власти
          могут выбрать любую соцсеть из перечня правительства.
        </Typography>
        <Typography>
          {" "}
          В начале сентября пресс-секретарь президента Дмитрий Песков заявил, что Владимир Путин не
          планирует заводить аккаунты в популярных соцсетях. Об этом в Кремле рассказали после того,
          как бывший премьер-министр Италии Сильвио Берлускони создал личную страницу в тиктоке.
        </Typography>
        <div>
          <Divider className="mt-20 mb-15" />
          <PostActions />
        </div>
        <div className={styles.userInfo}>
          <div className="d-flex align-center">
            <img src="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg" alt="Avatar" />
            <b>Василий Некудышный</b>
            <span>+1241</span>
          </div>
          <div>
            <Button className="mr-15" variant="contained" style={{ height: 40, minWidth: 55 }}>
              <SmsOutlined />
            </Button>
            <Button
              variant="contained"
              style={{ height: 40, minWidth: 150, backgroundColor: "#4683D9", color: "#fff" }}
            >
              <PersonAddAltOutlined className="mr-10" style={{ fill: "#fff" }} /> Подписаться
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
