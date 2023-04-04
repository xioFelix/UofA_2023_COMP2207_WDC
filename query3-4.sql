SELECT student_id, students.first_name, students.last_name
FROM Enrolments
WHERE subject_code = 'COMP SCI 2207';
INNER JOIN students
ON registration.student_id = students.student_id;