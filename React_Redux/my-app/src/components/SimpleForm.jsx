import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeUser } from '../store/actions/todoActions'

const SimpleForm = props => {
  console.log(props)
  const { changeUser, user } = props;
  return (
    <form>
      <div>
        <label>First Name</label>
        <div>
          <input
            onChange={changeUser}
            name="name"
            type="text"
            value={user.name}
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <input
            onChange={changeUser}
            name="lastName"
            type="text"
            value={user.lastName}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <input
            onChange={changeUser}
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <textarea
            onChange={changeUser}
            name="notes"
            value={user.notes}
          />
        </div>
      </div>
      <div>
        <button type="button">
          Submit
        </button>
        <button type="button">
          Clear Values
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({ user: state.todo.user, })
const mapDispatchToProps = dispatch => bindActionCreators({ changeUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);