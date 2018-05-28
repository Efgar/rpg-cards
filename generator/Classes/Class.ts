/*
 * {
      "name": "Cleric",
      "archetypes": [
        {
          "name": "Life",
          "spells": [
            "Mass Cure Wounds",
            "Raise Dead"
          ]
        }
      ],
      "spells": [
        "Guidance",
        "Light",
        "Mending",
        "Resistance",
        "Sacred Flame",
        "Spare the Dying"
      ]
    }
 */

 class Class {
     name: String;
     archetypes: Archetype[];
     spells: Spell[];

     getSpellList(archetypeName: String):Spell[]{
      let spellList = this.spells;
      this.archetypes.forEach(archetype => {
        if(archetype.name === archetypeName ){
          spellList.concat(archetype.spells)
        }
       });
       return Array.from(new Set(spellList));
     }
 }