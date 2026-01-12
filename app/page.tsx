import {AppleHelloEffect} from "@/components/blocks/apple-hello-effect";
import {Background} from "@/components/blocks/background";
import {Button} from "@/components/ui/button";
import {MouseIcon} from "lucide-react";

import {Parallax} from "@/components/ui/parallax";

export default function Home() {
	return (
		<>
			<main>
				{/* <nav>
					<ul>
						{headerData.headerNav.map((item) => (
							<li key={item.title}>
								<a href={item.href}>{item.title}</a>
							</li>
						))}
					</ul>
				</nav> */}

				<Background />
				<div className="absolute left-1/2 top-4 bg-foreground text-accent rounded-full p-1.5 animate-bounce">
					<MouseIcon />
				</div>
				<Parallax distance={512}>
					<div className="h-screen">
						<AppleHelloEffect className="w-full h-full px-64" />
					</div>
				</Parallax>
				<Button>safasfsa</Button>
				<div className="my-500"></div>
			</main>
		</>
	);
}
