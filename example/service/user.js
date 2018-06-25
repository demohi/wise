import { Service } from 'wise';

class User extends Service{
  async login(id){
    const { fetch } = this;
    try{
      const {value} = fetch(id);
      return value;
    }catch(err){
      throw err;
    }
  }
}

export default User;
