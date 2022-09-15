import { useState } from "react";

import { Add, Done } from "@mui/icons-material";

import {
  Paper,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

import React from "react";
import { MainLayout } from "../layuots/MainLayout";

import styles from "./profile/Profile.module.scss";
import { Api } from "../utils/api";
import { NextPage } from "next";
import { ResponseUser } from "../utils/api/types";

interface RatingPageProps {
  users: ResponseUser[];
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
  const [checked, setChecked] = useState(false);
  return (
    <MainLayout>
      <div className={styles.settingsRow}>
        <Paper className="pt-20 pl-20 pr-20 mb-20" elevation={0}>
          <Typography variant="h5" className="mb-10 fw-bold">
            Рейтинг активности пользователей
          </Typography>
          <Typography className="fw-normal">
            На этой странице представлен рейтинг активности пользователей, оставивших больше всех
            комментариев. <br /> Цена одного комментария - 3 балла!{" "}
          </Typography>
          <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Месяц" />
            <Tab label="3 месяца" />
            <Tab label="За все время" />
          </Tabs>
        </Paper>

        <Paper elevation={0}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Имя пользователя</TableCell>
                <TableCell align="right">Рейтинг</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((obj, i) => (
                <TableRow key={obj.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <span className="mr-15">{i + 1}</span>
                    {obj.fullName}
                  </TableCell>
                  <TableCell align="right">{obj.commentsCount * 3}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => {
                        setChecked(!checked);
                      }}
                      variant="contained"
                      style={{ height: 42, minWidth: 42, width: 42, marginRight: 10 }}
                    >
                      {checked ? <Done style={{ fontSize: "20px", fill: "#2ea83a" }} /> : <Add />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll();
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      users: null,
    },
  };
};

export default Rating;
