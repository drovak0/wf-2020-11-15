public class Pythagorean {
  public double calculateHypotenuse(int legA, int legB) {
    // the hypotenuse is the side across from the right angle.
    // calculate the value of c given legA and legB
    // a^2 + b^2 = c^2
    return Math.sqrt((legA * legA ) + (legB * legB));
  }
}