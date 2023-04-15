import { ThreeDots } from "react-loader-spinner";

export const LoadingDots = ({ size }) => {
	return (
		<ThreeDots
			height={size || "80"}
			width={size || "80"}
			radius="9"
			color="#0ea5e9"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
		/>
	);
};
