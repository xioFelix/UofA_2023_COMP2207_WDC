SELECT address
FROM address
JOIN store ON store.address_id = store.store_id
JOIN address ON store.address_id = address.address_id
JOIN inventory ON address.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
WHERE film.title = 'TWISTED PIRATES'
LIMIT 1;
