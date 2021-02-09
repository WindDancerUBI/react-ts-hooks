/*
 * @file: 文件描述
 * @author: huangjitao
 */

import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout.Footer className={styles.footer}>
      <Typography.Title level={5} >
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  )
}

