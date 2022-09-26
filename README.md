# seb-redirect

A very simple service, that functions as a stop-gap for OAuth timeout.
This serves as a landing page for computers in examination rooms.

App has 2 modes:
- redirect to Canvas (`/`)
- redirect to course in Canvas (`/redirect?cid={Canvas courseID here}`)

Service is also a sub-service for @KTH/seb-config (Safe Exam Browser Start Page).
