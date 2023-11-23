export class Posts {
  favorite: boolean;

  constructor(public title: string, public blogContent: string) {
    this.favorite = false;
  }
}
