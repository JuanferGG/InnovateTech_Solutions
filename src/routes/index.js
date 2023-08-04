import { Router } from "express";

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'InnovateTech Solutions' }))
router.get('/quienes_somos', (req, res) => res.render('quienes_somos', { title: '¿Quienes Somos?' }))
router.get('/servicios', (req, res) => res.render('servicios', { title: 'Servicios' }))
router.get('/portafolio', (req, res) => res.render('portafolio', { title: 'Portafolio' }))
router.get('/testimonios', (req, res) => res.render('testimonios', { title: 'Testimonios' }))
router.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto' }))

export default router