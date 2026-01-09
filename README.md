# Mini Universet

Mini Universet er et lite Django-backendprosjekt som modellerer kurs, quizer, spørsmål og svar. 
Prosjektet er laget som en demo for å øve på backend, databaser og enkle API-endepunkter :)

## Datamodell

- **Course**: representerer et fag eller kurs.
- **Quiz**: en quiz tilknyttet et kurs.
- **Question**: et spørsmål som tilhører En quiz.
- **Choice**: et svaralternativ til et spørsmål, med mulighet for å markere riktige svar.

Relasjonene ser slik ut:
  Course
  └── Quiz
    └── Question
      └── Choice


## Teknologistack
Python 3
Django
SQLite




## API-endepunkter

Eksempler på tilgjengelige endepunkter:

- `GET /quizzes/`  
  Returnerer en liste med alle quizes og tilhørende kurskode.

- `GET /quiz/<id>/`  
  Returnerer detaljer for En quiz, inkludert spørsmål og svaralternativer.

- `GET /quizzes/<course_code>/<quiz_id>/`  
  Henter en quiz basert på både kurs og quiz-id.
  
- `GET courses/<slug:slug>/`  
  Den returnerer ID, code, navnet og beskrivelse på kurset, i telleg til det en liste med alle quizes og navnet på de. 

Responsene returneres som JSON og er ment å kunne brukes av en frontend senere.





## Kjøre prosjektet
1. Klon repo:
git clone https://github.com/fvasiaiev-blip/mini-universet.git
cd mini-universet

Opprett og aktiver virtual environment:
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows


Installer avhengigheter:
pip install -r requirements.txt

Migrer databasen:
python manage.py migrate

Start serveren:  
python manage.py runserver
