/*
 * @Descripttion: 注册表单
 * @Author: huangjitao
 * @Date: 2021-02-10 21:58:09
 * @Function: 描述一下模块的功能
 */

import { Form, Input, Checkbox, Button } from 'antd'
import axios from 'axios'
import styles from './RegisterForm.module.scss'
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const RegisterForm = () => {

  const history = useHistory()

  const onFinish = async(values: any) => {
    try {
      await axios.post("http://123.56.149.216:8080/auth/register", {
        email: values.username,
        password: values.password,
        confirmPassword: values.confirm
      })
      history.push('/signIn/')
    } catch (error) {
      alert('注册失败')
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles['register-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="ConfirmPassword"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your password again!' },
          ({getFieldValue}) => ({
            validator: (_, value) => {
              if (!value || getFieldValue('password')) {
                return Promise.resolve()
              } else {
                return Promise.reject('两次密码不一致')
              }
            }
          }) 
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


