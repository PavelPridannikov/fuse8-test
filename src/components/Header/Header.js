import React from "react";
import "../../sass/headerStyle.sass"

const Header = () => {
    return (
            <header className="header">
                <h1 className='header__title'>Our Latest Developments</h1>
            </header>
    );
};

export default React.memo(Header);
