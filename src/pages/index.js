import { LayoutLandingPage } from "@/components/layouts";
import React from "react";

export default function Home() {
	return <div>Hello</div>;
}

Home.getLayout = function getLayout(page) {
	return <LayoutLandingPage>{page}</LayoutLandingPage>;
};
