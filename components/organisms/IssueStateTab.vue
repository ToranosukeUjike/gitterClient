<template>
  <div>
    <div class='issue-state-tab'>
      <div>
        <issue-state-tab-emp 
          @isActive='isOpen'
          class='open-state' 
          :imgUrl='returnImg' 
          text='Open' 
        />
      </div>
      <div>
        <issue-state-tab-emp 
          @isActive='isClosed'
          class='closed-state' 
          imgUrl='closed_ol.svg' 
          text='Closed' 
        />
      </div>
    </div>
    <div class='ist-border'></div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import IssueStateTabEmp from '../molecules/IssueStateTabEmp.vue';
import { IssueState } from 'practice-gitter';

@Component({
  components: {
    IssueStateTabEmp
  }
})
export default class IssueStateTab extends Vue {
  public whichState: IssueState = IssueState.None;
  private returnImg: string = 'open_ol.svg';

  public get openImgUrl(): string {
    return this.returnImg;
  }
  public set openImgUrl(input: string) {
    this.returnImg = input;
  }

  public isOpen() {
    if(this.whichState === IssueState.Open) {
      this.whichState = IssueState.None;
      this.returnImg = 'open_ol.svg';
    } else {
      this.whichState = IssueState.Open;
      this.returnImg = 'activeOpen_ol.svg';
    }
  }

  public isClosed() {
    if(this.whichState === IssueState.Closed) {
      this.whichState = IssueState.None;
    } else {
      this.whichState = IssueState.Closed;
    }
  }
} 
</script>

<style scoped>
  .issue-state-tab {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    height: 40px;
  }
  .open-state {
    left: 13%;
    position: absolute;
  }
  .closed-state {
    right: 13%;
    position: absolute;
  }
  .ist-border {
    height: 1px;
    color: #FDF6E3;
  }
</style>