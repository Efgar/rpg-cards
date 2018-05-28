class ObjectSelector{
    spells:Spell[];
    monsters:Monster[];

    addSpellToSelection(spell:Spell){
        if(this.spells.indexOf(spell) < 0){
            this.spells.push(spell);
        }
    }

    addMonsterToSelection(monster:Monster, addSpells:boolean){
        if(this.monsters.indexOf(monster) < 0){
            this.monsters.push(monster);
            if(addSpells){
                monster.getAvailableSpellNames().forEach(spellName => function(){
                    this.spells.push(AvailableData.getSpellByName(spellName));
                });
            }
        }
    }
}