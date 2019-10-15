export default class Session {
  private static instance: Session;
  private username: string = "";

  public static getInstance(): Session {
    if (!Session.instance) {
      Session.instance = new Session();
    }

    return Session.instance;
  }

  private constructor() {
    //
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public getUsername(): string {
    return this.username;
  }
}
