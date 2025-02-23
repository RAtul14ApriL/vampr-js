class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name) {
      return this;
    }
    for (let descendent of this.offspring) {
      let searchName = descendent.vampireWithName(name);
      if (searchName) {
        return searchName;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    if (this.offspring.length === 0) {
      return 0;
    } else {
      let totalNoOfDescendents = this.offspring.length;
      for (const descendent of this.offspring) {
        totalNoOfDescendents += descendent.totalDescendents;
      }
      return totalNoOfDescendents;
    }
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let noOfAllMillennialVampires = [];

    if (this.yearConverted > 1980) {
      noOfAllMillennialVampires.push(this);
    }
    for (const descendent of this.offspring) {
      const millenialDownTheTree = descendent.allMillennialVampires;
      noOfAllMillennialVampires.push(...millenialDownTheTree);
    }
    return noOfAllMillennialVampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;