import withRoleProtection from "../../components/withRoleProtection";

function PlayerDashboard() {
  return (
    <div>
      <h1>Player Dashboard</h1>
      <p>Only players can see this.</p>
    </div>
  );
}

export default withRoleProtection(PlayerDashboard, "player");
