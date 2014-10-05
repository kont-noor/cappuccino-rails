# Capuccino-Rails

Provides integrating [Cappuccino Framework](http://www.cappuccino-project.org/) into Rails

## Usage

First add the gem to your Gemfile:
```
gem 'cappuccino-rails'
```
and run `bundle install`

To include Cappuccino application add the folowing code to your `application.js`:
```
//= require cappuccino
//= require Frameworks/Objective-J/Objective-J
```
to `application.css`:
```
*= require cappuccino
```
and render the application container in your view:
```
<%= render 'cappuccino/container' %>
```
Then open the required path and enjoy the result.
To override the default files just add ones with the same names to your javascript folder

## Contributing

Of course the gem is not perfect yet. So feel free to open pull request if needed

## Credits

* [Nickolay Kondratenko](https://github.com/kont-noor)
