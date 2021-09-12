<template>
  <div class='top-navi-bar'>
    <a @click='sideBar'>
      <user-icon class='tnb-user-icon' />
    </a>
    <navi-icon-emp class='tnb-home-icon' imgUrl='home_ol.svg'/>
    <submit-post-icon class='tnb-post-icon' @post='post' buttonText='Post' />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import NaviIconEmp from '../molecules/NaviIconEmp.vue';
import UserIcon from '../organisms/users/UserIcon.vue';
import SubmitPostIcon from '../atoms/SubmitPostIcon.vue';

@Component({
  components: {
    NaviIconEmp,
    UserIcon,
    SubmitPostIcon,
  },
})
export default class BottomNaviBar extends Vue {
  @Emit('post') public post() {}
  @Emit('sideBar') public sideBar() {}
} 
</script>

<style scoped>
  a {
    cursor: pointer;
  }
  .top-navi-bar {
    position: fixed;
    top: 0px;
    background-color: #002B36;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  .tnb-user-icon {
    position: absolute;
    padding-top: 10px;
    left: 1%;
  }
  .tnb-home-icon {
    margin-top: 10px;
  }
  .tnb-post-icon {
    position: absolute;
    right: 1%;
  }
</style>