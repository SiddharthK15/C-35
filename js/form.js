class Form {
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Multiplayer Car Racing Game")
        title.position(250,20)
        var input = createInput("Type your name here");
        input.position(250,100);
        var button = createButton("Play");
        button.position(250,150);
        var greeting = createElement("h2");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value()
            playercount = playercount + 1;
            player.updatecount(playercount);
            player.updatename(name);
            greeting.html("Hey!" + name);
            greeting.position(250,250)
        })
    
        
    }
}

//.value = Takes the value