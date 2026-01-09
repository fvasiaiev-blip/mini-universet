from django.db import models
from django.utils.text import slugify


class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.code} - {self.name}"


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
