import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PoemList from './PoemList';
import { fetchPoems } from '../../store/actions';

function Dashboard(props) {

  useEffect(() => {
    console.log(props)
    props.fetchPoems();

  })

  return (
    <div>
      <PoemList />
    </div>
  )
};

const mapStateToProps = state => {
  console.log(state)
  return {
    token: state.authReducer.token
  }
}

export default connect(mapStateToProps, { fetchPoems })(Dashboard)