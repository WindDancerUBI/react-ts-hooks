/*
 * @file: 文件描述
 * @author: huangjitao
 */

import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <Typography.Title level={5} >
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  )
}

