import Card from '../Card/Card';

const Cards = () => {
    return (
        <div className="2xl:w-9/12 xl:w-9/12 lg:w-full md:w-full w-full mb-5">
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                
                <Card></Card>
                <Card></Card>
                <Card></Card>

                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default Cards;