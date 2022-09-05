import clsx from "clsx";
import React from "react";

import { Header } from "../components/Header";
import { LeftSide } from "../components/LeftSide";
import { RightSide } from "../components/RightSide";

interface MainLayoutProps {
  children: React.ReactNode;
  hideComments?: boolean;
  contentFullWidth?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
  contentFullWidth,
}) => {
  return (
    <>
      <Header />
      <div className="contentRow">
        <LeftSide />
        <div className={clsx("postRow", { "postRow--full": contentFullWidth })}>{children}</div>
        {!hideComments && <RightSide />}
      </div>
    </>
  );
};
