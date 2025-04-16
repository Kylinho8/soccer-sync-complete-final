import withRoleProtection from "../../components/withRoleProtection";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Only admins can see this.</p>
    </div>
  );
}

export default withRoleProtection(AdminDashboard, "admin");
