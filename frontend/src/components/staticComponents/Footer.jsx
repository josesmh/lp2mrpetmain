import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
				<h1 >MR. PET</h1>
			<div className="info">
				<div className="contact">
					<h2>Contato</h2>
					<ul>
						<li><address>Rua 203, Cidade dos Pets, BR</address></li>
						<li><a href="/nothing">mr.pet2023@gmail.com</a></li>
					</ul>
				</div>
				<div className="aboutUs">
				<h2>Sobre nós</h2>
					<ul>
						<li><a href="/nothing">Quem nós somos?</a></li>
						<li><a href="/nothing">Trabalhe conosco</a></li>
						<li><a href="/nothing">FAQ</a></li>
					</ul>
				</div>
				<div className="terms">
					<h2>Termos</h2>
					<ul>
						<li><a href="/nothing">Política de privacidade</a></li>
						<li><a href="/nothing">Termos de uso do website</a></li>
					</ul>
				</div>
			</div>
			<p>Made by the IFPB Mr.Pet team 2023 - &copy; All rights reserved.</p>
		</footer>
	);
};

export default Footer;
