SELECT first_name, last_name, rental_date
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
WHERE return_date IS NULL
ORDER BY rental_date ASC
LIMIT 1;
