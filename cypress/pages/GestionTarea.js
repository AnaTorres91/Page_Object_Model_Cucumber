
export class GestionTarea {
    constructor() {
      this.web = "https://todomvc.com/examples/react/dist/";
      this.newTask = "#todo-input";
      this.selectAll_button = ".toggle-all";
      this.deletedAll_button = ".clear-completed";
      this.task = {
        icon_circle_task: ".toggle",
        text_task: "label[data-testid='todo-item-label']",
        clean_task: ".clear-completed",
        completed_task: ".completed",
      };
    }
    addTask(task) {
      cy.get(this.newTask).type(task);
      }

    selectTask(){
        cy.get(this.selectAll_button).click();
        ;} 
    
    completedTask() {
        cy.get(this.task.completed_task).should("be.visible");
      }

    navigateTodo() {
        cy.visit(this.web)
    } 

    marcarTarea(){
        cy.get(this.newTask).should("be.visible").type("tarea1{enter}");
        cy.get(this.task.text_task).should("contain.text", "tarea1");
        cy.get(this.task.icon_circle_task).click();
        cy.get(this.task.completed_task).should("be.visible");




    }






} 




    export const gestionTarea = new GestionTarea();