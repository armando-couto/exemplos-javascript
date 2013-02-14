// JavaScript Document

function validacao(){
	
	if(document.form.nome.value == ''){
		
		alert('Preencha o campo nome.');
		//document.write('Preencha o campo nome');
		document.form.nome.focus();
		return false;

		}
		
	if(document.form.email.value == ''){
		
		alert('Preencha o campo email');
		document.form.email.focus();
		return false;
	   }	
	
	alert('Tudo Ok');
}