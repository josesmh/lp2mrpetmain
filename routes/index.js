var express = require( 'express' );
var router = express.Router();
const app = express();
const { PrismaClient } = require( '@prisma/client' );
const prisma = new PrismaClient();
const bcrypt = require( 'bcrypt');
const jwt = require( 'jsonwebtoken');

const isAuthenticated = require('../middleware/auth');




const saltRounds = Number(process.env.SALT_ROUNDS);


router.get( '/products', async ( req, res ) => {
	const products = await prisma.products.findMany({
    include: {
      creator: true,
    },
  });
	res.json( products );
} );


// test





router.post( '/register', async ( req, res ) => {
	const { name, cpf, password } = req.body;
	try {
		const user = await prisma.user.create( {
			data: {
				name,
				CPF: parseFloat( cpf ),
				password
			}
		} );
		req.session.user = user;
		res.redirect( '/' );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );


router.post( '/login', async ( req, res ) => {
	try {
		const { cpf, password } = req.body;
	
		const user = await async function readByCPF(cpf) {
			const user = await prisma.User.findFirst({
			  where: {
				CPF,
			  },
			});
			return user;}

		  
	
		const { id: userId, password: hash } = user;
	
		const match = await bcrypt.compare(password, hash);
	
		if (match) {
		  const token = jwt.sign(
			{ userId },
			process.env.JWT_SECRET,
			{ expiresIn: 3600 } // 1h
		  );
	
		  res.json({ auth: true, token });
		} else {
		  throw new Error('User not found');
		}
	  } catch (error) {
		res.status(401).json({ error: 'User not found' });
	  }
	});
	

router.get( '/my-account', isAuthenticated,  ( req, res ) => {
	if ( req.session.user ) {
		res.render( 'my-account', { user: req.session.user } );
	} else {
		res.redirect( '/login' );
	}
} );


router.get( '/products-crud', isAuthenticated, async ( req, res ) => {
	try {
		const products = await prisma.products.findMany({
			include: {
			  creator: true,
			}},);
		res.render( 'products-crud', { products } );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

// Create
router.post( '/products', async ( req, res ) => {
	const { name, price, image } = req.body;
	const creatorId = req.session.user.id;
	try {
		const product = await prisma.products.create( {
			data: {
				name,
				price,
				image,
				creatorId,
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
		const products = await prisma.products.findMany({
			include: {
			  creator: true,
			},
		  });
		res.json( products );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );

router.get( '/products/:id', async ( req, res ) => {
	const { id } = req.params;
	try {
		const product = await prisma.products.findUnique({
			where: { id: parseInt( id ) },include: {
				creator: true,
			  },
			
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
router.post( '/products/:id', async ( req, res ) => {
	const { id } = req.params;
	const { name, price, image } = req.body;
	try {
		const product = await prisma.products.update( {
			where: { id: parseInt( id ) },
			data: { name, price, image },
			include: { creator: true },
		} );
		res.redirect( '/products-crud' );
	} catch ( error ) {
		res.status( 500 ).json( { error: error.message } );
	}
} );


router.get( '/products/update/:id', async ( req, res ) => {
	const { id } = req.params;
	try {
		const product = await prisma.products.findUnique( {
			where: { id: parseInt( id ) },
			include: { creator: true },
		} );
		res.render( 'update', { product } );
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

router.get( '/products/delete/:id', async ( req, res ) => {
	const { id } = req.params;
	try {
		const product = await prisma.products.delete( {
			where: { id: parseInt( id ) },
			include: { creator: true },
		} );
		res.redirect('/products-crud');
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



// 404 handler
router.use((req, res, next) => {
	res.status(404).json({ message: 'Content not found!' });
  });
  
  // Error handler
  router.use((err, req, res, next) => {
	console.error(err.stack);
	if (err instanceof HTTPError) {
	  res.status(err.code).json({ message: err.message });
	} else {
	  res.status(500).json({ message: 'Something broke!' });
	}
  });
  



// server.get("/products", (req, res) => {
//   res.json(products);
// });

module.exports = router;
