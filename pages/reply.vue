<template>
  <div v-if='replyObj' class='container'>
    <back-to-last-page imgUrl='arrow_back.svg'/>
    <post-template 
      :postText='displayPost.post.text'
      :name='displayPost.post.name'
      :username='displayPost.post.username'
      :postLabel='displayPost.post.label'
      :replyCnt='displayPost.post.replyFrom.length'
      :postID='displayPost.post.postID'
    />
    <tr v-for='(reply, i) in displayPost.replies' :key='i'>
      <post-template
        :postText='reply.text'
        :name='reply.name'
        :username='reply.username'
        :postLabel='reply.label'
        :replyCnt='reply.replyFrom.length'
        :postID='reply.replyID'
      />
    </tr>
    <div class='reply-area'>
      <textarea v-model='replyText' class='text' placeholder='reply'/>
      <submit-post-icon buttonText='Reply' @post='submit'/>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { Reply, Post, replyModel, Scalars, usersInteractor, User } from 'practice-gitter';
import BackToLastPage from '../components/molecules/BackToLastPage.vue';
import { repliesStore, userDetailsStore } from '../store';
import PostTemplate from '../components/templates/PostTemplate.vue';
import SubmitPostIcon from '../components/atoms/SubmitPostIcon.vue';
import { mockReplyRepository, mockUserRepository } from '../mock';
@Component({
  components: {
    BackToLastPage,
    PostTemplate,
    SubmitPostIcon,
  }
})

export default class ReplyPage extends Vue {
  public displayPost: {
    post: Post | null,
    replies: Reply[],
  } = {
    post: null,
    replies: [],
  };
  public async created() {
    const username: Scalars['ID'] = userDetailsStore.getUsername;
    const usersRes: usersInteractor = new usersInteractor(new mockUserRepository);
    const user: User = await usersRes.fetchUserByUsername(username);

    const localDisplayPost = repliesStore.getTargetPostAndReplies;
    this.displayPost = localDisplayPost;

    let postID: Scalars['ID'] = '';
    if(localDisplayPost.post) {
      postID = localDisplayPost.post.postID
    }

    const replyBlanc: Reply = replyModel.getBlanc(
      user.companyID || '',
      user.username,
      user.name,
      postID,
    )
    this.replyObj = new replyModel(new mockReplyRepository, replyBlanc);
  }
  public replyObj: replyModel | null = null;
  public submit() {
    if(this.replyObj) {
      this.replyObj.text = this.replyText;
      const res = this.replyObj.createReply();
      if(res === '入力してください') {
        window.alert('入力してください');
        return
      }
    }
    this.$router.push('/');
  }
  public replyText: string = '';
}
</script>

<style scoped>
  .container {
    background-color: #3E999F;
    height: 100vh;
  }
  .input-gitter {
    margin: 20px;
    display: block;
    background-color: #3E999F;
    color: #FDF6E3;
    border: none;
    border-bottom: 1px solid #ccc;
  }
  .text {
    height: 150px;
    color: #FDF6E3;
    font-size: 20px;
    width: 50%;
    border: none;
    background-color: #002B36;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    resize: vertical;
  }
  .reply-area {
    display: flex;
  }
</style>

<style>
  body {
    margin: 0px;
  }
</style>
