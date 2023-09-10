class Singleton {
  private static instance: Singleton | null;

  private constructor() {}

  static getInstance() {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

console.log(Singleton.getInstance());