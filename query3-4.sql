SELECT Students.given_name, Students.family_name
FROM Enrolments
WHERE subject_code = 'COMP SCI 2207';
INNER JOIN Students
ON Students.student_id = Enrolments.student_id;