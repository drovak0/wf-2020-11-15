package com.zookeeper.mammal;

public class Mammal {
    // energyLevel
    private int energyLevel = 100;

    public Mammal() {
    }

    public Mammal(int energyLevel) {
        this.energyLevel = energyLevel;
    }

    // displayEnergy()
    public int displayEnergy() {
        System.out.println("Energy level: " + energyLevel);
        return energyLevel;
    }

    public int getEnergyLevel() {
        return energyLevel;
    }

    public void setEnergyLevel(int energyLevel) {
        this.energyLevel = energyLevel;
    }

    public void updateEnergyLevel(int value) {
        // energyLevel += value;
        setEnergyLevel(energyLevel + value);
    }
}
