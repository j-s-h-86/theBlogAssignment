export class Posts {
  favorite: boolean;

  constructor(public title: string, public ingredients: string, public description: string) {
    this.favorite = false;
  }
}
