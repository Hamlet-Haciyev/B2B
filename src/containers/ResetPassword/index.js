import React from "react";
import {
  ResetPasswordContainer,
  Head,
  Text,
  BtnResetPasswordWrapper,
} from "./ResetPasswordStyled";
import { Input } from "antd";
import {FormItem,Button} from "../../components";
const ResetPassword = () => {
  return (
    <ResetPasswordContainer>
      <Head>Reset your password</Head>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <FormItem label={"Temporary password"}>
        <Input placeholder="*******************" type={"password"}></Input>
      </FormItem>
      <FormItem label={"New Password"}>
        <Input.Password placeholder="*******************"></Input.Password>
      </FormItem>
      <FormItem label={"Repeat Password"}>
        <Input.Password placeholder="*******************"></Input.Password>
      </FormItem>
      <BtnResetPasswordWrapper>
        <FormItem>
          <Button type="primary" htmlType="submit" width="100%" height="47px">
            Reset Password
          </Button>
        </FormItem>
      </BtnResetPasswordWrapper>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
