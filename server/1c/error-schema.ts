export class Fetch1CError extends Error {
  constructor(
    public response: Response,
    public text: string
  ) {
    super();
    this.name = 'Fetch1CError';
    this.message = text;
  }
}
