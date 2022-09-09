import React from "react";
import { Form } from "antd";
import { Input } from "antd";
import { FormHeader, FormSpan } from "./ForgotPasswordStyled";
import { Link } from "react-router-dom";
import { Button, FormItem } from "../../components";
const ForgotPassword = () => {
  return (
    <Form>
      <FormHeader>Reset your password</FormHeader>
      <FormSpan>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </FormSpan>
      <FormItem
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="example@gmail.com" />
      </FormItem>
      <div style={{ marginTop: "38px" }}>
        <Button type="primary" width="100%" height="47px">
          <Link to="/submitsucces">Continue</Link>
        </Button>
      </div>
    </Form>
  );
};

export default ForgotPassword;
