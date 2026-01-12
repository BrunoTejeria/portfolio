"use client";

import {useParallax} from "@/hooks/use-parallax";
import {useRef} from "react";
import {motion, useScroll} from "motion/react";

function Parallax({
	children,
	distance = 120,
}: {
	children: React.ReactNode;
	distance?: number;
}) {
	const ref = useRef<HTMLDivElement | null>(null);

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useParallax(scrollYProgress, distance);

	return (
		<motion.div
			ref={ref}
			style={{y}}
		>
			{children}
		</motion.div>
	);
}

export {Parallax};
