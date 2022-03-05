FROM node:14

ADD . /home/app
WORKDIR /home/app
RUN yarn install

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
