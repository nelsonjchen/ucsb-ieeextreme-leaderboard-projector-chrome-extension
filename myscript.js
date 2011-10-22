// Hide Country Column
$('tr>th:nth-child(2)[width!="10%"]').hide()
// Rank Size
$('tr>td:nth-child(1)').css('font-size','30px').css('margin-left',"15px")

// Hide R06
$('tr>td>font').css('color','red').replaceWith(function(e){
    var str = $(this).text()
    str = str.substr(4)
    str = str.trim()
    teamstr = str
    str = "<b>" + str + "</b>"
    if (teamstr == "SparkleMotion"){
        str = appendname(str,"Chris Lock, Vladimir Adam, David McCarthy")
    }
    if (teamstr == "Team4"){
        str = appendname(str,"Rotem Raviv, Alec Boutin, Eric Fivash")
    }
    if (teamstr == "ShortSited"){
        str = appendname(str,"Joseph Colicchio, Saili Raje, and Site Mao")
    }
    if (teamstr == "TeamJacob"){
        str = appendname(str,"Joel Dick, Jacob Anderson, Henry Huang")
    }
    if (teamstr == "AntiCasuals"){
        str = appendname(str,"Patrick, Dhaman, and Kasual")
    }
    if (teamstr == "BobbaMilkTEA"){
        str = appendname(str,"Edward, Tim, Alvin")
    }
    if (teamstr == "SilverbackCodeMonkys"){
        str = appendname(str,"Hoo heeh hah hah!")
    }
    return str
})

function appendname(istr, append){
    istr = istr + '<font size="1" ><br>* ' + append + "</font>"
    return istr
}

// Append Ian's thing in an iFrame

$('table[class="Listing"]').after('<iframe frameborder="no" src="http://ruckus.rumpusradio.com/ieeextreme/" width="100%" height="50%">')
