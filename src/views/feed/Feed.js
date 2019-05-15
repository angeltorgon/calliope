import React from 'react';
import { connect } from 'react-redux';
import PoemList from './PoemList';
import { fetchPoems } from '../../store/actions';

function Dashboard() {
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