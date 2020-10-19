class Player {
    constructor(){

    }
    getCount(){
        var playercntref = database.ref("PlayerCount");
        playercntref.on("value", function(data){
            playercount = data.val();
        });

    }

updatecount(count){
    database.ref("/").update({
        PlayerCount:count
    })
}

updatename(name){
var playerindex = "Player" + playercount;
database.ref(playerindex).set({
    Name:name
})
}

}