/* Se ficou com o castelo no final e:
    * WOE dominada por 30 minutos ou mais bonus de 1000 zenys
    * WOE dominada de 20 a 30 minutos     bonos de 900  zenys
    * WOE dominada de 10 a 20 minutos     bonos de 800  zenys
    
    Invasão
    * Quebrar a defesa  850
    * Segurou a defesa  850

     
   KILLS:
    * Morte por magia ou coma 750
    * Morte por adaga ou soco 875
    * Morte por arco ou arma  855
    *  Kills positive 550
*/
const guildChanpionship = 'Thunder';
const WOEVictory = true;
const domination = 30;
const defBreak = true;
//const defDefense = false;
const killsQuantiti = 59;
const deathKill = 45;
const weponKills = 'arco'; //
let zenyReward = 0;

// Check woe victory
if (WOEVictory === true) {
    zenyReward += 1500;

}

//check domination of castle
if (domination == 30) {
    zenyReward += 1000

} else if(domination >= 20 && domination < 30 ) {
    zenyReward += 900

} else if (domination >= 10 && domination < 20 ) {
    zenyReward += 800

} 

// check invasion
if ( defBreak === true ) {
    zenyReward += 850

}

// check rate kill
if ( weponKills === 'magia' || weponKills === 'coma' ) {
    zenyReward += 750

} else if ( weponKills === 'adaga' || weponKills === 'soco' ) {
    zenyReward += 875

} else if ( weponKills === 'arco' || weponKills === 'arma' ) {
    zenyReward += 855

} 

//check quantiti kills
if (killsQuantiti > deathKill ) {
    zenyReward += 550
}

console.log(`A guilda ${guildChanpionship} venceu a WOE e Recebeu ${zenyReward} Zenys ` )