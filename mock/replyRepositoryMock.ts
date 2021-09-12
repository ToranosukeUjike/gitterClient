import {　IReplyMastRepository, Reply, Post } from "practice-gitter";
import { repliesStore } from '../store';

interface IPostAndReplies {
  post: Post | null,
  replies: Reply[]
}

export class mockReplyRepository implements IReplyMastRepository {
  async createdReplyMast(reply: Reply): Promise<Reply> {
    repliesStore.Add_Reply(reply);
    return reply;
  }
  
  updatedReplyMast(reply: Reply): Promise<Reply> {
    console.log(reply);
    throw new Error("Method not implemented.");
  }
  deletedReplyMast(reply: Reply): Promise<Reply> {
    console.log(reply);
    throw new Error("Method not implemented.");
  }
  async fetchReplyMastByRootID(post: Post): Promise<IPostAndReplies> {
    repliesStore.Set_Target_Replies(post.postID);
    repliesStore.Set_Root_Post(post);
    repliesStore.Set_Target_Post_And_Replies();
    
    return repliesStore.getTargetPostAndReplies;
  }
}