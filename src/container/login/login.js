import React, {Component} from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,Button, WhiteSpace, WingBlank} from "antd-mobile";
class Login extends Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo/>
                登陆页
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </List>
                    <Button type="primary">登陆</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    }
}
export default Login;