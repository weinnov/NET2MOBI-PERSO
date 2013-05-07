tinymce.create('tinymce.plugins.net2mobiPlugin', {
	createControl: function(n, cm) {
		switch (n) {
			case 'net2mobi_font_family':
				var mlb = cm.createListBox('net2mobi_font_family', {
					 title : 'Font Family'
					 
				});
				
				mlb.add('comic sans ms','Comic Sans Ms');
				mlb.add('verdana','Verdana');
				mlb.add('courrier','Courier New');
				mlb.add('georgia','Georgia');
				
				
				return mlb;
				break;
				
			case 'net2mobi_font_size':
				var fs = cm.createListBox('net2mobi_font_size', {
					 title : 'Font Size'
					 /*onselect : function(val) {
						 this.scope.focus();
        				 this.scope.selection.select(this.scope.getBody(), true);
						 this.scope.execCommand('FontSize', false, val);
						 this.scope.selection.collapse();
						 
						 this.scope.controlManager.get('net2mobi_font_size').add('a',val);
						 this.scope.controlManager.get('net2mobi_font_size').items.pop();
					 },*/
					 
				});
				
				fs.add('8px','8px');
				fs.add('10px','10px');
				fs.add('12px','12px');
				fs.add('14px','14px');
				fs.add('16px','16px');
				fs.add('18px','18px');
				
				return fs;
				break;
				
			case 'net2mobi_color':
                var c = cm.createColorSplitButton('net2mobi_color', {
                    title : 'Couleur du texte',
					default_color: "#000000"
					//colors : "ff0000,009900,0066cc,ffff00,6600cc,663300,cccccc,000000,ffffff",
					//grid_width: 5,
                    //image : 'some.gif',
                    /*onselect : function(v) {
                        console.log(v);
						console.log(this);
                    }*/
                });

                /*c.onHideMenu.add(function(c, m) {
                    m.add({title : 'Some title', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                    m.add({title : 'Some item 1', onclick : function() {
                        alert('Some item 1 was clicked.');
                    }});

                    m.add({title : 'Some item 2', onclick : function() {
                        alert('Some item 2 was clicked.');
                    }});});*/

                return c;
		}
		return null;
	}
});
tinymce.PluginManager.add('net2mobi', tinymce.plugins.net2mobiPlugin);


function applyModif(type, composant, classApercu, value)
{
	/*console.log(type + '  ' + composant.attributs.id + '  ' + classApercu);
	console.log(value);*/
	
	if(type == 'gras')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('font-weight', ((value)?'bold':'normal'));
		(classApercu == '.label')? 
			composant.label.setStyle('font-weight', ((value)?'bold':'normal')):
			composant.setStyle('font-weight', ((value)?'bold':'normal'));
	}
	else if(type == 'italique')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('font-style', ((value)?'italic':'normal'));
		(classApercu == '.label')? 
			composant.label.setStyle('font-style', ((value)?'italic':'normal')):
			composant.setStyle('font-style', ((value)?'italic':'normal'));
	}
	else if(type == 'souligne')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('text-decoration', ((value)?'underline':'none'));
		(classApercu == '.label')? 
			composant.label.setStyle('text-decoration', ((value)?'underline':'none')):
			composant.setStyle('text-decoration', ((value)?'underline':'none'));
	}
	else if(type == 'font-family')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('font-family', value);
		(classApercu == '.label')? 
			composant.label.setStyle('font-family', value):
			composant.setStyle('font-family', value);
	}
	else if(type == 'font-size')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('font-size', value);
		(classApercu == '.label')? 
			composant.label.setStyle('font-size', value):
			composant.setStyle('font-size', value);
	}
	else if(type == 'color')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('color', value);
		(classApercu == '.label')? 
			composant.label.setStyle('color', value):
			composant.setStyle('color', value);
	}
	else if(type == 'gauche')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('text-align', 'left');
		(classApercu == '.label')? 
			composant.label.setStyle('text-align', 'left'):
			composant.setStyle('text-align', 'left');
	}
	else if(type == 'centre')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('text-align', 'center');
		(classApercu == '.label')? 
			composant.label.setStyle('text-align', 'center'):
			composant.setStyle('text-align', 'center');
	}
	else if(type == 'droite')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('text-align', 'right');
		(classApercu == '.label')? 
			composant.label.setStyle('text-align', 'right'):
			composant.setStyle('text-align', 'right');
	}
	else if(type == 'justifie')
	{
		$('#' + composant.attributs.id + ' ' + classApercu).css('text-align', 'justify');
		(classApercu == '.label')? 
			composant.label.setStyle('text-align', 'justify'):
			composant.setStyle('text-align', 'justify');
	}
	
}


//conteneur : selecteur du div conteneur de la propriété de la forme '#id_du_div'
//type : texte, textbox, radio (simple ou complexe) (texte et/ou image), div, bouton, upload, spin, spin + couleur, toggle, couleur, select, tiny, ajout
//classProp : id de la propriété
//classApercu : classe du composant a modifier dans l'apercu
//comp : objet Composant a modifier
//strAttr : chaine permettant d'identifier l'attribut a modifier
//idDivRef : identifiant du div a afficher (radiobutton, select)
//contenu : (type string) contenu a placer dans une propriete de type div
//minimum : minimum d'elements pour une propriete de type ajout
//label : texte de l'étiquette de la propriete
//name : name pour un groupe de radiobutton
//texte : texte pour une propriété de type texte
//img : image associé a une propriété
//selected : détermine si la propriété est sélectionnée
//changeComp : le devenir du composant dans le cas d'un radiobutton switcheur de composant
//classElemAjout : classe des elements pour une propriété ajout

/*{conteneur : 0, type : 0, classProp : 0, classApercu : 0, comp : 0, strAttr : 0, idDivRef : 0, contenu : 0, minimum : 0, label : 0, name : 0, texte : 0, img : 0, selected : false, changeComp : 0, spinMinMaxStep : 0, spinDefault : 0, spinType : 0, affichage : block, classElemAjout : 0}*/

