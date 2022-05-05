import React from "react"
import { Menu } from "antd"
import 'antd/dist/antd.css'
import './siderMenu.css'

import { DiscountIcon, GroupsIcon, MenuItemIcon, MGroupsIcon, MSchemesIcon, SchemesIcon, ClassificationsIcon, PriceTypesIcon, TaxGroupsIcon, CurrenciesIcon, RegionsIcon, ConceptsIcon, RestaurantsIcon, PosIcon, EmployeesIcon, VersionIcon } from "../../imageSVG"

const SiderMenu = () => {

    const menu = [
        {
            key: 'menu',
            icon: null,
            children: [
                {
                    key: 1,
                    icon: <MenuItemIcon />,
                    children: null,
                    label: 'Menu items'
                },
                {
                    key: 2,
                    icon: <MGroupsIcon />,
                    children: null,
                    label: 'Modifier groups'
                },
                {
                    key: 3,
                    icon: <MSchemesIcon />,
                    children: null,
                    label: 'Modifier schemes'
                },
                {
                    key: 4,
                    icon: <GroupsIcon />,
                    children: null,
                    label: 'Combo groups'
                },
                {
                    key: 5,
                    icon: <SchemesIcon />,
                    children: null,
                    label: 'Combo schemes'
                },
                {
                    key: 6,
                    icon: <ClassificationsIcon />,
                    children: null,
                    label: 'Classifications'
                },

            ],
            label: 'Menu',
            type: 'group'
        },
        {
            key: 'finance',
            icon: null,
            children: [
                {
                    key: 7,
                    icon: <DiscountIcon />,
                    children: null,
                    label: 'Discounts'
                },
                {
                    key: 8,
                    icon: <PriceTypesIcon />,
                    children: null,
                    label: 'Price types'
                },
                {
                    key: 9,
                    icon: <TaxGroupsIcon />,
                    children: null,
                    label: 'Tax groups'
                },
                {
                    key: 10,
                    icon: <CurrenciesIcon />,
                    children: null,
                    label: 'Currencies'
                }
            ],
            label: 'Finance',
            type: 'group'
        },
        {
            key: 'administration',
            icon: null,
            children: [
                {
                    key: 11,
                    icon: <RegionsIcon />,
                    children: null,
                    label: 'Regions'
                },
                {
                    key: 12,
                    icon: <ConceptsIcon />,
                    children: null,
                    label: 'Concepts'
                },
                {
                    key: 13,
                    icon: <RestaurantsIcon />,
                    children: null,
                    label: 'Restaurants'
                },
                {
                    key: 14,
                    icon: <PosIcon />,
                    children: null,
                    label: 'POS'
                },
                {
                    key: 15,
                    icon: <EmployeesIcon />,
                    children: null,
                    label: 'Employees'
                }
            ],
            label: 'Administration',
            type: 'group'
        }
    ]

    return (
        <div className="menu-line">
            <Menu
                defaultSelectedKeys={['1']}
                items={menu}
                style={{
                    backgroundColor: '#F3F2F1',
                    border: 'none'
                }}
            />
            <div className="version-line flex items-center px-5 py-2 mt-40 space-x-2 ">
                <VersionIcon />
                <span className="text-xs font-normal text-grey-500">Version 1.0.1</span>
            </div>
        </div>

    )
}

export default SiderMenu



