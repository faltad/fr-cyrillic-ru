function reset_print(c) {
    $('#validity').text('')
    $('#big_character').html(c)
}

$(document).ready(function() {
    var array_rus = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ы", "э", "ю", "ё", "я"]
    var array_answer = [["a"], ["b", "be"], ["v", "ve"], ["g", "gue", "gu"], ["d", "de"], ["ye", "ie"], ["je", "ge", "j"], ["z", "ze"], ["i"], ["i"], ["k", "ka"], ["el", "l"], ["m", "em"], ["n", "en"], ["o"], ["p", "pe"], ["r", "er"], ["s", "es"], ["t", "te"], ["ou"], ["f", "ef"], ["kh", "kha"], ["tse", "ts"], ["tch", "tche"], ["ch", "cha"],	["chtch", "chtcha"], ["i"], ["e", "ê"], ["you", "iou", "iu"], ["io", "yo"], ["ya", "ia"]]

    var random_nb = Math.floor(Math.random() * array_rus.length)

    reset_print(array_rus[random_nb])
    $('#next').click(function(){
	random_nb = Math.floor(Math.random() * array_rus.length)
	reset_print(array_rus[random_nb])
	return false
    })
    $('#test').submit(function(){
	if ($.inArray($('#input').val().toLowerCase(), array_answer[random_nb]) >= 0)
	    $('#validity').html('<img src="valid.gif" alt=""/>')
	else
	    $('#validity').html('<img src="no.png" alt=""/>')
	return false
    })
    
    $('#answer').click(function(){
	$('#input').val(array_answer[random_nb][0])
    })
})
