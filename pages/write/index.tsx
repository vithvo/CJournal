import { WriteForm } from "../../components/WtiteForm/index";
import React from "react";
import { MainLayout } from "../../layuots/MainLayout";

import { NextPage } from "next";
import { ClassNames } from "@emotion/react";

interface WritePageProps {}

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" contentFullWidth hideComments >
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
