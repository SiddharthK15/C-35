class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value",function(data){
           gamestate = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            Gamestate: state
        })
    }
    start(){
        if(gamestate === 0){
            //we are working on this now
            player = new Player();
            form = new Form();
            player.getCount();
            form.display();
        }
    }
    
}