function createProp(params)
{
	var properties = $.extend(  
      {  
          conteneur : 0,  
          type : 0,  
          classProp : 0,  
          classApercu : 0,  
          comp : 0,  
          strAttr : 0,  
          idDivRef : 0,  
          contenu : 0,  
          minimum : 0,
		  label : 0,
		  name : 0,
		  texte : 0,
		  img : 0,
		  selected : false,
		  changeComp : 0,
		  spinMinMaxStep : 0,
		  spinDefault : 0,
		  spinType : 0,
		  affichage : 'block',
		  classElemAjout : 0,
		  defaultValue : 0,
		  avecImg : false,
		  divClass : ""
      }, params || {} );  
	
	
	
	var text = '';
	var textEvent = '';
	
	if(properties.label != 0)
	{
		
		text += '<span>' + properties.label + '</span>';
		//if(properties.type == 'ajout' || properties.type == 'editeur') 
	}
	
	if(properties.type == 'texte')
	{
		
		text += '<p>' + properties.texte + '</p>';
		
	}
	else if(properties.type == 'textbox')
	{
		text += '<input class="' + properties.classProp + '" type="text" value="' + 
		((properties.strAttr == 'id')? properties.comp.attributs.id : "")
		+ '" />';
		
	}
	else if(properties.type == 'radio')
	{
		text += '<img id="' + properties.classProp + '" class="declencheurRadio' + properties.name + '" src="img/icone/' + ((properties.selected)? 'radio_plein' : 'radio_vide') + '.png"/>';
		if(properties.texte != 0)
			text += '<span for="' + properties.classProp + '">' + properties.texte + '</span>';
		if(properties.img != 0)
			text += '<img alt="img" for="' + properties.classProp + '" src="' + properties.img + '"/>';
		
	}
	else if(properties.type == 'editeur')
	{
		if (tinyMCE.getInstanceById(properties.classProp)) tinyMCE.get(properties.classProp).remove();
		text += "<textarea id='" + properties.classProp + "' class='editeur'>" + 
			((properties.strAttr == "label")? properties.comp.label.html : 
			((properties.strAttr == "value")? properties.comp.attributs.value : 
			((properties.strAttr == "html")? properties.comp.html : properties.comp.textPara)))
			+ "</textarea>";
	}
	else if(properties.type == 'ajout')
	{
		if (tinyMCE.getInstanceById(properties.classProp)) tinyMCE.get(properties.classProp).remove();
		text += "<textarea id='" + properties.classProp + "' class='editeur'></textarea>";
	}
	else if(properties.type == 'spin')
	{
		text += "<input id='" + properties.classProp + "' class='tospinbox' alt='" + properties.spinMinMaxStep + "' maxlength='6' value='" + properties.spinDefault + "' type='text' src='" + properties.spinType + "'/>";
		
	}
	else if(properties.type == 'color')
	{
		text += "<input id='" + properties.classProp + "' class='tocolor' name='simplecolor' type='hidden' value='" + (properties.defaultValue) + "' />";
	}
	else if(properties.type == 'bouton')
	{
		text += '<button class="' + properties.classProp + '">';
		
		if(properties.texte != 0)
			text += properties.texte;
		else
			text += '<img alt="img" src="' + properties.img + '"/>';
		
		text += '</button>';
	}
	
	/*************************************
	         Edition des événements
	/************************************/
	if(properties.type == 'spin' || properties.type == 'color')
	{
		$('#' + properties.classProp).unbind('change');
		
		textEvent += "$('#" + properties.classProp + "').bind('change', function()";
		textEvent += "{";
		
		//if(strAttr == 'width')
		//{
		//}
		if(properties.strAttr == 'background' && (properties.comp.type == combobox || properties.comp.type == menu || properties.comp.type == actualite))
		{
			
			textEvent += "if(properties.comp.degrade == false)";
			textEvent += "{";
			
			
			textEvent += "$('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('background', $(this).val());";
			textEvent += "('" + properties.classApercu + "' == '.label')? ";
			textEvent += "    properties.comp.label.setStyle('background', $(this).val()):";
			textEvent += "    properties.comp.setStyle('background', $(this).val());";
			
			
			textEvent += "}";
			textEvent += "else";
			textEvent += "{";
			textEvent += "console.log('fzer' + $('#prop_couleur_fond').val() + 'fdg');";
	textEvent += "console.log(degradeValeur[$('#prop_couleur_fond').val()]);";
	
			textEvent += "$('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('background', degradeGen($('#prop_couleur_fond').val(), degradeValeur[$('#prop_couleur_fond').val()]));";
			textEvent += "('" + properties.classApercu + "' == '.label')? ";
			textEvent += "    properties.comp.label.setStyle('background', $('#prop_couleur_fond').val()):";
			textEvent += "    properties.comp.setStyle('background', $('#prop_couleur_fond').val());";
			
			
			textEvent += "}";
		}
		else
		{
			if(properties.strAttr == 'border-color' && properties.comp.type == actualite)
			{
				textEvent += "    $('#" + properties.comp.attributs.id + " .paraactu').css('border-color', $('#prop_couleur_bordure').val());";
			}
			
			if(properties.strAttr == 'border-radius' && properties.comp.type == actualite)
			{
				textEvent += "    $('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('" + properties.strAttr + "', $(this).val() + 'px ' + $(this).val() + 'px 0 0');";
				textEvent += "    $('#" + properties.comp.attributs.id + " .paraactu').css('" + properties.strAttr + "', '0 0 ' + $(this).val() + 'px ' + $(this).val() + 'px');";

			}
			else if(properties.strAttr == 'border-width' && properties.comp.type == actualite)
			{
				textEvent += "    $('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('" + properties.strAttr + "', $(this).val() + 'px ' + $(this).val() + 'px 0 ' + $(this).val() + 'px');";
				textEvent += "    $('#" + properties.comp.attributs.id + " .paraactu').css('" + properties.strAttr + "', '0 ' + $(this).val() + 'px ' + $(this).val() + 'px ' + $(this).val() + 'px');";
				//textEvent += "    $('#" + properties.comp.attributs.id + " .paraactu').css('border-color', $('#prop_couleur_bordure').val());";
			}
			else
			{				
				textEvent += "    $('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('" + properties.strAttr + "', $(this).val() + '" + ((properties.strAttr != "width" && properties.strAttr != "opacity" && properties.type != "color")? "px" : "") + "');";
				
			}
			textEvent += "('" + properties.classApercu + "' == '.label')? ";
			textEvent += "    properties.comp.label.setStyle('" + properties.strAttr + "', $(this).val()):";
			textEvent += "    properties.comp.setStyle('" + properties.strAttr + "', $(this).val());";
		}
		
		if(	properties.type == "color")
		{
			textEvent += "if($(this).val() == 'url(images/transparent.jpg)')";
			textEvent += "{";
			textEvent += "    $('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('" + properties.strAttr + "', 'transparent');";
			textEvent += "    ('" + properties.classApercu + "' == '.label')? ";
			textEvent += "        properties.comp.label.setStyle('" + properties.strAttr + "', transparent):";
			textEvent += "        properties.comp.setStyle('" + properties.strAttr + "', transparent);";
			if(properties.strAttr == 'background' &&((properties.comp.type == combobox || properties.comp.type == menu)))
			{
				textEvent += "$('#" + properties.comp.attributs.id + " " + properties.classApercu + "').css('background', 'transparent');";
				textEvent += "('" + properties.classApercu + "' == '.label')? ";
				textEvent += "    properties.comp.label.setStyle('background', transparent):";
				textEvent += "    properties.comp.setStyle('background', transparent);";
			}
			textEvent += "}";
		}
		
		textEvent += "});";
	}
	else if(properties.strAttr == 'id')
	{
		$('.' + properties.classProp).die('keyup');
		$('.' + properties.classProp).live('keyup', function()
		{
			$('.' + properties.classProp).unbind('blur');
			var trouve = false;
			for(i = 0; i < site.pages[site.activePage].corps.length; i++)
			{
				if(site.pages[site.activePage].corps[i].attributs.id == $('.' + properties.classProp).val() && site.pages[site.activePage].corps[i] != properties.comp)
				{
					trouve = true;
					break;
				}
				
			}
			
			if($('.' + properties.classProp).val() != '' && !trouve)
			{
				$('#' + properties.comp.attributs.id).attr(properties.strAttr, $('.' + properties.classProp).val());
				properties.comp.attributs.id = $('.' + properties.classProp).val();
			}
			else
			{
				$('.' + properties.classProp).bind('blur', function()
				{
					//$('.' + classProp).focus();
				});
				//$('#essai').html("erreur");
			}
			
		});
	}
	else if(properties.strAttr == 'composant')
	{
		$('#' + properties.classProp).die('click');
		$('#' + properties.classProp).live('click', function()
		{
			if(radioChanged)
			{
				radioChanged = false;
				
				var composant = new Composant(properties.changeComp, properties.comp.num);
				composant.selected = true;
				
				composant.attributs.id = properties.comp.attributs.id;
				var index = site.pages[site.activePage].getIndexById(composant.attributs.id);
				site.pages[site.activePage].corps[index] = composant;
				
				$($("#elements li").get(index + 1)).html(site.pages[site.activePage].corps[index].code());
				$($("#elements li").get(index + 1)).find(".composant").addClass('selected');
				
				$("#" + composant.attributs.id + " .boutons").show();
					
				if(properties.changeComp == menu)
				{
					editor = new menuEditor(composant);
					editor.show();
				}
				else if(properties.changeComp == actualite)
				{
					editor = new actuEditor(composant);
					editor.show();
				}
				else if(properties.changeComp == sousactualite)
				{
					editor = new sousActuEditor(composant);
					editor.show();
				}
			}
		});
	}
	else if(properties.type == "editeur"/* || properties.type == "ajout"*/)
	{
		//strAttr == "label" || strAttr == "value" || strAttr == "html" || strAttr == "para"

		/*if (tinyMCE.getInstanceById(classProp))
			tinyMCE.get(classProp).remove();*/
		
		textEvent += "tinyMCE.init";
		textEvent += "({";
		textEvent += "	plugins : 'net2mobi',";
		textEvent += "	theme : 'advanced',";
		textEvent += "	mode : 'exact',";
		textEvent += "	elements : '" + properties.classProp + "',";
		textEvent += "	theme_advanced_toolbar_location : 'top',";
		textEvent += "	theme_advanced_path : false,";
		textEvent += "	theme_advanced_statusbar_location : 'bottom',";
		/*textEvent += "	theme_advanced_buttons1 : 'bold,italic,underline,justifyleft,justifycenter,justifyright,justifyfull',";
		textEvent += "	theme_advanced_buttons2 : 'fontselect,forecolor,fontsizeselect,image,gras,net2mobi_font_family',";
		textEvent += "	theme_advanced_buttons3 : '',";*/
		if(properties.comp.type == checkbox || properties.comp.type == radiobutton)
		{
		textEvent += "	theme_advanced_buttons1 : 'gras,italique,souligne,gauche,centre,droite,justifie,gras,interligne,net2mobi_font_family,net2mobi_color,net2mobi_font_size,insererimage',";
		textEvent += "	theme_advanced_buttons2 : '',";
		}
		else
		{
		textEvent += "	theme_advanced_buttons1 : 'gras,italique,souligne,gauche,centre,droite,justifie,gras,interligne',";//,italic,underline,justifyleft,justifycenter,justifyright,justifyfull',";
		textEvent += "	theme_advanced_buttons2 : 'net2mobi_font_family,net2mobi_color,net2mobi_font_size,insererimage',";//fontselect,forecolor,fontsizeselect,image,gras,',";
		}
		textEvent += "	theme_advanced_buttons3 : '',";
		textEvent += "  relative_urls : true,";
        textEvent += "  document_base_url : 'http://net2mobi.net/9e9/',";
		
		textEvent += "	setup : function(ed)";
		textEvent += "	{	";
		
		
		
		textEvent += "		ed.onKeyDown.add(function(ed, e)";
		textEvent += "		{";
		textEvent += "			if(e.keyCode == 13)";
		textEvent += "			    tinymce.dom.Event.cancel(e);";
		textEvent += "	  	});	";
		
		textEvent += "		ed.onKeyUp.add(function(ed, e)";
		textEvent += "		{";
		textEvent += "			var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());";
		textEvent += "          var temp = $(ed.getContent()).html();";
		textEvent += "          temp = temp.replace(new RegExp('<.[^>]*>', 'gi'), '');";
		textEvent += "			if(ed.id == 'edition_label')";
		textEvent += "			{";
		textEvent += "				$('#' + $('.edition_id').val() + ' .label').html(temp);";
		textEvent += "				comp.label.html = temp;";
		textEvent += "			}";
		textEvent += "			else if(ed.id == 'edition_value')";
		textEvent += "			{";
		textEvent += "				$('#' + $('.edition_id').val() + ' .val_defaut').html(temp);";
		textEvent += "				comp.attributs.value = temp;";
		textEvent += "			}";
		textEvent += "	  	});	";
		
		
		
		
		textEvent += "		ed.onInit.add(function(ed) {	";
		textEvent += "			    $('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');";
		
		if(properties.type == "ajout")
		{		
			textEvent += "			$('#' + ed.id + '_ifr').css('height', '0px');";
			//textEvent += "			//$('#' + ed.id + '_tbl tbody').css('height', 'auto');";
			
			//textEvent += "			//$('#' + ed.id + '_tbl .mceIframeContainer').css('height', '50px');";
						
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<button class=\"editeur_exeption\">fgfgh</button>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<input type=\"text\" value=\"rtty\" class=\"editeur_exeption\"/>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<select class=\"editeur_exeption\"><option>fhgh</option><option>fgdsgh</option><option>fuuiuh</option></select>');";
		}
		else if(properties.type == "editeur")
		{
			textEvent += "			$('#' + ed.id + '_ifr').css('height', '40px');";
			textEvent += "			$('#' + ed.id + '_tbl').css('width', '160px');";
		}
		
        textEvent += " 			$('#' + ed.id + '_path_row span').append('<input type=radio name=align id=align_left ";
		if(properties.comp.type == menu || properties.comp.type == actualite)
		{
			if($('#' + properties.comp.attributs.id + ' .thumbnail').is(':visible') && !$('#' + properties.comp.attributs.id + ' .thumbnail').hasClass("floatRight"))
				textEvent += "checked";
		}
		textEvent += "/><label for=align_left>Gauche</label>');";
		textEvent += "			$('#' + ed.id + '_path_row span').append('<input type=radio name=align id=align_none ";
		if(properties.comp.type == menu || properties.comp.type == actualite)
		{
			if(!$('#' + properties.comp.attributs.id + ' .thumbnail').is(':visible'))
				textEvent += "checked";
		}
		textEvent += "/><label for=align_none>Aucun</label>');";
		textEvent += "			$('#' + ed.id + '_path_row span').append('<input type=radio name=align id=align_right ";
		if(properties.comp.type == menu || properties.comp.type == actualite)
		{
			if($('#' + properties.comp.attributs.id + ' .thumbnail').is(':visible') && $('#' + properties.comp.attributs.id + ' .thumbnail').hasClass("floatRight"))
				textEvent += "checked";
		}
		textEvent += "/><label for=align_right>Droite</label>');";
		
		/*if(strAttr == "label" || strAttr == "value")
		{
			textEvent += "      $('#' + ed.id + '_path_row span').css('display', 'inline-block'); $('#' + ed.id + '_path_row span').append('<span style=\"background-color:#00F0EE;display:block;width:230px;height:20px\"></span>');  ";
		}*/
      	
		
		textEvent += "          ed.controlManager.get('net2mobi_font_family').settings.onselect = function(v){";
		textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              ed.execCommand('FontName', false, v);";
		textEvent += "              ed.selection.collapse();";
		textEvent += "              applyModif('font-family', properties.comp, properties.classApercu, v);";
		textEvent += "          };";
		
		
		
		textEvent += "          ed.controlManager.get('net2mobi_color').settings.onselect = function(v){";
		textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              ed.formatter.apply('forecolor', {value:v}); ";
		textEvent += "              ed.selection.collapse();";
		textEvent += "              applyModif('color', properties.comp, properties.classApercu, v);";
		textEvent += "          };";
		/*textEvent += "          ed.controlManager.get('net2mobi_color').settings.onclick = function(){";
		textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              ed.formatter.apply('forecolor', {value:ed.controlManager.get('net2mobi_color').value}); ";
		textEvent += "              ed.selection.collapse();";
		textEvent += "              applyModif('color', properties.comp, properties.classApercu, ed.controlManager.get('net2mobi_color').value);";
		textEvent += "          };";*/
		
		
		textEvent += "          ed.controlManager.get('net2mobi_font_size').settings.onselect = function(v){";
		textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              ed.execCommand('FontSize', false, v);";
		textEvent += "              ed.selection.collapse();";
		textEvent += "              applyModif('font-size', properties.comp, properties.classApercu, v);";
		textEvent += "          };";
		
		
		//DISABLING BUTTONS
		textEvent += "          ed.controlManager.setActive('gauche', true);";
		
		textEvent += "          ed.controlManager.setDisabled('insererimage', true);";
		textEvent += "          ed.controlManager.setDisabled('interligne', true);";
		
		//*****************
		
		
		if(properties.avecImg)
		{
			
			textEvent += "      ed.controlManager.setDisabled('insererimage', false);";	
			//textEvent += "		$('#' + ed.id + '_ifr').css({'width':'70%', 'display':'inline-block', 'float':'left'});";
			textEvent += "		$('#' + ed.id + '_ifr').css({'width':'70%'});";
			textEvent += "		$('#' + ed.id + '_ifr').before('<div class=\"imagePlus\" style=\"width:30%;display:inline-block;height:35px;float:left;\"><img id=\"image_menu\" src=\"" + ((properties.comp.thumbnail)? properties.comp.attributs.src : "images/imagePlus.png") + "\" width=\"30px\" height=\"30px\" onclick=\"imageMenuAllezVers()\"/></div>');";
		}
		
		textEvent += "		});";
		
		
		
		//MIS A JOUR TINYMCE SELON COMPOSANT
		textEvent += "		var firstLoad = true;";
		textEvent += "		ed.onNodeChange.add(function(ed, cm, e) {if(firstLoad){firstLoad = false;	";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('font-weight') == 'bold')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('gras').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('font-style') == 'italic')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('italique').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('text-decoration') == 'underline')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('souligne').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('text-align') == 'left')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('gauche').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('text-align') == 'center')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('centre').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('text-align') == 'right')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('droite').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          if($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('text-align') == 'justify')";
		textEvent += "          {";
		textEvent += "          	ed.controlManager.get('justifie').settings.onclick.call(ed);";
		textEvent += "          }";
		textEvent += "          var couleur = rgb2hex($('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('color'));";
		textEvent += "          var fontf = $('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('font-family');";
		textEvent += "          var fontsz = $('#' + $('.edition_id').val() + ' ' + properties.classApercu).css('font-size');";
		textEvent += "          fontf = (fontf.charAt(0) == \"\'\")? fontf.slice(1, fontf.length - 1) : fontf;";
		textEvent += "          ed.controlManager.get('net2mobi_color').setColor(couleur);";
		textEvent += "          ed.controlManager.get('net2mobi_font_family').select(fontf);";
		//textEvent += "          console.log(fontf);";
		textEvent += "          ed.controlManager.get('net2mobi_font_size').select(fontsz);";
		textEvent += "          ed.focus();";
        textEvent += "          ed.selection.select(ed.getBody(), true);";
		textEvent += "          ed.formatter.apply('forecolor', {value:couleur}); ";						
		textEvent += "          ed.execCommand('FontName', false, fontf);";
		textEvent += "          ed.execCommand('FontSize', false, fontsz);";
		textEvent += "          ed.selection.collapse();";
		textEvent += "		}});";
		
		//*****************
		
		
		
		//*************************************************************************************
		//**************************GENERER BOUTONS PERSONALISES*******************************
		//*************************************************************************************
		
		textEvent += "		ed.addButton('gras', {";
        textEvent += "          title : 'Mise en gras',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('gras').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('bold');";
		textEvent += "                  ed.controlManager.setActive('gras', true);";
		textEvent += "                  applyModif('gras', properties.comp, properties.classApercu, true);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('bold');";
		textEvent += "                  ed.controlManager.setActive('gras', false);";
		textEvent += "                  applyModif('gras', properties.comp, properties.classApercu, false);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		textEvent += "		ed.addButton('italique', {";
        textEvent += "          title : 'Mise en italique',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('italique').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('italic');";
		textEvent += "                  ed.controlManager.setActive('italique', true);";
		textEvent += "                  applyModif('italique', properties.comp, properties.classApercu, true);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('italic');";
		textEvent += "                  ed.controlManager.setActive('italique', false);";
		textEvent += "                  applyModif('italique', properties.comp, properties.classApercu, false);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		
		textEvent += "		ed.addButton('souligne', {";
        textEvent += "          title : 'Soulignement',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('souligne').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('underline');";
		textEvent += "                  ed.controlManager.setActive('souligne', true);";
		textEvent += "                  applyModif('souligne', properties.comp, properties.classApercu, true);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('underline');";
		textEvent += "                  ed.controlManager.setActive('souligne', false);";
		textEvent += "                  applyModif('souligne', properties.comp, properties.classApercu, false);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		
		textEvent += "		ed.addButton('gauche', {";
        textEvent += "          title : 'Aligner a gauche',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('gauche').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('droite', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "              applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		//textEvent += "                  ed.formatter.remove('alignleft');";
		//textEvent += "                  ed.controlManager.setActive('gauche', false);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		
		textEvent += "		ed.addButton('centre', {";
        textEvent += "          title : 'Aligner au centre',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('centre').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('aligncenter');";
		textEvent += "                  ed.controlManager.setActive('droite', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.controlManager.setActive('centre', true);";
		textEvent += "                  applyModif('centre', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('aligncenter');";
		textEvent += "                  ed.controlManager.setActive('centre', false);";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "                  applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		
		textEvent += "		ed.addButton('droite', {";
        textEvent += "          title : 'Aligner a droite',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('droite').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('alignright');";
		textEvent += "                  ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.controlManager.setActive('droite', true);";
		textEvent += "                  applyModif('droite', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('alignright');";
		textEvent += "                  ed.controlManager.setActive('droite', false);";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "                  applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";
		
        textEvent += "          }";
        textEvent += "      });";
		
		
		textEvent += "		ed.addButton('justifie', {";
        textEvent += "          title : 'Justifier lalignement',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('justifie').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('alignfull');";
		textEvent += "                  ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);";
		textEvent += "                  ed.controlManager.setActive('justifie', true);";
		textEvent += "                  applyModif('justifie', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('alignfull');";
		textEvent += "                  ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "                  applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";

        textEvent += "          }";
        textEvent += "      });";
		
		
		
		
		textEvent += "		ed.addButton('insererimage', {";
        textEvent += "          title : 'Inserer une image',";
        //textEvent += "          image : 'images/supprimer.png',";
        textEvent += "          onclick : function() {";
		
		if(properties.avecImg)
		{
			textEvent += "      $('#image_menu').trigger('click');";	
		}
        /*textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('justifie').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('alignfull');";
		textEvent += "                  ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);";
		textEvent += "                  ed.controlManager.setActive('justifie', true);";
		textEvent += "                  applyModif('justifie', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('alignfull');";
		textEvent += "                  ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "                  applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";*/

        textEvent += "          }";
        textEvent += "      });";
		
		
		
		textEvent += "		ed.addButton('interligne', {";
        textEvent += "          title : 'Modifier interligne',";
        //textEvent += "          image : 'images/supprimer.png',";
        /*textEvent += "          onclick : function() {";
        textEvent += "              ed.focus();";
        textEvent += "              ed.selection.select(ed.getBody(), true);";
		textEvent += "              if(!ed.controlManager.get('justifie').isActive())";
		textEvent += "              {";
		textEvent += "                  ed.formatter.apply('alignfull');";
		textEvent += "                  ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);";
		textEvent += "                  ed.controlManager.setActive('justifie', true);";
		textEvent += "                  applyModif('justifie', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              else";
		textEvent += "              {";
		textEvent += "                  ed.formatter.remove('alignfull');";
		textEvent += "                  ed.controlManager.setActive('justifie', false);";
		textEvent += "                  ed.formatter.apply('alignleft');";
		textEvent += "                  ed.controlManager.setActive('gauche', true);";
		textEvent += "                  applyModif('gauche', properties.comp, properties.classApercu);";
		textEvent += "              }";
		textEvent += "              ed.selection.collapse();";

        textEvent += "          }";*/
        textEvent += "      });";
		
		
		
		//*************************************************************************************
		
		
		textEvent += "   }";

		textEvent += "});";		
	}
	//contenuEditeur[0] += text;
	//contenuEditeur[1] += textEvent;
	if(properties.conteneur == '#selectionEditeur')
	{
		$(properties.conteneur + ' ul').append('<li>' + text + '</li>');
	}
	else
	{
		$(properties.conteneur).append("<div class='" + properties.divClass + "' style='display:" + properties.affichage + ";'>" + text + "</div>");
	}
	
	eval(textEvent);
}



