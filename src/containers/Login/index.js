import React from "react";
import { Form, Input, Checkbox, Col, Row } from "antd";
import { FormHeader, LoginPage, LoginRight } from "./LoginStyled";
import FormItem from "../../components/FormItem";
import Button from "../../components/Button";
import FormGroup from "../../components/FormGroup";
import { Link } from "react-router-dom";
import { ForgotPassword } from "./LoginStyled";
import Overview from "../../components/Overview";

const LoginConatiner = () => {
  return (
    <LoginPage>
      <Row>
        <Col span={13}>
          <Overview />
        </Col>
        <Col span={11}>
          <LoginRight>
            <FormHeader>Welcome Back!</FormHeader>
            <Form>
              <FormGroup>
                <FormItem
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="example@gmail.com" />
                </FormItem>
                <FormItem
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input type="password" placeholder="****************" />
                </FormItem>
                <div className="remember">
                  <Checkbox>Remember me</Checkbox>
                  <ForgotPassword>
                    <Link to="/forgotpassword">Forgot your password?</Link>
                  </ForgotPassword>
                </div>
              </FormGroup>
              <Button
                type="primary"
                htmlType="submit"
                width="100%"
                height="40px"
              >
                Submit
              </Button>
            </Form>
            <span className="account">
              Already have an account? <Link to="/reg">Register</Link>
            </span>
          </LoginRight>
        </Col>
      </Row>
    </LoginPage>
  );
};

export default LoginConatiner;
