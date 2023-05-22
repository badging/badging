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
		text: "Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim nec consequat vel. Lectus tellus feugiat Est scelerisque ante diam at sed condimentum",
		link: "apply",
		icon: <ApplySvgComponent width="28" height="30" className="apply-svg" />,
	},
	{
		id: 2,
		title: "Review",
		text: "Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim nec consequat vel. Lectus tellus feugiat Est scelerisque ante diam at sed condimentum",
		link: "review",
		icon: <ReviewSvgComponent width="28" height="22" className="review-svg" />,
	},
	{
		id: 3,
		title: "Get Badged",
		text: "Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim nec consequat vel. Lectus tellus feugiat Est scelerisque ante diam at sed condimentum",
		link: "get-badged",
		icon: (
			<GetBadgedSvgComponent width="14" height="28" className="badge-svg" />
		),
	},
];