function textboxEditor(composant)
{
	this.show = function()
	{
		reinitEditeur();
		$("#pointille").show();
		
		newDivDisabled(164, 109, 172, 123, "#edit_131", "desactiverEditeurLabel", (!composant.label.active) ? true : false);
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		//createEvent('textbox', 'edition_id', '#' + composant.attributs.id, composant, 'id', 0, 0, 0, 0, 0, 0, 0);
		copierStyle(composant);


		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioText', comp:composant, name:'groupTextbox', texte:'Texte', img:'img/textBox1.jpg', selected:true});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioPass', comp:composant, name:'groupTextbox', texte:'Mot de passe', img:'img/textBox2.jpg', selected:false});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioTel', comp:composant, name:'groupTextbox', texte:'Nombre/Tel', img:'img/textBox3.jpg', selected:false});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioEmail', comp:composant, name:'groupTextbox', texte:'Email', img:'img/textBox4.jpg', selected:false});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioUrl', comp:composant, name:'groupTextbox', texte:'URL', img:'img/textBox5.jpg', selected:false});

		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioMulti', comp:composant, name:'groupTextbox', texte:'Multiligne', img:'img/textBox6.jpg', selected:false});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioComment', comp:composant, name:'groupTextbox', texte:'Commentaire', img:'img/textBox7.png', selected:false});
	
		

		
		createProp({conteneur:'#edit_131', type:'editeur', classProp:'edition_label', classApercu:'.label', comp:composant, strAttr:'label'});
		
		createProp({conteneur:'#edit_132', type:'editeur', classProp:'edition_value', classApercu:'.val_defaut', comp:composant, strAttr:'value', defaultValue:composant.attributs.style.border_color});
		
		text = "<label class='souligne'>Personnaliser la forme:</label> <br />";
		$('#edit_212').append(text);
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond', classApercu:'.val_defaut', comp:composant, strAttr:'background', label:'Fond : ', defaultValue:composant.attributs.style.background});
		//fgfggdfg
		$('#edit_232').append("<div style='display:none'><span>Degrade</span><span id='prop_degrade' class='totogglebox' selected='selected' alt='oui;non'></span></div>");
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_largeur', classApercu:'.val_defaut', comp:composant, strAttr:'width', label:'Largeur : ', spinMinMaxStep:'25;100;1', spinDefault:composant.attributs.style.width, spinType:'percent'});
		//fgfggdfgfgdfg
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_hauteur', classApercu:'.val_defaut', comp:composant, strAttr:'height', label:'Hauteur : ', spinMinMaxStep:'0;100;1', spinDefault:composant.attributs.style.height, spinType:'int', affichage:'none'});

		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_arrondi', classApercu:'.val_defaut', comp:composant, strAttr:'border-radius', label:'Arrondi : ', spinMinMaxStep:'0;15;1', spinDefault:composant.attributs.style.border_radius, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_bordure', classApercu:'.val_defaut', comp:composant, strAttr:'border-color', label:'Bordure : ', affichage:'inline-block', defaultValue:composant.attributs.style.border_color});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_epaisseur_bordure', classApercu:'.val_defaut', comp:composant, strAttr:'border-width', spinMinMaxStep:'0;2;1', spinDefault:composant.attributs.style.border_width, spinType:'int', affichage:'inline-block'});
		
		
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_opacity', classApercu:'.val_defaut', comp:composant, strAttr:'opacity', label:'Transparence : ', spinMinMaxStep:'0;1;0.1', spinDefault:composant.attributs.style.opacity, spinType:'float'});
		
		
		
		
		$('#edit_11').css('height', '23px');
		
		$('#edit_111').html($('#edit_111').html() + "<label class='souligne'>Etiquette:</label>" + "<img id='activerEtiquette' src='images/checkBox_" + ((composant.label.active)?"1":"0") + ".jpg'/>" + "<span for='activerEtiquette'>Activer</span>");
		$('#activerEtiquette').die('click');
		$('#activerEtiquette').live('click', function(){
			if($(this).attr('src') == 'images/checkBox_1.jpg')
			{
				$(this).attr('src', 'images/checkBox_0.jpg');
				$('#' + composant.attributs.id + ' .label').hide();
				//$('#edit_131').find('.mceEditor').css('opacity', '0.2');
				$("#desactiverEditeurLabel").show();
				composant.label.active = false;
			}
			else
			{
				$(this).attr('src', 'images/checkBox_1.jpg');
				$('#' + composant.attributs.id + ' .label').show();
				//$('#edit_131').find('.mceEditor').css('opacity', '1');
				$("#desactiverEditeurLabel").hide();
				composant.label.active = true;
			}
		});
		
		$('#edit_112').append("<label class='souligne'>Valeur par defaut:</label>");
		
		
		
		$('#edit_12').removeClass();
		//$('#edit_11').css('height', 'auto');
		$('#edit_12').addClass('zoneSaisie_12');
		
		$('#selectionEditeur').append("<span><a href='javascript:alert(\"Pas encore disponible\")' class='autre'>Autre</a></span>");
		
		$("#chargement").hide();
		
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}

