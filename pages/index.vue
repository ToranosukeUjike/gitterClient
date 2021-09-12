<template>
  <div>
    <transition name='fade'>
      <navigation-side-bar 
        class='side-bar' 
        v-if='onDisplaySideBar'
      />
    </transition>
    
    <div class='container'>
      <top-navi-bar @post='post' @sideBar='sideBar'/>
        <div class='dummy-post-container'>
          <issue-state-tab />
          <tr v-for="(post, i) in display_posts" :key="i">
            <post-template 
              :postText='post.text'
              :name='post.name'
              :username='post.username'
              :postLabel='post.label'
              :replyCnt='post.replyFrom.length'
              :postID='post.postID'
            />
          </tr>
        </div>
      <bottom-navi-bar />
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import IssueStateTab from '../components/organisms/IssueStateTab.vue';
import PostTemplate from '../components/templates/PostTemplate.vue';
import TopNaviBar from '../components/templates/TopNaviBar.vue';
import BottomNaviBar from '../components/templates/BottomNaviBar.vue';
import NavigationSideBar from '../components/templates/NavigationSideBar.vue';
import { userDetailsStore, commonStore } from '../store';
import { userFunctions }from '../api/amplify';
import { postsInteractor, Post, usersInteractor } from 'practice-gitter';
import { mockPostRepository } from '../mock/postRepositoryMock';
import { mockUserRepository } from '../mock/userRepositoryMock';

@Component({
  components: {
    IssueStateTab,
    PostTemplate,
    TopNaviBar,
    BottomNaviBar,
    NavigationSideBar,
  }
})

export default class Index extends Vue {
  @Watch('onDisplaySideBar')
  public watchScrollState() {
    const disableScroll = (event: any) => {
      if(this.onDisplaySideBar) {
        event.preventDefault();
      }
    }
    if(this.onDisplaySideBar) {
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
  }
  
  public async created() {
    const isSignIn: boolean = await userFunctions.isSignIn();

    if (!isSignIn) {
      this.$router.push('/auth/signUp');
      console.log('please sign in')
    }
    const userDetails = await userFunctions.userDetails();
    userDetailsStore.Save_Username(userDetails.username);
    userDetailsStore.Add_Target_User(userDetails.username);
    const postsRes: postsInteractor = new postsInteractor(new mockPostRepository);
    const usersRes: usersInteractor = new usersInteractor(new mockUserRepository);

    this.display_posts = await postsRes.fetchPostsByUser(userDetailsStore.getUserDetails);
    const user = await usersRes.fetchUserByUsername(userDetails.username);
    if (user.name.length === 0) {
      this.$router.push('/');
      this.$router.push('/account/createMyProfile');
    }
  }

  public post() {
    this.$router.push('/postPage');
  }

  public get onDisplaySideBar(): boolean {
    return commonStore.getOpenSideBarState;
  };

  protected sideBar() {
    commonStore.Change_Open_Side_Bar_State();
  }

  public display_posts: Post[] = [];
} 
</script>

<style scoped>
  .container {
    background-color: #3E999F;
    height: 100vh;
  }
  .dummy-post-container {
    margin: 60px 0px 60px 0px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<style>
  body {
    margin: 0px;
  }
</style>
