import React, { PureComponent } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router'
import { connect } from 'dva';
// import { } from ''

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item

class Navigator extends PureComponent {

    menuClick = ({ item, key, keyPath }) => {
        console.log(`key = ${key}`)
        console.log(this.keys)

        this.props.dispatch({ type: "nav/change", payload: key })
    }

    select = ({ item, key, selectedKeys }) => {
    }

    render() {
        return (
            <Menu
                mode="horizontal"
                theme="dark"
                onClick={this.menuClick}
                onSelect={this.select}
                defaultSelectedKeys={this.props.keys}>
                {/* defaultSelectedKeys={["post"]}> */}
                <Item key="post">
                    <Link to="/index"><Icon type="mail" />发布</Link>
                </Item>
                <Item key="test">
                    <Link to="/test"><Icon type="mail" />测试</Link>
                </Item>
            </Menu>
        )
    }
}

Navigator.propTypes = {
}

function stateToProps(state, props) {
    // console.log('stateToProps')
    console.log(state)
    // console.log(props)
    let list = []
    list.push(state.nav.key)
    state.keys = list
    return { ...state, ...state.keys }
}

export default connect(stateToProps)(Navigator)