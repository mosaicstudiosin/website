import React from "react";

export default function HamburgerIcon(props: Props) {
	return (
		<svg
			onClick={
				props.onclick as unknown as React.MouseEventHandler<SVGSVGElement>
			}
			xmlns="http://www.w3.org/2000/svg"
			height={props.height}
			viewBox="0 0 49 32"
			fill="none"
			className={"hamburger " + (props.active ? "active" : "inactive")}
		>
			<path
				className="path2"
				d="M46.2805 18.664H2.7195C1.22908 18.664 0 17.468 0 16C0 14.532 1.22908 13.336 2.7195 13.336H46.2805C47.7709 13.336 49 14.532 49 16C49 17.468 47.7709 18.664 46.2805 18.664Z"
				fill="white"
			/>
			<path
				className="path1"
				d="M0.798396 4.54825C0.289087 4.04784 0.00214046 3.37063 0 2.664C0 1.204 1.22908 0 2.7195 0H46.2805C47.7709 0 49 1.204 49 2.664C48.9979 3.37063 48.7109 4.04784 48.2016 4.54825C47.6923 5.04866 47.0018 5.33178 46.2805 5.336H2.7195C1.99816 5.33178 1.30771 5.04866 0.798396 4.54825Z"
				fill="white"
			/>
			<path
				className="path3"
				d="M46.2805 32H2.7195C1.22908 32 0 30.796 0 29.336C0.00214046 28.6294 0.289087 27.9522 0.798396 27.4517C1.30771 26.9513 1.99816 26.6682 2.7195 26.664H46.2805C47.0018 26.6682 47.6923 26.9513 48.2016 27.4517C48.7109 27.9522 48.9979 28.6294 49 29.336C49 30.796 47.7709 32 46.2805 32Z"
				fill="white"
			/>
		</svg>
	);
}

interface Props {
	active: boolean;
	height: number;
	onclick: () => void;
}
