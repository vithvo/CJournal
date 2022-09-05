import { FullPost } from "../../components/FullPost";

import { MainLayout } from "../../layuots/MainLayout";

import styles from "./Slug.module.scss";

export default function Slug() {
  return (
    <MainLayout contentFullWidth>
      <div className={styles.slugRow}>
        <FullPost />
				
      </div>
    </MainLayout>
  );
}
