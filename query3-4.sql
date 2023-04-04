SELECT Students.given_name, Students.family_name
FROM Students
WHERE subject_code = 'COMP SCI 2207';
INNER JOIN Students
ON Enrolments.student_id = Students.student_id;