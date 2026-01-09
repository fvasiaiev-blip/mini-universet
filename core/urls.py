from django.urls import path
from . import views

urlpatterns = [
    path('quiz/<int:quiz_id>/', views.quiz_detail, name='quiz_detail'),
    path('quizzes/', views.quizzes_list, name='quizzes_list'),  
    path('quizzes/<str:course_code>/<int:quiz_id>/',
        views.quiz_by_course,
        name='quiz_by_course'), 
        
    path("courses/<slug:slug>/", views.course_detail_api, name="course_detail"),
]

