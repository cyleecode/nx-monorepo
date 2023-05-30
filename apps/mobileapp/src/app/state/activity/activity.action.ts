namespace Activity {
  export class Do {
    static readonly type = '[Activity] Do';
    constructor(public name: string) {}
  }

  export class Stop {
    static readonly type = '[Activity] Stop';
    constructor(public name: string) {}
  }
}
