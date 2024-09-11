/* eslint-disable no-console */
import {
  BaseUserModel,
} from '@shared/api';

import { action, makeObservable, observable } from 'mobx';

export default class Store {
  user = { } as BaseUserModel;

  isAuth = false;

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,

      setAuth: action,
      setUser: action,
      removeUser: action,
    });
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: BaseUserModel) {
    this.user = user;
  }

  removeUser() {
    this.user = {} as BaseUserModel;
  }
}
