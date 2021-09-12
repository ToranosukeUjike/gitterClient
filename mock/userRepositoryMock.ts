import {　IUserMastRepository, Scalars, User } from "practice-gitter";
import { userDetailsStore } from '../store';

export class mockUserRepository implements IUserMastRepository {
  createUserProfile(user: User): void {
    console.log(user);
    userDetailsStore.Add_User(user);
  }
  updateUserProfile(user: User): void {
    console.log(user);
    userDetailsStore.Update_userDetails(user);
  }
  deleteUserProfile(user: User): void {
    console.log(user);
    throw new Error("Method not implemented.")
  }
  async fetchUserProfileMastByUsername(username: Scalars['ID']): Promise<User> {
    userDetailsStore.Add_Target_User(username);
    const targetUser = userDetailsStore.getUserDetails;
    return targetUser;
  }
  fetchUserProfileMastByPostID(postID: Scalars['ID']): Promise<User> {
    console.log(postID);
    throw new Error("Method not implemented.");
  }
  fetchUsersProfileMastByCompanyID(companyID: Scalars['ID']): Promise<User[]> {
    console.log(companyID);
    throw new Error("Method not implemented.");
  }
}