import {　IPostMastRepository, Post, User } from "practice-gitter";
import { postsStore } from '../store';

export class mockPostRepository implements IPostMastRepository {
  createPostMast(post: Post): Promise<Post> {
    // 今回のデータの保存先はStoreにします。
    postsStore.ADD(post);
    // 今回のデータの保存先はDynamoDBにします。
    // DynamoDB.add(post)
    // 最新のデータベース登場したので、、、、

    const result: Promise<Post> = new Promise(function(resolve) {
      resolve(post);
    })
    return result
  }
  updatePostMast(post: Post): Promise<Post> {
    const result: Promise<Post> = new Promise(function(resolve) {
      resolve(post);
    })
    return result
  }
  deletePostMast(post: Post): Promise<Post> {
    const result: Promise<Post> = new Promise(function(resolve) {
      resolve(post);
    })
    return result
  }

  async fetchPostMastByCompanyID(companyID: string): Promise<Post[]> {
    postsStore.Get_Posts_By_CompayID(companyID);
    const result: Post[] = postsStore.getTargetPosts;
    return result;
  }
  async fetchPostsMastByUsername(username: string): Promise<Post[]> {
    postsStore.Get_Posts_By_Username(username);
    const result: Post[] = postsStore.getTargetPosts;
    return result;
  }
  async fetchPostMastByUser(user: User): Promise<Post[]> {
    postsStore.Get_Posts_By_User(user);
    const result: Post[] = postsStore.getTargetPosts;
    return result;
  }

}