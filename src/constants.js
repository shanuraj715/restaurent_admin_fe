const CONSTANTS = {
    APP_NAME: 'Restaurent Management System',
    APP_NAME_SHORT: 'RMS',
    APP_VERSION: '1.0.0',
    APP_DEVELOPER: {
        NAME: 'Shanu Raj',
        URL: 'https://shanuthewebdev.in',
        GITHUB: 'https://github.com/shanuraj715',
        LINKEDIN: 'https://www.linkedin.com/in/shanuraj715/',
    },
    API_ENDPOINT: 'http://localhost:3030/',
};

CONSTANTS.PAGE_TITLES = {
    dashbaord: 'Dashboard',
    orders: 'Orders',
    category: 'Category',
    coupons: 'Coupons',
    payments: 'Payments',
    add_user: 'Add User',
    manage_users: 'Manage Users',
    add_member: 'Add Member',
    manage_members: 'Manage Members',
    feedback_reviews: 'Feedback & Reviews',
    queries_tickets: 'Queries & Tickets',
    items: 'Add or Manage Items',
    settings: 'Manage Settings',

    page404: 'Page Not Found',
    login: 'Login',
};

CONSTANTS.PAGE_HEADER_TITLE = {
    dashboard: 'Dashboard',
    orders: 'Orders',
    category: 'Category',
    coupons: 'Coupons',
    payments: 'Payments',
    add_user: 'Add User',
    manage_users: 'Manage Users',
    add_member: 'Add Member',
    manage_members: 'Manage Members',
    feedback_reviews: 'Feedback & Reviews',
    queries_tickets: 'Queries & Tickets',
    items: 'Add or Manage Items',
    settings: 'Manage Settings',
};

CONSTANTS.ORDER_STATUS_LIST = ['pending', 'onWay', 'cancelled', 'success'];

CONSTANTS.ORDER_STATUS = {
    pending: 'pending',
    cancelled: 'cancelled',
    onWay: 'onWay',
    success: 'success',
};

export default CONSTANTS;
