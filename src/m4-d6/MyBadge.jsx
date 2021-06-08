import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color }) => <Badge variant={color}>{text}</Badge>;

export default MyBadge;
