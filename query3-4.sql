SELECT student_id
FROM Enrolments
WHERE subject_code = 'COMP SCI 2207';
INNER JOIN students
ON registration.student_id = students.student_id;