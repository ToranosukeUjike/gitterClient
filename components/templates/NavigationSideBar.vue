<template>
  <ul class='navigation-side-bar'>
    <name-n-icon />
    <li>
      <navi-plate 
        naviName='Work Space' 
        imgUrl='business_ol.svg'
        @goOtherPages='isActiveMenus = !isActiveMenus'
      />
      <transition name='fade'>
        <nav class='submenuItems' v-show='isActiveMenus'>
          <li>
            <mini-navi-plate 
              naviName='SignIn' 
              imgUrl='login.svg'
              @goOtherPages='signInWorkSpace'
            />
          </li>
          <li>
            <mini-navi-plate 
              naviName='Create' 
              imgUrl='add.svg'
              @goOtherPages='createWorkSpace'
            />
          </li>
          <li>
            <mini-navi-plate 
              naviName='Find' 
              imgUrl='search.svg'
              @goOtherPages='findWorkSpace'
            />
          </li>
        </nav>
      </transition>
    </li>
    <li>
      <navi-plate naviName='News' imgUrl='news_ol.svg'/>
    </li>
    <li>
      <navi-plate 
        naviName='My Account' 
        imgUrl='account_circle_ol.svg'
        @goOtherPages='goMyAccount'
      />
    </li>
    <li>
      <navi-plate naviName='Archive' imgUrl='archive_ol.svg'/>
    </li>
    <li>
      <navi-plate naviName='Settings' imgUrl='settings_ol.svg'/>
    </li>
  </ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import NaviPlate from '../organisms/NaviPlate.vue';
import MiniNaviPlate from '../organisms/MiniNaviPlate.vue';
import UserIcon from '../organisms/users/UserIcon.vue';
import BigText from '../atoms/texts/BigText.vue';
import NameNIcon from '../organisms/users/NameNIcon.vue';

@Component({
  components: {
    NaviPlate,
    MiniNaviPlate,
    UserIcon,
    BigText,
    NameNIcon,
  },
})
export default class NavigationSideBar extends Vue {
  public isActiveMenus = false;

  public goMyAccount() {
    this.$router.push('/account/updateMyProfile');
  }
  public createWorkSpace() {
    this.$router.push('/workspace/createWorkSpace');
  }
  public findWorkSpace() {
    this.$router.push('/workspace/findWorkSpace');
  }
  public signInWorkSpace() {
    this.$router.push('/workspace/signInWorkSpace');
  }
}  
</script>

<style scoped>
  .navigation-side-bar {
    z-index: 3;
    position: fixed;
    top: 0;
  }
  ul {
    background-color: #002B36;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 80%;
    position: fixed;
    height: 100%;
    overflow: auto;
  }
  li {
    margin: 20px;
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