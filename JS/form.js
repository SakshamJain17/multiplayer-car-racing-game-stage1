class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Your Name");
        this.button = createButton("Play");
    }
    display(){
        this.title.html("Multiplayer Car Racing Game")
        this.title.position(900,0);
        this.input.position(900,400);
        this.button.position(900,500);
    }
}