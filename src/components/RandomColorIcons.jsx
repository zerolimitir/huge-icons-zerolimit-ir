import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const colors = [
	{
		background: "bg-sky-500",
		text: "text-sky-500",
		border: "border-sky-200",
	},
	{
		background: "bg-amber-500",
		text: "text-amber-500",
		border: "border-amber-200",
	},
	{
		background: "bg-lime-500",
		text: "text-lime-500",
		border: "border-lime-200",
	},
	{
		background: "bg-fuchsia-500",
		text: "text-fuchsia-500",
		border: "border-fuchsia-200",
	},
	{
		background: "bg-rose-500",
		text: "text-rose-500",
		border: "border-rose-200",
	},
];

const RandomColorIcons = ({ dataIcons, tagNew }) => {
	const [copied, setCopied] = useState("");
	const isIcon = copied == dataIcons.name;

	setTimeout(() => {
		setCopied("");
	}, 2500);

	const setCopy = name => {
		setCopied(name);
		toast.success(`${name} Copied to Clipboard`);
	};

	return (
		<>
			<CopyToClipboard
				text={dataIcons.name}
				onCopy={() => setCopy(dataIcons.name)}>
				<li className="h-full w-full p-1 flex flex-col items-center gap-3">
					<span
						className={`relative w-24 h-24 flex items-center justify-center overflow-hidden border ${
							colors[dataIcons.randomNum].border
						} ${
							isIcon
								? colors[dataIcons.randomNum].background + " text-white"
								: colors[dataIcons.randomNum].text + " bg-secondary"
						} rounded-lg px-4 py-10 cursor-pointer`}>
						<dataIcons.component className=" w-12 h-12" />

						{tagNew && (
							<span
								className={`rounded-br-lg absolute top-0 left-0 text-[10px] border px-1 py-0.5 ${
									isIcon
										? colors[dataIcons.randomNum].background + " text-white"
										: colors[dataIcons.randomNum].text + " bg-secondary"
								}   ${colors[dataIcons.randomNum].border}`}>
								New
							</span>
						)}
					</span>
					<div className="w-full h-full text-center whitespace-pre-line overflow-hidden text-ellipsis">
						<span
							className={`${
								colors[dataIcons.randomNum].text
							} font-bold text-xs`}>
							{dataIcons.name}
						</span>
					</div>
				</li>
			</CopyToClipboard>
		</>
	);
};
export default React.memo(RandomColorIcons);
