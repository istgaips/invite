require 'sinatra'

class App < Sinatra::Base
  get '/' do
    erb :index
  end

  markdown_pages = %w(partners people research publications contacts about news)

  markdown_pages.each do |p|
    get "/#{p}" do
      markdown p.to_sym, :layout_engine => :erb
    end
  end
end
