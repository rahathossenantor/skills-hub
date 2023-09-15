import dollarIcon from '../../assets/dollarSign.svg'
import bookIcon from '../../assets/book.svg'

const Card = () => {
    return (
        <div className="border rounded-md shadow-xl">
            <figure className="p-5 w-full">
                <div className="rounded-md flex items-center justify-center">
                    <img className='inline-block w-full' src="https://i.ibb.co/PGZBnBk/Rectangle-2-2.png" alt="cover" />
                </div>
            </figure>
            <div className="p-5 pt-0">
                <h4 className="font-semibold text-xl">Introduction to C Programming</h4>
                <p className='text-base my-3 mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className='flex justify-between mb-4'>
                    <p className='flex'><img src={dollarIcon} alt="dollarIcon" /> Price: 15000</p>
                    <p className='flex'><img src={bookIcon} alt="bookIcon" /> Credit: 1hr</p>
                </div>
                <button className="btn bg-[#2F80ED] hover:bg-[#2F80ED] normal-case text-white w-full" >Select</button>
            </div>
        </div>
    );
};

export default Card;