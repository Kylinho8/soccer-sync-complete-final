import withRoleProtection from "../../components/withRoleProtection";

function CoachDashboard() {
  return (
    <div>
      <h1>Coach Dashboard</h1>
      <p>Only coaches can see this.</p>
    </div>
  );
}

export default withRoleProtection(CoachDashboard, "coach");
