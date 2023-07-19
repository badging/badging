import {
	discord,
	dropbox,
	github,
	loom,
	ApplySvgComponent,
	ReviewSvgComponent,
	GetBadgedSvgComponent,
} from "../../assets/images";

export const featuredProjects = [
	{
		name: "github",
		logo: github,
	},
	{
		name: "loom",
		logo: loom,
	},
	{
		name: "discord",
		logo: discord,
	},
	{
		name: "dropbox",
		logo: dropbox,
	},
];

export const howItWorksData = [
	{
		id: 1,
		title: "Apply",
		text: "To apply for a DEI badge, ensure your DEI.md file is carefully curated and publicly accessible for review.",
		link: "apply",
		icon: <ApplySvgComponent width="28" height="30" className="apply-svg" />,
	},
	{
		id: 2,
		title: "Review",
		text: "Once applied, the specified repository is automatically scanned for the presence of the DEI.md file. The file is carefully examined, and a report of suggestions may be generated.",
		link: "review",
		icon: <ReviewSvgComponent width="28" height="22" className="review-svg" />,
	},
	{
		id: 3,
		title: "Get Badged",
		text: "Showcase thought leadership on project and community inclusivity. Reflect on and affect DEI standards using the CHAOSS DEI metrics Learn more",
		link: "get-badged",
		icon: (
			<GetBadgedSvgComponent width="14" height="28" className="badge-svg" />
		),
	},
];
