"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
	const pathname = usePathname();
	return (
		<nav className="flex items-center space-x-4 lg:space-x-6">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2"
			>
				<span className="font-bold">{siteConfig.name}</span>
			</Link>
			<Link
				href="/blog"
				className={cn(
					"text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
					pathname === "./blog" ? "text-foreground" : "text-foreground/60"
				)}
			>
				Blog
			</Link>
		</nav>
	);
};

export default MainNav;
