import { connect } from "react-redux";
import { default as AllUsers } from "../components/Users";

export const Users = connect(
  state => ({ users: state.users }),
  {}
)(AllUsers);