function comboboxEditor(composant)
{
	
	this.show = function()
	{
		
		reinitEditeur();
		
		
		$('#edit_11').css('height', '23px');
		
		newDivDisabled(164, 109, 172, 123, "#edit_131", "desactiverEditeurLabel", (!composant.label.active) ? true : false);
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		createProp({conteneur:'#edit_131', type:'editeur', classProp:'edition_label', classApercu:'.label', comp:composant, strAttr:'label'});
		
		createProp({conteneur:'#edit_132', type:'ajout', classProp:'edition_value', classApercu:'.val_defaut', comp:composant, strAttr:'value'});
		

		//$('#edit_232').append('<span style="display:inline-block">Forme:</span>');
		
		text = "<label class='souligne'>Personnaliser la forme:</label> <br />";
		$('#edit_212').append(text);
		
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond', classApercu:'.combobox', comp:composant, strAttr:'background', label:'Fond : ', defaultValue:composant.attributs.style.background});
		
		$('#edit_232').append("<div><span>Degrade</span><span id='prop_degrade' class='totogglebox' " + ((composant.degrade)?"selected='selected'" : "") + " alt='oui;non'></span></div>");
		
		$('#prop_degrade').find('input').unbind('change');
		$('#prop_degrade').find('input').bind('change', function(){
			
			if($(this).val() == '1')
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .combobox').css('background', degradeGen(couleur, degradeValeur[couleur]));
				composant.degrade = true;
			}
			else
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .combobox').css('background', couleur);
				composant.degrade = false;
			}
		});
		
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_largeur', classApercu:'.combobox', comp:composant, strAttr:'width', label:'Largeur : ', spinMinMaxStep:'25;100;1', spinDefault:composant.attributs.style.width, spinType:'percent'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_hauteur', classApercu:'.combobox', comp:composant, strAttr:'height', label:'Hauteur : ', spinMinMaxStep:'20;40;1', spinDefault:composant.attributs.style.height, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_arrondi', classApercu:'.combobox', comp:composant, strAttr:'border-radius', label:'Arrondi : ', spinMinMaxStep:'0;15;1', spinDefault:composant.attributs.style.border_radius, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_bordure', classApercu:'.combobox', comp:composant, strAttr:'border-color', label:'Bordure : ', affichage:'inline-block', defaultValue:composant.attributs.style.border_color});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_epaisseur_bordure', classApercu:'.combobox', comp:composant, strAttr:'border-width', spinMinMaxStep:'0;10;1', spinDefault:composant.attributs.style.border_width, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_opacity', classApercu:'.combobox', comp:composant, strAttr:'opacity', label:'Transparence : ', spinMinMaxStep:'0;1;0.1', spinDefault:composant.attributs.style.opacity, spinType:'float'});
		
		$('#edit_111').html($('#edit_111').html() + "<span>Etiquette:</span>" + "<img id='activerEtiquette' src='images/checkBox_" + ((composant.label.active)?"1":"0") + ".jpg'/>" + "<span for='activerEtiquette'>Activer</span>");
		
		$('#activerEtiquette').die('click');
		$('#activerEtiquette').live('click', function(){
			if($(this).attr('src') == 'images/checkBox_1.jpg')
			{
				$(this).attr('src', 'images/checkBox_0.jpg');
				$('#' + composant.attributs.id + ' .label').hide();
				//$('#edit_131').find('.mceEditor').css('opacity', '0.2');
				$("#desactiverEditeurLabel").show();
				composant.label.active = false;
			}
			else
			{
				$(this).attr('src', 'images/checkBox_1.jpg');
				$('#' + composant.attributs.id + ' .label').show();
				//$('#edit_131').find('.mceEditor').css('opacity', '1');
				$("#desactiverEditeurLabel").hide();
				composant.label.active = true;
			}
		});
		
		$('#edit_12').removeClass();
		$('#edit_12').addClass('comboBox_12');
		
		$('#edit_232').append("<span style='display:inline-block'>Fleche:</span>");
		$('#edit_232').append("<div><div style='display:inline-block' class='boutonEditeur fleche_6 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_6"))? " flecheActive" : "") + "' name='6'></div><div style='display:inline-block' class='boutonEditeur fleche_7 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_7"))? " flecheActive" : "") + "' name='7'></div><div style='display:inline-block' class='boutonEditeur fleche_8 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_8"))? " flecheActive" : "") + "' name='8'></div><div style='display:inline-block' class='boutonEditeur fleche_9 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_9"))? " flecheActive" : "") + "' name='9'></div><div style='display:inline-block' class='boutonEditeur fleche_0 editeurFleche' name='0'></div></div>");
		
		$('.editeurFleche').die('click');
		$('.editeurFleche').live('click', function(){
			if(!$(this).hasClass("flecheActive"))
			{
				$('.editeurFleche').removeClass('flecheActive');
				$(this).addClass('flecheActive');
				if($(this).hasClass('fleche_0'))
				{
					alert("En cours de construction");
				}
				else
				{
					$('#' + composant.attributs.id + ' .menufleche').removeClass('apercuFleche_6 apercuFleche_7 apercuFleche_8 apercuFleche_9 apercuFleche_0');
					$('#' + composant.attributs.id + ' .menufleche').addClass('apercuFleche_' + $(this).attr("name"));
					
					if($(this).attr("name") == "7" || $(this).attr("name") == "8")
					{
						$('#' + composant.attributs.id + ' .menufleche').removeClass("fondFleche");
					}
					else
					{
						$('#' + composant.attributs.id + ' .menufleche').addClass("fondFleche");
					}
					composant.numFleche = parseInt($(this).attr("name"));
				}
			}
		});
		
		
		
		
		
		
		var num = composant.num;
		var text = '';
		text += "<div class='propriete'>";
		text += "<div class='edition_elements' class='editeur_exeption'>";
		for(i = 0; i < 2; i++)
		{
			text += "<div><span><input id='" + composant.elements[i].value + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" + composant.elements[i].html + "'/></span></div>";
		}
		for(i = 2; i < composant.elements.length; i++)
		{
			text += "<div><span><input id='" + composant.elements[i].value + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" + composant.elements[i].html + "'/></span>";
			text += "<span class='supprimer_element'><img src='images/supprimer.png' /></span></div>";
		}
		text += "<div class='ajouter editeur_exeption'><span>" + (composant.elements.length + 1) + "<sup>e</sup> option ici</span></div>";
		text += "</div>";
		text += "</div>";
		
		var text2 = '';
		text2 += "<div class='propriete editeur_exeption' >";
		text2 += "<label class='editeur_exeption' style='display:block'>Option pr&eacute;selectionn&eacute; : </label>";
		text2 += "<select class='edition_elementpardefaut' style='display:block;max-width:100px;width:100px;'>";
		for(i = 0; i < 2; i++)
		{
			text2 += "<option class='" + composant.elements[i].value + "'>" + composant.elements[i].html + "</option>";
		}
		for(i = 2; i < composant.elements.length; i++)
		{
			text2 += "<option class='" + composant.elements[i].value + "'>" + composant.elements[i].html + "</option>";
		}
		
		text2 += "</select>";
		text2 += "</div>";
		
		//gras,italique,souligne,gauche,centre,droite,justifie,gras,interligne//insererimage
		//if (tinyMCE.getInstanceById('edition_value')) tinyMCE.get('edition_value').remove();
		tinyMCE.init
		({
			theme : 'advanced',
			mode : 'exact',
			plugins : 'net2mobi',
			elements : 'edition_value',
			theme_advanced_toolbar_location : 'top',
			theme_advanced_path : false,
			theme_advanced_statusbar_location : 'bottom',
			theme_advanced_buttons1 : 'gras,italique,souligne,gauche,centre,droite,justifie,interligne',
			theme_advanced_buttons2 : 'net2mobi_font_family,net2mobi_color,net2mobi_font_size,insererimage',
			theme_advanced_buttons3 : '',
			relative_urls : true, // Default value
        	document_base_url : 'http://net2mobi.net/9e9/',
			
			setup : function(ed)
			{	
		
				ed.onInit.add(function(ed) {	
					$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
				
					$('#' + ed.id + '_ifr').css('height', '0px');
					
					$('#' + ed.id + '_tbl .mceIframeContainer').css({'height': '60px', 'max-height': '60px', 'overflow-y': 'scroll', 'display': 'block'});

					$('#' + ed.id + '_tbl .mceIframeContainer').append(text);	
			/*textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<button class=\"editeur_exeption\">fgfgh</button>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<input type=\"text\" value=\"rtty\" class=\"editeur_exeption\"/>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<select class=\"editeur_exeption\"><option>fhgh</option><option>fgdsgh</option><option>fuuiuh</option></select>');";*/
		/*else if(properties.type == "editeur")
		{
			textEvent += "			";
			textEvent += "			";
		}*/
		
		            //$('#' + ed.id + '_tbl .mceStatusbar').css('height', '60px');
					
         			//$('#' + ed.id + '_path_row').prepend(text2);
					
					$('#' + ed.id + '_tbl').css('width', '160px');
					
					
					
					$('#' + ed.id + '_path_row span').css({'display':'block', 'width':'100%'});
					$('#' + ed.id + '_path_row span').append('<div style="display:block"><input type=radio name=align id=align_left /><label for=align_left>Gauche</label><input type=radio name=align id=align_none /><label for=align_none>Aucun</label><input type=radio name=align id=align_right /><label for=align_right>Droite</label></div>');
					
					
					
					
					ed.controlManager.get('net2mobi_font_family').settings.onselect = function(v){
						$('.option').css('font-family', v);
						applyModif('font-family', composant, '.combobox', v);
			      	};
		
		
		
					ed.controlManager.get('net2mobi_color').settings.onselect = function(v){
						$('.option').css('color', v);
						applyModif('color', composant, '.combobox', v);
			   		};


					ed.controlManager.get('net2mobi_font_size').settings.onselect = function(v){
						$('.option').css('font-size', v);
						applyModif('font-size', composant, '.combobox', v);
					};
					
					//DISABLING BUTTONS
					ed.controlManager.setActive('gauche', true);
					
					ed.controlManager.setDisabled('insererimage', true);
					ed.controlManager.setDisabled('interligne', true);
					
					//*****************
			
		
      			});
				
				
				//MIS A JOUR TINYMCE SELON COMPOSANT
				var firstLoad = true;
				ed.onNodeChange.add(function(ed, cm, e) {if(firstLoad){firstLoad = false;	
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('font-weight') == 'bold')
					{
						ed.controlManager.get('gras').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('font-style') == 'italic')
					{
						ed.controlManager.get('italique').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('text-decoration') == 'underline')
					{
						ed.controlManager.get('souligne').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('text-align') == 'center')
					{
						ed.controlManager.get('centre').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('text-align') == 'right')
					{
						ed.controlManager.get('droite').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.combobox').css('text-align') == 'justify')
					{
						ed.controlManager.get('justifie').settings.onclick.call(ed);
					}
					var couleur = rgb2hex($('#' + $('.edition_id').val() + ' ' + '.combobox').css('color'));
					var fontf = $('#' + $('.edition_id').val() + ' ' + '.combobox').css('font-family');
					fontf = (fontf.charAt(0) == "\'")? fontf.slice(1, fontf.length - 1) : fontf;
					var fontsz = $('#' + $('.edition_id').val() + ' ' + '.combobox').css('font-size');
					ed.controlManager.get('net2mobi_color').setColor(couleur);
					ed.controlManager.get('net2mobi_font_family').select(fontf);
					ed.controlManager.get('net2mobi_font_size').select(fontsz);
					$('.option').css('font-family', fontf);
					$('.option').css('color', couleur);
					$('.option').css('font-size', fontsz);
				}});
				
				//*****************
				
				
						
				//************************************************************************
				//***********************GENERER BOUTONS PERSONALISES*********************
				//************************************************************************
		
				ed.addButton('gras', {
        			title : 'Mise en gras',
        			onclick : function() {
						if(!ed.controlManager.get('gras').isActive())
						{
							$('.option').css('font-weight', 'bold');
							ed.controlManager.setActive('gras', true);
							applyModif('gras', composant, '.combobox', true);
						}
						else
						{
							$('.option').css('font-weight', 'normal');
							ed.controlManager.setActive('gras', false);
							applyModif('gras', composant, '.combobox', false);
						}
        			}
        		});
		
				ed.addButton('italique', {
        			title : 'Mise en italique',
       				onclick : function() {
						if(!ed.controlManager.get('italique').isActive())
						{
							$('.option').css('font-style', 'italic');
							ed.controlManager.setActive('italique', true);
							applyModif('italique', composant, '.combobox', true);
						}
						else
						{
							$('.option').css('font-style', 'normal');
							ed.controlManager.setActive('italique', false);
							applyModif('italique', composant, '.combobox', false);
						}		
        			}
        		});
		
		
		  		ed.addButton('souligne', {
                	title : 'Soulignement',
                	onclick : function() {
						if(!ed.controlManager.get('souligne').isActive())
						{
							$('.option').css('text-decoration', 'underline');
							ed.controlManager.setActive('souligne', true);
							applyModif('souligne', composant, '.combobox', true);
						}
						else
						{
							$('.option').css('text-decoration', 'none');
							ed.controlManager.setActive('souligne', false);
							applyModif('souligne', composant, '.combobox', false);
						}
        			}
        		});
		
		
				ed.addButton('gauche', {
        			title : 'Aligner a gauche',
        			onclick : function() {
						if(!ed.controlManager.get('gauche').isActive())
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('droite', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.combobox');
						}
        			}
        		});
		
		
				ed.addButton('centre', {
        			title : 'Aligner au centre',
        			onclick : function() {
						if(!ed.controlManager.get('centre').isActive())
						{
							$('.option').css('text-align', 'center');
							ed.controlManager.setActive('droite', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('centre', true);
							applyModif('centre', composant, '.combobox');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('centre', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.combobox');
						}
		
        			}
        		});
		
		
				ed.addButton('droite', {
        			title : 'Aligner a droite',
        			onclick : function() {
						if(!ed.controlManager.get('droite').isActive())
						{
							$('.option').css('text-align', 'right');
							ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('droite', true);
							applyModif('droite', composant, '.combobox');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('droite', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.combobox');
						}
		
        			}
        		});
		
		
				ed.addButton('justifie', {
        			title : 'Justifier lalignement',
        			onclick : function() {
						if(!ed.controlManager.get('justifie').isActive())
						{
							$('.option').css('text-align', 'justify');
							ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);
							ed.controlManager.setActive('justifie', true);
							applyModif('justifie', composant, '.combobox');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.combobox');
						}

        			}
        		});
		
		
		
		
				ed.addButton('insererimage', {
        			title : 'Inserer une image'
   
        		});
		
		
		
				ed.addButton('interligne', {
        			title : 'Modifier interligne'
     
        		});
		
		
		
				//**************************************************************************
				
				
		   }

		});
		
		$('#edit_132').append(text2);
		
		$('.ajouter').die('click');
		$('.ajouter').live('click', function()
	 	{
			var valueOption = 'option' + composant.staticCompteurElement('increment');
			
			$('.ajouter').remove();
			var str="<div><span><input id='" + valueOption + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" + (composant.elements.length + 1) + "e option ici' style=\"" + $('.option')[0].style.cssText + "\"/></span>";
			str += "<span class='supprimer_element'><img src='images/supprimer.png' /></span></div>"
			$(str).appendTo($('.edition_elements'));
			
			composant.elements.push(new Element(composant));
			composant.elements[composant.elements.length - 1].value = valueOption;
			composant.elements[composant.elements.length - 1].html = composant.elements.length + "e option ici";
			
			var numOption = composant.elements.length + 1;
			str="<div class='ajouter'>" + numOption + "<sup>e</sup> option ici</div>";
			$(str).appendTo($('.edition_elements'));
			var sel = $('.edition_elementpardefaut');
			$("<option class='" + valueOption + "'>" + composant.elements[composant.elements.length - 1].html + "</option>").appendTo(sel);
	 	});
		
		$('.supprimer_element').die('click');
		$('.supprimer_element').live('click', function()
	 	{
			var valueOption = $(this).parent().find('input').attr('id');
			$('.edition_elementpardefaut .' + valueOption).remove();
			
			composant.supprimer(composant.getIndexByValue(valueOption));
			
			$(this).parent().remove();
		});
		
		$('.edition_elementpardefaut').unbind('change');
		$('.edition_elementpardefaut').bind('change', function()
		{
//			console.log('defaut');
			var ID = "#" + composant.attributs.id;
			$(ID + " .elem_defaut").html($('.edition_elementpardefaut').val());
			composant.attributs.value = $('.edition_elementpardefaut option:selected').attr('class');
			//console.log(composant.elements[composant.getIndexByValue(composant.attributs.value)]);
			//$('#essai').html(composant.attributs.value);
			
		});
		
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}


function menuEditor(composant)
{
	
	this.show = function()
	{
		
		reinitEditeur();
		//newDivDisabled(400, 400, 0, 0, ".cadre4", "ddd");
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		createProp({conteneur:'#edit_131', type:'editeur', classProp:'edition_label', classApercu:'.label', comp:composant, strAttr:'label', avecImg:true});
		
		/*****************PERSONNALISATION TINYMCE***************/
		

		/********************************************************/
		
		
		//conteneur, type, classProp, classApercu, comp, strAttr, idDivRef, contenu, minimum, label, name, texte, img, selected, changeComp, spinMinMaxStep, spinDefault, spinType
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioMenu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers1.jpg', selected:true, changeComp:menu});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers2.jpg', selected:false, changeComp:actualite});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioSousActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers3.jpg', selected:false, changeComp:sousactualite});

		
		$('#edit_131').append('<span>Page cible:</span>');
		
		
		var text = '';
		text += "<select id='propPageCible' style='display:block'>";
		text += "<option value='choisirDefault' " + ((composant.valuePageCible == "choisirDefault")? "selected" : "") + ">--- Choisir ---</option>";
		text += "<option value='optionPageExterne' " + ((composant.valuePageCible == "optionPageExterne")? "selected" : "") + ">Page Externe</option>";
		for(i = 0; i < site.pages.length; i++)
		{
			if(i != site.activePage)
			{			
				text += "<option class='page_interne' value='" + site.pages[i].name + "' " + ((composant.valuePageCible == site.pages[i].name)? "selected" : "") + ">";					
				text += site.pages[i].name;
				text += "</option>";
			}
		}
		
		text += "</select>";
		text += "<input type='url' id='prop_lien_externe'" + ((composant.valuePageCible == "optionPageExterne")? " value='" + composant.attributs.href + "'" : " style='display:none;'") + "/>";
		
		
		$('#edit_131').append(text);
		
		//if(
		//$('#propPageCible')[0].selectedIndex = 1;
		
		$('#propPageCible').unbind('change');
		$('#propPageCible').bind('change', function(){
			/*if($(this)[0].selectedIndex == 1)
			{
				
				showModalDialog('dialog_box_insertLinkExt', 'dialog-overlay');
			}*/
			composant.valuePageCible = $(this).val();
			if($(this).val() == 'optionPageExterne')
			{
				$('#prop_lien_externe').show().focus();
				composant.attributs.href = $('#prop_lien_externe').val();
				//showModalDialog('dialog_box_insertLinkExt', 'dialog-overlay');
			}
			else
			{
				$('#prop_lien_externe').hide();
				
				if($(this).find("option[value=" + $(this).val() + "]").hasClass("page_interne"))
				{
					composant.attributs.href = "#" + $(this).val();
				}
				else
				{
					composant.attributs.href = "";
				}
			}
		});
		
		$('#prop_lien_externe').die('keyup');
		$('#prop_lien_externe').live('keyup', function(){
			composant.attributs.href = $(this).val();
		});
		
		
		text = "<label class='souligne'>Personnaliser la forme:</label> <br />";
		$('#edit_212').append(text);
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond', classApercu:'.lienmenu', comp:composant, strAttr:'background', label:'Fond : ', defaultValue:composant.attributs.style.background});
		
		$('#edit_232').append("<div><span>Degrade</span><span id='prop_degrade' class='totogglebox' " + ((composant.degrade)? "selected='selected'" : "") + " alt='oui;non'></span></div>");
		
		$('#prop_degrade').find('input').unbind('change');
		$('#prop_degrade').find('input').bind('change', function(){
			
			if($(this).val() == '1')
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .lienmenu').css('background', degradeGen(couleur, degradeValeur[couleur]));
				composant.degrade = true;
			}
			else
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .lienmenu').css('background', couleur);
				composant.degrade = false;
			}
		});
		
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_largeur', classApercu:'.lienmenu', comp:composant, strAttr:'width', label:'Largeur : ', spinMinMaxStep:'50;100;1', spinDefault:composant.attributs.style.width, spinType:'percent'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_hauteur', classApercu:'.lienmenu', comp:composant, strAttr:'height', label:'Hauteur : ', spinMinMaxStep:'25;50;1', spinDefault:composant.attributs.style.height, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_arrondi', classApercu:'.lienmenu', comp:composant, strAttr:'border-radius', label:'Arrondi : ', spinMinMaxStep:'0;15;1', spinDefault:composant.attributs.style.border_radius, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_bordure', classApercu:'.lienmenu', comp:composant, strAttr:'border-color', label:'Bordure : ', defaultValue:composant.attributs.style.border_color, affichage:'inline-block'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_epaisseur_bordure', classApercu:'.lienmenu', comp:composant, strAttr:'border-width', spinMinMaxStep:'0;20;1', spinDefault:composant.attributs.style.border_width, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_opacity', classApercu:'.lienmenu', comp:composant, strAttr:'opacity', label:'Transparence : ', spinMinMaxStep:'0;1;0.1', spinDefault:composant.attributs.style.opacity, spinType:'float'});
		
		
		$('#edit_11').css('height', '0');
		
		// Edition forme menu allez vers
		text = "<label class='souligne'>Forme:</label> <br />";
		$('#edit_231').append(text);
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'formeRectangle', comp:composant, name:'formeAllezVers', texte:'Rectangle', /*img:'img/textBox1.jpg',*/ selected:true/*, affichage:'inline-block', divClass:'styleImg'*/});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'formeAutre', comp:composant, name:'formeAllezVers', texte:'Autre forme', /*img:'img/textBox1.jpg',*/ selected:false/*, affichage:'inline-block', divClass:'styleImg'*/});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'formeAucune', comp:composant, name:'formeAllezVers', texte:'Aucune', /*img:'img/textBox1.jpg',*/ selected:false/*, affichage:'inline-block', divClass:'styleImg'*/});
		
		text = "<div class='formeRectangle divToDisplay' style='padding-top:40px;'>";
		text += "<label class='souligne'>Fleche:</label> <br />";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_1 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_1"))? " flecheActive" : "") + "' name='1'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_2 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_2"))? " flecheActive" : "") + "' name='2'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_3 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_3"))? " flecheActive" : "") + "' name='3'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_4 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_4"))? " flecheActive" : "") + "' name='4'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_5 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_5"))? " flecheActive" : "") + "' name='5'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_0 editeurFleche' name='0'></div>";
		text += "</div>";
		
		text += "<div id='divFormeAutre' class='formeAutre divToDisplay' style='display:none;padding-left:20px;padding-top:40px;'>";
		text += "</div>";
		text += "<div class='formeAucune divToDisplay' style='display:none;'>";
		text += "</div>";
		
		$('#edit_231').append(text);

		
		createProp({conteneur:'#divFormeAutre', type:'radio', classProp:'formeAutre1', comp:composant, name:'formeAutre', texte:'<img src="images/mobile/flecheBleue1.png" width="100px"/>'/*, img:'images/mobile/flecheBleue1.png'*/, selected:true/*, affichage:'inline-block', divClass:'styleImg'*/});
		createProp({conteneur:'#divFormeAutre', type:'radio', classProp:'formeAutre2', comp:composant, name:'formeAutre', texte:'<img src="images/mobile/flecheBleue2.png" width="100px"/>'/*, img:'images/mobile/flecheBleue2.png'*/, selected:false/*, affichage:'inline-block', divClass:'styleImg'*/});
		createProp({conteneur:'#divFormeAutre', type:'radio', classProp:'formeAutreBrowse', comp:composant, name:'formeAutre', texte:'<a class="autre" href="javascript:alert(\'En cours de construction!\')">Autre</a>'/*, img:'img/textBox1.jpg'*/, selected:false/*, affichage:'inline-block', divClass:'styleImg'*/});
		
		$(".declencheurRadioformeAllezVers").die('click');
		$(".declencheurRadioformeAllezVers").live('click', function()
		{
			$(".divToDisplay").hide();
			if($(this).attr("id") == "formeRectangle")
			{
				$(".formeRectangle").show();
				$("#" + composant.attributs.id + " .divmenufleche").show();
				$("#" + composant.attributs.id + " .thumbnail").show();
				$("#" + composant.attributs.id + " .lienmenu").removeClass("noBackgroundCompo");
				composant.forme = 0;
			}
			else if($(this).attr("id") == "formeAutre")
			{
				$(".formeAutre").show();
				$("#" + composant.attributs.id + " .divmenufleche").hide();
				$("#" + composant.attributs.id + " .thumbnail").show();
				$("#" + composant.attributs.id + " .lienmenu").removeClass("noBackgroundCompo");
				composant.forme = 1;
			}
			else if($(this).attr("id") == "formeAucune")
			{
				$(".formeAucune").show();
				$("#" + composant.attributs.id + " .divmenufleche").hide();
				$("#" + composant.attributs.id + " .thumbnail").hide();
				$("#" + composant.attributs.id + " .lienmenu").addClass("noBackgroundCompo");
				composant.forme = 2;
			}
		});
		
		$('.editeurFleche').die('click');
		$('.editeurFleche').live('click', function(){
			if(!$(this).hasClass("flecheActive"))
			{
				$('.editeurFleche').removeClass('flecheActive');
				$(this).addClass('flecheActive');
				$('#' + composant.attributs.id + ' .centreVertical').addClass("paddingRight");
				if($(this).hasClass('fleche_0'))
				{
					alert("En cours de construction");
				}
				else
				{
					$('#' + composant.attributs.id + ' .menufleche').removeClass('apercuFleche_1 apercuFleche_2 apercuFleche_3 apercuFleche_4 apercuFleche_5 apercuFleche_0');
					$('#' + composant.attributs.id + ' .menufleche').addClass('apercuFleche_' + $(this).attr("name"));
					
					if($(this).attr("name") == "1" || $(this).attr("name") == "3" || $(this).attr("name") == "4")
					{
						$('#' + composant.attributs.id + ' .menufleche').removeClass("fondFleche");
						if($(this).attr("name") == "1")
							$('#' + composant.attributs.id + ' .centreVertical').removeClass("paddingRight");
					}
					else
					{
						$('#' + composant.attributs.id + ' .menufleche').addClass("fondFleche");
					}
					composant.numFleche = parseInt($(this).attr("name"));
				}
				
			}
		});
		
		
		$("input[name=align]").die('click');
		$("input[name=align]").live('click', function()
		{
			if($(this).attr('id') == "align_left")
			{
				$('#' + composant.attributs.id + ' .thumbnail').show();
				$('#' + composant.attributs.id + ' .thumbnail').removeClass("floatRight");
				composant.positionThumbnail = posLeft;
			}
			else if($(this).attr('id') == "align_right")
			{
				$('#' + composant.attributs.id + ' .thumbnail').show();
				$('#' + composant.attributs.id + ' .thumbnail').addClass("floatRight");
				composant.positionThumbnail = posRight;
			}
			else if($(this).attr('id') == "align_none")
			{
				$('#' + composant.attributs.id + ' .thumbnail').hide();
				$('#' + composant.attributs.id + ' .thumbnail').removeClass("floatRight");
				composant.positionThumbnail = posNone;
			}
		});
		
		
		newDivDisabled(155, 110, 5, 175, "#selectionEditeur"); //desactiver sousactualité
		newDivDisabled(136, 66, 19, 103, "#selectionEditeur"); //desactiver actualité sans radio
		newDivDisabled(165, 76, 330, 177, ".formeAutre"); //limitation style pour forme autre
		newDivDisabled(165, 192, 330, 60, ".formeAucune"); //limitation style pour forme aucune
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}

