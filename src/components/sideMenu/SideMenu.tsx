/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-19 22:14:23
 * @LastEditTime: 2021-02-06 17:29:26
 * @EditDescripttion: edit what
 */

import React from "react";
import { Menu } from 'antd'
import { sideMenuList } from './mockup'
import styles from "./SideMenu.module.css";
import { GifOutlined } from "@ant-design/icons";

const createMenu = (list: any[]) => {
  return list.map((item, index) => {
    if (item.subMenu) {
      return (
        <Menu.SubMenu title={<span><GifOutlined />{item.title}</span>}>
          {createMenu(item.subMenu)}
        </Menu.SubMenu>
      )
    } else {
      return <Menu.Item>{<span><GifOutlined />{item}</span>}</Menu.Item>
    }
  })
}

export const SideMenu = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {createMenu(sideMenuList)}
    </Menu>
  )
}

