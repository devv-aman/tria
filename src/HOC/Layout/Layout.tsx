import React from "react";

import "./layout.css";
import { ReadOnlyProps } from "../../../global.types";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ReadOnlyProps<LayoutProps>> = ({ children }) => {
    return <div className="container">{children}</div>;
};

Layout.displayName = "Layout";

export default Layout;
