<template>
  <div class='name-n-icon' @click='isOpen'>
    <user-icon-emp imgUrl='toraIcon.png'/>
    <big-text class='big-text' bigDisplayText='Ujike'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import UserIconEmp from '../../molecules/UserIconEmp.vue'
import BigText from '../../atoms/texts/BigText.vue';
import { commonStore } from '../../../store';

@Component({
  components: {
    UserIconEmp,
    BigText,
  }
})
export default class NameNIcon extends Vue {
  public isOpen(): void {
    commonStore.Change_Open_Side_Bar_State();
  }
} 
</script>

<style scoped>
  .name-n-icon {
    display: flex;
    margin: 15px;
    cursor: pointer;
  }
  .big-text {
    padding-top: 13px;
    margin-left: 20px; 
  }
</style>