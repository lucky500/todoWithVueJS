var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todo: null,
    todos: [
			'Todo # 1',
			'Todo # 2'
    ]
  },
  methods: { 
  	add(todo){
  		console.log(todo);
  	}
  }
});