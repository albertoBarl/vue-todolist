const { createApp } = Vue;

createApp({
  data() {
    return {
      refTask: 0,
      taskList: [
        { text: "Svegliarmi alle 5:30", done: false },
        { text: "Bere acqua", done: false },
        { text: "Sciaquarmi la faccia", done: false },
        { text: "Radermi la barba", done: false },
        { text: "Lavarmi i denti", done: false },
      ],
    };
  },
  methods: {
    addTask(index) {},
  },
}).mount("#appTodolist");
