var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log();

$("#login").click(()=>{
    let loginGrtr = G$("John", "Doo");
    $("#logindiv").hide();
    loginGrtr.setLang($("#lang").val).HTMLGreeting("#greeting",true).log();
})