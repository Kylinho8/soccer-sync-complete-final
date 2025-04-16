import withRoleProtection from "../../components/withRoleProtection";
function CoachDashboard() { return <div>Welcome Coach!</div>; }
export default withRoleProtection(CoachDashboard, "coach");