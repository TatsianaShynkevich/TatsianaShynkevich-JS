console.log("1" + 2 + 0)
//120, плюс преобразует числа в строки и производит конкатенацию
console.log("1" - 1 + 2)
//2, минус преобразовывает строки к числам 
console.log(true + false)
//1, true преобразуестя в 1, false преобразуестя в 0
console.log(10 / "5")
//2, строка "5" преобразуется в число и происходит деление
console.log("2" * "3")
//6, строки преобразуются в числам
console.log(4 + 5 + "px")
//9px, сначала происходит математическое сложение, а затем конкатенация
console.log("$" + 4 + 5)
//$45, плюс преобразует числа в строки и производит конкатенацию
console.log("42" - 2)
//40, минус преобразовывает строки к числам 
console.log("4px" - 2)
//Nan, 4px строка
console.log(7/0)
// при делении на ноль получается бесконечность
console.log("  -9\n" + 5)
//-9
//5 плюс приводит первый символ строки к числу и производит конкатенацию, \n -символ новой строки
console.log("  -9\n" - 5)
//-14, минус преобразовывает строки к числам
console.log(5&&2)
//2, логическое и выбирает последний true, если нет false
console.log(2&&5)
//5,  логическое и выбирает последний true, если нет false
console.log(5||0)
//5,  логическое или выбирает true
console.log(0||5)
//5,  логическое или выбирает true 
console.log(null + 1)
//1,  null преобразуется в 0
console.log(undefined + 1)
//Nan,  undefined преобразуется в Nan
console.log(null == "\n0\n")
//false,  null == null или null == undefined
console.log(+null == +"\n0\n")
//true, null преобразуется в 0, также как и строка   
console.log({}+[])
//[object Object],  
console.log([]+{})
//[object Object],  
