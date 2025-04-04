import Home from "./Tabs/Home/Home";
import About from "./Tabs/About/About";

const tabData = [
    {
        name: 'Common',
        icon: 'home',
        component: Home,
        identifierInURL: 'common',
    },
    {
        name: 'Manage Roles',
        icon: 'home',
        component: Home,
        identifierInURL: 'manage-roles',
    },
    {
        name: 'About Developer',
        icon: 'home',
        component: About,
        identifierInURL: 'about-developer',
    },
];

export default tabData;
