import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Cards = ({courses, selectCourse}) => {
    return (
        <div className="2xl:w-9/12 xl:w-9/12 lg:w-full md:w-full w-full mb-5">
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                {
                    courses.map(course => <Card key={course.id} course={course} selectCourse={selectCourse}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    courses: PropTypes.array.isRequired,
    selectCourse: PropTypes.func.isRequired
}

export default Cards;