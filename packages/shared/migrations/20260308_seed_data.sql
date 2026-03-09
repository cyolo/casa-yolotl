-- Casa Yolotl - Data Seeding Script
-- Date: 2026-03-08

-- 1. Seed Categories
INSERT INTO categories (id, slug, name_es, name_en, name_fr, image_url)
VALUES 
    ('8f0e1d2c-3b4a-5968-7d8e-9f0a1b2c3d4e', 'mezcales', 'Mezcales', 'Mezcal', 'Mezcal', '/categories/mezcales.png'),
    ('7d8e9f0a-1b2c-3d4e-5f6g-7h8i9j0k1l2m', 'artesanias', 'Artesanías', 'Crafts', 'Artisanat', '/categories/artesanias.png'),
    ('5f6g7h8i-9j0k-1l2m-3n4o-5p6q7r8s9t0u', 'decoracion', 'Decoración', 'Decoration', 'Décoration', '/categories/decoracion.png')
ON CONFLICT (slug) DO NOTHING;

-- 2. Seed Products
-- Mapping logic:
-- Mezcal Ancestral Espadín -> category 'mezcales'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 
    'mezcal-ancestral-espadin', 
    (SELECT id FROM categories WHERE slug = 'mezcales'), 
    'Mezcal Ancestral Espadín', 
    'Mezcal destilado en olla de barro siguiendo tradiciones milenarias.', 
    120.00, 
    'MXN', 
    50, 
    ARRAY['mezcal', 'ancestral', 'espadin', 'oaxaca']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'mezcal-ancestral-espadin'), '/products/mezcal-ancestral.png', true, 'Botella de Mezcal Ancestral');

-- Huipil de Gala Istmeño -> category 'artesanias'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'b2c3d4e5-f6a7-4b5c-8d9e-0f1a2b3c4d5e', 
    'huipil-de-gala-istmeno', 
    (SELECT id FROM categories WHERE slug = 'artesanias'), 
    'Huipil de Gala Istmeño', 
    'Textil bordado a mano con motivos florales por maestras artesanas.', 
    450.00, 
    'MXN', 
    10, 
    ARRAY['textil', 'huipil', 'artesania', 'oaxaca']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'huipil-de-gala-istmeno'), '/products/huipil-gala.png', true, 'Huipil bordado tradicional');

-- Jarrón de Barro Negro -> category 'decoracion'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'c3d4e5f6-a7b8-4c5d-8e9f-0a1b2c3d4e5f', 
    'jarron-de-barro-negro', 
    (SELECT id FROM categories WHERE slug = 'decoracion'), 
    'Jarrón de Barro Negro', 
    'Pieza icónica de San Bartolo Coyotepec con pulido brillante.', 
    85.00, 
    'MXN', 
    25, 
    ARRAY['barro negro', 'decoracion', 'oaxaca', 'artesania']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'jarron-de-barro-negro'), '/products/barro-negro.png', true, 'Jarrón de barro negro pulido');

-- Mezcal Tobalá Silvestre -> category 'mezcales'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'd4e5f6a7-b8c9-4d5e-8f0a-1b2c3d4e5f6a', 
    'mezcal-tobala-silvestre', 
    (SELECT id FROM categories WHERE slug = 'mezcales'), 
    'Mezcal Tobalá Silvestre', 
    'Mezcal de sabor complejo elaborado con agaves silvestres de altura.', 
    180.00, 
    'MXN', 
    20, 
    ARRAY['mezcal', 'tobala', 'silvestre', 'oaxaca']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'mezcal-tobala-silvestre'), '/products/mezcal-tobala.png', true, 'Edición limitada de Mezcal Tobalá');

-- Tapete de Teotitlán del Valle -> category 'decoracion'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'e5f6a7b8-c9d0-4e5f-8a1b-2c3d4e5f6a7b', 
    'tapete-de-teotitlan-del-valle', 
    (SELECT id FROM categories WHERE slug = 'decoracion'), 
    'Tapete de Teotitlán del Valle', 
    'Lana teñida con tintes naturales como grana cochinilla y añil.', 
    320.00, 
    'MXN', 
    15, 
    ARRAY['tapete', 'lana', 'teotitlan', 'textil']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'tapete-de-teotitlan-del-valle'), '/products/tapete-teotitlan.png', true, 'Tapete de lana tradicional');

-- Alebrije Jaguar Multicolor -> category 'artesanias'
INSERT INTO products (id, slug, category_id, name_es, description_es, price, currency, stock, keywords)
VALUES (
    'f6a7b8c9-d0e1-4f6g-8b1c-3d4e5f6g7h8i', 
    'alebrije-jaguar-multicolor', 
    (SELECT id FROM categories WHERE slug = 'artesanias'), 
    'Alebrije Jaguar Multicolor', 
    'Talla en madera de copal con patrones zapotecas detallados.', 
    550.00, 
    'MXN', 
    5, 
    ARRAY['alebrije', 'jaguar', 'artesania', 'oaxaca']
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, is_main, alt_text)
VALUES ((SELECT id FROM products WHERE slug = 'alebrije-jaguar-multicolor'), '/products/alebrije-jaguar.png', true, 'Figura de jaguar tallada a mano');
