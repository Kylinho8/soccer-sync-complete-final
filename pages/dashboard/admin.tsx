import withRoleProtection from "../../components/withRoleProtection";
function AdminDashboard() { return <div>Welcome Admin!</div>; }
export default withRoleProtection(AdminDashboard, "admin");