import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Posts from '../store/posts';
import UserDetails from '../store/userDetails';
import Companies from '../store/companies';
import Common from '../store/common';
import Replies from '../store/replies';

let postsStore: Posts;
let userDetailsStore: UserDetails;
let companiesStore: Companies;
let commonStore: Common;
let repliesStore: Replies;

function initialiseStores(store: Store<any>): void {
  postsStore = getModule(Posts, store);
  userDetailsStore = getModule(UserDetails, store);
  companiesStore = getModule(Companies, store);
  commonStore = getModule(Common, store);
  repliesStore = getModule(Replies, store);
}

export { 
  initialiseStores, 
  postsStore, 
  userDetailsStore, 
  companiesStore,
  commonStore, 
  repliesStore,
}