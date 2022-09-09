import React from "react";
import { ChangePasswordContainer, Head, Text,BtnChangePasswordWrapper } from "./ChangePasswordStyled";
import { Input } from "antd";
import {Button,FormItem} from "../../components";
const ChangePassword = () => {
  return (
    <ChangePasswordContainer>
      <Head>Reset your password</Head>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <FormItem label={"Password"}>
        <Input.Password placeholder="*******************"></Input.Password>
      </FormItem>
      <FormItem label={"Repeat Password"}>
        <Input.Password placeholder="*******************"></Input.Password>
      </FormItem>
      <BtnChangePasswordWrapper>
        <FormItem>
          <Button type="primary" htmlType="submit" width="100%" height="47px">
            Reset Password
          </Button>
        </FormItem>
      </BtnChangePasswordWrapper>
    </ChangePasswordContainer>
  );
};

export default ChangePassword;
