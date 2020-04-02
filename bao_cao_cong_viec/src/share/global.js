// Các biến Const hoặc các cấu hình sẽ để chung ở đây
const Global = {
    url_auth: "http://localhost:8989/",
    url_server: "http://localhost:8989/",
    allMenu: [
        {
            path: "/home",
            name: "Home",
            text: "Home",
            isParent: false,
            icon: "home",
            parent: ""
        },
        {
            path: "/report",
            name: "Report",
            text: "Report",
            isParent: true,
            icon: "edit",
            parent: ""
        },
        {
            path: "/report/sendReport",
            name: "SendReport",
            text: "Send report",
            isParent: false,
            icon: "paper-plane",
            parent: "Report"
        },
        {
            path: "/report/managerReport",
            name: "managerReport",
            text: "manager Report",
            isParent: false,
            icon: "tasks",
            parent: "Report"
        },
        {
            path: "/report/viewSendReport",
            name: "viewSendReport",
            text: "view Send Report",
            isParent: false,
            icon: "list",
            parent: "Report"
        },
        {
            path: "/managerStaff",
            name: "ManagerStaff",
            text: "Manager Staff",
            isParent: true,
            icon: "users",
            parent: ""
        },
        {
            path: "/managerStaff/company",
            name: "Company",
            text: "Company",
            isParent: false,
            icon: "users",
            parent: "ManagerStaff"
        },
        {
            path: "/managerStaff/branch",
            name: "Branch",
            text: "Branch",
            isParent: false,
            icon: "users",
            parent: "ManagerStaff"
        },
        {
            path: "/managerStaff/department",
            name: "Department",
            text: "Department",
            isParent: false,
            icon: "users",
            parent: "ManagerStaff"
        },
        {
            path: "/managerStaff/team",
            name: "Team",
            text: "Team",
            isParent: false,
            icon: "users",
            parent: "ManagerStaff"
        },
        {
            path: "/managerStaff/user",
            name: "User",
            text: "User",
            isParent: false,
            icon: "users",
            parent: "ManagerStaff"
        },
        {
            path: "/administration",
            name: "Administration",
            text: "Administration",
            isParent: true,
            icon: "users",
            parent: ""
        },
        {
            path: "/administration/accountgroup",
            name: "AccountGroup",
            text: "Account Group",
            isParent: false,
            icon: "users",
            parent: "Administration"
        },
        {
            path: "/administration/permission",
            name: "Permission",
            text: "Permission",
            isParent: false,
            icon: "users",
            parent: "Administration"
        },
    ],
}

export default Global;