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

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name) {

    }
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
    let noOfAllMillennialVampires = 0;
    if (this.yearConverted > 1980) {
      noOfAllMillennialVampires += 1;
    }
    for (const descendent of this.offspring) {
      const millenialDownTheTree = descendent.allMillennialVampires();
      noOfAllMillennialVampires = noOfAllMillennialVampires + millenialDownTheTree;
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

