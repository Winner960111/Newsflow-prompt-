import React, { useState } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "First Name Last Name",
    dataIndex: "name",
    filters: [
      {
        text: "Adison Rhiel Madsen",
        value: "Adison Rhiel Madsen",
      },
      {
        text: "Paityn Lubin",
        value: "Paityn Lubin",
      },
      
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Sign Up Date",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Status",
    dataIndex: "Status",
    defaultSortOrder: "descend",
    
    filters: [
        {
          text: "User",
          value: "User",
        },
        {
          text: "Partner",
          value: "Partner",
        },
      ],
      onFilter: (value: string, record) => record.Status.indexOf(value) === 0,
  },
  {
    title: "Referred",
    dataIndex: "Referred",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Referred - b.Referred,
  },
  {
    title: "Current Plan",
    dataIndex: "Current_Plan",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Current_Plan - b.Current_Plan,
  },
  {
    title: "Total $",
    dataIndex: "Total",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.Total - b.Total,
  },
  {
    
    title: "Status",
    dataIndex: "Status_Active",
    
    filters: [
      {
        text: "Churned",
        value: "Churned",
      },
      {
        text: "Active",
        value: "Active",
      },
      
    ],
   
    
  
    
    onFilter: (value: string, record) => record.Status_Active.props.children.indexOf(value) === 0,
  },
];

const data = [
  {
    key: "1",
    name: "Adison Rhiel Madsen",
    age: "04.12.2003 03:21",
    Status: "User",
    Referred: 6,
    Current_Plan: "S - 1 year",
    Total: "$28",
    Status_Active: <Tag color="blue" >Active</Tag>
  },
  {
    key: "2",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "Partner",
    Referred: 7,
    Current_Plan: "C - 1 Month",
    Total: "$58",
    Status_Active:<Tag color="blue" >Active</Tag>

  },
  {
    key: "3",
    name: "Phillip Bator",
    age: "04.12.2003 03:21",
    Status: "User",
    Referred: 15,
    Current_Plan: "N - 1 Year",
    Total: "$20",
    Status_Active: <Tag color="red" >Churned</Tag>

  },
  {
    key: "4",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "Partner",
    Referred: 6,
    Current_Plan: "B - 1 Month",
    Total: "$28",
    Status_Active:<Tag color="blue" >Active</Tag>

  },
  {
    key: "5",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "User",
    Referred: 7,
    Current_Plan: "B - 1 Month",
    Total: "$82",
        Status_Active: <Tag color="red" >Churned</Tag>


  },
  {
    key: "6",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "Partner",
    Referred: 1,
    Current_Plan: "A - 1 Month",
    Total: "$75",
    Status_Active:<Tag color="blue" >Active</Tag>

  },
  {
    key: "7",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "User",
    Referred: 2,
    Current_Plan: "B - 1 Year",
    Total: "$28",
        Status_Active: <Tag color="red" >Churned</Tag>


  },
  {
    key: "8",
    name: "Paityn Lubin",
    age: "10.01.2003  12:54",
    Status: "User",
    Referred: 9,
    Current_Plan: "A - 1 Month",
    Total: "$28",
        Status_Active: <Tag color="red" >Churned</Tag>


  },
];

// const App: React.FC = () => {

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {

//     setSelectedRowKeys(newSelectedRowKeys);
//   };
// }

export default function Table_User_Data() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {

    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {

  };
  return (
    <div className="table-responsive">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}
