import './style.css'
import { ICustomer } from '../../../../../api/customers/interface'
import { getAll, getByName } from '../../../../../api/customers'


import { useState, useEffect } from 'react'
import { Layout, Row, Col, Input, Select, Button, Icon, Divider } from 'antd'
import ViewData from '../viewData'

const { Header, Content } = Layout
const { Search } = Input;
const { Option } = Select;
const ManagerApple = (): JSX.Element => {
    const [data, setdata] = useState<ICustomer[]>([])
    const [filterName, setfilterName] = useState<string>('')
    useEffect((): void => {
        const getCustomer = async () => {
            console.log(filterName)
            try {
                if (filterName === '') {
                    const res: ICustomer[] = await getAll()
                    setdata(res)
                }
                else {
                    console.log(1)
                    const res: ICustomer[] = await getByName(filterName)
                    setdata(res)
                }

            } catch {
            }
        }
        getCustomer()
    }, [filterName])
    const onChange = (): void => {
        console.log("Change")
    }
    const onFocus = (): void => {
        console.log("Focus")
    }
    const onBlur = (): void => {
        console.log("Blur")
    }
    const onSearch = (value: string): void => {
        setfilterName(value)
    }
    return (
        <Layout style={{ background: '#fff' }}>
            <Header>
                <h2 style={{ color: '#fff', textAlign: 'center' }}>Apple</h2>
            </Header>
            <Content>
                <Layout style={{ background: '#fff', marginTop: '20px' }}>
                    <Row style={{ height: '50px' }}>
                        <Col span={22} className='btnNewCustomer'>
                            <Button type="primary" ghost>
                                <span>
                                    <Icon type="apple" /><span style={{ marginLeft: '10px' }}>New Customer</span>
                                </span>
                            </Button>
                        </Col>
                    </Row>
                    <Row type='flex' justify='center' align='middle' >
                        <Col lg={8} md={12} className="control"><span>Đã tìm thấy số khác hàng</span></Col>
                        <Col lg={8} md={12} className="control" >
                            <Search
                                placeholder="input search text"
                                onSearch={onSearch}
                                style={{ width: 200, margin: 'auto 0' }}
                                enterButton
                            />
                        </Col>
                        <Col lg={8} md={24} className="control">
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option: any) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                    </Row>
                </Layout>
                <Divider />
                <ViewData customers={data}></ViewData>
            </Content>
        </Layout>
    )
}

export default ManagerApple
