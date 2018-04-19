import { observable, action } from 'mobx'

export class UIStore {
  @observable username = 'dev'

  constructor (rootStore) {
    this.rootStore = rootStore
    this.BASE = 'http://localhost:4000'
  }
}

export default UIStore