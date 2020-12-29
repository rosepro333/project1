//8 players




var players=[
    {name:"sunil gavskar",debut:1974,retired:1987,runs:10122},
    {name:"kapil dev",debut:1978,retired:1994,runs:5248},
    {name:"ravi shasthri",debut:1981,retired:1992,runs:10122},
    {name:"sachin",debut:1989,retired:2013,runs:15921},
    {name:"rahul dravid",debut:1996,retired:2011,runs:13288},
    {name:"sehwag",debut:2001,retired:2006,runs:8586},
    {name:"ganguli",debut:1992,retired:2007,runs:7212},
    {name:"m s dhoni",debut:2004,retired:2019,runs:4876}
]

//print all player name to uppercase
var names=players.map(player=>player.name).map(player=>player.toUpperCase() )
console.log(names)


//print all player name who have experience more than 8 years
players.filter(player=>(player.retired-player.debut)>8).forEach(player=>console.log(player.name))



//find the player who scored highest runs in his account
var run=players.map(player=>player.runs).reduce((run1,run2)=>run1>run2?run1:run2)
players.filter(player=>(player.runs==run)).forEach(player=>console.log(player.name))

