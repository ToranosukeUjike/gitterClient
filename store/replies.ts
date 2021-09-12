import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Post, Label, Scalars, Reply } from 'practice-gitter';

@Module({ stateFactory:true, namespaced:true, name: 'replies' })
export default class Replies extends VuexModule {
  public targetPost: Post | null = null;
  public targetReplies: Reply[] = [];
  public targetPostAndReplies = {
    post: this.targetPost,
    replies: this.targetReplies,
  }

  public replies: Reply[] = [
    {
      companyID: 'chillchill',
      name: '氏家',
      username: 'iiitoraiii',
      text: 'テストReplyCです。',
      label: Label.Reply,
      replyID: 'replyC',
      rootID: 'testIDTe',
      replyFrom: [],
    },
    {
      companyID: 'chillchill',
      name: '氏家',
      username: 'iiitoraiii',
      text: 'テストReplyBです。',
      label: Label.Reply,
      replyID: 'replyB',
      rootID: 'testIDTe',
      replyFrom: [],
    },
    {
      companyID: 'chillchill',
      name: '氏家',
      username: 'iiitoraiii',
      text: 'テストReplyAです。',
      label: Label.Reply,
      replyID: 'replyA',
      rootID: 'testIDTe',
      replyFrom: [],
    },
  ]

  public get getTargetPostAndReplies() {
    return this.targetPostAndReplies;
  }
  public get getTargetReplies(): Reply[] {
    return this.targetReplies;
  }
  public get getTargetPostID(): Scalars['ID'] {
    if(this.targetPost) {
      return this.targetPost.postID;
    }
    return '';
  }

  @Action
  public Add_Reply(reply: Reply) {
    this.ADD_REPLY(reply);
  }

  @Action
  public Set_Root_Post(post: Post) {
    this.SET_ROOT_POST(post);
  }

  @Action
  public Set_Target_Replies(rootID: Scalars['ID']) {
    this.SET_TARGET_REPLIES(rootID);
  }

  @Action
  public Set_Target_Post_And_Replies() {
    this.SET_TARGET_POST_AND_REPLIES();
  }

  @Mutation
  private ADD_REPLY(reply: Reply) {
    this.replies.push(reply);
  }
  @Mutation
  private SET_ROOT_POST(post: Post) {
    this.targetPost = post;
  }

  @Mutation
  private SET_TARGET_REPLIES(rootID: Scalars['ID']) {
    this.targetReplies = [];
    this.replies.forEach((reply) => {
      if(reply.rootID === rootID) {
        this.targetReplies.push(reply);
        console.log(reply);
      }
    })
  }

  @Mutation
  private SET_TARGET_POST_AND_REPLIES() {
    this.targetPostAndReplies = {
      post: this.targetPost,
      replies: this.targetReplies,
    }
    console.log(this.targetReplies);
    console.log(this.targetPost);
  }
}