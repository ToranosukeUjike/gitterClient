<template>
  <div class='bottom-navi-bar'>
    <navi-icon-emp class='bnb-home-icon' imgUrl='home_ol.svg'/>
    <navi-icon-emp class='bnb-schedule-icon' imgUrl='schedule_ol.svg'/>
    <navi-icon-emp class='bnb-notifications-icon' imgUrl='notifications_ol.svg'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import NaviIconEmp from '../molecules/NaviIconEmp.vue';
@Component({
  components: {
    NaviIconEmp
  },
})
export default class BottomNaviBar extends Vue {

} 
</script>

<style>
  .bottom-navi-bar {
    position: fixed;
    bottom: 0px;
    background-color: #002B36;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center
  }
  .bnb-home-icon {
    left: 15%;
    margin-top: 10px;
    position: absolute;
  }
  .bnb-schedule-icon {
    margin-top: 10px;
    position: absolute;
  }
  .bnb-notifications-icon {
    right: 15%;
    margin-top: 10px;
    position: absolute;
  }
</style>