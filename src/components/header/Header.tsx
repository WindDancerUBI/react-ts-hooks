/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-19 20:05:44
 * @Function: 描述一下模块的功能
 */

import { Typography, Dropdown, Menu, Button, Layout, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector } from "../../redux/hooks";
import { addLanguageActionCreator, changeLanguageActionCreator} from '../../redux/language/languageActions'
import { useDispatch } from 'react-redux'

export const Header: React.FC = () => {

  const history = useHistory()
  const { t } = useTranslation()
  const languageList = useSelector(state => state.languageList)
  const dispatch = useDispatch()

  const menuClickHandle = (e) => {
    console.log(e);
    if (e.key === "new") {
      // 处理新语言添加action
      const action = addLanguageActionCreator("新语言", "new_lang")
      dispatch(action)
    } else {
      const action = changeLanguageActionCreator(e.key)
      dispatch(action)
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles['top-header']}>
        <div className={styles['inner-top']}>
          <Typography.Text>
            让旅游更幸福
          </Typography.Text>
          <Dropdown.Button
            className={styles['text-group']}
            style={{marginLeft: 15}}
            overlay={
              <Menu onClick={menuClickHandle}>
                {languageList.map(item => {
                  return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                })}
                <Menu.Item key='new'>添加新语言</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => history.push('/register')}>注册</Button>
            <Button onClick={() => history.push('/signIn')}>登陆</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} className={styles['App-logo']} alt='#'/>
        <Typography.Title level={2} className={styles.title}>
          React旅游网
        </Typography.Title>
        <Input.Search 
          placeholder='请输入目的地'
          className={styles['input-search']}
        />
      </Layout.Header>
      <Menu mode="horizontal" className={styles['menu-header']}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  )
}

