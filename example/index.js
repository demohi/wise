import { connect } from 'wise';
import * as React from 'react';

class APP extends React.Component {
  async handleLogin(id) {
    const {user} = this.props;
    await user.login(id);
  }
  render() {
    const {user} = this.props;
    const state = user.state;
    return (
      <div>
        <button onClick={this.handleLogin.bind(this, 111)}>
        </button >
        name: {state.name}
      </div>

    );
  }
}
function mapAppToProps(app=>{
  return {
    user: app.model.user,
  }
})

export default connect(mapAppToProps)(APP);
