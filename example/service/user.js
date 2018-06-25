import { Service } from 'wise';

class User extends Service{
  async login(id){
    const { app } = this;
    try{
      const {value} = app.fetch(id);
      return value;
    }catch(err){
      throw err;
    }
  }
}

export default User;
