
class UserInfo
{
  constructor(nameselector,infoselector,avatarselector)
  {
    this._name=nameselector;
    this._info=infoselector;
    this._avatar=avatarselector;
  }
  getUserInfo()
  {
    return{name:this._name,info:this._info,avatar:this._avatar};
  }
  setUserInfo(data)
  {
    this._info.textContent=data.about;
    this._name.textContent=data.name;
    this._avatar.setAttribute('src',data.avatar)
  }
}
export {UserInfo}
