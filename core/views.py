from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Quiz

def quiz_detail(request, quiz_id):
    quiz = get_object_or_404(Quiz, id=quiz_id)
    data = {
        "id": quiz.id,
        "title": quiz.title,
        "course": quiz.course.name,
        "questions": []
    }
    for q in quiz.questions.all():
        question_data = {
            "id": q.id,
            "text": q.text,
            "choices": []
        }
        for c in q.choices.all():
            question_data["choices"].append({
                "id": c.id,
                "text": c.text,
                "is_correct": c.is_correct  # для тестирования, позже можно скрыть
            })
        data["questions"].append(question_data)
    return JsonResponse(data)
