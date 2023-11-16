import dollarIcon from "../assets/dollarSign.svg"
import bookIcon from "../assets/book.svg"
import PropTypes from "prop-types"

const Card = ({ course, selectCourse }) => {
    const { cover, title, description, price, credit } = course;

    return (
        <div className="border rounded-md shadow-xl">
            <figure className="p-5 w-full">
                <div className="rounded-md flex items-center justify-center">
                    <img className="inline-block w-full" src={cover} alt="cover-image" />
                </div>
            </figure>
            <div className="p-5 pt-0">
                <h4 className="font-semibold text-xl lg:h-[60px] xl:h-[60px] 2xl:h-auto">{title}</h4>
                <p className="text-base my-3 mt-2">{description}</p>
                <div className="flex justify-between mb-4">
                    <p className="flex"><img src={dollarIcon} alt="dollarIcon" /> Price: {price}</p>
                    <p className="flex"><img src={bookIcon} alt="bookIcon" /> Credit: {credit}hr</p>
                </div>
                <button onClick={() => selectCourse(course)} className="btn bg-[#2F80ED] hover:bg-[#2F80ED] normal-case text-white w-full text-[17px]" >Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object.isRequired,
    selectCourse: PropTypes.func.isRequired
};

export default Card;
