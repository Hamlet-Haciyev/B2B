import { Tabs } from "antd";
import { Search, Select } from "../../components";
import { FilterContainer, FilterSelect ,TabsContainer} from "./FilterStyled";
const Filter = () => {
  const { Option } = Select;
  const { TabPane } = Tabs;
  return (
    <FilterContainer>
      <TabsContainer>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tender" key="1"></TabPane>
          <TabPane tab="Product" key="2"></TabPane>
          <TabPane tab="Service" key="3"></TabPane>
        </Tabs>
      </TabsContainer>
      <Search />
      <FilterSelect>
        <Select width={"162px"} defaultValue="Category" borderRadius gap>
          <Option value="Category">Category</Option>
          <Option value="Category1">Category1</Option>
          <Option value="Category2">Category2</Option>
        </Select>
        <Select width={"162px"} defaultValue="Regions" borderRadius gap>
          <Option value="Baku">Baku</Option>
          <Option value="Sumgayit">Sumgayit</Option>
          <Option value="Binagadi">Binagadi</Option>
        </Select>
        <Select width={"162px"} defaultValue="Carries" borderRadius gap>
          <Option value="Carries">Carries</Option>
          <Option value="Carries1">Carries1</Option>
          <Option value="Carries2">Carries2</Option>
        </Select>
        <Select width={"162px"} defaultValue="Price" borderRadius gap>
          <Option value="100000">100000</Option>
          <Option value="500000">500000</Option>
          <Option value="1000000">1000000</Option>
        </Select>
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
