/*var myApp = angular.module('app', []);


myApp.controller('FirstCtrl', function FirstCtrl(data){
	var first = this;
	first.greeting = "Nitesh";
})
*/

var myApp = angular.module('app', [])

myApp.controller('FirstCtrl', function FirstCtrl(){
	var first = this;

	first.name = "Nitesh";
	first.contacts = ['Jani','Hege','Kai'];
	first.countries = [
    {name: 'France', population: 63.1},
    {name: 'United Kingdom', population: 61.8}
	];

	first.todos = [
		{title:'Build a todo app', done:true},
		{title:'1st  Todo Task', done:false},
		{title:'2nd Todo Task', done:false},
		{title:'3rd Todo Task', done:false}
	];
	first.addTodo = function(){
		//alert("Hello");
		first.todos.push({title:first.newtodo, done:false})	
		first.newtodo = '';
	}
	first.clearCompleted = function(){

	}
	/*[
    {type:'phone', value:'408 555 1212'},
    {type:'email', value:'john.smith@example.org'} 
    ];
    */
});
