import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";


Given("agrego una tarea", () => {
    gestionTarea.navigateTodo();
    gestionTarea.addTask("tarea1{enter}");
  });

When("hago click en la tarea", () => {
    gestionTarea.selectTask();
  });

Then("la tarea está completada", () => {
    gestionTarea.completedTask();
  });