function actuEditor(composant)
{
	
	this.show = function()
	{
		reinitEditeur();
		$("#edit_12").css("margin-bottom", "0");
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});

		copierStyle(composant);
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioMenu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers1.jpg', selected:false, changeComp:menu});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers2.jpg', selected:true, changeComp:actualite});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioSousActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers3.jpg', selected:false, changeComp:sousactualite});

		
		/*createProp('#editeurContenu', 'texte', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'modif actu', 0, false, 0);
		
		
		createProp('#editeurStyle', 'texte', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'modif actu-style', 0, false, 0);*/
		
		text = "<label class='souligne'>Texte au-dessus : </label> <br />";
		$('#edit_131').append(text);
		
		createProp({conteneur:'#edit_131', type:'editeur', classProp:'edition_label', classApercu:'.label', comp:composant, strAttr:'label', avecImg:true});
		

		
		text = "<label class='souligne'>Actualit&eacute; : </label> <br />";
		
		text += "<textarea id='paraEditeur' class='edition_value'>" + composant.html + "</textarea>";
		$("<div class='propriete'></div>").html(text).appendTo($('#edit_133'));
		
		//$('#text').show();
		
		tinyMCE.init
		({
			theme : "advanced",
			plugins : "table",
			mode : "exact",
			elements :'paraEditeur',
			theme_advanced_toolbar_location : "top",
			theme_advanced_buttons1 : "bold,italic,underline,justifyleft,justifycenter,justifyright,justifyfull,fontselect,forecolor,fontsizeselect,insererimage",
			theme_advanced_buttons2 : "",
			theme_advanced_buttons3 : "",
			relative_urls : true, // Default value
        	document_base_url : 'http://net2mobi.net/9e9/',
			
			setup : function(ed)
			{	
				ed.onNodeChange.add(function(ed, e)
				{
					var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());
					
					/*var temp = ed.getContent();
					var reg=new RegExp("(&nbsp;)", "g");
					temp = temp.replace(reg, "");*/
					
					$('#' + $('.edition_id').val() + " .paragraphe").html(ed.getContent());
					composant.html = ed.getContent()/*temp*/;
					$('#scroll').trigger('change');
			  	});
				ed.onKeyUp.add(function(ed, e)
				{
					var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());
									
					/*var temp = ed.getContent();
					var reg=new RegExp("(&nbsp;)", "g");
					temp = temp.replace(reg, "");*/
					
					$('#' + $('.edition_id').val() + " .paragraphe").html(ed.getContent());
				 	composant.html = ed.getContent()/*temp*/;
					$('#scroll').trigger('change');
			  	});
				
				
				ed.onInit.add(function(ed, e)
				{
					$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
					$('#' + ed.id + '_tbl').css('height', '110px');
					$('#' + ed.id + '_ifr').css('height', '84px');
					/*ed.controlManager.get('forecolor').settings.onclick = function()
					{
						ed.controlManager.get('forecolor').showMenu();
					}*/
				});
		
				ed.addButton('insererimage', {
        			title : 'Inserer une image',
   					onclick : function() {
						$("#idImagePara").val(ed.id);
						showModalDialog('dialog_box_UploadImage', 'dialog-overlay');

        			}
        		});
		   	}

		});
		
		
		
		//edition style composant actualite
		text = "<label class='souligne'>Forme:</label> <br />";
		$('#edit_211').append(text);
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'formeRectangle', comp:composant, name:'formeAllezVers', texte:'Rectangle', /*img:'img/textBox1.jpg',*/ selected:true/*, affichage:'inline-block', divClass:'styleImg'*/});
		
		text = '<a class="autre" href="javascript:alert(\'En cours de construction!\')">Autre</a>';
		$("#edit_231").append(text);
		
		
		text = "<div class='formeRectangle divToDisplay' style='padding-top:40px;'>";
		text += "<label class='souligne'>Fleche:</label> <br />";	
		
		text += "<div style='display:inline-block' class='boutonEditeur fleche_1 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_1"))? " flecheActive" : "") + "' name='1'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_6 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_6"))? " flecheActive" : "") + "' name='6'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_7 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_7"))? " flecheActive" : "") + "' name='7'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_8 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_8"))? " flecheActive" : "") + "' name='8'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_9 editeurFleche" + (($('#' + composant.attributs.id + ' .menufleche').hasClass("apercuFleche_9"))? " flecheActive" : "") + "' name='9'></div>";
		text += "<div style='display:inline-block' class='boutonEditeur fleche_0 editeurFleche' name='0'></div>";
		text += "</div>";
		
		$('#edit_231').append(text);
		
		$('.editeurFleche').die('click');
		$('.editeurFleche').live('click', function(){
			if(!$(this).hasClass("flecheActive"))
			{
				$('.editeurFleche').removeClass('flecheActive');
				$(this).addClass('flecheActive');
				$('#' + composant.attributs.id + ' .centreVertical').addClass("paddingLeft");
				if($(this).hasClass('fleche_0'))
				{
					alert("En cours de construction");
				}
				else
				{
					$('#' + composant.attributs.id + ' .menufleche').removeClass('apercuFleche_1 apercuFleche_6 apercuFleche_7 apercuFleche_8 apercuFleche_9 apercuFleche_0');
					$('#' + composant.attributs.id + ' .menufleche').addClass('apercuFleche_' + $(this).attr("name"));
					
					if($(this).attr("name") == "1" || $(this).attr("name") == "7" || $(this).attr("name") == "8")
					{
						$('#' + composant.attributs.id + ' .menufleche').removeClass("fondFleche");
						if($(this).attr("name") == "1")
							$('#' + composant.attributs.id + ' .centreVertical').removeClass("paddingLeft");
					}
					else
					{
						$('#' + composant.attributs.id + ' .menufleche').addClass("fondFleche");
					}
					composant.numFleche = parseInt($(this).attr("name"));
				}
				
			}
		});
		
		
		
		text = "<label class='souligne'>Personnaliser la forme:</label> <br />";
		$('#edit_212').append(text);
		
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond', classApercu:'.lienmenu', comp:composant, strAttr:'background', label:'Fond : ', defaultValue:composant.attributs.style.background});
		
		$('#edit_232').append("<div><span>Degrade</span><span id='prop_degrade' class='totogglebox' " + ((composant.degrade)? "selected='selected'" : "") + " alt='oui;non'></span></div>");
		
		$('#prop_degrade').find('input').unbind('change');
		$('#prop_degrade').find('input').bind('change', function(){
			
			if($(this).val() == '1')
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .lienmenu').css('background', degradeGen(couleur, degradeValeur[couleur]));
				composant.degrade = true;
			}
			else
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .lienmenu').css('background', couleur);
				composant.degrade = false;
			}
		});
		
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_largeur', classApercu:'.lienmenu', comp:composant, strAttr:'width', label:'Largeur : ', spinMinMaxStep:'0;100;1', spinDefault:composant.attributs.style.width, spinType:'percent'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_hauteur', classApercu:'.lienmenu', comp:composant, strAttr:'height', label:'Hauteur : ', spinMinMaxStep:'25;50;1', spinDefault:composant.attributs.style.height, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_arrondi', classApercu:'.lienmenu', comp:composant, strAttr:'border-radius', label:'Arrondi : ', spinMinMaxStep:'0;15;1', spinDefault:composant.attributs.style.border_radius, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_bordure', classApercu:'.lienmenu', comp:composant, strAttr:'border-color', label:'Bordure : ', defaultValue:composant.attributs.style.border_color, affichage:'inline-block'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_epaisseur_bordure', classApercu:'.lienmenu', comp:composant, strAttr:'border-width', spinMinMaxStep:'0;2;1', spinDefault:composant.attributs.style.border_width, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_opacity', classApercu:'.lienmenu', comp:composant, strAttr:'opacity', label:'Transparence : ', spinMinMaxStep:'0;1;0.1', spinDefault:composant.attributs.style.opacity, spinType:'float', affichage:'none'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond_para', classApercu:'.paraactu', comp:composant, strAttr:'background-color', label:'Fond de l\'actualit&eacute; : ', defaultValue:composant.attributs.style.background_color});
		
		newDivDisabled(165, 25, 330, 125, "#edit_232");//desactiver largeur
		newDivDisabled(155, 110, 5, 175, "#selectionEditeur"); //desactiver sousactualite
		newDivDisabled(136, 28, 19, 68, "#selectionEditeur"); //desactiver menu sans radio
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}



function sousActuEditor(composant)
{
	
	this.show = function()
	{
		reinitEditeur();
		
		//propriété id du composant
		createProp('#enteteEditeur', 'textbox', 'edition_id', '#' + composant.attributs.id, composant, 'id', 0, 0, 0, 'Mettez le nom de votre composant ici', 0, 0, 0, false, 0);

		copierStyle(composant);
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioMenu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers1.jpg', selected:false, changeComp:menu});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers2.jpg', selected:false, changeComp:actualite});
		
		createProp({conteneur:'#selectionEditeur', type:'radio', classProp:'radioSousActu', comp:composant, strAttr:'composant', name:'groupMenu', img:'img/allezVers3.jpg', selected:true, changeComp:sousactualite});
		
		
		createProp('#editeurContenu', 'texte', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'modif sousactu', 0, false, 0);
		
		
		createProp('#editeurStyle', 'texte', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'modif sousactu-style', 0, false, 0);
		
		
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}

function buttonEditor(composant)
{
	
	this.show = function()
	{
		var contenuEditeur = '';
		
		contenuEditeur += createProp('textbox', 'edition_id', '#' + composant.attributs.id, composant, 'id', 0, 0, 0, 'Nom du composant :', 0, 0, 0, false, 0) + '<br />';
		/*createEvent('textbox', 'edition_id', '#' + composant.attributs.id, composant, 'id', 0, 0, 0, 'Nom du composant :', 0, 0, 0);*/
		
		$('#editeurContenu').html(contenuEditeur[0]);
		
		
		
		/*$('.edition_id').die('keyup');
		$('.edition_value').die('keyup');
		
		var text = "<div class='propriete'>";
		text += "<label>Nom du composant : </label>";
		text += "<input class='edition_id' type='text' value='" + composant.attributs.id + "'/>";
		text += "</div>";
		
		text += "<div class='propriete'>";
		text += "<label>Texte du bouton : </label>";
		text += "<input class='edition_value' type='text' value='" + composant.attributs.value + "'/>";
		text += "</div>";
		
		text += "<div class='propriete'>";
		text += "<label>Type de bouton : </label>";
		text += "<select >";
		text += "<option value='1'>Lien vers autre page</option>";
		text += "<option value='2'>Bouton retour</option>";
		text += "</select >";
		text += "</div>";
		
		$('#editer').html(text);
		
		$('.edition_id').live('keyup', function()
		{
			var ID = "#" + composant.attributs.id;
			$("" + ID).attr('id', $('.edition_id').val());
			composant.attributs.id = $('.edition_id').val();
		});
		
		$('.edition_value').live('keyup', function()
		{
			var ID = "#" + composant.attributs.id;
			$(ID + " .value").html($('.edition_value').val());
			composant.attributs.value = $('.edition_value').val();
		});*/
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}





function imageEditor(composant)
{
	
	this.show = function()
	{
		reinitEditeur();
		
		
		newDivDisabled(165, 21, 330, 247, "#edit_231", "desactiverCouleurOmbre", (composant.forme == 0 || composant.forme == 1 || composant.forme == 4) ? true : false);
		newDivDisabled(165, 21, 330, 268, "#edit_231", "desactiverCouleurBordure", (composant.forme == 0 || composant.forme == 1 || composant.forme == 2 || composant.forme == 3) ? true : false);
		

		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		//$('.edition_id').die('keyup');
		$('#uploadFile').unbind('change');
		
		/*var text = "<div class='propriete'>";
		text += "<label>Nom du composant : </label>";
		text += "<input class='edition_id' type='text' value='" + composant.attributs.id + "'/>";
		text += "</div>";*/
		
		text = "<div class='propriete'>";
		text += "<span>Image:</span>";
		
		
		/*text += "<form name='form' action='' method='post' enctype='multipart/form-data'>";
		text += "<div id='aaa' ></div>";
		text += "<input class='fileToUpload' type='file' size='28' name='fileToUpload' accept='image/*'>";
		text += "<input type='button' class='buttonUpload' value='Upload' style='display:none;'/>";
		text += "</form>";*/
		text += "<div id='aaa' ></div>";
		
		
		
		text += generateCodeUploadImage(composant.attributs.id, false);
		
		
		/*text += "<form id='uploadForm' enctype='multipart/form-data' action='index.php/upload/do_upload' target='uploadFrame' method='post'>";
		//text += "<div id='aaa' ></div>";
		text += "<input id='uploadFile' name='uploadFile' type='file' style='position:relative;'/>";
		text += "<input id='idFile' name='idFile' type='hidden' value='" + composant.attributs.id + "'/>";
		text +=	"<input id='uploadSubmit' type='submit' value='Upload' style='display:none'/>";
		text += "</form>";
		text +=	"<iframe id='uploadFrame' name='uploadFrame' src='#' style='display:none;'></iframe>";*/
		
		text += "</div>";
		
		
		
		
		//text += generateCodeUploadImage('UPLOAD2');
		/*text += "<form onSubmit='return disableForm(this);' action='<?php echo base_url(); ?>index.php/upload/do_upload' method='post' name='upload_form' id='upload_form' enctype='multipart/form-data'>";
		text += "<input type='file' name='uploadFile' />";
		text += "<input type='button' value='Envoyer' onclick='return disableForm(this), ajaxUpload(this.form, \"index.php/upload/do_upload\", \"UPLOAD1\"); return false;' />";
		text += "</form>";
		
		text += "<div id='UPLOAD1' style='background-color:#0000CC; width=100px; height=30px'></div>";*/
		
		$('#edit_131').append(text);
		
		$("#aaa").die('click');
		$("#aaa").live('click', function()
		{
			$("#uploadFile").click();
		});
		
		$('#uploadFile').unbind('change');
		$('#uploadFile').bind('change', function()
		{
			$('#uploadSubmit').click();
		})
		
		
		
		
		$('#edit_131').append('<span>Page cible:</span>');
		
		
		var text = '';
		text += "<select id='propPageCible' style='display:block'>";
		text += "<option value='choisirDefault' " + ((composant.valuePageCible == "choisirDefault")? "selected" : "") + ">--- Choisir ---</option>";
		text += "<option value='optionPageExterne' " + ((composant.valuePageCible == "optionPageExterne")? "selected" : "") + ">Page Externe</option>";
		for(i = 0; i < site.pages.length; i++)
		{
			if(i != site.activePage)
			{			
				text += "<option class='page_interne' value='" + site.pages[i].name + "' " + ((composant.valuePageCible == site.pages[i].name)? "selected" : "") + ">";					
				text += site.pages[i].name;
				text += "</option>";
			}
		}
		
		text += "</select>";
		text += "<input type='url' id='prop_lien_externe'" + ((composant.valuePageCible == "optionPageExterne")? " value='" + composant.attributs.href + "'" : " style='display:none;'") + "/>";
		
		
		$('#edit_131').append(text);
		
		//if(

		//$('#propPageCible')[0].selectedIndex = 1;
		
		$('#propPageCible').unbind('change');
		$('#propPageCible').bind('change', function(){
			/*if($(this)[0].selectedIndex == 1)
			{
				
				showModalDialog('dialog_box_insertLinkExt', 'dialog-overlay');
			}*/
			composant.valuePageCible = $(this).val();
			if($(this).val() == 'optionPageExterne')
			{
				$('#prop_lien_externe').show().focus();
				composant.attributs.href = $('#prop_lien_externe').val();
				//showModalDialog('dialog_box_insertLinkExt', 'dialog-overlay');
			}
			else
			{
				$('#prop_lien_externe').hide();
				
				if($(this).find("option[value=" + $(this).val() + "]").hasClass("page_interne"))
				{
					composant.attributs.href = "#" + $(this).val();
				}
				else
				{
					composant.attributs.href = "";
				}
			}
		});
		
		$('#prop_lien_externe').die('keyup');
		$('#prop_lien_externe').live('keyup', function(){
			composant.attributs.href = $(this).val();
		});
		
		
		text = "<label style=\"text-decoration:underline;\">Taille de l'image : </label> <br />";
		$('#edit_231').append(text);
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'imgPlein', comp:composant, name:'tailleImg', texte:'Plein ecran', /*img:'img/textBox1.jpg',*/ selected:((composant.taille == 0)? true : false), divClass:'selectTailleImage'});
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'imgGrand', comp:composant, name:'tailleImg', texte:'Grand', /*img:'img/textBox1.jpg',*/ selected:((composant.taille == 1)? true : false), divClass:'selectTailleImage'});
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'imgMoyen', comp:composant, name:'tailleImg', texte:'Moyen', /*img:'img/textBox1.jpg',*/ selected:((composant.taille == 2)? true : false), divClass:'selectTailleImage'});
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'imgIco', comp:composant, name:'tailleImg', texte:'Icone', /*img:'img/textBox1.jpg',*/ selected:((composant.taille == 3)? true : false), divClass:'selectTailleImage'});
		
		$(".declencheurRadiotailleImg").die('click');
		$(".declencheurRadiotailleImg").live('click', function()
		{
			if($(this).attr("id") == "imgPlein")
			{
				composant.attributs.style.width = '100%';
				$("#" + $(".edition_id").val() + ' .imageCompo').css("width", "100%");
				composant.taille = 0;
			}
			else if($(this).attr("id") == "imgGrand")
			{
				composant.attributs.style.width = '75%';
				$("#" + $(".edition_id").val() + ' .imageCompo').css("width", "75%");
				composant.taille = 1;
			}
			else if($(this).attr("id") == "imgMoyen")
			{
				composant.attributs.style.width = '50%';
				$("#" + $(".edition_id").val() + ' .imageCompo').css("width", "50%");
				composant.taille = 2;
			}
			else if($(this).attr("id") == "imgIco")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("width", "32px");
				composant.taille = 3;
			}
			
			//alert('fdfgfg');
		});
		
		
		text = "<label style=\"text-decoration:underline;\">Forme de l'image : </label> <br />";
		$('#edit_232').append(text);
		
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgSimple', comp:composant, name:'formeImg', texte:'<div class="formeImg"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 0)? true : false), affichage:'inline-block', divClass:'styleImg'});
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgArrondi', comp:composant, name:'formeImg', texte:'<div class="formeImg imgArrondi"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 1)? true : false), affichage:'inline-block', divClass:'styleImg'});
		$('#edit_232').append('</br>');
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgSimpleOmbre', comp:composant, name:'formeImg', texte:'<div class="formeImg imgOmbre"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 2)? true : false), affichage:'inline-block', divClass:'styleImg'});
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgArrondiOmbre', comp:composant, name:'formeImg', texte:'<div class="formeImg imgArrondi imgOmbre"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 3)? true : false), affichage:'inline-block', divClass:'styleImg'});
		$('#edit_232').append('</br>');
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgBordure', comp:composant, name:'formeImg', texte:'<div class="formeImg imgBordure"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 4)? true : false), affichage:'inline-block', divClass:'styleImg'});
		createProp({conteneur:'#edit_232', type:'radio', classProp:'imgBordureOmbre', comp:composant, name:'formeImg', texte:'<div class="formeImg imgBordure imgOmbre"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 5)? true : false), affichage:'inline-block', divClass:'styleImg'});
		$('#edit_232').append('</br>');
		
		
		$(".declencheurRadioformeImg").die('click');
		$(".declencheurRadioformeImg").live('click', function()
		{
			if($(this).attr("id") == "imgSimple")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "0");
				$("#desactiverCouleurOmbre").show();
				$("#desactiverCouleurBordure").show();
				composant.forme = 0;
			}
			else if($(this).attr("id") == "imgArrondi")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "7px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "0");
				$("#desactiverCouleurOmbre").show();
				$("#desactiverCouleurBordure").show();
				composant.forme = 1;
			}
			else if($(this).attr("id") == "imgSimpleOmbre")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "0");
				$("#desactiverCouleurOmbre").hide();
				$("#desactiverCouleurBordure").show();
				composant.forme = 2;
			}
			else if($(this).attr("id") == "imgArrondiOmbre")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "7px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "0");
				$("#desactiverCouleurOmbre").hide();
				$("#desactiverCouleurBordure").show();
				composant.forme = 3;
			}
			else if($(this).attr("id") == "imgBordure")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "2px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "0px 0px 0px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "4px");
				$("#desactiverCouleurOmbre").show();
				$("#desactiverCouleurBordure").hide();
				composant.forme = 4;
			}
			else if($(this).attr("id") == "imgBordureOmbre")
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-width", "2px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("border-radius", "0px");
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-moz-box-shadow", "2px 2px 2px " + $("#prop_couleur_ombre").val());
				$("#" + $(".edition_id").val() + ' .divImage').css("padding-right", "4px");
				$("#desactiverCouleurOmbre").hide();
				$("#desactiverCouleurBordure").hide();
				composant.forme = 5;
			}
			
			//alert('fdfgfg');
		});
		
		
		text = "<label class='spanSimpleEditeur floatLeft'>Couleur de l'ombre : </label>";
		$('#edit_232').append(text);
		
		text = "<input id='prop_couleur_ombre' class='simplecolor' name='simplecolor' type='hidden' value='" + composant.attributs.style.shadow_color + "' />";
		$('#edit_232').append(text);
		
		$('#color_selector.prop_couleur_ombre').remove();
		$('#prop_couleur_ombre').colorPicker("prop_couleur_ombre", false);
		
		
		
		$('#prop_couleur_ombre').unbind('change');
		$('#prop_couleur_ombre').bind('change', function()
		{
			composant.setStyle('shadow-color', $(this).val());
			if(composant.forme == 2 || composant.forme == 3 ||composant.forme == 5)
			{
				$("#" + $(".edition_id").val() + ' .imageCompo').css("box-shadow", "2px 2px 2px " + $(this).val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "2px 2px 2px " + $(this).val());
				$("#" + $(".edition_id").val() + ' .imageCompo').css("-webkit-box-shadow", "2px 2px 2px " + $(this).val());
			}
		});
		
		
		
		text = "<label class='spanSimpleEditeur floatLeft'>Couleur de la bordure : </label>";
		$('#edit_232').append(text);
		
		text = "<input id='prop_couleur_bordure' class='simplecolor' name='simplecolor' type='hidden' value='" + composant.attributs.style.border_color + "' />";
		$('#edit_232').append(text);
		
		
		$('#color_selector.prop_couleur_bordure').remove();
		$('#prop_couleur_bordure').colorPicker("prop_couleur_bordure", false);
		
		$('#prop_couleur_bordure').unbind('change');
		$('#prop_couleur_bordure').bind('change', function()
		{
			composant.setStyle('border-color', $(this).val());
			$("#" + $(".edition_id").val() + ' .imageCompo').css('border-color', $(this).val());
		});
		
		
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}

