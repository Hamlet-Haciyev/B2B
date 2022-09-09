import React from "react";
import { Col, Row, Form, Input, Carousel } from "antd";
import { RegisterPage } from "./RegisterStyled";
import { FormItem, FormGroup, Button, Select } from "../../components";
import { Link } from "react-router-dom";
import Overview from "../../components/Overview";
const RegisterContainer = () => {
  const { Option } = Select;
  return (
    <RegisterPage>
      <Row>
        <Col span={13}>
          <Overview />
        </Col>
        <Col span={11}>
          <div className="reg__rightside">
            <h2 className="head">Registration</h2>
            <Carousel effect="fade">
              <div className="slide-1">
                <Form
                  name="register"
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <FormGroup>
                    <h4>Personal Details</h4>
                    <FormItem
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input placeholder="Name" />
                    </FormItem>
                    <FormItem
                      label="Last Name"
                      name="lname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Last Name" />
                    </FormItem>
                    <FormItem
                      label="Email (corporate)"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                      ]}
                    >
                      <Input placeholder="example@gmail.com" />
                    </FormItem>
                    <FormItem
                      label="Telephone"
                      name="Telephone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Telephone!",
                        },
                      ]}
                    >
                      <div className="telephone">
                        <Input placeholder="50 000 00 00" />
                      </div>
                    </FormItem>
                  </FormGroup>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      width="100%"
                      height="40px"
                    >
                      <Link to="/reg">Continue 🠒</Link>
                    </Button>
                  </FormItem>
                  <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                  </span>
                </Form>
              </div>
              <div className="slide-2">
                <Form>
                  <FormGroup>
                    <h4>Company Details</h4>
                    <FormItem
                      label="Company Name"
                      name="companyname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input placeholder="Write your company" />
                    </FormItem>
                    <FormItem
                      label="Category"
                      name="category"
                      rules={[
                        {
                          required: true,
                          message: "Please input your category!",
                        },
                      ]}
                    >
                      <Select defaultValue={"Default"}>
                        <Option value="Default1">Default 1</Option>
                        <Option value="Default2">Default 2</Option>
                        <Option value="Default3">Default 3</Option>
                      </Select>
                    </FormItem>
                    <FormItem
                      label="Telephone"
                      name="Telephone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Telephone!",
                        },
                      ]}
                    >
                      <Input placeholder="+994 50 000 00 00" />
                    </FormItem>
                    <FormItem
                      label="Address"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Address!",
                        },
                      ]}
                    >
                      <Input placeholder="Write your Address" />
                    </FormItem>
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        width="100%"
                        height="40px"
                      >
                        <Link to="/reg">Continue 🠒</Link>
                      </Button>
                    </FormItem>
                    <span>
                      Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                  </FormGroup>
                </Form>
              </div>
              <div className="slide-3">
                <Form>
                  <FormGroup>
                    <h4>Company Details</h4>
                    <FormItem
                      label="Description"
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Description!",
                        },
                      ]}
                    >
                      <Input.TextArea placeholder="Describe here" />
                    </FormItem>
                    <FormItem
                      label="Website Link"
                      name="websitelink"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Website Link!",
                        },
                      ]}
                    >
                      <Input placeholder="www.example.com" />
                    </FormItem>
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        width="100%"
                        height="40px"
                      >
                        <Link to="/reg">Submit</Link>
                      </Button>
                    </FormItem>
                    <span>
                      Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                  </FormGroup>
                </Form>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </RegisterPage>
  );
};

export default RegisterContainer;
