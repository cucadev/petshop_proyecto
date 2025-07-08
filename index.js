import dotenv from 'dotenv';

const mongoose = require('mongoose');
const express = require('express');
const app = express();


const clientesRoutes = require('./Backend/routes/ClienteRoutes');
const productRoutes = require('./Backend/routes/productRoutes');
const comprasRoutes = require('./Backend/routes/comprasRoutes');
const ventasRoutes = require('./Backend/routes/ventasRoutes');
const cajaRoutes = require('./Backend/routes/cajaRoutes');

dotenv.config();


app.get('/', (req, res) => {
  res.send(`
    <h1>Probando el proyecto de gestión PetShop Huellitas Felices</h1>
    <p>Probando servidor Node.js con Express.</p>
  `);
});



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error:', err));

// Esta línea muestra qué base de datos está usando realmente:
mongoose.connection.on('connected', () => {
  console.log('🟢 Base de datos usada:', mongoose.connection.name);
});

app.use(express.json()); // Para poder recibir JSON en el body

// Importar rutas
const userRoutes = require('./Backend/routes/userRoutes');
app.use('/api/users', userRoutes);

app.use('/clientes', clientesRoutes);

app.use('/api/products', productRoutes);

app.use('/api/compras', comprasRoutes);

app.use('/api/ventas', ventasRoutes);

app.use('/api/caja', cajaRoutes);

app.listen(p.env.PORT, () => { 
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});


