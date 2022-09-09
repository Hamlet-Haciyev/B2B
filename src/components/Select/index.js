import { Select as AntSelect } from "antd";
import { SelectContainer } from "./SelectStyled";
const Select = ({ children, defaultValue, width, borderRadius, bgColor,gap }) => {
  return (
    <SelectContainer width={width} borderRadius={borderRadius} gap={gap}>
      <AntSelect defaultValue={defaultValue}>
        {children.map(({ props }) => (
          <option value={props.value}>{props.value}</option>
        ))}
      </AntSelect>
    </SelectContainer>
  );
};

export default Select;
