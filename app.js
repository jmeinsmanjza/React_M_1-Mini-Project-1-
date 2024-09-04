require 'sinatra'
require 'json'

class main < Sinatra::Application
  configure do
    set :port, 3000
    set :environment, :development
  end

  before do
    content_type :json
  end

  get '/' do
    {
      message: 'Welcome to React_M_1-Mini-Project-1- API',
      version: '1.0.0',
      timestamp: Time.now.iso8601
    }.to_json
  end

  get '/health' do
    {
      status: 'healthy',
      uptime: Process.clock_gettime(Process::CLOCK_MONOTONIC),
      timestamp: Time.now.iso8601
    }.to_json
  end

  get '/users' do
    { users: [] }.to_json
  end

  post '/users' do
    user_data = JSON.parse(request.body.read)
    { user: user_data.merge(id: rand(1000), created_at: Time.now) }.to_json
  end
end

main.run!

# Code Update 1760953557-28551

# Code Update 1760953557-26619

# Code Update 1760953557-4164

# Code Update 1760953557-14593

# Code Update 1760953558-11322

# Additional Implementation 1760953558

# Additional Implementation 1760953558

# Code Update 1760953558-18511

# Code Update 1760953558-21672

# Additional Implementation 1760953558

# Code Update 1760953558-9585

# Code Update 1760953558-8620

# Additional Implementation 1760953558

# Code Update 1760953558-11263
