import { LayoutLandingPage } from "@/components/layouts";
import { HeroSection } from "@/components/pages/landing-page";
import React from "react";

export default function Home() {
	return (
		<>
			<HeroSection />
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return <LayoutLandingPage>{page}</LayoutLandingPage>;
};
