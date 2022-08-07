import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import ReactHtmlParser from "react-html-parser";
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { GET_LIST_PROJECT_SAGA } from "../../../redux/constants/Cyberbugs/Cyberbugs";
import { OPEN_FORM_EDIT_PROJECT } from "../../../redux/constants/Cyberbugs/Cyberbugs"
import FormEditProject from '../../../components/Forms/FormEditProject/FormEditProject';
const data = [
  {
    "id": 1,
    "projectName": "Web jira",
    "description": "web quản lý task dự án",
    "categoryId": 1,
    "alias": "web-jira",
    "deleted": false
  },
  {
    "id": 2,
    "projectName": "App jira",
    "description": "app quản lý task dự án",
    "categoryId": 3,
    "alias": "app-jira",
    "deleted": false
  },
  {
    "id": 3,
    "projectName": "Phần mềm jira",
    "description": "phần mềm quản lý công việc",
    "categoryId": 2,
    "alias": "phan-mem-jira",
    "deleted": false
  },
  {
    "id": 4,
    "projectName": "string",
    "description": "string",
    "categoryId": 1,
    "alias": "string",
    "deleted": false
  },
  {
    "id": 5,
    "projectName": "project name",
    "description": "<p>adskajdksjahd</p>",
    "categoryId": 2,
    "alias": "project-name",
    "deleted": false
  },
  {
    "id": 6,
    "projectName": "newproject123",
    "description": "<p>dsadsada</p>",
    "categoryId": 1,
    "alias": "newproject123",
    "deleted": false
  },
  {
    "id": 7,
    "projectName": "thoa",
    "description": "<p>front end remote</p>",
    "categoryId": 1,
    "alias": "thoa",
    "deleted": false
  },
  {
    "id": 8,
    "projectName": "alice",
    "description": "<p>test post</p>",
    "categoryId": 1,
    "alias": "alice",
    "deleted": false
  },
  {
    "id": 9,
    "projectName": "alice nguyen",
    "description": "<p>323</p>",
    "categoryId": 1,
    "alias": "alice-nguyen",
    "deleted": false
  },
  {
    "id": 10,
    "projectName": "truc ng",
    "description": "<p>react</p>",
    "categoryId": 1,
    "alias": "truc-ng",
    "deleted": false
  },
  {
    "id": 11,
    "projectName": "nguyen phuc loc ",
    "description": "<p>react</p>",
    "categoryId": 1,
    "alias": "nguyen-phuc-loc",
    "deleted": false
  },
  {
    "id": 12,
    "projectName": "",
    "description": "",
    "categoryId": 1,
    "alias": "",
    "deleted": false
  },
  {
    "id": 13,
    "projectName": "dfs",
    "description": "<p>dfa</p>",
    "categoryId": 1,
    "alias": "dfs",
    "deleted": false
  },
  {
    "id": 14,
    "projectName": "alice ng thanh",
    "description": "<p>react create cyberbugs</p>",
    "categoryId": 1,
    "alias": "alice-ng-thanh",
    "deleted": false
  },
  {
    "id": 15,
    "projectName": "newproject123456",
    "description": "<p>123321321</p>",
    "categoryId": 2,
    "alias": "newproject123456",
    "deleted": false
  }
];

export default function ProjectManagement(props) {
  //Lấy dữ liệu từ reducer về component
  const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);
  //Sử dụng useDispatch để gọi action
  const dispatch = useDispatch();
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(() => {
    dispatch({ type: GET_LIST_PROJECT_SAGA })
  }, [])

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      sorter: (item2, item1) => {
        return item2.id - item1.id;
      },
      sortDirections: ['descend'],
    },
    {
      title: 'projectName',
      dataIndex: 'projectName',
      key: 'projectName',
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
    },
    // {
    //   title: 'description',
    //   dataIndex: 'description',
    //   key: 'description',
    //   render: (text, record, index) => {
    //     let contentJSX = ReactHtmlParser(text);

    //     return <div>
    //       {contentJSX}
    //     </div>
    //   }
    // },
    {
      title: 'category',
      dataIndex: 'categoryName',
      key: 'categoryName',
      sorter: (item2, item1) => {
        let categoryName1 = item1.categoryName?.trim().toLowerCase();
        let categoryName2 = item2.categoryName?.trim().toLowerCase();
        if (categoryName2 < categoryName1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: 'creator',
      // dataIndex: 'creator',
      key: 'creator',
      render: (text, record, index) => {
        // console.log('record', record)
        return <Tag color="green">{record.creator?.name}</Tag>
      },
      sorter: (item2, item1) => {
        let creator1 = item1.creator?.name.trim().toLowerCase();
        let creator2 = item2.creator?.name.trim().toLowerCase();
        if (creator2 < creator1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        return <div>
          <button className="btn mr-2 btn-primary" onClick={() => {
            const action = {
              type: OPEN_FORM_EDIT_PROJECT,
              Component: <FormEditProject/>,
            }

            //dispatch lên reducer nội dung drawer
            dispatch(action);
          }}>
            <FormOutlined style={{ fontSize: 17 }} />
          </button>
          <button className="btn btn-danger">
            <DeleteOutlined style={{ fontSize: 17 }} />
          </button>
        </div>
      },
    }

  ];
  return (
    <div className="container-fluid mt-5">
      <h3>Project management</h3>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
    </div>
  )
}