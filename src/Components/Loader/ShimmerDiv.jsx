import CardSkelton from "../Loader/CardSkelton";
const ShimmerDiv = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center my-6">
            <CardSkelton />
            <CardSkelton />
            <CardSkelton />
        </div>
    );
};
export default ShimmerDiv;