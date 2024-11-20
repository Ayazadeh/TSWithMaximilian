/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    }
}


/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/validation */ "./src/util/validation.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) || !(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) || !(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {
            alert("Invalid input, please try again!");
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.Autobind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        console.log("drag start handler ", event);
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(event) {
        console.log("drag end handler ", event);
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.persons + " assigned";
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.Autobind
], ProjectItem.prototype, "dragStartHandler", null);


/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item */ "./src/components/project-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dropHandler(event) {
        console.log("drop handler", event);
        const prjId = event.dataTransfer.getData("text/plain");
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(prjId, this.type === "active" ? _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active : _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished);
    }
    dragLeaveHandler(event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active;
                }
                return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent = this.type.toUpperCase() + " PROJECTS";
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new _project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(this.element.querySelector("ul").id, prjItem);
        }
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.Autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.Autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.Autobind
], ProjectList.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Autobind: () => (/* binding */ Autobind)
/* harmony export */ });
const Autobind = (target, methodName, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
};


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectStatus: () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectState: () => (/* binding */ ProjectState),
/* harmony export */   projectState: () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeople) {
        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");


new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList("active");
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList("finished");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ08sTUFBZSxTQUFTO0lBSzlCLFlBQVksVUFBa0IsRUFBRSxhQUFxQixFQUFFLGFBQXNCLEVBQUUsWUFBcUI7UUFDbkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBeUIsQ0FBQztRQUNuRixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFPLENBQUM7UUFFaEUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxpQkFBc0IsQ0FBQztRQUNuRCxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztRQUNoQyxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sTUFBTSxDQUFDLGlCQUEwQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEcsQ0FBQztDQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI0QztBQUNjO0FBQ1Q7QUFDSTtBQUcvQyxNQUFNLFlBQWEsU0FBUSxzREFBMEM7SUFLM0U7UUFDQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBcUIsQ0FBQztRQUNsRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO1FBQzlGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7UUFFcEYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLEtBQUksQ0FBQztJQUVWLGVBQWU7UUFDdEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUNsRCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUM7UUFDOUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUVwRCxNQUFNLGdCQUFnQixHQUFnQjtZQUNyQyxLQUFLLEVBQUUsWUFBWTtZQUNuQixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFDRixNQUFNLHNCQUFzQixHQUFnQjtZQUMzQyxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLENBQUM7U0FDWixDQUFDO1FBQ0YsTUFBTSxpQkFBaUIsR0FBZ0I7WUFDdEMsS0FBSyxFQUFFLENBQUMsYUFBYTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDTixDQUFDO1FBRUYsSUFBSSxDQUFDLDBEQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLDBEQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLDBEQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQ3RHLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQzNDLENBQUM7YUFBTSxDQUFDO1lBQ1AsT0FBTyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDRixDQUFDO0lBRU8sV0FBVztRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR08sYUFBYSxDQUFDLEtBQVk7UUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDeEMsOERBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7Q0FDRDtBQVRRO0lBRFAsMERBQVE7aURBU1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckUyQztBQUVLO0FBRzNDLE1BQU0sV0FBWSxTQUFRLHNEQUEwQztJQUcxRSxJQUFJLE9BQU87UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sVUFBVSxDQUFDO1FBQ25CLENBQUM7YUFBTSxDQUFDO1lBQ1AsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxVQUFVLENBQUM7UUFDekMsQ0FBQztJQUNGLENBQUM7SUFFRCxZQUFZLE1BQWMsRUFBRSxPQUFnQjtRQUMzQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0QsZ0JBQWdCLENBQUMsS0FBZ0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUMsWUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRCxLQUFLLENBQUMsWUFBYSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFnQjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUMzRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDekUsQ0FBQztDQUNEO0FBcEJBO0lBREMsMERBQVE7bURBS1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUIyQztBQUVjO0FBQ1Q7QUFDSTtBQUNUO0FBR3RDLE1BQU0sV0FBWSxTQUFRLHNEQUFzQztJQUd0RSxZQUFvQixJQUEyQjtRQUM5QyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1FBRHJDLFNBQUksR0FBSixJQUFJLENBQXVCO1FBRTlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0QsZUFBZSxDQUFDLEtBQWdCO1FBQy9CLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEVBQUUsQ0FBQztZQUN4RSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNGLENBQUM7SUFHRCxXQUFXLENBQUMsS0FBZ0I7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsOERBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQywwREFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsMERBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBR0QsZ0JBQWdCLENBQUMsS0FBZ0I7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhELDhEQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBbUIsRUFBRSxFQUFFO1lBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQzVCLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSywwREFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssMERBQWEsQ0FBQyxRQUFRLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWixNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsV0FBVyxDQUFDO0lBQ3ZGLENBQUM7SUFFTyxjQUFjO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBc0IsQ0FBQztRQUMxRixNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzdDLElBQUksc0RBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNGLENBQUM7Q0FDRDtBQXBEQTtJQURDLDBEQUFRO2tEQU9SO0FBR0Q7SUFEQywwREFBUTs4Q0FNUjtBQUdEO0lBREMsMERBQVE7bURBSVI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDSyxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQVcsRUFBRSxVQUFrQixFQUFFLFVBQThCLEVBQUUsRUFBRTtJQUMzRixNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLE1BQU0sYUFBYSxHQUF1QjtRQUN6QyxZQUFZLEVBQUUsSUFBSTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixHQUFHO1lBQ0YsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxPQUFPLE9BQU8sQ0FBQztRQUNoQixDQUFDO0tBQ0QsQ0FBQztJQUNGLE9BQU8sYUFBYSxDQUFDO0FBQ3RCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pGLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN4QixxREFBTTtJQUNOLHlEQUFRO0FBQ1QsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRU0sTUFBTSxPQUFPO0lBQ25CLFlBQW1CLEVBQVUsRUFBUyxLQUFhLEVBQVMsV0FBbUIsRUFBUyxNQUFjLEVBQVMsTUFBcUI7UUFBakgsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQztDQUN4STs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMEQ7QUFLM0QsTUFBTSxLQUFLO0lBQVg7UUFDVyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztJQUt6QyxDQUFDO0lBSEEsV0FBVyxDQUFDLFVBQXVCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRDtBQUVNLE1BQU0sWUFBYSxTQUFRLEtBQWM7SUFJL0M7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUpELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFLakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWEsRUFBRSxXQUFtQixFQUFFLFdBQW1CO1FBT2pFLE1BQU0sVUFBVSxHQUFHLElBQUksb0RBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsMERBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFpQixFQUFFLFNBQXdCO1FBQ3RELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDRixDQUFDO0lBRU8sZUFBZTtRQUN0QixLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDRixDQUFDO0NBQ0Q7QUFFTSxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlDaEQsU0FBUyxRQUFRLENBQUMsZ0JBQTZCO0lBQ3JELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxPQUFPLGdCQUFnQixDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN0RixPQUFPLEdBQUcsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ2xGLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDdEYsT0FBTyxHQUFHLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ2hGLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ2hGLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztVQzVCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNGO0FBRXhELElBQUksbUVBQVksRUFBRSxDQUFDO0FBQ25CLElBQUksaUVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixJQUFJLGlFQUFXLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84X2RyYWdfYW5kX2Ryb3AvLi9zcmMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly84X2RyYWdfYW5kX2Ryb3AvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovLzhfZHJhZ19hbmRfZHJvcC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaXRlbS50cyIsIndlYnBhY2s6Ly84X2RyYWdfYW5kX2Ryb3AvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wLy4vc3JjL2RlY29yYXRvcnMvYXV0b2JpbmQudHMiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wLy4vc3JjL21vZGVscy9wcm9qZWN0LnRzIiwid2VicGFjazovLzhfZHJhZ19hbmRfZHJvcC8uL3NyYy9zdGF0ZS9wcm9qZWN0LXN0YXRlLnRzIiwid2VicGFjazovLzhfZHJhZ19hbmRfZHJvcC8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzhfZHJhZ19hbmRfZHJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vOF9kcmFnX2FuZF9kcm9wLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnQgQmFzZSBDbGFzc1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCwgVSBleHRlbmRzIEhUTUxFbGVtZW50PiB7XHJcblx0dGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG5cdGhvc3RFbGVtZW50OiBUO1xyXG5cdGVsZW1lbnQ6IFU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlSWQ6IHN0cmluZywgaG9zdEVsZW1lbnRJZDogc3RyaW5nLCBpbnNlcnRBdFN0YXJ0OiBib29sZWFuLCBuZXdFbGVtZW50SWQ/OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XHJcblxyXG5cdFx0Y29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LCB0cnVlKTtcclxuXHRcdHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xyXG5cdFx0aWYgKG5ld0VsZW1lbnRJZCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGF0dGFjaChpbnNlcnRBdEJlZ2lubmluZzogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXRCZWdpbm5pbmcgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsIHRoaXMuZWxlbWVudCk7XHJcblx0fVxyXG5cclxuXHRhYnN0cmFjdCBjb25maWd1cmUoKTogdm9pZDtcclxuXHRhYnN0cmFjdCByZW5kZXJDb250ZW50KCk6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGFibGUsIHZhbGlkYXRlIH0gZnJvbSBcIi4uL3V0aWwvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBBdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XHJcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlXCI7XHJcblxyXG4vLyBQcm9qZWN0SW5wdXQgY2xhc3NcclxuZXhwb3J0IGNsYXNzIFByb2plY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCwgSFRNTEZvcm1FbGVtZW50PiB7XHJcblx0dGl0bGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0ZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0cGVvcGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKFwicHJvamVjdC1pbnB1dFwiLCBcImFwcFwiLCB0cnVlLCBcInVzZXItaW5wdXRcIik7XHJcblxyXG5cdFx0dGhpcy50aXRsZUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHRcdHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVvcGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5cdFx0dGhpcy5jb25maWd1cmUoKTtcclxuXHR9XHJcblxyXG5cdGNvbmZpZ3VyZSgpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDb250ZW50KCkge31cclxuXHJcblx0cHJpdmF0ZSBnYXRoZXJVc2VySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XHJcblx0XHRjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xyXG5cdFx0Y29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcclxuXHRcdGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuXHJcblx0XHRjb25zdCB0aXRsZVZhbGlkYXRhYmxlOiBWYWxpZGF0YWJsZSA9IHtcclxuXHRcdFx0dmFsdWU6IGVudGVyZWRUaXRsZSxcclxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZTogVmFsaWRhdGFibGUgPSB7XHJcblx0XHRcdHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXHJcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRtaW5MZW5ndGg6IDUsXHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgcGVvcGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xyXG5cdFx0XHR2YWx1ZTogK2VudGVyZWRQZW9wbGUsXHJcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRtaW46IDEsXHJcblx0XHRcdG1heDogNSxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCF2YWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fCAhdmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHwgIXZhbGlkYXRlKHBlb3BsZVZhbGlkYXRhYmxlKSkge1xyXG5cdFx0XHRhbGVydChcIkludmFsaWQgaW5wdXQsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFtlbnRlcmVkVGl0bGUsIGVudGVyZWREZXNjcmlwdGlvbiwgK2VudGVyZWRQZW9wbGVdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjbGVhcklucHV0cygpIHtcclxuXHRcdHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblx0XHR0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRAQXV0b2JpbmRcclxuXHRwcml2YXRlIHN1Ym1pdEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHVzZXJJbnB1dCkpIHtcclxuXHRcdFx0Y29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0O1xyXG5cdFx0XHRwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcclxuXHRcdFx0dGhpcy5jbGVhcklucHV0cygpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tIFwiLi4vbW9kZWxzL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9iYXNlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IEF1dG9iaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvYXV0b2JpbmRcIjtcclxuXHJcbi8vIFByb2plY3RJdGVtIENsYXNzXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSBleHRlbmRzIENvbXBvbmVudDxIVE1MVUxpc3RFbGVtZW50LCBIVE1MTElFbGVtZW50PiBpbXBsZW1lbnRzIERyYWdnYWJsZSB7XHJcblx0cHJpdmF0ZSBwcm9qZWN0OiBQcm9qZWN0O1xyXG5cclxuXHRnZXQgcGVyc29ucygpIHtcclxuXHRcdGlmICh0aGlzLnByb2plY3QucGVvcGxlID09PSAxKSB7XHJcblx0XHRcdHJldHVybiBcIjEgcGVyc29uXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gYCR7dGhpcy5wcm9qZWN0LnBlb3BsZX0gcGVyc29uc2A7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihob3N0SWQ6IHN0cmluZywgcHJvamVjdDogUHJvamVjdCkge1xyXG5cdFx0c3VwZXIoXCJzaW5nbGUtcHJvamVjdFwiLCBob3N0SWQsIGZhbHNlLCBwcm9qZWN0LmlkKTtcclxuXHRcdHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcblxyXG5cdFx0dGhpcy5jb25maWd1cmUoKTtcclxuXHRcdHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG5cdH1cclxuXHJcblx0QEF1dG9iaW5kXHJcblx0ZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImRyYWcgc3RhcnQgaGFuZGxlciBcIiwgZXZlbnQpO1xyXG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0aGlzLnByb2plY3QuaWQpO1xyXG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyIS5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcblx0fVxyXG5cclxuXHRkcmFnRW5kSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImRyYWcgZW5kIGhhbmRsZXIgXCIsIGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdGNvbmZpZ3VyZSgpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuZHJhZ1N0YXJ0SGFuZGxlcik7XHJcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5kcmFnRW5kSGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDb250ZW50KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucGVyc29ucyArIFwiIGFzc2lnbmVkXCI7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9iYXNlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEcmFnVGFyZ2V0IH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBBdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XHJcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlXCI7XHJcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSBcIi4vcHJvamVjdC1pdGVtXCI7XHJcblxyXG4vLyBQcm9qZWN0TGlzdCBjbGFzc1xyXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxFbGVtZW50PiBpbXBsZW1lbnRzIERyYWdUYXJnZXQge1xyXG5cdGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBcImFjdGl2ZVwiIHwgXCJmaW5pc2hlZFwiKSB7XHJcblx0XHRzdXBlcihcInByb2plY3QtbGlzdFwiLCBcImFwcFwiLCBmYWxzZSwgYCR7dHlwZX0tcHJvamVjdHNgKTtcclxuXHRcdHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuY29uZmlndXJlKCk7XHJcblx0XHR0aGlzLnJlbmRlckNvbnRlbnQoKTtcclxuXHR9XHJcblxyXG5cdEBBdXRvYmluZFxyXG5cdGRyYWdPdmVySGFuZGxlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcblx0XHRpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSE7XHJcblx0XHRcdGxpc3RFbC5jbGFzc0xpc3QuYWRkKFwiZHJvcHBhYmxlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QEF1dG9iaW5kXHJcblx0ZHJvcEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJkcm9wIGhhbmRsZXJcIiwgZXZlbnQpO1xyXG5cdFx0Y29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cclxuXHRcdHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChwcmpJZCwgdGhpcy50eXBlID09PSBcImFjdGl2ZVwiID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkKTtcclxuXHR9XHJcblxyXG5cdEBBdXRvYmluZFxyXG5cdGRyYWdMZWF2ZUhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSE7XHJcblx0XHRsaXN0RWwuY2xhc3NMaXN0LnJlbW92ZShcImRyb3BwYWJsZVwiKTtcclxuXHR9XHJcblxyXG5cdGNvbmZpZ3VyZSgpIHtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xyXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgdGhpcy5kcmFnTGVhdmVIYW5kbGVyKTtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmRyb3BIYW5kbGVyKTtcclxuXHJcblx0XHRwcm9qZWN0U3RhdGUuYWRkTGlzdGVuZXIoKHByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcclxuXHRcdFx0Y29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJqKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IHJlbGV2YW50UHJvamVjdHM7XHJcblx0XHRcdHRoaXMucmVuZGVyUHJvamVjdHMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyQ29udGVudCgpIHtcclxuXHRcdGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLnRleHRDb250ZW50ID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyBcIiBQUk9KRUNUU1wiO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQcm9qZWN0cygpIHtcclxuXHRcdGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGApISBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG5cdFx0bGlzdEVsLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRmb3IgKGNvbnN0IHByakl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XHJcblx0XHRcdG5ldyBQcm9qZWN0SXRlbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCwgcHJqSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIGF1dG9iaW5kIGRlY29yYXRvclxyXG5leHBvcnQgY29uc3QgQXV0b2JpbmQgPSAodGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblx0Y29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG5cdGNvbnN0IGFkakRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciA9IHtcclxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdFx0Z2V0KCkge1xyXG5cdFx0XHRjb25zdCBib3VuZEZuID0gb3JpZ2luYWxNZXRob2QuYmluZCh0aGlzKTtcclxuXHRcdFx0cmV0dXJuIGJvdW5kRm47XHJcblx0XHR9LFxyXG5cdH07XHJcblx0cmV0dXJuIGFkakRlc2NyaXB0b3I7XHJcbn07XHJcbiIsImV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMge1xyXG5cdEFjdGl2ZSxcclxuXHRGaW5pc2hlZCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHB1YmxpYyBwZW9wbGU6IG51bWJlciwgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1cykge31cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcblxyXG4vLyBQcm9qZWN0IFN0YXRlIE1hbmFnZW1lbnRcclxudHlwZSBMaXN0ZW5lcjxUPiA9IChpdGVtczogVFtdKSA9PiB2b2lkO1xyXG5cclxuY2xhc3MgU3RhdGU8VD4ge1xyXG5cdHByb3RlY3RlZCBsaXN0ZW5lcnM6IExpc3RlbmVyPFQ+W10gPSBbXTtcclxuXHJcblx0YWRkTGlzdGVuZXIobGlzdGVuZXJGbjogTGlzdGVuZXI8VD4pIHtcclxuXHRcdHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8UHJvamVjdD4ge1xyXG5cdHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XHJcblxyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEluc3RhbmNlKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFByb2plY3RTdGF0ZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcclxuXHRcdC8vIGNvbnN0IG5ld1Byb2plY3QgPSB7XHJcblx0XHQvLyBcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXHJcblx0XHQvLyBcdHRpdGxlOiB0aXRsZSxcclxuXHRcdC8vIFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG5cdFx0Ly8gXHRwZW9wbGU6IG51bU9mUGVvcGxlLFxyXG5cdFx0Ly8gfTtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksIHRpdGxlLCBkZXNjcmlwdGlvbiwgbnVtT2ZQZW9wbGUsIFByb2plY3RTdGF0dXMuQWN0aXZlKTtcclxuXHRcdHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHRcdHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHRtb3ZlUHJvamVjdChwcm9qZWN0SWQ6IHN0cmluZywgbmV3U3RhdHVzOiBQcm9qZWN0U3RhdHVzKSB7XHJcblx0XHRjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcmopID0+IHByai5pZCA9PT0gcHJvamVjdElkKTtcclxuXHRcdGlmIChwcm9qZWN0ICYmIHByb2plY3Quc3RhdHVzICE9PSBuZXdTdGF0dXMpIHtcclxuXHRcdFx0cHJvamVjdC5zdGF0dXMgPSBuZXdTdGF0dXM7XHJcblx0XHRcdHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHVwZGF0ZUxpc3RlbmVycygpIHtcclxuXHRcdGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xyXG5cdFx0XHRsaXN0ZW5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7IC8vIGFycmF5LnNsaWNlKCkgcmV0dXJucyBhIGNvcHkgb2YgdGhlIGFycmF5XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RhbmNlKCk7XHJcbiIsIi8vIFZhbGlkYXRpb25cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0YWJsZSB7XHJcblx0dmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuXHRyZXF1aXJlZD86IGJvb2xlYW47IC8vIHF1ZXN0aW9uIG1hcmsgJz8nIG1lYW5zIG9wdGlvbmFsIG9yIGxpa2UgdGhpcyAtPiBib29sZWFuIHwgdW5kZWZpbmVkXHJcblx0bWluTGVuZ3RoPzogbnVtYmVyO1xyXG5cdG1heExlbmd0aD86IG51bWJlcjtcclxuXHRtaW4/OiBudW1iZXI7XHJcblx0bWF4PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdGFibGVJbnB1dDogVmFsaWRhdGFibGUpIHtcclxuXHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0aWYgKHZhbGlkYXRhYmxlSW5wdXQucmVxdWlyZWQpIHtcclxuXHRcdGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xyXG5cdH1cclxuXHRpZiAodmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJiB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0aXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPj0gdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGg7XHJcblx0fVxyXG5cdGlmICh2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aCAhPSBudWxsICYmIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aDtcclxuXHR9XHJcblx0aWYgKHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiYgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPj0gdmFsaWRhdGFibGVJbnB1dC5taW47XHJcblx0fVxyXG5cdGlmICh2YWxpZGF0YWJsZUlucHV0Lm1heCAhPSBudWxsICYmIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlIDw9IHZhbGlkYXRhYmxlSW5wdXQubWF4O1xyXG5cdH1cclxuXHRyZXR1cm4gaXNWYWxpZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1saXN0XCI7XHJcblxyXG5uZXcgUHJvamVjdElucHV0KCk7XHJcbm5ldyBQcm9qZWN0TGlzdChcImFjdGl2ZVwiKTtcclxubmV3IFByb2plY3RMaXN0KFwiZmluaXNoZWRcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==