function paragrapheEditor(composant)
{
	this.show = function()
	{
		reinitEditeur();

		newDivDisabled(166, 24, 7, 212, "#edit_231", "desactiverCouleurBordure", (composant.forme == 0) ? true : false);
		
		$('.edition_value').die('keyup');

		$('#selectionEditeur').hide();
		$('#edit_1, #edit_2').css('width', '100%');
		$("#edit_231").css("width", "32%");
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		//text += "<ul><li style=\"width:50%;\"><label>Texte de votre paragraphe : </label></li>";
		text = "<textarea id='paraEditeur' class='edition_value'>" + composant.html + "</textarea>";
		$("<div class='propriete'></div>").html(text).appendTo($('#edit_131'));
		
		//$('#text').show();
		
		tinyMCE.init
		({
			theme : "advanced",
			plugins : "table",
			mode : "exact",
			elements :'paraEditeur',
			theme_advanced_toolbar_location : "top",
			theme_advanced_buttons1 : "bold,italic,underline,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,bullist,numlist,outdent,indent,separator,cut,copy,paste,separator,undo,redo,link,unlink,separator",
			theme_advanced_buttons2 : "hr,formatselect,fontselect,fontsizeselect,forecolor,tablecontrols,insererimage",
			theme_advanced_buttons3 : "",
			relative_urls : true, // Default value
        	document_base_url : 'http://net2mobi.net/9e9/',
			
			setup : function(ed)
			{	
				ed.onNodeChange.add(function(ed, e)
				{
					var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());
					
					/*var temp = ed.getContent();
					var reg=new RegExp("(&nbsp;)", "g");
					temp = temp.replace(reg, "");*/
					
					$('#' + $('.edition_id').val() + " .paragraphe").html(ed.getContent());
					composant.html = ed.getContent()/*temp*/;
					$('#scroll').trigger('change');
			  	});
				ed.onKeyUp.add(function(ed, e)
				{
					var comp = site.pages[site.activePage].getComposantById($('.edition_id').val());
									
					/*var temp = ed.getContent();
					var reg=new RegExp("(&nbsp;)", "g");
					temp = temp.replace(reg, "");*/
					
					$('#' + $('.edition_id').val() + " .paragraphe").html(ed.getContent());
				 	composant.html = ed.getContent()/*temp*/;
					$('#scroll').trigger('change');
			  	});
				
				
				ed.onInit.add(function(ed, e)
				{
					$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
					$('#' + ed.id + '_tbl').css('height', '248px');
					$('#' + ed.id + '_ifr').css('height', '200px');
					/*ed.controlManager.get('forecolor').settings.onclick = function()
					{
						ed.controlManager.get('forecolor').showMenu();
					}*/
				});
		
				ed.addButton('insererimage', {
        			title : 'Inserer une image',
   					onclick : function() {
						$("#idImagePara").val(ed.id);
						showModalDialog('dialog_box_UploadImage', 'dialog-overlay');
						
						/*if(!ed.controlManager.get('justifie').isActive())
						{
							$('.option').css('text-align', 'justify');
							ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);
							ed.controlManager.setActive('justifie', true);
							applyModif('justifie', composant, '.combobox');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.combobox');
						}*/

        			}
        		});
		   	}

		});
		
		$("#edit_231").addClass("paddingGauche");
		
		text = "<label class='souligne'>Forme du cadre : </label> <br />";
		$("#edit_231").append(text);
		
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'paraSimple', comp:composant, name:'formePara', texte:'<div class="formePara"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 0)? true : false)/*, affichage:'inline-block'*/, divClass:'paraChoixBord'});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'paraBordure', comp:composant, name:'formePara', texte:'<div class="formePara paraBordure"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 1)? true : false)/*, affichage:'inline-block'*/, divClass:'paraChoixBord'});
		//$('#edit_231').append('</br>');
		
		
		$(".declencheurRadioformePara").die('click');
		$(".declencheurRadioformePara").live('click', function()
		{
			if($(this).attr("id") == "paraSimple")
			{
				
				composant.forme = 0;
				$('#' + $('.edition_id').val() + " .paragraphe").css('border-width', '0px');
				$("#desactiverCouleurBordure").show();
			}
			else if($(this).attr("id") == "paraBordure")
			{
				composant.forme = 1;
				$('#' + $('.edition_id').val() + " .paragraphe").css('border-width', '1px');
				$("#desactiverCouleurBordure").hide();
			}
		});
		
		
		text = "<label class='souligne'>Couleur de la bordure : </label>";
		$('#edit_231').append(text);
		
		text = "<input id='prop_couleur_bordure' class='simplecolor' name='simplecolor' type='hidden' value='" + composant.attributs.style.border_color + "' />";
		$('#edit_231').append(text);
		
		$('#color_selector.prop_couleur_bordure').remove();
		$('#prop_couleur_bordure').colorPicker("prop_couleur_bordure", false);
		
		$('#prop_couleur_bordure').unbind('change');
		$('#prop_couleur_bordure').bind('change', function()
		{
			composant.setStyle('border-color', $(this).val());
			$("#" + $(".edition_id").val() + ' .paragraphe').css('border-color', $(this).val());
		});
		
		/*$('#paraEditeur').live('keyup', function()
		{
			//var ID = "#" + composant.attributs.id;
			//$(ID + " .paragraphe").html($('.edition_value').val());
			//composant.html = $('.edition_value').val();
			$('#essai').html('dgffgfg');
			//$(ID + " .paragraphe").html(escape(tinyMCE.activeEditor.getContent()));
			//composant.html = escape(tinyMCE.activeEditor.getContent());
		});*/
		
		/*tinyMCE.activeEditor.onChange.add(function(tinyMCE.activeEditor, e)
		{
    		$('#essai').html('dgffgfg');
		});*/
		
		
		
		$("#chargement").hide();

	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}


//mbl mis composants

