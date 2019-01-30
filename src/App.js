import React, { Component } from 'react';
import './App.css';
import {Button,List} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            solders:['胡子','朱子','胖子']
        }
    }


    render() {
        const boss = '李云龙';
        return (
            <div>
                <h2>独立团{boss}</h2>
                <Yiying1/>

                <Yiying/>

            </div>
        );
    }
}


function Yiying1() {
    return (
        <div>函数和class是一样的</div> // =函数和class是一样的；
    );
}

class Yiying extends Component{
    constructor(props) {
        super(props);
        this.state = {
            solders:['胡子','朱子','胖子']
        }
        this.addSolider = this.addSolider.bind(this);//第一种方法
    }


    addSolider = ()=>{ //第二种方法，箭头函数
        console.log('hello add solider');
        this.setState({
            solders:[...this.state.solders,'新兵蛋子'+ Math.random()]
        });
    };
    render() {
        const boss = '张三';
        return (
            <div>
                <Button type="primary" onClick={this.addSolider}>新兵入伍</Button>

                <List renderHeader={()=>{ '士兵列表' }}>
                    {

                        this.state.solders.map((item,index)=>{
                            return <List.Item key={index} className="">
                                    {item}
                                  </List.Item>
                         })

                    }
                </List>

                <h2>一营营长，{boss}</h2>
                {/*<button onClick={()=>this.addSolider()}>新兵入伍</button>   第三种方法，箭头函数*/}

            </div>
        );
    }
}


export default App;
