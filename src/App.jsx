import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Swal from "sweetalert2";

function App() {
  const [courses, setCourses] = useState([]);

  // loading all courses data
  useEffect(() => {
    (async () => {
      const res = await fetch("https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/data.json");
      const data = await res.json();
      setCourses(data);
    })();
  }, []);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [remainingCreditHours, setRemainingCreditHours] = useState(20);

  const selectCourse = (course) => {
    const isAlreadyExist = selectedCourses.find(c => c.id === course.id);
    let credits = course.credit;

    if (isAlreadyExist) {
      return Swal.fire({
        title: "Error!",
        text: "Course already selected!",
        icon: "error",
        confirmButtonText: "close"
      });
    } else {
      selectedCourses.forEach(c => credits += c.credit);

      const totalRemaining = 20 - credits;

      if (credits > 20) {
        return Swal.fire({
          title: "Error!",
          text: "Credit finished!",
          icon: "error",
          confirmButtonText: "close"
        });
      } else {
        setTotalCreditHours(credits);
        setRemainingCreditHours(totalRemaining);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  }

  return (
    <>
      <Header></Header>

      <main className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col">
        <Cards courses={courses} selectCourse={selectCourse}></Cards>
        <Cart selectedCourses={selectedCourses} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours}></Cart>
      </main>
    </>
  );
}

export default App;
