/* Categories XML Load */

$(document).ready(function()
{
	loadCategories();
});

function loadCategories() {
             $.ajax({
                 type: "GET",
                 url: "/xml/categories.xml",
                 dataType: "xml",
                 beforeSend: function(){
		     //alert('teste 1!');
                     $('#DivCategories').html('');
                     //$('#LoaderImg').attr('display', 'inline');
		     $('#LoaderImg').html('<img src=\"/images/loader.gif\" alt=\"Loading Categories\" />');
		     //alert('teste 3! ' + $('#LoaderImg').attr('display'));
                 },
                 success: function(xml) {
		     //alert('teste 2');
		     $('#DivCategories').html('<ul id=\"Categories\"></ul>');
                     $(xml).find('category').each(function(){
                         var id_text = $(this).attr('id')
                         var name_text = $(this).find('name').text();

			 /*<span class=\"liTextColor\">*/
                         $('<li></li>')
                             .html('<a href=\"/archive.html#'+name_text+'\" title=\"'+name_text+'\">'+name_text+'</a>')
                             .appendTo('#Categories');
                     }); //close each(
                 },
                 error: function(){
		     //alert('Erro');
                     $('#DivCategories').html('<span>The Categories list couldn\'t be loaded. Please <a href=\"#\" id="ReloadCategories">try</a> again later.</span>');
                 },
                 complete: function(){
                     //$('#LoaderImg').attr('display', 'none');
		     $('#LoaderImg').html('');
		     var reloadAnchor = $('#ReloadCategories');
		     if(reloadAnchor)
		     	reloadAnchor.click(function(){loadCategories();});
                 }
             }); //close $.ajax(

	 //$('#ReloadCategories').click(loadCategories());

}

