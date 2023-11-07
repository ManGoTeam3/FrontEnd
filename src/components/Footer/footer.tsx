import "./footer.scss";

import whiteLogo from "../../assets/imgs/whiteLogo.png";

const Footer : React.FC = () => {
    return(
        <div className="footerWrapper">
            <div className="footerContainer">
                <div className="footerBox">
                    <img src={whiteLogo} width="213px" height="81px"/>
                    <div></div>
                </div>
                <div className="footerLine"></div>
                <div className="underTxt">© 2023 가톨릭대학교 GDSC</div>
            </div>
        </div>
    );
}

export default Footer;