import React from "react";
import "../../sass/footer.sass"
import RightIcon from "../../assets/icon/RightIcon/RightIcon";

const Footer = () => {
    // best seo
    return (
        <footer className="footer">
            <button className="footer__button">
                <span className="footer__button-text">See more</span>
                <RightIcon/>
            </button>
        </footer>
    );
};

export default React.memo(Footer);
