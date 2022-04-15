
import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

// Create a new store instance.
const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Test",
        hours: "2",
        assigned: "Damien",
        status: "to-do",
      },
      {
        id: 2,
        name: "Test2",
        hours: "8",
        assigned: "Alexandre",
        status: "in-progress",
      },
    ]
  },
  getters: {
    tasks : (state) => state.tasks,
  },
  actions: {
    add_todo({ commit }, todo) {
      todo.id = uuidv4();
      commit("add_todo", todo);
    },
    change_todo({ commit }, {edited ,todo}) {
      commit("change_todo", {edited ,todo});
    },
    delete_todo({ commit }, index) {
      commit("change_todo", index);
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.tasks.unshift(todo);
    },
    change_todo(state, {edited ,todo}) {
      console.log(edited, todo);
      state.tasks[edited].id = edited;
      state.tasks[edited].name = todo.name;
      state.tasks[edited].hours = todo.hours;
      state.tasks[edited].assigned = todo.assigned;
    },
    delete_todo(state, index) {
      state.tasks.splice(index, 1);
    }
  }
})

export default store;