SELECT SUM(film.duration) AS total_duration
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'ANGELA' AND actor.last_name = 'WITHERSPOON';
