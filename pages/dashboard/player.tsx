import withRoleProtection from "../../components/withRoleProtection";
function PlayerDashboard() { return <div>Welcome Player!</div>; }
export default withRoleProtection(PlayerDashboard, "player");