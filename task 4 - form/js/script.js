//let input = document.querySelectorAll('.ts-input-form-action');
//console.log(input);
/*document.querySelectorAll('.ts-input-form-action').addEventListener("click", fnc);
function fnc() {
	console.log(document.querySelectorAll('.ts-input-form-action').value);
}
*/
/*var buttonActionForm = document.querySelector('.ts-input-form-action').value;
console.log(buttonActionForm);*/

 
    var textInput = document.querySelector(".ts-input-form-action");
	
    function saveInput() {
		localStorage.setItem('inputData', textInput.value);
		}
	textInput.addEventListener("change", saveInput);
	
	if(localStorage.getItem('inputData')) {
		textInput.value = localStorage.getItem('inputData');
	}
	console.log(localStorage.getItem('inputData'));

	
    var selectInput = document.querySelector(".ts-choice-type");
	
    function saveInput2() {
		localStorage.setItem('selectedItem', selectInput.value);
		}
		
	selectInput.addEventListener("click", saveInput2);	
		
		if(localStorage.getItem('selectedItem')) {
			selectInput.value = localStorage.getItem('selectedItem');
		}

	console.log(localStorage.getItem('selectedItem'));
	
	
    var radioInput = document.querySelectorAll(".ts-input-choices");
	
   function saveInput3() {
		localStorage.setItem('selectedItem1', i);
		}

		for (var i = 0; i < radioInput.length; i++) {

			
			
			if(radioInput[i].checked) {
				radioInput[i].addEventListener("click", saveInput3);
				if(localStorage.getItem('selectedItem1')) {
		
					radioInput[i].setAttribute('checked','checked');
					
				} 
				
			} 
		}