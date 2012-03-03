require 'rubygems'

task :compress do
  output = 'app.deploy.js'

  gem = Gem::Specification.find_by_path('resin')
  modules = [
    'Kernel-Classes',
    'Kernel-Objects',
    'Kernel-Announcements',
    'Kernel-Methods',
    'Kernel-Exceptions',
    'Kernel-Collections',
    'Canvas',
  ]

  amber_path = "#{gem.full_gem_path}/amber/js"
  sources = [
    "#{amber_path}/lib/jQuery/jquery-1.6.4.min.js",
    "#{amber_path}/amber.js",
    "#{amber_path}/boot.js",
    "#{amber_path}/init.js",
    "#{amber_path}/parser.js",
  ]

  Dir.glob(gem.full_gem_path + '/amber/js/*.deploy.js') do |path|
    modules.each do |mod|
      if path.include? mod
        sources << path
        next
      end
    end
  end

  Dir.glob(File.dirname(__FILE__) + '/js/*.deploy.js') do |path|
    unless path.include? output
      sources << path
    end
  end

  command = 'cat ' + sources.join(' ')
  command = "#{command} > js/#{output}"
  sh command
end
