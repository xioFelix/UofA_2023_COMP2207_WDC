SELECT DISTINCT Subjects.teacher_id, Teachers.given_name, Teachers.family_name
FROM Teachers
INNER JOIN Subjects ON Enrolments.subject_code = Subjects.subject_code
INNER JOIN Teachers ON Subjects.teacher_id = Teachers.staff_id
WHERE Enrolments.student_id = 'a1111113' AND Subjects.faculty = 'ECMS';