import React from "react";
import { HeaderLandingPage } from "../header";
import { FooterLandingPage } from "../footer";

export default function LayoutLandingPage({ children }) {
	return (
		<>
			<HeaderLandingPage />
			<main>{children}</main>
			<FooterLandingPage />
		</>
	);
}
