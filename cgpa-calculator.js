(() => {
  const form = document.querySelector("#cgpa-form");
  const courseList = document.querySelector("#course-list");
  const rowTemplate = document.querySelector("#course-row-template");
  const status = document.querySelector("#calculator-status");
  const result = document.querySelector("#cgpa-result");
  const totalUnitsOutput = document.querySelector("#total-units");
  const qualityPointsOutput = document.querySelector("#quality-points");
  const courseCountOutput = document.querySelector("#course-count");
  let hasCalculated = false;

  function rows() {
    return Array.from(courseList.querySelectorAll(".course-row"));
  }

  function refreshRemoveButtons() {
    const currentRows = rows();
    currentRows.forEach((row, index) => {
      const removeButton = row.querySelector(".remove-course");
      removeButton.disabled = currentRows.length === 1;
      removeButton.setAttribute("aria-label", "Remove course " + (index + 1));
    });
  }

  function createRow(course) {
    const row = rowTemplate.content.firstElementChild.cloneNode(true);
    if (course) {
      row.querySelector('[name="courseCode"]').value = course.code;
      row.querySelector('[name="grade"]').value = String(course.grade);
      row.querySelector('[name="units"]').value = String(course.units);
    }
    return row;
  }

  function clearResult(message) {
    hasCalculated = false;
    result.textContent = "—";
    totalUnitsOutput.textContent = "0";
    qualityPointsOutput.textContent = "0";
    courseCountOutput.textContent = "0";
    status.textContent = message || "Add course details, then calculate your result.";
  }

  function calculate() {
    const courseRows = rows();
    let totalUnits = 0;
    let totalQualityPoints = 0;

    for (let index = 0; index < courseRows.length; index += 1) {
      const row = courseRows[index];
      const courseCode = row.querySelector('[name="courseCode"]').value.trim();
      const gradeValue = row.querySelector('[name="grade"]').value;
      const units = Number(row.querySelector('[name="units"]').value);
      const gradePoints = Number(gradeValue);

      if (!courseCode || gradeValue === "" || !Number.isInteger(units) || units < 1 || units > 30 || !Number.isFinite(gradePoints)) {
        clearResult("Check each course code, grade, and credit unit before calculating.");
        return false;
      }

      totalUnits += units;
      totalQualityPoints += units * gradePoints;
    }

    if (totalUnits === 0) {
      clearResult("Add at least one complete course before calculating.");
      return false;
    }

    result.textContent = (totalQualityPoints / totalUnits).toFixed(2);
    totalUnitsOutput.textContent = String(totalUnits);
    qualityPointsOutput.textContent = String(totalQualityPoints);
    courseCountOutput.textContent = String(courseRows.length);
    status.textContent = "Calculated from " + courseRows.length + (courseRows.length === 1 ? " course." : " courses.");
    hasCalculated = true;
    return true;
  }

  document.querySelector("#add-course").addEventListener("click", () => {
    const newRow = createRow();
    courseList.appendChild(newRow);
    refreshRemoveButtons();
    if (hasCalculated) clearResult("Courses changed. Calculate again to update your result.");
    newRow.querySelector('[name="courseCode"]').focus();
  });

  courseList.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-course");
    if (!removeButton || rows().length === 1) return;
    removeButton.closest(".course-row").remove();
    refreshRemoveButtons();
    clearResult("Course removed. Calculate again to update your result.");
  });

  form.addEventListener("input", () => {
    if (hasCalculated) clearResult("Course details changed. Calculate again to update your result.");
  });

  form.addEventListener("change", () => {
    if (hasCalculated) clearResult("Course details changed. Calculate again to update your result.");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });

  document.querySelector("#load-example").addEventListener("click", () => {
    const exampleCourses = [
      { code: "CSC 101", grade: 5, units: 3 },
      { code: "MTH 102", grade: 4, units: 4 },
      { code: "GST 101", grade: 3, units: 2 }
    ];
    courseList.replaceChildren(...exampleCourses.map(createRow));
    refreshRemoveButtons();
    calculate();
  });

  document.querySelector("#reset-calculator").addEventListener("click", () => {
    courseList.replaceChildren(createRow());
    refreshRemoveButtons();
    clearResult("Calculator reset. Add your course details to begin.");
    courseList.querySelector('[name="courseCode"]').focus();
  });

  refreshRemoveButtons();
})();
