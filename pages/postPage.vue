<template>
  <div v-if='postObj' class='post'>
    <div class='close-and-post'>
      <back-to-last-page class='back-to-last-page' imgUrl='cancel.svg'/>
      <submit-post-icon buttonText='Post' @post='submit' class='submit-post-icon'/>
    </div>

    <ul class='accordion-menu'>
      <li>
        <post-content-title v-model='postObj.title' />
      </li>
      <li>
        <div class='dropdownlink'>
          <textarea v-model='postObj.text' class='text' placeholder='Text'/>
        </div>
      </li>
      <li>
        <switch-emp class='dropdownlink' v-model='postObj.isPrivate' switchName='Private' />
      </li>
      <li @click='isActiveMenus = !isActiveMenus'>
        <div class='dropdownlink'>
          Labels
        </div>
        <transition name='fade'>
          <nav class='submenuItems' v-show='isActiveMenus'>
            <li>
              <switch-emp class='dropdownlink' v-model='postObj.isIssue' switchName='Issue' />
            </li>
            <li>
              <switch-emp class='dropdownlink' v-model='postObj.isTweet' switchName='Tweet' />
            </li>
            <li>
              <switch-emp class='dropdownlink' v-model='postObj.isRoutine' switchName='Routine' />
            </li>
          </nav>
        </transition>
      </li>
      <li>
        <div class='dropdownlink'>
          Assign
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import MiniCircleImage from '../components/atoms/images/MiniCircleImage.vue';
import BackToLastPage from '../components/molecules/BackToLastPage.vue';
import SubmitPostIcon from '../components/atoms/SubmitPostIcon.vue';
import PostContentTitle from '../components/organisms/PostContentTitle.vue';
import SwitchEmp from '../components/molecules/SwitchEmp.vue';
import { Post, postModel, Scalars, User, usersInteractor } from 'practice-gitter';
import { mockPostRepository, mockUserRepository } from '../mock';
import { userDetailsStore } from '../store';

@Component({
  components: {
    MiniCircleImage,
    SubmitPostIcon,
    PostContentTitle,
    SwitchEmp,
    BackToLastPage,
  }
})
export default class PostPage extends Vue {
  public async created() {
    const username: Scalars['ID'] = userDetailsStore.getUsername;
    const usersRes: usersInteractor = new usersInteractor(new mockUserRepository);
    const user: User = await usersRes.fetchUserByUsername(username);
    const  postBlanc: Post = postModel.getBlanc(
      user.companyID || '',
      user.username,
      user.name
    );
    this.postObj = new postModel(new mockPostRepository, postBlanc);
  }

  public postObj: postModel | null = null;

  public closePostPage() {
    this.$router.push('/');
  }

  public isActiveMenus = false;

  public submit() {
    if(this.postObj) {
      const res = this.postObj.createPost();
      console.log(res)
      if(res === "ラベルを選択してください") {
        window.alert("ラベルを選択してください");
        return
      }
      console.log(this.postObj.post)
    }
    this.closePostPage();
  }
} 
</script>

<style scoped>
  .post {
    background-color: #002B36;
    height: 100vh;
  }
  .close-and-post {
    display: flex;
    justify-content: center;

  }
  .back-to-last-page {
    position: absolute;
    left: 5%;
  }
  .submit-post-icon {
    position: absolute;
    right: 5%;
  }
  .text {
    height: 150px;
    color: #FDF6E3;
    font-size: 20px;
    width: 100%;
    border: none;
    background-color: #002B36;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    resize: vertical;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  label {
    text-decoration: none;
  }

  .accordion-menu {
    width: 100%;
    max-width: 350px;
    margin: 60px auto 20px;
    border-radius: 4px;
  }

  .accordion-menu li.open .dropdownlink {
    color: #3E999F;
  }

  .dropdownlink {
    cursor: pointer;
    display: block;
    padding: 15px 15px 15px 45px;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
    color: #FDF6E3;
    position: relative;
    transition: all 0.4s ease-out;
  }

  .submenuItems li {
    border-bottom: 1px solid #B6B6B6;
  }

  .submenuItems label {
    display: block;
    color: #FDF6E3;
    padding: 12px 12px 12px 45px;
    transition: all 0.4s ease-out;
  }
  .submenuItems label:hover {
    background-color: #3E999F;
    color: #fff;
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