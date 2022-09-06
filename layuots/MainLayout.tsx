import clsx from "clsx";
import React from "react";

import { Header } from "../components/Header";
import { LeftSide } from "../components/LeftSide";
import { RightSide } from "../components/RightSide";

interface MainLayoutProps {
  children: React.ReactNode;
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
  contentFullWidth,
  hideMenu,
  className,
}) => {
  return (
    <div className={clsx(className)}>
      <Header />
      <div className="contentRow">
        {!hideMenu && <LeftSide />}
        <div className={clsx("postRow", { "postRow--full": contentFullWidth })}>{children}</div>
        {!hideComments && <RightSide />}
      </div>
    </div>
  );
};
