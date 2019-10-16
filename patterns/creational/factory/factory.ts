abstract class Dealership {
  private vehicles: Vehicle[] = [];

  public addToInventory(): void {
    this.vehicles.push(this.createVehicle());
  }
  public abstract createVehicle(): Vehicle;
  public showcaseInventory(): void {
    for (const vehicle of this.vehicles) {
      vehicle.makeNoise();
    }
  }
}

export class UsedCarDealership extends Dealership {
  public createVehicle(): Vehicle {
    return new Car();
  }
}

export class MotorcycleDealership extends Dealership {
  public createVehicle(): Vehicle {
    return new Motorcycle();
  }
}

abstract class Vehicle {
  public abstract makeNoise(): void;
}

class Car extends Vehicle {
  public makeNoise(): void {
    console.log("zip zip");
  }
}

class Motorcycle extends Vehicle {
  public makeNoise(): void {
    console.log("vroom vroom");
  }
}
