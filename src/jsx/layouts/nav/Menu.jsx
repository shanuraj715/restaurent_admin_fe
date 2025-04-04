import CONSTANTS from "../../../constants"

const adminMenu = [
    {
        title: "Dashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-gauge"></i>,
        startsWith: ['dashboard', 'orders'],
        content: [
            {
                title: 'Dashboard',
                to: 'dashboard',
                startsWith: ['dashboard'],
            },
            {
                title: 'Orders',
                to: 'orders',
                startsWith: ['orders'],
            }
        ]
    },
    {
        title: "Category",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-table-list"></i>,
        to: 'category/manage',
        startsWith: ['category'],
    },
    {
        title: "Items",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-burger"></i>,
        to: 'items',
        startsWith: ['items'],
    },
    {
        title: "Coupons",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-money-bill"></i>,
        to: 'coupons',
        startsWith: ['coupons'],
    },
    {
        title: "Payments",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-regular fa-money-bill-1"></i>,
        to: 'payments',
        startsWith: ['payments'],
    },
    {
        title: "Users",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-regular fa-address-card"></i>,
        startsWith: ['users'],
        content: [
            {
                title: 'Add User',
                to: 'users/add',
                startsWith: ['users/add'],
            },
            {
                title: 'Manage Users',
                to: 'users/manage',
                startsWith: ['users/manage'],
            },

        ]
    },
    {
        title: "Members",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-user-tie"></i>,
        startsWith: ['members'],
        content: [
            {
                title: 'Add Member',
                to: 'members/add',
                startsWith: ['members/add'],
            },
            {
                title: 'Manage Members',
                to: 'members/manage',
                startsWith: ['members/manage'],
            },

        ]
    },
    {
        title: "Feedback / Reviews",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-star-half-stroke"></i>,
        to: 'feedback-reviews',
        startsWith: ['feedback-reviews']
    },
    {
        title: "Queries / Tickets",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-bugs"></i>,
        to: 'queries-tickets',
        startsWith: ['queries-tickets']
    },
    {
        title: "Settings",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-gears"></i>,
        to: 'settings',
        startsWith: ['settings']
    },
]

const normalUserMenu = [
    {
        title: "Dashboard",
        classsChange: "mm-collapse",
        iconStyle: <i className="fa-solid fa-gauge"></i>,
        startsWith: ['dashboard', 'orders'],
        content: [
            {
                title: 'Dashboard',
                to: 'dashboard',
                startsWith: ['dashboard'],
            },
            {
                title: 'Orders',
                to: 'orders',
                startsWith: ['orders'],
            }
        ]
    }
]


const getMenu = (userType) => {
    if (userType === 'admin') {
        return adminMenu
    }
    return normalUserMenu
}

export default getMenu;