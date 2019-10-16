import { UsedCarDealership, MotorcycleDealership } from "./factory";

console.log("---------Touring the used car dealership---------");
const usedDealership = new UsedCarDealership();
usedDealership.addToInventory();
usedDealership.showcaseInventory();

console.log("---------Now onto the motorcycle dealership---------");

const motorcycleDealership = new MotorcycleDealership();
motorcycleDealership.addToInventory();
motorcycleDealership.showcaseInventory();
