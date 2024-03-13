import { Location } from './location.model';

describe('Location', () => {
  it('should create an instance', () => {
    expect(new Location()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const location = new Location(1, 'Central Park', '5th Ave', 'New York', 10001, 'NY');

    expect(location.id).toEqual(1);
    expect(location.locationName).toEqual('Central Park'); // Adjusted to 'name'
    expect(location.street).toEqual('5th Ave');
    expect(location.city).toEqual('New York');
    expect(location.zip).toEqual(10001);
    expect(location.state).toEqual('NY');
  });

});
