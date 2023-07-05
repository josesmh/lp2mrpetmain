var express = require( 'express' );
var router = express.Router();
const app = express();
const { PrismaClient } = require( '@prisma/client' );
const prisma = new PrismaClient();

router.get( '/products', async ( req, res ) => {
	const products = await prisma.products.findMany();
	res.json( products );
} );

// test





router.post( '/register', async ( req, res ) => {
	const { name, cpf } = req.body;
	try {
		const user = await prisma.user.create( {
			data: {
				name,
				CPF: parseFloat( cpf )
			}
		} );
		req.session.user = user;
		res.redirect( '/' );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );


router.post( '/login', async ( req, res ) => {
	const { cpf } = req.body;
	try {
		const user = await prisma.user.findFirst( {
			where: {
				CPF: parseFloat( cpf )
			}
		} );
		if ( user ) {
			req.session.user = user;
			res.redirect( '/' );
		} else {
			res.status( 401 ).json( { error: 'Invalid credentials' } );
		}
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );


router.get( '/my-account', ( req, res ) => {
	if ( req.session.user ) {
		res.render( 'my-account', { user: req.session.user } );
	} else {
		res.redirect( '/login' );
	}
} );


router.get( '/products-crud', async ( req, res ) => {
	try {
		const products = await prisma.products.findMany();
		res.render( 'products-crud', { products } );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

// Create
router.post( '/products', async ( req, res ) => {
	const { name, price, image } = req.body;
	try {
		const product = await prisma.products.create( {
			data: {
				name,
				price,
				image
			}
		} );
		res.json( product );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

// Read
router.get( '/products', async ( req, res ) => {
	try {
		const products = await prisma.products.findMany();
		res.json( products );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

router.get( '/products/:id', async ( req, res ) => {
	const { id } = req.params;
	try {
		const product = await prisma.products.findUnique( {
			where: { id: parseInt( id ) }
		} );
		if ( product ) {
			res.json( product );
		} else {
			res.status( 404 ).json( { error: 'Product not found' } );
		}
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

// Update
router.put( '/products/:id', async ( req, res ) => {
	const { id } = req.params;
	const { name, price, image } = req.body;
	try {
		const product = await prisma.products.update( {
			where: { id: parseInt( id ) },
			data: { name, price, image }
		} );
		res.json( product );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

// Delete
router.delete( '/products/:id', async ( req, res ) => {
	const { id } = req.params;
	try {
		await prisma.products.delete( {
			where: { id: parseInt( id ) }
		} );
		res.json( { message: 'Product deleted' } );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

router.get( '/register', ( req, res ) => {
	res.render( 'register' );
} );

router.get( '/login', ( req, res ) => {
	res.render( 'login' );
} );

router.get( '/my-account', ( req, res ) => {
	if ( req.session.user ) {
		res.render( 'my-account', { user: req.session.user } );
	} else {
		res.redirect( '/login' );
	}
} );

app.get( '/Users', async ( req, res ) => {
	const User = await prisma.users.findMany();
	res.json( User );
} );

// import { products } from "./data/products.js";


/* GET home page. */
router.get( '/', function ( req, res, next ) {
	res.render( 'index' );
} );

router.get( '/baths', function ( req, res, next ) {
	res.render( 'scheduleBaths', { title: 'Express' } );
} );

router.get( '/appointments', function ( req, res, next ) {
	res.render( 'scheduleAppointments', { title: 'Express' } );
} );
// server.get("/products", (req, res) => {
//   res.json(products);
// });

module.exports = router;
