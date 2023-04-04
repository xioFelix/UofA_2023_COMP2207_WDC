SELECT subject_code
FROM Subjects
INNER JOIN Enrolments
ON Enrolments.subject_code = Subjects.subject_code
WHERE subject = 'Computer Systems'