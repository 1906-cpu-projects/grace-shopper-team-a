import React from 'react';
import {connect} from 'react-redux';
import { getUsers } from './redux/store.js';

class Users extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul>
        {
          this.props.user.map( u => <li key={u.id}>{u.name}</li>)
        }
      </ul>
    )
  }
};

const mapStateToUsersProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToUserProps = {
  getUsers: getUsers
}

export default connect(mapStateToUsersProps, mapDispatchToUserProps)(Users);
