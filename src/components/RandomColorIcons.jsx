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
	const isCopy = copied == dataIcons.name;

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
				<li
					className={`h-full w-full flex flex-col items-center gap-3 border rounded-lg duration-300 ${
						isCopy ? colors[dataIcons.randomNum].border : "border-secondary"
					}`}>
					<span
						className={`relative w-full h-24 flex items-center justify-center overflow-hidden border bg-secondary rounded-lg px-4 py-10 cursor-pointer duration-300 ${
							isCopy ? "border-secondary" : colors[dataIcons.randomNum].border
						} ${colors[dataIcons.randomNum].text}`}>
						<dataIcons.component className="w-12 h-12" />

						{tagNew && (
							<span
								className={`absolute top-0 left-0 text-[10px] px-1 py-0.5 bg-secondary`}>
								New
							</span>
						)}
					</span>
					<div className="w-full h-full text-center whitespace-pre-line overflow-hidden text-ellipsis">
						<span
							className={`font-bold text-xs opacity-30`}>
							{dataIcons.name}
						</span>
					</div>
				</li>
			</CopyToClipboard>
		</>
	);
};
export default React.memo(RandomColorIcons);
