import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import Menu, { MenuProps } from "antd/es/menu";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: "/learn",
        label: "Quick Start",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/tutorial-tic-tac-toe',
                label: "Tutorial: Tic-Tac-Toe"
            },
            {
                key: '/learn/thinking-in-react',
                label: "Thinking in React"
            }
        ]
    },
    {
        key: "/learn/installation",
        label: "Installation",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/start-a-new-react-project',
                label: "Start a New React Project"
            },
            {
                key: '/learn/add-react-to-an-existing-project',
                label: "Add React to an Existing Project"
            },
            {
                key: '/learn/editor-setup',
                label: "Editor Setup"
            },
            {
                key: '/learn/react-developer-tools',
                label: "React Developer Tools"
            }
        ]
    },
    {
        key: "/learn/describing-the-ui",
        label: "Describing the UI",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/your-first-component',
                label: "Your First Component"
            },
            {
                key: '/learn/importing-and-exporting-components',
                label: "Importing and Exporting Components"
            }
        ]
    },
    {
        key: "/learn/adding-interactivity",
        label: "Adding Interactivity",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/responding-to-events',
                label: "Responding to Events"
            },
            {
                key: '/learn/state-a-components-memory',
                label: "State: A Component's Memory"
            }
        ]
    },
    {
        key: "/learn/managing-state",
        label: "Managing State",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/reacting-to-input-with-state',
                label: "Reacting to Input with State"
            },
            {
                key: '/learn/choosing-the-state-structure',
                label: "Choosing the State Structure"
            }
        ]
    },
    {
        key: "/learn/escape-hatches",
        label: "Escape Hatches",
        icon: <UserOutlined />,
        children: [
            {
                key: '/learn/referencing-values-with-refs',
                label: "Referencing Values with Refs"
            },
            {
                key: '/learn/manipulating-the-dom-with-refs',
                label: "Manipulating the DOM with Refs"
            }
        ]
    }
];

const level1Items = ['Quick Start', 'Installation', 'Describing the UI', 'Adding Interactivity', 'Managing State', 'Escape Hatches'];
const items3: MenuProps['items'] = level1Items.map(
    (label) => {
        const key = (label + '').replace(' ', '-').toLowerCase();
        let childrenArr: string[] = [];
        if (label == "Quick Start") childrenArr = ['Tutorial: Tic-Tac-Toe', 'Thinking in React'];
        return {
            key: key,
            label: `${label}`,
            children: childrenArr.map((child, j) => {
                const subKey = (child + '').replace(": ", "-").replace(' ', '-').toLowerCase();
                return {
                    key: subKey,
                    label: child,
                };
            }),
        }

    }
);

let firstOpenKey = "";

const Comp: React.FC = () => {
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const navigateTo = useNavigate();
    const curRouter = useLocation();
    console.log("当前路径，", curRouter);//如果发现加载两次， 这是开发环境才会产生，生成环境不会，在main.tsx中去掉严格模式标签就不会加载两次了
    // 至于为什么react要加载两次， https://blog.csdn.net/HYHhmbb/article/details/125973790




    function findKey(obj: { key: string; }) {
        return obj.key === curRouter.pathname;
    }

    for (let i = 0; i < items3.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 1 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key + '' ?? "";
            break;
        }
    }

    const menuClick = (e: { key: string }) => {
        console.log("click menu", e, e.key);
        navigateTo(e.key);
    }

    function handleOpenChange(openKeys: string[]): void {
        setOpenKeys([openKeys[openKeys.length - 1]]);
    }

    return (<Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[curRouter.pathname]}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
        onClick={menuClick}
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
    />)
}

export default Comp