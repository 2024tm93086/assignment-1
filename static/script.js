const getWorkouts = () => {
  fetch("/view-workouts")
    .then((res) => res.json())
    .then((res) => {
      renderWorkout(res.workouts);
    });
};

const addWorkout = (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  fetch("/add-workout", {
    method: "POST",
    body: JSON.stringify({
      workout: formData.get("workout"),
      duration: formData.get("duration"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      getWorkouts();
      event.target.reset();
    });
};

const renderWorkout = (data) => {
  const tableFragment = document.createDocumentFragment();
  data.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    const rowHead = document.createElement("th");
    rowHead.setAttribute("scope", "row");
    rowHead.innerText = index + 1;
    const durationColumn = document.createElement("td");
    durationColumn.innerText = row.duration;
    const workoutColumn = document.createElement("td");
    workoutColumn.innerText = row.workout;
    tableRow.appendChild(rowHead);
    tableRow.appendChild(workoutColumn);
    tableRow.appendChild(durationColumn);
    tableFragment.appendChild(tableRow);
  });
  const list = document.querySelector("#workout-list");
  list.innerHTML = "";
  list.append(tableFragment);
};

getWorkouts();
