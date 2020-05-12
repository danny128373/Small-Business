const employeeContainer = document.querySelector("#employeeContainer");

const makeEmployeeEntryComponent = (employeeEntry) => {
  return `
    <header class="employee__name">
        <h1>${employeeEntry.name}</h1>
    </header>
    <section class="employee__department">
        Works in ${employeeEntry.departmentName} department
    </section>
    <section class="employee__computer">
        Currently using a ${employeeEntry.compBrand}
    </section>
  `
}