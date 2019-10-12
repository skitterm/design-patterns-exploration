export default class Session {
  private static instance: Session;
  private username: string;

  public static Instance(name: string) {
    if (!Session.instance) {
      Session.instance = new Session(name);
    }

    return Session.instance;
  }

  constructor(name: string) {
    this.username = name;
  }

  getName() {
    return this.username;
  }
}
