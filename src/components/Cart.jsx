import PropTypes from "prop-types";

const Cart = ({selectedCourses, totalCreditHours, remainingCreditHours}) => {

    // calculating total price of each course
    let totalCoursePrices = 0;    
    if (selectedCourses.length > 0) {
        totalCoursePrices = selectedCourses.reduce((acc, course) => acc + course.price, 0);
    }

    return (
        <div className="2xl:w-[25%] xl:w-[25%] lg:w-full md:w-full w-full 2xl:ml-5 xl:ml-5 rounded-md 2xl:flex xl:flex mb-5">
            <div className="w-full rounded-md 2xl:text-left xl:text-left lg:text-left md:text-center text-center">
                <div className="border p-5 rounded-md 2xl:w-full xl:w-full lg:w-1/2 md:w-full mx-auto">
                    <h4 className="text-xl font-semibold mb-3 text-[#2F80ED]">Credit Hours Remaining: {remainingCreditHours}hr</h4>
                    <hr className="my-3" />
                    <div>
                        <h4 className="font-semibold text-xl mb-1">Course Name</h4>
                        <ol className="list-decimal list-inside">
                            {
                                selectedCourses.map((course, idx) => <li key={idx}>{course.title}</li>)
                            }
                        </ol>
                    </div>
                    <hr className="my-3" />
                    <h5>Total Credit: {totalCreditHours}hr</h5>
                    <hr className="my-3" />
                    <h4 className="font-semibold">Total Price: {totalCoursePrices} USD</h4>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    totalCreditHours: PropTypes.number.isRequired,
    remainingCreditHours: PropTypes.number.isRequired
};

export default Cart;
