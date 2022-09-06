import { NextPage } from "next";
import React from "react";
import { WriteForm } from "../components/WtiteForm";
import { MainLayout } from "../layuots/MainLayout";

interface WritePageProps {}

const WritePage: NextPage = () => {
  return (
    <MainLayout contentFullWidth hideComments hideMenu className="main-layout-white">
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
