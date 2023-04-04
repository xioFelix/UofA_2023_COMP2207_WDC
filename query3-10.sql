SELECT DISTINCT Students.given_name, Students.family_name, Students.program, Subjects.subject, Subjects.teacher_id
FROM Enrolments
INNER JOIN Students ON Enrolments.student_id = Students.student_id
INNER JOIN Subjects ON Enrolments.subject_code = Subjects.subject_code
WHERE Subjects.faculty <> 'ECMS';