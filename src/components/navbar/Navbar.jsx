import React from 'react'
import { Menu, Icon, Form, Input, Button } from 'antd'

const Navbar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <Icon type="mail" />
                Logo
            </Menu.Item>
            {/* <Menu.Item>
                <Form layout="inline">
                    <Form.Item>
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        Log in
                    </Button>
                    </Form.Item>
                </Form>
            </Menu.Item> */}
        </Menu>
    )
}

export default Navbar 