import { CiImageOn } from "react-icons/ci";
const CardSkelton = () => {
    return (

        <div className="flex flex-col mb-6 md:mx-4 md:my-0">
            <div role="status" className="max-w-sm p-4 border border-gray-100 rounded shadow animate-pulse md:p-6 w-72 h-[350px]">
                <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-200">
                    <CiImageOn className="w-10 h-10 text-gray-200 dark:text-gray-600" />
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    );
};
export default CardSkelton;
