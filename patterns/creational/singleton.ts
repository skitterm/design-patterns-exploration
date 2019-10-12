export default class Session {
  static instance;

  username;

  static Instance(name) {
    if (!Session.instance) {
      Session.instance = new Session(name);
    }

    return Session.instance;
  }

  constructor(name) {
    this.username = name;
  }

  getName() {
    return this.username;
  }
}
