import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  const { list } = props;
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {list.map((row) => <tr key={row.id}><td>{row.id}</td><td>{row.description}</td></tr>)}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  list: state.todo.data,
});

export default connect(mapStateToProps)(TodoList);
