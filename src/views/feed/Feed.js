import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PoemList from './PoemList';
import { fetchPoems } from '../../store/actions';

function Dashboard(props) {

  useEffect(() => {
    console.log(props)
    props.fetchPoems();

    if(props.isLoggedIn) {
      props.history.push('/dashboard');
    } else {
      props.history.push('/login');
    }
  }, [])

  return (
    <div>
      <PoemList poems={props.poems}/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    poems: state.authReducer.poems,
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, { fetchPoems })(Dashboard)