function checkboxEditor(composant)
{
	
	this.show = function()
	{
		reinitEditeur();
		
		
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		createProp({conteneur:'#edit_12', type:'editeur', classProp:'edition_label', classApercu:'.label', comp:composant, strAttr:'label'});
		
		createProp({conteneur:'#edit_132', type:'ajout', classProp:'edition_value', classApercu:'.val_defaut', comp:composant, strAttr:'value'});
		
		var num = composant.num;
		var text = '';
		text += "<div class='propriete'>";
		text += "<div class='edition_elements' class='editeur_exeption'>";
		var limit = (composant.type == checkbox)? 1 : 2;
		for(i = 0; i < limit; i++)
		{
			text += "<div><span><input id='" + composant.elements[i].value + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" + composant.elements[i].html + "'/></span></div>";
		}
		for(i = limit; i < composant.elements.length; i++)
		{
			text += "<div><span><input id='" + composant.elements[i].value + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" + composant.elements[i].html + "'/></span>";
			text += "<span class='supprimer_element'><img src='images/supprimer.png' /></span></div>";
		}
		text += "<div class='ajouter editeur_exeption'><span>" + (composant.elements.length + 1) + "<sup>e</sup> option ici</span></div>";
		text += "</div>";
		text += "</div>";
		
		/*var text2 = '';
		text2 += "<div class='propriete editeur_exeption' >";
		text2 += "<label class='editeur_exeption' style='display:block'>Option pr&eacute;selectionn&eacute; : </label>";
		text2 += "<select class='edition_elementpardefaut' style='display:block'>";
		for(i = 0; i < 2; i++)
		{
			text2 += "<option class='" + composant.elements[i].value + "'>" + composant.elements[i].html + "</option>";
		}
		for(i = 2; i < composant.elements.length; i++)
		{
			text2 += "<option class='" + composant.elements[i].value + "'>" + composant.elements[i].html + "</option>";
		}
		
		text2 += "</select>";
		text2 += "</div>";*/
		
		//gras,italique,souligne,gauche,centre,droite,justifie,gras,interligne//insererimage
		if (tinyMCE.getInstanceById('edition_value')) tinyMCE.get('edition_value').remove();
		tinyMCE.init
		({
			theme : 'advanced',
			mode : 'exact',
			plugins : 'net2mobi',
			elements : 'edition_value',
			theme_advanced_toolbar_location : 'top',
			theme_advanced_path : false,
			theme_advanced_statusbar_location : 'bottom',
			theme_advanced_buttons1 : 'gras,italique,souligne,gauche,centre,droite,justifie,interligne',
			theme_advanced_buttons2 : 'net2mobi_font_family,net2mobi_color,net2mobi_font_size,insererimage',
			theme_advanced_buttons3 : '',
			relative_urls : true, // Default value
        	document_base_url : 'http://net2mobi.net/9e9/',
			
			setup : function(ed)
			{	
		
				ed.onInit.add(function(ed) {	
					$('#' + ed.id + '_tbl .mceIframeContainer').css('background-color', '#fff');
				
					$('#' + ed.id + '_ifr').css('height', '0px');
					
					$('#' + ed.id + '_tbl .mceIframeContainer').css({'height': '60px', 'max-height': '60px', 'overflow-y': 'scroll', 'display': 'block'});

					$('#' + ed.id + '_tbl .mceIframeContainer').append(text);	
			/*textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<button class=\"editeur_exeption\">fgfgh</button>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<input type=\"text\" value=\"rtty\" class=\"editeur_exeption\"/>');";
			textEvent += "			$('#' + ed.id + '_tbl .mceIframeContainer').append('<select class=\"editeur_exeption\"><option>fhgh</option><option>fgdsgh</option><option>fuuiuh</option></select>');";*/
		/*else if(properties.type == "editeur")
		{
			textEvent += "			";
			textEvent += "			";
		}*/
		
		            //$('#' + ed.id + '_tbl .mceStatusbar').css('height', '60px');
					
         			//$('#' + ed.id + '_path_row').prepend(text2);
					
					$('#' + ed.id + '_tbl').css('width', '160px');
					
					
					
					$('#' + ed.id + '_path_row span').css({'display':'block', 'width':'100%'});
					$('#' + ed.id + '_path_row span').append('<div style="display:block"><input type=radio name=align id=align_left /><label for=align_left>Gauche</label><input type=radio name=align id=align_none /><label for=align_none>Aucun</label><input type=radio name=align id=align_right /><label for=align_right>Droite</label></div>');
					
					
					
					
					ed.controlManager.get('net2mobi_font_family').settings.onselect = function(v){
						$('.option').css('font-family', v);
						applyModif('font-family', composant, '.valueCase', v);
			      	};
		
		
		
					ed.controlManager.get('net2mobi_color').settings.onselect = function(v){
						$('.option').css('color', v);
						applyModif('color', composant, '.valueCase', v);
			   		};


					ed.controlManager.get('net2mobi_font_size').settings.onselect = function(v){
						$('.option').css('font-size', v);
						applyModif('font-size', composant, '.valueCase', v);
					};
					
					//DISABLING BUTTONS
					ed.controlManager.setActive('gauche', true);
					
					ed.controlManager.setDisabled('insererimage', true);
					ed.controlManager.setDisabled('interligne', true);
					
					//*****************
			
		
      			});
				
				
				//MIS A JOUR TINYMCE SELON COMPOSANT
				var firstLoad = true;
				ed.onNodeChange.add(function(ed, cm, e) {if(firstLoad){firstLoad = false;	
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('font-weight') == 'bold')
					{
						ed.controlManager.get('gras').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('font-style') == 'italic')
					{
						ed.controlManager.get('italique').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('text-decoration') == 'underline')
					{
						ed.controlManager.get('souligne').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('text-align') == 'center')
					{
						ed.controlManager.get('centre').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('text-align') == 'right')
					{
						ed.controlManager.get('droite').settings.onclick.call(ed);
					}
					if($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('text-align') == 'justify')
					{
						ed.controlManager.get('justifie').settings.onclick.call(ed);
					}
					var couleur = rgb2hex($('#' + $('.edition_id').val() + ' ' + '.valueCase').css('color'));
					var fontf = $('#' + $('.edition_id').val() + ' ' + '.valueCase').css('font-family');
					fontf = (fontf.charAt(0) == "\'")? fontf.slice(1, fontf.length - 1) : fontf;
					var fontsz = $('#' + $('.edition_id').val() + ' ' + '.valueCase').css('font-size');
					ed.controlManager.get('net2mobi_color').setColor(couleur);
					ed.controlManager.get('net2mobi_font_family').select(fontf);
					ed.controlManager.get('net2mobi_font_size').select(fontsz);
					$('.option').css('font-family', fontf);
					$('.option').css('color', couleur);
					$('.option').css('font-size', fontsz);
				}});
				
				//*****************
				
				
						
				//************************************************************************
				//***********************GENERER BOUTONS PERSONALISES*********************
				//************************************************************************
		
				ed.addButton('gras', {
        			title : 'Mise en gras',
        			onclick : function() {
						if(!ed.controlManager.get('gras').isActive())
						{
							$('.option').css('font-weight', 'bold');
							ed.controlManager.setActive('gras', true);
							applyModif('gras', composant, '.valueCase', true);
						}
						else
						{
							$('.option').css('font-weight', 'normal');
							ed.controlManager.setActive('gras', false);
							applyModif('gras', composant, '.valueCase', false);
						}
        			}
        		});
		
				ed.addButton('italique', {
        			title : 'Mise en italique',
       				onclick : function() {
						if(!ed.controlManager.get('italique').isActive())
						{
							$('.option').css('font-style', 'italic');
							ed.controlManager.setActive('italique', true);
							applyModif('italique', composant, '.valueCase', true);
						}
						else
						{
							$('.option').css('font-style', 'normal');
							ed.controlManager.setActive('italique', false);
							applyModif('italique', composant, '.valueCase', false);
						}		
        			}
        		});
		
		
		  		ed.addButton('souligne', {
                	title : 'Soulignement',
                	onclick : function() {
						if(!ed.controlManager.get('souligne').isActive())
						{
							$('.option').css('text-decoration', 'underline');
							ed.controlManager.setActive('souligne', true);
							applyModif('souligne', composant, '.valueCase', true);
						}
						else
						{
							$('.option').css('text-decoration', 'none');
							ed.controlManager.setActive('souligne', false);
							applyModif('souligne', composant, '.valueCase', false);
						}
        			}
        		});
		
		
				ed.addButton('gauche', {
        			title : 'Aligner a gauche',
        			onclick : function() {
						if(!ed.controlManager.get('gauche').isActive())
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('droite', false);ed.controlManager.setActive('centre', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.valueCase');
							//applyModif('gauche', composant, '.valueCase');
						}
        			}
        		});
		
		
				ed.addButton('centre', {
        			title : 'Aligner au centre',
        			onclick : function() {
						if(!ed.controlManager.get('centre').isActive())
						{
							$('.option').css('text-align', 'center');
							ed.controlManager.setActive('droite', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('centre', true);
							applyModif('centre', composant, '.valueCase');
							//applyModif('centre', composant, '.valueCase');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('centre', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.valueCase');
							//applyModif('gauche', composant, '.valueCase');
						}
		
        			}
        		});
		
		
				ed.addButton('droite', {
        			title : 'Aligner a droite',
        			onclick : function() {
						if(!ed.controlManager.get('droite').isActive())
						{
							$('.option').css('text-align', 'right');
							ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('droite', true);
							applyModif('droite', composant, '.valueCase');
							//applyModif('droite', composant, '.valueCase');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('droite', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.valueCase');
							//applyModif('gauche', composant, '.valueCase');
						}
		
        			}
        		});
		
		
				ed.addButton('justifie', {
        			title : 'Justifier lalignement',
        			onclick : function() {
						if(!ed.controlManager.get('justifie').isActive())
						{
							$('.option').css('text-align', 'justify');
							ed.controlManager.setActive('centre', false);ed.controlManager.setActive('gauche', false);ed.controlManager.setActive('droite', false);
							ed.controlManager.setActive('justifie', true);
							applyModif('justifie', composant, '.valueCase');
							//applyModif('justifie', composant, '.valueCase');
						}
						else
						{
							$('.option').css('text-align', 'left');
							ed.controlManager.setActive('justifie', false);
							ed.controlManager.setActive('gauche', true);
							applyModif('gauche', composant, '.valueCase');
							//applyModif('gauche', composant, '.valueCase');
						}

        			}
        		});
		
		
		
		
				ed.addButton('insererimage', {
        			title : 'Inserer une image'
   
        		});
		
		
		
				ed.addButton('interligne', {
        			title : 'Modifier interligne'
     
        		});
		
		
		
				//**************************************************************************
				
				
		   }

		});
		
		
		$('.ajouter').die('click');
		$('.ajouter').live('click', function()
	 	{
			var valueOption = ((composant.type == checkbox)?'case' : 'radio') + composant.staticCompteurElement('increment');
			
			$('.ajouter').remove();
			//console.log($('.option')[0].style.cssText);
			var str="<div><span><input id='" + valueOption + "' onkeyup='update(this, " + num + ")' class='option editeur_exeption' type='text' value='" +((composant.type == checkbox)?'case a cocher ' : 'bouton radio ') + (composant.elements.length + 1) + "' style=\"" + $('.option')[0].style.cssText + "\"/></span>";
			str += "<span class='supprimer_element'><img src='images/supprimer.png' /></span></div>";//console.log(str);
			$(str).appendTo($('.edition_elements'));
			
			composant.elements.push(new Element(composant));
			composant.elements[composant.elements.length - 1].value = valueOption;
			composant.elements[composant.elements.length - 1].html =  ((composant.type == checkbox)?'case a cocher ' : 'bouton radio ') + composant.elements.length;
			
			//mis a jour apercu
			if(composant.type == checkbox)
			$('#'  + composant.attributs.id + ' .group').append('<li class="notSortable caseNonCocher valueCase" style="text-align:' + $('#' + composant.attributs.id + ' .valueCase')[0].style.cssText + '">' + composant.elements[composant.elements.length - 1].html + '</li>');
			else
			$('#'  + composant.attributs.id + ' .group').append('<li class="notSortable radioNonCocher valueCase" style="text-align:' + $('#' + composant.attributs.id + ' .valueCase')[0].style.cssText + '">' + composant.elements[composant.elements.length - 1].html + '</li>');
			
			//************
			
			var numOption = composant.elements.length + 1;
			str="<div class='ajouter'>" + numOption + "<sup>e</sup> option ici</div>";
			$(str).appendTo($('.edition_elements'));
			/*var sel = $('.edition_elementpardefaut');
			$("<option class='" + valueOption + "'>" + composant.elements[composant.elements.length - 1].html + "</option>").appendTo(sel);*/
	 	});
		
		$('.supprimer_element').die('click');
		$('.supprimer_element').live('click', function()
	 	{
			var valueOption = $(this).parent().find('input').attr('id');
			//$('.edition_elementpardefaut .' + valueOption).remove();
			
			composant.supprimer(composant.getIndexByValue(valueOption));
			
			$(this).parent().remove();
			
			var strStyle = $('#' + composant.attributs.id + ' .valueCase')[0].style.cssText;
			$('#'  + composant.attributs.id + ' .group').html('');
			for(var i = 0; i < composant.elements.length; i++)
			{
				//console.log(composant.elements[i].selected);
				var str = '';
				str += '<li class="notSortable ' + ((composant.type == checkbox)?((composant.elements[i].selected)?'caseCocher' : 'caseNonCocher') : ((composant.elements[i].selected)?'radioCocher' : 'radioNonCocher')) + ' valueCase" style="' + $('.option')[0].style.cssText + '">';
				
				str += composant.elements[i].html;
				str += '</li>';
				$('#'  + composant.attributs.id + ' .group').append(str);
			}
		});
		
		
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}




function update(element, num)
{
	//console.log('update');
	var valueOption = $(element).attr('id');
	var composant = site.pages[site.activePage].getComposantByNum(num);
	if(composant.type != checkbox && composant.type != radiobutton)
	{
		$('.edition_elementpardefaut .' + valueOption).html($(element).val());
		/*if(composant.attributs.value == valueOption)
		{*/
			$("#" + composant.attributs.id + " .elem_defaut").html($('.edition_elementpardefaut').val());
			
		//}
	}
		
	
	composant.elements[composant.getIndexByValue(valueOption)].html = $(element).val();
	if(composant.type == checkbox || composant.type == radiobutton)
	{
		$('#' + composant.attributs.id + ' .valueCase').eq(composant.getIndexByValue(valueOption)).html($(element).val());
	}
}



function separateurEditor(composant)
{
	
	this.show = function()
	{
		reinitEditeur();
		
		$("#editerStyle").click();
		
		//propriété id du composant
		createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});
		
		copierStyle(composant);
		
		createProp({conteneur:'#edit_231', type:'radio', classProp:'sepaType1', comp:composant, name:'typeSepa', texte:'<div class="sepaType sepaType1"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 0)? true : false), affichage:'table', divClass:'typeSepa'});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'sepaType2', comp:composant, name:'typeSepa', texte:'<div class="sepaType sepaType2"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 1)? true : false), affichage:'table', divClass:'typeSepa'});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'sepaType3', comp:composant, name:'typeSepa', texte:'<div class="sepaType sepaType3"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 2)? true : false), affichage:'table', divClass:'typeSepa'});
		createProp({conteneur:'#edit_231', type:'radio', classProp:'sepaType4', comp:composant, name:'typeSepa', texte:'<div class="sepaType sepaType4"></div>', /*img:'img/textBox1.jpg',*/ selected:((composant.forme == 3)? true : false), affichage:'table', divClass:'typeSepa'});
		
		text = '<a class="autre" href="javascript:alert(\'En cours de construction!\')">Autre</a>';
		$("#edit_231").append(text);
		
		
		text = "<div class='divToDisplay' " + ((composant.forme == 2 || composant.forme == 3)? "" :"style='display:none;'") + ">";
		text += "</div>";
		text += "<div class='divToDisplay1' " + ((composant.forme == 0)? "" :"style='display:none;'") + ">";
		text += "</div>";
		text += "<div class='divToDisplay2' " + ((composant.forme != 0)? "" :"style='display:none;'") + ">";
		text += "</div>";
		
		$('#selectionEditeur').append(text);
		
		$(".declencheurRadiotypeSepa").die("click");
		$(".declencheurRadiotypeSepa").live("click", function(){
			if($(this).attr("id") == "sepaType1")
			{
				/*$("#" + composant.attributs.id + " .sepaSup").show();
				$("#" + composant.attributs.id + " .sepaInf").show();
				$("#" + composant.attributs.id + " .sepaCompo").css("border-width", composant.attributs.style.border_width + "px");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-style", "solid");
				$("#" + composant.attributs.id + " .sepaCompo").css("background", composant.attributs.style.background);
				$("#" + composant.attributs.id + " .sepaCompo").css("height", composant.attributs.style.height + "px");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-radius", "0");*/
				
				//composant.forme = 0;
				//alert("En cours de construction");
			}
			else if($(this).attr("id") == "sepaType2")
			{
				$("#" + composant.attributs.id + " .sepaSup").hide();
				$("#" + composant.attributs.id + " .sepaInf").hide();
				$("#" + composant.attributs.id + " .sepaCompo").css("border-width", composant.attributs.style.border_width + "px");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-style", "solid");
				$("#" + composant.attributs.id + " .sepaCompo").css("background", composant.attributs.style.background);
				composant.setStyle("height", 10);
				$("#" + composant.attributs.id + " .sepaCompo").css("height", composant.attributs.style.height + "px");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-radius", composant.attributs.style.border_radius + "px");
				
				$(".couleurType2").show().prependTo("#edit_232");
				$(".couleurAutre").hide().appendTo("#edit_212");
				$(".divToDisplay").hide();
				composant.forme = 1;
			}
			else if($(this).attr("id") == "sepaType3")
			{
				$("#" + composant.attributs.id + " .sepaSup").hide();
				$("#" + composant.attributs.id + " .sepaInf").hide();
				$("#" + composant.attributs.id + " .sepaCompo").css("border-width", "1px 0 1px 0");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-style", "solid");
				$("#" + composant.attributs.id + " .sepaCompo").css("background", "none");
				composant.setStyle("height", 5);
				$("#" + composant.attributs.id + " .sepaCompo").css("height", composant.attributs.style.height + "px");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-radius", "0");
				
				$(".couleurType2").hide().appendTo("#edit_212");
				$(".couleurAutre").show().prependTo("#edit_232");
				$(".divToDisplay").show();
				composant.forme = 2;
			}
			else if($(this).attr("id") == "sepaType4")
			{
				$("#" + composant.attributs.id + " .sepaSup").hide();
				$("#" + composant.attributs.id + " .sepaInf").hide();
				$("#" + composant.attributs.id + " .sepaCompo").css("border-width", "1px 0 0 0");
				$("#" + composant.attributs.id + " .sepaCompo").css("border-style", "dashed");
				$("#" + composant.attributs.id + " .sepaCompo").css("background", "none");
				composant.setStyle("height", 0);
				$("#" + composant.attributs.id + " .sepaCompo").css("height", composant.attributs.style.height);
				$("#" + composant.attributs.id + " .sepaCompo").css("border-radius", "0");
				
				$(".couleurType2").hide().appendTo("#edit_212");
				$(".couleurAutre").show().prependTo("#edit_232");
				$(".divToDisplay").show();
				composant.forme = 3;
			}
		});
		
		text = '<label class="souligne">Personnaliser la forme</label>';
		$("#edit_212").append(text);
		
		createProp({conteneur:'#edit_212', type:'color', classProp:'prop_couleur_bordureType34', classApercu:'.sepaCompo', comp:composant, strAttr:'border-color', label:'<span class="spanSimpleEditeur">Couleur : </span>', defaultValue:composant.attributs.style.border_color/*, affichage:'none'*/, divClass:'couleurAutre', affichage:(composant.forme == 1)?'none':'block'});
		
		
		
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_fond', classApercu:'.sepaCompo', comp:composant, strAttr:'background', label:'<span class="spanSimpleEditeur">Couleur : </span>', defaultValue:composant.attributs.style.background, divClass:'couleurType2', affichage:(composant.forme == 1)?'block':'none'});
		
		$('#edit_232').append("<div><span class='spanSimpleEditeur'>Degrade</span><span id='prop_degrade' class='totogglebox' " + ((composant.degrade)? "selected='selected'" : "") + " alt='oui;non'></span></div>");
		
		$('#prop_degrade').find('input').unbind('change');
		$('#prop_degrade').find('input').bind('change', function(){
			
			if($(this).val() == '1')
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .sepaCompo').css('background', degradeGen(couleur, degradeValeur[couleur]));
				composant.degrade = true;
			}
			else
			{
				var couleur = $('#prop_couleur_fond').val();
				if(couleur != 'url(images/transparent.jpg)')
					$('#' + composant.attributs.id + ' .sepaCompo').css('background', couleur);
				composant.degrade = false;
			}
		});
		
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_largeur', classApercu:'.sepaCompo', comp:composant, strAttr:'width', label:'<span class="spanSimpleEditeur">Largeur : </span>', spinMinMaxStep:'0;100;1', spinDefault:composant.attributs.style.width, spinType:'percent'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_hauteur', classApercu:'.sepaCompo', comp:composant, strAttr:'height', label:'<span class="spanSimpleEditeur">Hauteur : </span>', spinMinMaxStep:'0;100;1', spinDefault:composant.attributs.style.height, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_arrondi', classApercu:'.sepaCompo', comp:composant, strAttr:'border-radius', label:'<span class="spanSimpleEditeur">Arrondi : </span>', spinMinMaxStep:'0;50;1', spinDefault:composant.attributs.style.border_radius, spinType:'int'});
		
		createProp({conteneur:'#edit_232', type:'color', classProp:'prop_couleur_bordure', classApercu:'.sepaCompo', comp:composant, strAttr:'border-color', label:'<span class="spanSimpleEditeur">Bordure : </span>', defaultValue:composant.attributs.style.border_color, affichage:'inline-block'});
		
		createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_epaisseur_bordure', classApercu:'.sepaCompo', comp:composant, strAttr:'border-width', spinMinMaxStep:'0;50;1', spinDefault:composant.attributs.style.border_width, spinType:'int'});
		
		/*createProp({conteneur:'#edit_232', type:'spin', classProp:'prop_opacity', classApercu:'.lienmenu', comp:composant, strAttr:'opacity', label:'Transparence : ', spinMinMaxStep:'0;1;0.1', spinDefault:composant.attributs.style.opacity, spinType:'float'});*/
		
		
		if(composant.forme == 2 || composant.forme == 3)
		{
			$("#sepaType" + (composant.forme + 1)).click();
		}
		
		
		
		newDivDisabled(165, 22, 330, 103, ".divToDisplay");
		newDivDisabled(165, 72, 330, 153, ".divToDisplay");
		newDivDisabled(139, 65, 167, 122, ".divToDisplay1");
		newDivDisabled(165, 145, 330, 74, ".divToDisplay1");
		newDivDisabled(139, 22, 167, 79, ".divToDisplay2");
		$("#chargement").hide();
	}
	
	this.hide = function()
	{
		reinitEditeur();
	}
}




