import { Model } from 'wise';

class User extends Model{
  async login(id){
    // get namespace user state
    // app.state is global state
    const { state, app, set } = this;
    const user = await app.service.login(id);
    await set({...state, ...user})
  }
}

export default User;
