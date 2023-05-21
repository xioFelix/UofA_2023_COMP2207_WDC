SELECT address
FROM address
JOIN address ON store.address_id = store.store_id
JOIN store ON address.address_id = store.address_id
JOIN inventory ON store.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
WHERE film.title = 'TWISTED PIRATES'
LIMIT 1;
