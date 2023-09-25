import { Link } from 'react-router-dom';
import './LinkItem.scss';

function LinkItem ( { to, content } ) {
	return (
		<li>
			<Link to={ to }>{<span>{content}</span> }</Link>
		</li>
	);
}
export default LinkItem;