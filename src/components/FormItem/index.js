import { Form } from "antd";
import { FormItemStyled } from "./FormItemStyled";
const FormItem = ({ label, children, name, rules }) => {
  const { Item } = Form;
  return (
    <FormItemStyled>
      <Item label={label} name={name} rules={rules}>
        {children}
      </Item>
    </FormItemStyled>
  );
};

export default FormItem;
