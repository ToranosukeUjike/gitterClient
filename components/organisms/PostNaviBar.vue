<template>
  <div class='post-navi-bar'>
    <post-navi-bar-emp 
      class='post-reply' 
      imgUrl='reply_fill.svg' 
      :text='replyCnt' 
      @goOtherPages='goReply'
    />
    <post-navi-bar-emp 
      class='post-favorite' 
      imgUrl='favorite_ol.svg' 
      text='99++' 
    />
  </div>
</template>
<script lang='ts'>
import { mockReplyRepository } from '../../mock/replyRepositoryMock';
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { repliesInteractor, Scalars, Post } from 'practice-gitter';
import PostNaviBarEmp from '../molecules/PostNaviBarEmp.vue';
import { postsStore } from '../../store';

@Component({
  components: {
    PostNaviBarEmp
  }
})
export default class PostNaviBar extends Vue {
  @Prop() public replyCnt!: number;
  @Prop() public postID!: Scalars['ID'];

  public async goReply() {
    const repliesRes: repliesInteractor = new repliesInteractor(new mockReplyRepository);
    postsStore.Set_Target_Post(this.postID);
    const post: Post = postsStore.getTargetPost;
    const replies = await repliesRes.fetchReplyByRootID(post);
    console.log(replies);
    this.$router.push('/reply');
  }
} 
</script>

<style scoped>
  .post-navi-bar {
    display: flex;
    justify-content: center;
    padding: 15px 0 0 0;
    height: 40px;
  }
  .post-reply {
    left: 20%;
    position: absolute;
    cursor: pointer;
  }
  .post-favorite {
    right: 23%;
    position: absolute;
  }
</style>