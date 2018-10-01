import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App.jsx';
import * as actions from '../actions/app'

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