function reinitEditeur()
{
	$('#enteteEditeur').html('');
	$('#enteteEditeurStyle').html('');
	$('#selectionEditeur').html('<ul></ul>');
	$('#selectionEditeur').show().css('width', '30%');
	$('#editeurContenu').html('');
	$('#editeurStyle').html('');
	
	$('#edit_111').html('');
	$('#edit_112').html('');
	$('#edit_12').html('');
	$('#edit_131').html('');
	$('#edit_132').html('');
	$('#edit_133').html('');
	$('#edit_134').html('');
	
	$('#edit_211').html('');
	$('#edit_212').html('');
	$('#edit_22').html('');
	$('#edit_231').html('');
	$('#edit_232').html('');
	$('#edit_233').html('');
	
	$('#edit_1, #edit_2').css('width', '66%');
	$('#edit_12').removeClass();
	$('#edit_11').css('height', 'auto');
	$("#edit_231").removeClass();
	$("#edit_231").css("width", "50%");
	$("#edit_12").css("margin-bottom", "10px");
	//$('#enteteEditeurStyle').css("padding", "0");
	
	$("#pointille").hide();
}

function copierStyle(composant)
{
	var text = '<label style="display:block;">Chargez vos styles de composant :</label>';
	text += '<select id="chargeurStyle" style="width:150px;">';
	
	for(i = 0; i < site.pages.length; i++)
	{
		for(j = 0; j < site.pages[i].corps.length; j++)
		{
			if(site.pages[i].corps[j].type == composant.type)
			{
				text += '<option value="' + site.pages[i].corps[j].attributs.id + '-net2-' + i + '" ' + ((site.pages[i].corps[j].num == composant.num)? 'selected' : '') +'>';
				text += site.pages[i].corps[j].attributs.id;
				text += '</option>';
			}
		}
	}
	
	text += '</select>';
	
	$('#enteteEditeurStyle').html(text);
	
	$("#chargeurStyle").unbind("change");
	$("#chargeurStyle").bind("change", function()
	{
		var valeurs = $(this).val().split("-net2-");
		
		if(composant.attributs.id != valeurs[0])
		{
			
			chargerStyle(composant, site.pages[parseInt(valeurs[1])].getComposantById(valeurs[0]));
		}
	});
}

function chargerStyle(composant, source)
{
	if(composant.type == textbox)
	{
		$("#prop_couleur_fond").val(source.attributs.style.background).change();
		$("#prop_largeur").val(source.attributs.style.width).change();
		$("#prop_arrondi").val(source.attributs.style.border_radius).change();
		$("#prop_epaisseur_bordure").val(source.attributs.style.border_width).change();
		$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
		$("#prop_opacity").val(source.attributs.style.opacity).change();
		if(composant.label.active != source.label.active) $("#activerEtiquette").click();
		var edLabel = tinyMCE.getInstanceById("edition_label");
		var edValue = tinyMCE.getInstanceById("edition_value");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_weight != source.attributs.style.font_weight) edValue.controlManager.get('gras').settings.onclick.call(edValue);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_style != source.attributs.style.font_style) edValue.controlManager.get('italique').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.attributs.style.text_decoration != source.attributs.style.text_decoration) edValue.controlManager.get('souligne').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.attributs.style.text_align != source.attributs.style.text_align)
		{
			if(source.attributs.style.text_align == "left")
				edValue.controlManager.get('gauche').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "center")
				edValue.controlManager.get('centre').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "right")
				edValue.controlManager.get('droite').settings.onclick.call(edValue);
			else
				edValue.controlManager.get('justifie').settings.onclick.call(edValue);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.attributs.style.font_family != source.attributs.style.font_family)
		{
			edValue.controlManager.get('net2mobi_font_family').select(source.attributs.style.font_family);
			edValue.focus();
        	edValue.selection.select(edValue.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edValue.execCommand('FontName', false, source.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edValue.selection.collapse();
			applyModif('font-family', composant, '.val_defaut', source.attributs.style.font_family);
		}
		
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.attributs.style.font_size != source.attributs.style.font_size)
		{
			edValue.controlManager.get('net2mobi_font_size').select(source.attributs.style.font_size + 'px');
			edValue.focus();
        	edValue.selection.select(edValue.getBody(), true);
			//edValue.formatter.apply('forecolor', {value:couleur}); 						
			edValue.execCommand('FontSize', false, source.attributs.style.font_size + 'px');
			edValue.selection.collapse();
			applyModif('font-size', composant, '.val_defaut', source.attributs.style.font_size + 'px');
		}
		
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		if(composant.attributs.style.color != source.attributs.style.color)
		{
			edValue.controlManager.get('net2mobi_color').setColor(source.attributs.style.color);
			edValue.focus();
        	edValue.selection.select(edValue.getBody(), true);
			edValue.formatter.apply('forecolor', {value:source.attributs.style.color}); 						
			edValue.selection.collapse();
			applyModif('color', composant, '.val_defaut', source.attributs.style.color);
		}
	}
	else if(composant.type == combobox)
	{
		$("#prop_couleur_fond").val(source.attributs.style.background).change();
		if(composant.degrade != source.degrade) $("#prop_degrade").click();
		$("#prop_largeur").val(source.attributs.style.width).change();
		$("#prop_hauteur").val(source.attributs.style.height).change();
		$("#prop_arrondi").val(source.attributs.style.border_radius).change();
		$("#prop_epaisseur_bordure").val(source.attributs.style.border_width).change();
		$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
		$("#prop_opacity").val(source.attributs.style.opacity).change();
		$(".fleche_" + source.numFleche).click();
		if(composant.label.active != source.label.active) $("#activerEtiquette").click();
		var edLabel = tinyMCE.getInstanceById("edition_label");
		var edValue = tinyMCE.getInstanceById("edition_value");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_weight != source.attributs.style.font_weight) edValue.controlManager.get('gras').settings.onclick.call(edValue);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_style != source.attributs.style.font_style) edValue.controlManager.get('italique').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.attributs.style.text_decoration != source.attributs.style.text_decoration) edValue.controlManager.get('souligne').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.attributs.style.text_align != source.attributs.style.text_align)
		{
			if(source.attributs.style.text_align == "left")
				edValue.controlManager.get('gauche').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "center")
				edValue.controlManager.get('centre').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "right")
				edValue.controlManager.get('droite').settings.onclick.call(edValue);
			else
				edValue.controlManager.get('justifie').settings.onclick.call(edValue);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.attributs.style.font_family != source.attributs.style.font_family)
		{
			$('.option').css('font-family', source.attributs.style.font_family);
			edValue.controlManager.get('net2mobi_font_family').select(source.attributs.style.font_family);
			applyModif('font-family', composant, '.combobox', source.attributs.style.font_family);
		}
		
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.attributs.style.font_size != source.attributs.style.font_size)
		{
			$('.option').css('font-size', source.attributs.style.font_size + 'px');
			edValue.controlManager.get('net2mobi_font_size').select(source.attributs.style.font_size + 'px');
			applyModif('font-size', composant, '.combobox', source.attributs.style.font_size + 'px');
		}
		
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		if(composant.attributs.style.color != source.attributs.style.color)
		{
			$('.option').css('color', source.attributs.style.color);
			edValue.controlManager.get('net2mobi_color').setColor(source.attributs.style.color);
			applyModif('color', composant, '.combobox', source.attributs.style.color);
		}
	}
	else if(composant.type == menu)
	{
		$("#prop_couleur_fond").val(source.attributs.style.background).change();
		if(composant.degrade != source.degrade) $("#prop_degrade").click();
		$("#prop_largeur").val(source.attributs.style.width).change();
		$("#prop_hauteur").val(source.attributs.style.height).change();
		$("#prop_arrondi").val(source.attributs.style.border_radius).change();
		$("#prop_epaisseur_bordure").val(source.attributs.style.border_width).change();
		$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
		$("#prop_opacity").val(source.attributs.style.opacity).change();
		$(".fleche_" + source.numFleche).click();
		if(source.forme == 0) $("#formeRectangle").click();
		else if(source.forme == 2) $("#formeAucune").click();
		var edLabel = tinyMCE.getInstanceById("edition_label");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		if(source.positionThumbnail == posLeft) $("#align_left").click();
		else if(source.positionThumbnail == posRight) $("#align_right").click();
		else if(source.positionThumbnail == posNone) $("#align_none").click();
	}
	else if(composant.type == actualite)
	{
		$("#prop_couleur_fond").val(source.attributs.style.background).change();
		if(composant.degrade != source.degrade) $("#prop_degrade").click();
		$("#prop_hauteur").val(source.attributs.style.height).change();
		$("#prop_arrondi").val(source.attributs.style.border_radius).change();
		$("#prop_epaisseur_bordure").val(source.attributs.style.border_width).change();
		$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
		$("#prop_couleur_fond_para").val(source.attributs.style.background_color).change();
		$(".fleche_" + source.numFleche).click();
		var edLabel = tinyMCE.getInstanceById("edition_label");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		/*if(source.positionThumbnail == posLeft) $("#align_left").click();
		else if(source.positionThumbnail == posRight) $("#align_right").click();
		else if(source.positionThumbnail == posNone) $("#align_none").click();*/
	}
	else if(composant.type == paragraphe)
	{
		if(source.forme == 0) $("#paraSimple").click();
		else if(source.forme == 1) $("#paraBordure").click();
		$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
	}
	else if(composant.type == checkbox)
	{
		var edLabel = tinyMCE.getInstanceById("edition_label");
		var edValue = tinyMCE.getInstanceById("edition_value");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_weight != source.attributs.style.font_weight) edValue.controlManager.get('gras').settings.onclick.call(edValue);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_style != source.attributs.style.font_style) edValue.controlManager.get('italique').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.attributs.style.text_decoration != source.attributs.style.text_decoration) edValue.controlManager.get('souligne').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.attributs.style.text_align != source.attributs.style.text_align)
		{
			if(source.attributs.style.text_align == "left")
				edValue.controlManager.get('gauche').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "center")
				edValue.controlManager.get('centre').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "right")
				edValue.controlManager.get('droite').settings.onclick.call(edValue);
			else
				edValue.controlManager.get('justifie').settings.onclick.call(edValue);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.attributs.style.font_family != source.attributs.style.font_family)
		{
			$('.option').css('font-family', source.attributs.style.font_family);
			edValue.controlManager.get('net2mobi_font_family').select(source.attributs.style.font_family);
			applyModif('font-family', composant, '.valueCase', source.attributs.style.font_family);
		}
		
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.attributs.style.font_size != source.attributs.style.font_size)
		{
			$('.option').css('font-size', source.attributs.style.font_size + 'px');
			edValue.controlManager.get('net2mobi_font_size').select(source.attributs.style.font_size + 'px');
			applyModif('font-size', composant, '.valueCase', source.attributs.style.font_size + 'px');
		}
		
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		if(composant.attributs.style.color != source.attributs.style.color)
		{
			$('.option').css('color', source.attributs.style.color);
			edValue.controlManager.get('net2mobi_color').setColor(source.attributs.style.color);
			applyModif('color', composant, '.valueCase', source.attributs.style.color);
		}
	}
	else if(composant.type == radiobutton)
	{
		var edLabel = tinyMCE.getInstanceById("edition_label");
		var edValue = tinyMCE.getInstanceById("edition_value");
		if(composant.label.attributs.style.font_weight != source.label.attributs.style.font_weight) edLabel.controlManager.get('gras').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_weight != source.attributs.style.font_weight) edValue.controlManager.get('gras').settings.onclick.call(edValue);
		if(composant.label.attributs.style.font_style != source.label.attributs.style.font_style) edLabel.controlManager.get('italique').settings.onclick.call(edLabel);
		if(composant.attributs.style.font_style != source.attributs.style.font_style) edValue.controlManager.get('italique').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_decoration != source.label.attributs.style.text_decoration) edLabel.controlManager.get('souligne').settings.onclick.call(edLabel);
		if(composant.attributs.style.text_decoration != source.attributs.style.text_decoration) edValue.controlManager.get('souligne').settings.onclick.call(edValue);
		if(composant.label.attributs.style.text_align != source.label.attributs.style.text_align)
		{
			if(source.label.attributs.style.text_align == "left")
				edLabel.controlManager.get('gauche').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "center")
				edLabel.controlManager.get('centre').settings.onclick.call(edLabel);
			else if(source.label.attributs.style.text_align == "right")
				edLabel.controlManager.get('droite').settings.onclick.call(edLabel);
			else
				edLabel.controlManager.get('justifie').settings.onclick.call(edLabel);
		}
		if(composant.attributs.style.text_align != source.attributs.style.text_align)
		{
			if(source.attributs.style.text_align == "left")
				edValue.controlManager.get('gauche').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "center")
				edValue.controlManager.get('centre').settings.onclick.call(edValue);
			else if(source.attributs.style.text_align == "right")
				edValue.controlManager.get('droite').settings.onclick.call(edValue);
			else
				edValue.controlManager.get('justifie').settings.onclick.call(edValue);
		}
		if(composant.label.attributs.style.font_family != source.label.attributs.style.font_family)
		{
			edLabel.controlManager.get('net2mobi_font_family').select(source.label.attributs.style.font_family);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontName', false, source.label.attributs.style.font_family);
			//edLabel.execCommand('FontSize', false, fontsz);
			edLabel.selection.collapse();
			applyModif('font-family', composant, '.label', source.label.attributs.style.font_family);
		}
		if(composant.attributs.style.font_family != source.attributs.style.font_family)
		{
			$('.option').css('font-family', source.attributs.style.font_family);
			edValue.controlManager.get('net2mobi_font_family').select(source.attributs.style.font_family);
			applyModif('font-family', composant, '.valueCase', source.attributs.style.font_family);
		}
		
		if(composant.label.attributs.style.font_size != source.label.attributs.style.font_size)
		{
			edLabel.controlManager.get('net2mobi_font_size').select(source.label.attributs.style.font_size + 'px');
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			//edLabel.formatter.apply('forecolor', {value:couleur}); 						
			edLabel.execCommand('FontSize', false, source.label.attributs.style.font_size + 'px');
			edLabel.selection.collapse();
			applyModif('font-size', composant, '.label', source.label.attributs.style.font_size + 'px');
		}
		if(composant.attributs.style.font_size != source.attributs.style.font_size)
		{
			$('.option').css('font-size', source.attributs.style.font_size + 'px');
			edValue.controlManager.get('net2mobi_font_size').select(source.attributs.style.font_size + 'px');
			applyModif('font-size', composant, '.valueCase', source.attributs.style.font_size + 'px');
		}
		
		if(composant.label.attributs.style.color != source.label.attributs.style.color)
		{
			edLabel.controlManager.get('net2mobi_color').setColor(source.label.attributs.style.color);
			edLabel.focus();
        	edLabel.selection.select(edLabel.getBody(), true);
			edLabel.formatter.apply('forecolor', {value:source.label.attributs.style.color}); 						
			edLabel.selection.collapse();
			applyModif('color', composant, '.label', source.label.attributs.style.color);
		}
		if(composant.attributs.style.color != source.attributs.style.color)
		{
			$('.option').css('color', source.attributs.style.color);
			edValue.controlManager.get('net2mobi_color').setColor(source.attributs.style.color);
			applyModif('color', composant, '.valueCase', source.attributs.style.color);
		}
	}
	else if(composant.type == separateur && site.apparence == siteSimple)
	{
		$("#sepaType" + (source.forme + 1)).click();
		if(source.forme == 1)
		{
			$("#prop_couleur_fond").val(source.attributs.style.background).change();
			if(composant.degrade != source.degrade) $("#prop_degrade").click();
			$("#prop_largeur").val(source.attributs.style.width).change();
			$("#prop_hauteur").val(source.attributs.style.height).change();
			$("#prop_arrondi").val(source.attributs.style.border_radius).change();
			$("#prop_epaisseur_bordure").val(source.attributs.style.border_width).change();
			$("#prop_couleur_bordure").val(source.attributs.style.border_color).change();
		}
		else
		{
			$("#prop_largeur").val(source.attributs.style.width).change();
			$("#prop_couleur_bordureType34").val(source.attributs.style.border_color).change();
		}
	}
}

