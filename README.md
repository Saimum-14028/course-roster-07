# My Course Roster

### Project Features

- Display a list of available courses with details such as course title, description.
- Allow users to select courses.
- Maximum credit limit is 20 hours.

### State Management

- [allCourses, setAllCourses]
  Initially, it is an empty array. We fetch data from JSON file. So Updated the array using the setAllCourses function.
- [selectedCourses, setSelectedCourses]
  Initially, it is an empty array. When a button is clicked then unique data is collected by the setSelectedCourses function and updated the array.
- [remaining, setRemaining]
  The initial value is the maximum credit limit. When a button is clicked value will updated using setRemaining function.
- [totalCredit, setTotalCredit]
  The initial value is 0. When a button is clicked value will updated using setTotalCredit function.
