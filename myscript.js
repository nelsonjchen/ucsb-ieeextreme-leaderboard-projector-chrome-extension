// Hide Country Column
$('tr>th:nth-child(2)').hide()
// Rank Size
$('tr>td:nth-child(1)').css('font-size','30px')

// Hide R06
$('tr>td>font').css('color','red').replaceWith(function(e){
    var str = $(this).text()
    str = str.substr(4)
    str = str.trim()
    teamstr = str
    str = "<b>" + str + "</b>"
    if (teamstr == "SparkleMotion"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "Team4"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "ShortSited"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "TeamJacob"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "AntiCasuals"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "BobbaMilkTEA"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "ATwoManTeam"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    if (teamstr == "SilverbackCodeMonkys"){
        str = appendname(str,"Some Dude, a Girl, and Pizza")
    }
    return str
})

function appendname(istr, append){
    istr = istr + '<font size="1" ><br>* ' + append + "</font>"
    return istr
}
