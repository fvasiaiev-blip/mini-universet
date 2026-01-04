from django.db import models

# Kurs
class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.code} - {self.name}"


# Quiz
class Quiz(models.Model):
    title = models.CharField(max_length=200)
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="quizzes"
    )

    def __str__(self):
        return self.title


# Spørsmål
class Question(models.Model):
    text = models.TextField()
    quiz = models.ForeignKey(
        Quiz,
        on_delete=models.CASCADE,
        related_name="questions"
    )

    def __str__(self):
        return self.text[:50]  # første 50 tegn


# Valg / svaralternativ
class Choice(models.Model):
    text = models.CharField(max_length=200)
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name="choices"
    )
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text
