SELECT address
FROM store
JOIN inventory ON store.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
WHERE film.title = 'TWISTED PIRATES'
LIMIT 1;
