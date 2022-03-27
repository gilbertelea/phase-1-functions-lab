
function distanceFromHqInBlocks(distance){
    const HQ = 42;
       return   Math.abs(distance - HQ) ;
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(block2){
    const block1 = 42;
       return   Math.abs((block2 - block1)*264);
}
distanceTravelledInFeet(43);

function distanceTravelledInFeet(block2, blockn){
    
       return Math.abs((blockn - block2)*264);
}
distanceTravelledInFeet(50, 60);


function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination); 


if (feet < 400){
    return 0

} else if (feet >= 400 && feet < 2000){
    return (feet-400)* .02

} else if (feet > 2000 && feet < 2500)
    return 25

else if (feet >= 2500){
   return ('cannot travel that far')
}
}

calculatesFarePrice(34, 32);