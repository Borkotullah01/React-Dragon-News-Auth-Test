
import img01 from "../assets/1.png"

const LeftCard = () => {
    

    return (
    <div className="mt-3 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={img01} alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracking-wide">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
		</div>
	</div>
    </div>
    );
};

export default LeftCard;