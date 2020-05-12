import { renderToDOM } from "./dom.js"

const API = {
  fetchEmployeeEntries() {
    return fetch("http://localhost:8088/employees")
      .then(employeeEntries => employeeEntries.json())
      .then(entries => {
        renderToDOM(entries);
      })
  },
  fetchDepartmentEntries() {
    return fetch("http://localhost:8088/departments")
      .then(departments => departments.json())
  },
  fetchComputerEntries() {
    return fetch("http://locahost:8088/computers")
      .then(computers => computers.json())
  }
}

export default API;