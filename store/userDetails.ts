import { Scalars, User } from "practice-gitter";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ stateFactory:true, namespaced:true, name: 'userDetails' })
export default class UserDetails extends VuexModule {
  private originalUsername: Scalars['ID'] = '';
  private target_userDetails: User = {
    username: '',
    name: '',
  }

  private userDetails: User[] = [
    {
      username: 'hoshino-gen',
      companyID: 'chillchill',
      name: '星野 源',
    },
    {
      username: 'iiduka-kozho',
      companyID: 'sss',
      name: '飯塚 幸三',
    },
    {
      username: 'Soomaaliya',
      companyID: 'chillchill',
      name: 'ソマリア',
    },
    {
      username: 'eeee',
      companyID: 'chillchill',
      name: 'エリザベス・サリバン',
    },
    {
      username: 'miyamoto',
      companyID: 'nintendo',
      name: '宮本茂'
    },
    {
      username: 'kirby',
      companyID: 'nintendo',
      name: 'カービー',
    },
    {
      username: 'sundar_pichai',
      companyID: 'google',
      name: 'サンダー・ピチャ',
    },
    {
      username: 'mark_zuckerberg',
      companyID: 'facebook',
      name: 'マーク'
    },
    {
      username: 'andrew_jassy',
      companyID: 'amazon',
      name: 'アンディー'
    },
  ]

  public get getUserDetails(): User {
    return this.target_userDetails;
  }

  public get getUsername(): Scalars['ID'] {
    return this.originalUsername;
  }

  @Action
  public Save_Username(username: Scalars['ID']) {
    this.SAVE_USERNAME(username);
  }

  @Action
  public Add_User(user: User) {
    this.ADD_USER(user);
  }

  @Action
  public Add_Target_User(username: Scalars['ID']) {
    this.ADD_TARGET_USER(username);
  }
  
  @Action
  public Add_Company(companyID: Scalars['ID'], username: Scalars['ID']) {
    this.ADD_COMPANY(companyID, username);
  }

  @Action
  public Update_userDetails(userDetails: User) {
    this.UPDATE_USERDETAILS(userDetails);
  }

  @Mutation
  private SAVE_USERNAME(username: Scalars['ID']) {
    this.originalUsername = username;
  }

  @Mutation
  private ADD_USER(user: User) {
    let isAlready: boolean = false
    for(let i=0; i<this.userDetails.length; i++) {
      if(user.username === this.userDetails[i].username) {
        this.userDetails[i] = user;
        isAlready = true;
      }
    }
    if(!isAlready) this.userDetails.push(user);
    isAlready = false;
  }
  
  @Mutation
  private ADD_TARGET_USER(username: Scalars['ID']) {
    this.userDetails.forEach((user) => {
      if(user.username === username) {
        this.target_userDetails = user;
        console.log('correct');
      }
    });
  }

  @Mutation
  private ADD_COMPANY(companyID: Scalars['ID'], username: Scalars['ID']) {
    this.userDetails.forEach((user) => {
      if(user.username === username) {
        user.companyID = companyID;
      } else {
        console.log("一致しませんでした");
      }
    });
  }

  @Mutation
  private UPDATE_USERDETAILS(userDetails: User) {
    this.userDetails.forEach((user) => {
      if (user.username === userDetails.username) {
        user = userDetails;
      }
    });
  }
  
}