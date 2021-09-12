<template>
  <article>
    <div class='dummy-space' />
    <div class='post-body' >
      <user-icon class='user-icon'/>
      <div class='post-content'>
        <pc-head 
          :username='username'
          :name='name'
          :postLabel='postLabel'
        />
        <post-text :postText='postText' />
        <post-navi-bar :replyCnt='replyCnt' :postID='postID'/>
      </div>
    </div>
  </article>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import UserIcon from '../organisms/users/UserIcon.vue';
import PostNaviBar from '../organisms/PostNaviBar.vue';
import PostText from '../molecules/PostText.vue';
import PcHead from '../organisms/PcHead.vue';
import { Scalars, Label } from 'practice-gitter';

@Component({
  components: {
    UserIcon,
    PostNaviBar,
    PostText,
    PcHead,
  }
})
export default class PostTemplate extends Vue {
  @Prop() public postText!: string;
  @Prop() public username!: Scalars['ID'];
  @Prop() public name!: string;
  @Prop() public postLabel!: Label;
  @Prop() public replyCnt!: number;
  @Prop() public postID!: Scalars['ID'];
} 
</script>

<style scoped>
  article {
    background-color: #3E999F;
  }
  .dummy-space {
    margin-bottom: 12px;
    border-bottom: 1px solid #ccc;
  }
  .post-body {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    min-width: 100vw;
    box-sizing: border-box;
  }
  .user-icon {
    /* display: flex; */
    flex-basis: 48px;
    margin-right: 12px;
  }
  .text-content {
    margin: 0 3%;
    color: #FDF6E3;
  }
</style>