/**
 * {
      "name": "Fire Bolt",
      "level": 0,
      "school": "Evocation",
      "ritual": true,
      "castingTime": "1 action",
      "range": "120 feet",
      "components": {
        "verbal": true,
        "somatic": true,
        "material": true,
        "materialMaterial": "a tiny ball of bat guano and sulfur"
      },
      "duration": "Instantaneous",
      "description": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
      "higherLevel": "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
      "emote": "hurls a mote of fire at a creature or object",
      "attack": {
        "type": "ranged",
        "damage": "[[ceil((@{level} + 2) / 6)]]d10",
        "damageType": "fire"
      },
      "save": {
        "ability": "Dexterity",
        "damage": "8d6",
        "damageType": "fire",
        "saveSuccess": "half damage",
        "higherLevelDice": 1
      }
    }
*/
class Spell {
  name: string;
  level: number;
  shool: string;
  ritual: boolean = false;
  castingTime: string;
  range: string;
  components: SpellComponents;
  duration: string;
  description: string;
  sumary: string;
  higherLevel: string;
  attack: SpellAttack;
  save: SpellSave;
}