require File.expand_path('../lib/cappuccino/rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'cappuccino-rails'
  s.version     = Cappuccino::Rails::VERSION
  s.authors     = ['Nickolay Kondratenko']
  s.email       = ['devmarkup@gmail.com']
  s.homepage    = 'https://github.com/kont-noor/cappuccino-rails'
  s.summary     = 'Integrates Cappuccino framework into Rails'
  s.description = s.summary
  s.files = Dir['{lib}/**/*', 'README.markdown']
end

