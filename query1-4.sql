SELECT address
FROM address
JOIN inventory ON address.address_id = inventory.address_id
JOIN film ON inventory.film_id = film.film_id
WHERE film.title = 'TWISTED PIRATES'
LIMIT 1;
