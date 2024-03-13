export class Location {
  constructor(
    public id?: number,
    public locationName?: string, // Ensure this matches how you're accessing it in your tests
    public street?: string,
    public city?: string,
    public zip?: number,
    public state?: string
  ) {}
}
