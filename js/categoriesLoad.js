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
                     $('#div_categories').html('');
                     //$('#loader_img').attr('display', 'inline');
		     $('#loader_img').html('<img src=\"/images/loader.gif\" alt=\"Loading Categories\" />');
		     //alert('teste 3! ' + $('#loader_img').attr('display'));
                 },
                 success: function(xml) {
		     //alert('teste 2');
		     $('#div_categories').html('<ul id=\"categories\"></ul>');
                     $(xml).find('category').each(function(){
                         var id_text = $(this).attr('id')
                         var name_text = $(this).find('name').text();

			 /*<span class=\"li_text_color\">*/
                         $('<li></li>')
                             .html('<a href=\"/archive.html#'+name_text+'\" title=\"'+name_text+'\">'+name_text+'</a>')
                             .appendTo('#categories');
                     }); //close each(
                 },
                 error: function(){
		     //alert('Erro');
                     $('#div_categories').html('<span>The Categories list couldn\'t be loaded. Please <a href=\"#\" id="reload_categories">try</a> again later.</span>');
                 },
                 complete: function(){
                     //$('#loader_img').attr('display', 'none');
		     $('#loader_img').html('');
		     var reloadAnchor = $('#reload_categories');
		     if(reloadAnchor)
		     	reloadAnchor.click(function(){loadCategories();});
                 }
             }); //close $.ajax(

	 //$('#reload_categories').click(loadCategories());

}

