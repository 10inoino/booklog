FROM node:18.0.0

# devcontainer上で操作するユーザーを指定
ARG username="node"
ARG ACCESS_KEY
ARG SECRET_KEY

# AWS CLIのインストール
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
RUN rm -f awscliv2.zip

# llのエイリアスを指定
RUN echo "alias ll='ls -l'" >> /home/${username}/.bashrc
RUN touch /home/${username}/.bash_profile
RUN echo 'source ~/.bashrc' >> /home/${username}/.bash_profile

# AWSのcredentialsを設定
RUN mkdir /home/${username}/.aws
COPY credentials /home/${username}/.aws/credentials

# serverlessをinstall
RUN npm i -g serverless

# pingのインストール
RUN apt-get update
RUN apt-get install -y iputils-ping
RUN apt-get install -y less

# serverlessの認証情報を設定
RUN serverless config credentials --provider aws --key $ACCESS_KEY --secret $SECRET_KEY