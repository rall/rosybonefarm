FROM alpine:latest
RUN apk add --update sqlite socat
ENV \
  USER_SQLITE=sqlite \
  GROUP_SQLITE=sqlite

RUN addgroup -S $GROUP_SQLITE \
  && adduser  -S $USER_SQLITE -G $GROUP_SQLITE

USER $USER_SQLITE

RUN mkdir -p /home/sqlite/db

VOLUME /home/sqlite/db

ADD ./*.db /home/sqlite/db/

CMD /usr/bin/sqlite3
