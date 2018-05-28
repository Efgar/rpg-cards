class AvailableData{
    spells:Spell[];
    monsters:Monster[];
    classes:Class[];

    static getSpellByName(spellName:String):Spell{
        let spellMatch:Spell;
        this.spells.forEach(spell => {
            if(spell.name === spellName){
                spellMatch = spell;
            }
        });
        return spellMatch;
    }
    
    getMonsterByName(monsterName:String):Monster{
        let monsterMatch:Monster;
        this.monsters.forEach(monster => {
            if(monster.name === monsterName){
                monsterMatch = monster;
            }
        });
        return monsterMatch;
    }
}