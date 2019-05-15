import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PoemList from './PoemList';
import { fetchPoems } from '../../store/actions';

function Dashboard(props) {

  useEffect(() => {
    props.fetchPoems();
  }, [])

  return (
    <div>
      <PoemList />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(null, { fetchPoems })(Dashboard)