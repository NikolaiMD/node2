function helloEn(){
    console.log("HELLO");
}
function helloRo(){
    console.log("SALUT");
}
function helloRu(){
    console.log("Привет");
}
//  helloEn();

// INVERSION CONTROL
 function platform(f){
    f();
 }
platform(helloRu);