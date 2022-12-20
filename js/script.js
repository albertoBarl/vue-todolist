const { createApp } = Vue;

createApp({
  data() {
    return {
      refTask: 0,
      newTask: "",
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
    addTask() {
      let newObject = {
        text: this.newTask,
        done: false,
      };

      this.taskList.push(newObject);
      this.newTask = "";
    },
    delTask(index) {
      this.taskList.splice(index, 1);
    },
    doneTask(index) {
      const isDone = this.taskList[index].done;
      if (isDone === false) {
        this.taskList[index].done = true;
      } else {
        this.taskList[index].done = false;
      }
    },
  },
}).mount("#appTodolist");
