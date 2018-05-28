/**
 * {
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
 */
class MonsterTrait{
    name: string;
    text: string;
    
    getSpellNamesFromTrait():string[]{
        let SPELL_CASTING_TRAITS = ["spellcasting", "innate spellcasting"];
        let availableSpells:string[];

        if(SPELL_CASTING_TRAITS.indexOf(this.name.toLowerCase()) > -1){
          this.text.substr(this.text.indexOf(":")).split("\n").forEach(spellLevel => function(){
              availableSpells.concat(spellLevel.indexOf(":").toString().split(","));
          });
        }

        return availableSpells;
    }
}