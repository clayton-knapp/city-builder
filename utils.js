export function createCountString(villageCount, castleCount, waterCount) {
    let villagePlural = 's';
    let castlePlural = 's';
    let waterPlural = 's';
    if (villageCount === 1) {
        villagePlural = '';
    }
    if (castleCount === 1) {
        castlePlural = '';
    }
    if (waterCount === 1) {
        waterPlural = '';
    }
    return `You have changed the village ${villageCount} time${villagePlural}. You have changed the castle ${castleCount} time${castlePlural}. You have changed the water feature ${waterCount} time${villagePlural}.`;
}