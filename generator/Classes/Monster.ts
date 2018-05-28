/**
 * Example monster
{
  "name": "Cult Fanatic",
  "size": "Medium",
  "type": "Humanoid (any race)",
  "alignment": "any non-good alignment",
  "AC": "13 (leather armor)",
  "HP": "22 (6d8 + 6)",
  "speed": "30 ft.",
  "strength": 11,
  "dexterity": 14,
  "constitution": 12,
  "intelligence": 10,
  "wisdom": 13,
  "charisma": 14,
  "senses": "darkvision 60 ft.",
  "skills": "Deception +4, Persuasion +4, Religion +2",
  "languages": "any one language (usually Common)",
  "challenge": "2",
  "traits": [
    {
      "name": "Dark Devotion",
      "text": "The fanatic has advantage on saving throws against being charmed or frightened."
    },
    {
      "name": "Spellcasting",
      "text": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (4 slots): command, inflict wounds, shield of faith\n2nd level (3 slots): hold person, spiritual weapon"
    },
    {
      "name": "Innate Spellcasting",
      "text": "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\nAt will: detect magic, fog cloud, light\n3/day each: feather fall, fly, misty step, telekinesis\n1/day each: control weather, gaseous form"
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The fanatic makes two melee attacks."
    },
    {
      "name": "Dagger",
      "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
    }
  ],
  "reactions": [
    {
      "name": "Unnerving Mask",
      "text": "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
    }
  ],
  "legendaryPoints": 3,
  "legendaryActions": [
    {
      "name": "Detect",
      "text": "The dragon makes a Wisdom (Perception) check.",
      "cost": 1
    },
    {
      "name": "Tail Attack",
      "text": "The dragon makes a tail attack.",
      "cost": 1
    },
    {
      "name": "Wing Attack",
      "text": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      "cost": 2
    }
  ],
  "lairActions": [
    "Pools of water that the dragon can see within 120 feet of it surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone.",
    "A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 Constitution saving throw, taking 10 (3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10 (3d6) piercing damage.",
    "Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it. If any of the effect’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
  ],
  "regionalEffects": [
    "The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.",
    "Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.",
    "Fog lightly obscures the land within 6 miles of the lair."
  ],
  "regionalEffectsFade": "If the dragon dies, vegetation remains as it has grown, but other effects fade over 1d10 days."
}
 */
class Monster {
  name: string;
  size: string;
  type: string;
  alignment: string;
  AC: string;
  HP: string;
  speed: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  skills: string;
  languages: string;
  challenge: string;
  senses: string;
  traits: MonsterTrait[];
  actions: MonsterAction[];
  reactions: MonsterAction[];
  legendaryPoints: number;
  legendaryActions: MonsterLegendaryAction[];
  lairActions: string[];
  regionalEffects: string[];
  regionalEffectsFade: string;

  getAvailableSpellNames(): string[] {
    let availableSpellNames: string[];
    this.traits.forEach(trait => function () {
      availableSpellNames.concat(trait.getSpellNamesFromTrait());
    })
    return availableSpellNames;
  }

  getSpeciesSumary(): string{
    return this.size + " " + this.type + ", " + this.alignment;
  }
}
