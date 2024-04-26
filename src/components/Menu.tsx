import React from "react";

type MenuProps = {
    title: string;
    children: React.ReactNode;
}
const Menu = (props: MenuProps) => {

    const {title, children} = props;

    return (
        <div className="accordion">
            <h3 className="accordion-title">{title}</h3>
            <div className="accordion-content">
                {children}
            </div>
        </div>
    );
}

export default Menu;