
dineroCofla = prompt("cuanto dinero tienes cofla?")
dineroRoberto = prompt("cuanto dinero tienes roberto?")
dineropedro = prompt("cuanto dinero tienes pedro?")

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineropedro = parseInt(dineropedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("cofla, puedes comprar el helado de agua");
    alert("tu cambio es" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("cofla, puedes comprar el helado de crema");
    alert("tu cambio es " + (dineroCofla - 1 ));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("cofla, puedes comprar el helado de crema")
    alert("tu cambio es " + (dineroCofla - 1.6 ));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("cofla, puedes comprar el helado de chocolatu")
    alert("tu cambio es " + (dineroCofla - 1.7 ));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("cofla, puedes comprar el helado de torta")
    alert("tu cambio es " + (dineroCofla - 1.8 ));
}
else if (dineroCofla >= 2.9){
    alert("cofla, helado de confitu o de 1/4 de kg")
    alert("tu cambio es " + (dineroCofla - 2.9 ));
} 
else {
    alert( "cofla , lo siento, no te alcanza para ningun helado")




}
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto, puedes comprar el helado de agua")
    alert("tu cambio es " + (dineroRoberto - 0.6 ));

}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, puedes comprar el helado de crema")
    alert("tu cambio es " + (dineroRoberto - 1 ));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, puedes comprar el helado de crema")
    alert("tu cambio es " + (dineroRoberto - 1.6 ));
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, puedes comprar el helado de chocolate")
    alert("tu cambio es " + (dineroRoberto - 1.7 ));
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, puedes comprar el helado de torta")
    alert("tu cambio es " + (dineroRoberto - 1.8 ));
}
else if (dineroRoberto >= 2.9){
    alert("Roberto, helado de confitu o de 1/4 de kg")
    alert("tu cambio es " + (dineroRoberto - 2.9 ));
} 
else {
    alert( "Roberto, lo siento, no te alcanza para ningun helado")




}
if(dineropedro >= 0.6 && dineropedro < 1){
    alert("pedro, puedes comprar el helado de agua")
    alert("tu cambio es " + (dineropedro - 0.6 ));

}

else if (dineropedro >= 1 && dineropedro < 1.6){
    alert("pedro, puedes comprar el helado de crema")
    alert("tu cambio es " + (dineropedro - 1 ));
}
else if (dineropedro >= 1.6 && dineropedro < 1.7){
    alert("pedro, puedes comprar el helado de crema")
    alert("tu cambio es " + (dineropedro - 1.6 ));
}
else if (dineropedro >= 1.7 && dineropedro < 1.8){
    alert("pedro, puedes comprar el helado de chocolate")
    alert("tu cambio es " + (dineropedro - 1.7 ));
}
else if (dineropedro >= 1.8 && dineropedro < 2.9){
    alert("pedro, puedes comprar el helado de torta")
    alert("tu cambio es " + (dineropedro - 1.8 ));
}
else if (dineropedro >= 2.9){
    alert("pedro, helado de confitu o de 1/4 de kg")
    alert("tu cambio es " + (dineropedro - 2.9 ));
} 
else {
    alert( "pedro; lo siento, no te alcanza para ningun helado")
}