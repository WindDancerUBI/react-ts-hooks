/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-11 11:00:02
 * @Function: use of this file
 */

import React from 'react'
import { RegisterForm } from "../register/RegisterForm";
import { UserLayout } from '../../layouts/userLayout'

export const RegisterPage: React.FC = () => {
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>
  )
}