import { Model } from 'wise';

class User extends Model{
  async login(id){
    // get namespace user state
    // app.state is global state
    const { state, service, app, set } = this;
    const user = await service.login(id);
    await set({...state, ...user})
  }
}

export default User;
