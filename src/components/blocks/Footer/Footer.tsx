import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import style from "./footer.module.scss";
const Footer: React.FC = () => {
	return (
		<div className={style.footer}>
			<div className={style.footer_wrapper}>
				<div className={style.footer_logo_wrapper}>
					<div className={style.logo_wrapper}>
						<Link to="/">
							<img src={logo} alt="logo" className={style.logo} />
						</Link>
					</div>
					<p className={style.footer_copyright}>Все права защищены</p>
				</div>
				<div className={style.links_wrapper}>
					<Link to="/">Главная</Link>
					<Link to="news">Новости</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
