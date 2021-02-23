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
import { languageSlice } from '../../redux/language/languageSlice'
import { userSlice } from "../../redux/user/userSlice";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode'

interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {

  const history = useHistory()
  const { t } = useTranslation()
  const languageList = useSelector(state => state.language.languageList)
  const language = useSelector(state => state.language.language)
  const token = useSelector(state => state.user.token)
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      const data = jwt_decode<JwtPayload>(token)
      setUsername(data.username)
    }
  }, [token])

  const menuClickHandle = (e) => {
    console.log(e);
    if (e.key === "new") {
      dispatch(languageSlice.actions.addLanguage({name: "新语言", code: "new_lang"}))
    } else {
      dispatch(languageSlice.actions.changeLanguage(e.key))
    }
  };

  const onLogout = () => {
    dispatch(userSlice.actions.logOut())
  }

  return (
    <div className={styles.header}>
      <div className={styles['top-header']}>
        <div className={styles['inner-top']}>
          <Typography.Text>
            {t("header.slogan")}
          </Typography.Text>
          <Dropdown.Button
            className={styles['text-group']}
            style={{marginLeft: 15}}
            overlay={
              <Menu onClick={menuClickHandle}>
                {languageList.map(item => {
                  return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                })}
                <Menu.Item key='new'>{t("header.add_new_language")}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          {
            token? 
            (<Button.Group className={styles["button-group"]}>
              <span>
                {t("header.welcome")}
                <Typography.Text strong>{username}</Typography.Text>
              </span>
              <Button>{t("header.shoppingCart")}</Button>
              <Button onClick={onLogout}>{t("header.signOut")}</Button>
            </Button.Group>)
            :
            (<Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>{t("header.register")}</Button>
              <Button onClick={() => history.push('/signIn')}>{t("header.signin")}</Button>
            </Button.Group>)
            }
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} className={styles['App-logo']} alt='#'/>
        <Typography.Title level={2} className={styles.title}>
          {t("header.title")}
        </Typography.Title>
        <Input.Search 
          placeholder='请输入目的地'
          className={styles['input-search']}
          onSearch={(keyword) => {history.push('/search/' + keyword)}}
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

