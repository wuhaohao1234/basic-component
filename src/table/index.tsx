import React from 'react';
import { Button, Pagination, Table, TableProps, Select, Tooltip } from 'antd';
import './index.less'
// ts-ignore
import flushed from './flushed.svg'

const { Option } = Select;

interface ITableProps extends TableProps<any> {

}

const TableBasic = (props: ITableProps) => {
  const { columns, dataSource, title } = props;
  return <div className="table-basic" >
    <Table
      title={() => <div className="table-basic-header" >
        <div className="table-basic-header-title" >{title}</div>
        <div className="table-basic-header-option" >
          <Button type="primary" > + 新建</Button>
          <Tooltip placement="top" title={'刷新'}>
            <img style={{ height: '20px' }} src={flushed} />
          </Tooltip>
        </div>
      </div>}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />

    <div className="basic-pagination" >
      <div></div>
      <div className="right-pag" >
        <Pagination size="small" total={50} showTotal={total => `第 1-5 条/总共 ${total} 条`} style={{ marginRight: '10px' }} />
        <Select defaultValue={'10'} size="small" >
          <Option value="10">10条/页</Option>
          <Option value="20">20条/页</Option>
        </Select>
      </div>
    </div>
  </div>
}
export default TableBasic;
