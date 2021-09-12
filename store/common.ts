import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ stateFactory:true, namespaced:true, name: 'common' })
export default class Coommon extends VuexModule {
  private isOpenSideBar: boolean = false;

  public get getOpenSideBarState(): boolean {
    return this.isOpenSideBar;
  }

  @Action
  public Change_Open_Side_Bar_State(): void {
    this.CHANGEOPENSIDEBARSTATE();
  }

  @Mutation
  private CHANGEOPENSIDEBARSTATE(): void {
    this.isOpenSideBar = !this.isOpenSideBar;
  }
}