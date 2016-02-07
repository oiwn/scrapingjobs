migrate:
	honcho run python backend/manage.py migrate

test:
	honcho run python backend/manage.py behave

coverage:
	honcho run coverage run --source='./backend' backend/manage.py behave

coverage-report:
	coverage report

build-ui-assets:
	cd semantic && gulp build

build-static:
	honcho run python backend/manage.py collectstatic
