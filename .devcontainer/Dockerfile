FROM node:18.0.0

# devcontainer上で操作するユーザーを指定
ARG username="node"

RUN echo "alias ll='ls -l'" >> /home/${username}/.bashrc
RUN touch /home/${username}/.bash_profile
RUN echo 'source ~/.bashrc' >> /home/${username}/.bash_profile

RUN npm i -g serverless