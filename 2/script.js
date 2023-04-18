class UberPriceCalculator {
  constructor(distance, time) {
    this.distance = distance;
    this.time = time;
  }

  calculatePrice() {
    const baseFare = 2.50;
    const perMinute = 0.25;
    const perKm = 1.10;
    
    const fare = (baseFare + (this.time * perMinute) + (this.distance * perKm));

    return fare.toFixed(2); // Round to 2 decimal places
  }
}

const distance = 5.3; // Km
const time = 15; // minutes

const priceCalculator = new UberPriceCalculator(distance, time);

const price = priceCalculator.calculatePrice(); // returns a string: "12.34"
console.log(`The Uber fare is $${price}.`);

