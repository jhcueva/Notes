FROM python:3.9-alpine3.13

ENV PYTHONDONTWRITEBYTECODE=1
# Pythont don't buffer the output
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN mkdir dist

WORKDIR /app/api

# Copy requirements to docker image
COPY ./requirements.txt /requirements.txt

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
      build-base postgresql-dev musl-dev linux-headers && \
    /py/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps

COPY . /app/api/


ENV PATH="/py/bin:$PATH"

# EXPOSE 8000