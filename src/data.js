import { renderToDOM } from "./dom.js"

const API = {
  fetchEmployeeEntries() {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
      .then(employeeEntries => employeeEntries.json())
      .then(entries => {
        renderToDOM(entries);
      })
  }
}

export default API;