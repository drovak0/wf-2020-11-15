package com.zookeeper.mammal;

public class Gorilla extends Mammal {

    public Gorilla() {
    }

    public Gorilla(int energyLevel) {
        super(energyLevel);
    }

    // throwSomething()
    public void throwSomething(String something) {
        // print out a message indicating that the gorilla has thrown something
        // as well as decrease the energy level by 5
        // System.out.println("Current EnergyLevel is: " + getEnergyLevel());
        this.displayEnergy();
        int newEnergyLevel = this.getEnergyLevel() - 5;
        System.out.println("Gorilla has thrown " + something);
        this.setEnergyLevel(newEnergyLevel);
        System.out.println("New EnergyLevel is: " + getEnergyLevel());
        // this.displayEnergy();

    }

    // eatBananas()
    public void eatBananas() {
        System.out.println("Gorilla is pleased with eating many bananasananans! <3");
        this.setEnergyLevel(this.getEnergyLevel() + 10);
        this.displayEnergy();
    }

    // and climb()
    public void climb() {
        System.out.println("Gorilla is having fun climbing the tree! <3");
        this.setEnergyLevel(this.getEnergyLevel() - 10);
        this.displayEnergy();
    }
}
