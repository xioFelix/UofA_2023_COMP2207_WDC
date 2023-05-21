SELECT SUM(duration) AS total_duration
FROM film
WHERE film_id IN (
  SELECT film_id
  FROM film_actor
  WHERE actor_id = (
    SELECT actor_id
    FROM actor
    WHERE first_name = 'ANGELA' AND last_name = 'WITHERSPOON'
  )
);
