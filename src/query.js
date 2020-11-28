var pokeArray = ["./libs/images/bulbasaur.png",
"./libs/images/charminder.png",
"./libs/images/gastly.png",
"./libs/images/mewtwo.png",
"./libs/images/pidgeot.png",
"./libs/images/psyduck.png",
"./libs/images/snorlax.png"
];
var score = 0;
var nameArray = ["psyduck","gastly","snorlax","bulbasaur","pidgeot","mewtwo","charminder"];
var sort = function(array){
    array.sort(function(){
        return 0.5 - Math.random();
    })
}
$(document).ready(function(){
    sort(pokeArray);
    pokeArray.forEach(function(element,index){
        var fruit = element.slice(14, -4);
        $("<div id = 'images'><img src =" + element + " width='100' height='100'></div>").appendTo('#pokemon').draggable({revert:true, scope:fruit});
    });
    sort(nameArray);
    nameArray.forEach(function(element,index){
        $("<div id = 'imagesNames'<p>"+ element +"</p></div>").appendTo('#names').droppable({scope:element, 
        drop: function(event,ui) {
            $(ui.draggable).append($(this).text())
            $(this).hide("puff","fast")
            score++;
            if(score == pokeArray.length){
                console.log(score)
                $("<div><p>Congrats You won!Want to play again?</p></div>").dialog({modal:true,
                buttons:[{text:"yes",click:function(){
                    window.location.reload()
                }},{text:"no", click:function(){
                    $(this).dialog("close")
                }}]
            })
            }
        }});
    });
    $('#para1').draggable({cursor :"grab",revert: true});
})
