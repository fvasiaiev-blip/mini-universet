from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Quiz, Course


def quiz_by_course(request, course_code, quiz_id=None):
    course = get_object_or_404(Course, code=course_code)
    quiz = get_object_or_404(Quiz, id=quiz_id, course=course)

    data = {
        "id": quiz.id,
        "title": quiz.title,
        "course": {
            "code": course.code,
            "name": course.name,
        },
        "questions": []
    }

    for q in quiz.questions.all():
        q_data = {
            "id": q.id,
            "text": q.text,
            "choices": []
        }
        for c in q.choices.all():
            q_data["choices"].append({
                "id": c.id,
                "text": c.text,
            })
        data["questions"].append(q_data)

    return JsonResponse(data)

def quizzes_list(request):
    quizzes = Quiz.objects.all()
    data = [
        {
            "id": quiz.id,
            "title": quiz.title,
            "course": quiz.course.code
        }
        for quiz in quizzes
    ]

    return JsonResponse(data, safe=False)

def course_detail_api(request, slug):
    course = get_object_or_404(Course, slug=slug)
    data = {
        "id": course.id,
        "code": course.code,
        "name": course.name,
        "quizzes": [
            {
                "id": quiz.id,
                "title": quiz.title
            }
            for quiz in course.quizzes.all()
        ]
    }
    return JsonResponse(data)

# ikke brukes, men kan være nyttig for HTML-visning senere
def course_detail_html(request, slug):
    course = get_object_or_404(Course, slug=slug)
    return render(request, "core/course_detail.html", {"course": course})

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
                #"is_correct": c.is_correct  # для тестирования, позже можно скрыть
            })
        data["questions"].append(question_data)
    return JsonResponse(data)
