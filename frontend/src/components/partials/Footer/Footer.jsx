import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div >
				<h1 >MR. PET</h1>
				<h2>Contato</h2>
				<address>
					Rua 203, Cidade dos Pets, BR<br />
					<a href="mailto:example@gmail.com"
					>Mande um e-mail</a>
				</address>
			</div>
			<ul>
				<li>
					<h2>Sobre nós</h2>
					<ul>
						<li>
							<a href="">Quem nós somos?</a>
						</li>
						<li>
							<a href="">Trabalhe conosco</a>
						</li>
						<li>
							<a href="">FAQ</a>
						</li>
					</ul>
				</li>
				<li>
					<h2>Legal</h2>
					<ul>
						<li>
							<a href="">Política de privacidade</a>
						</li>
						<li>
							<a href="">Termos de uso do website</a>
						</li>
					</ul>
				</li>
			</ul>
			<div>
				<p>&copy; 2019 MR.PET. Todos os direitos reservados.</p>
				<div>
					<span>Made by the IFPB MR.PET team</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
