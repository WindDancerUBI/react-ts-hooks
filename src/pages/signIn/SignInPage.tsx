/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-02 22:30:14
 * @Function: use of this file
 */

import React from "react";
import { SignInForm } from './SignInForm'
import { UserLayout } from "../../layouts/userLayout";

export const SignInPage: React.FC = () => {
  return <UserLayout>
        <SignInForm />
    </UserLayout>
}