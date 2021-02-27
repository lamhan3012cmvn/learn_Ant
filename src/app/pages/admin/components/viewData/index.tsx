import { Table, Divider, Tag } from 'antd';
import { ICustomer } from '../../../../../api/customers/interface'
import { FC } from 'react'
const { Column, ColumnGroup } = Table;
interface props {
    customers: ICustomer[]
}
const ViewData: FC<props> = ({ customers }) => {
    return (
        <Table dataSource={customers} scroll={{ y: 300 }} pagination={{ pageSize: 10 }} size={"small"} style={{ width: '98%', margin: '0 auto' }}>
            <Column title="ID" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="Product" dataIndex="product" key="product" />
            <Column title="Imei" dataIndex="imei" key="imei" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="timeBuy" dataIndex="timeBuy" key="timeBuy" />
            <Column title="time_guarantee" dataIndex="time_guarantee" key="time_guarantee" />
            {/* <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags: Array<string> | null) => (
                    tags ?
                        (<span>
                            {tags.map((tag: string | null) => (
                                <Tag color="green" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </span>) : <span> ====/=== </span>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(text: any, record: IData) => (
                    record.lastName ?
                        (<span>
                            <a>Invite {record.lastName}</a>
                            <Divider type="vertical" />
                            <a>Delete</a>
                        </span>) : (<span> ==//=== </span>)
                )}
            /> */}
        </Table>
    )

}
export default ViewData