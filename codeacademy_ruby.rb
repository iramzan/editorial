# yielding with blocks

  def yield_name(name)
    puts "In the method! Let's yield."
    yield("Kim")
    puts "In between the yields!"
    yield(name)
    puts "Block complete! Back in the method."
  end

  yield_name("Eric") { |n| puts "My name is #{n}." }

  # Now call the method with your name!
  yield_name("Tim") { |n| puts "My name is #{n}." }



# using collect with procs

  floats = [1.2, 3.45, 0.91, 7.727, 11.42, 482.911]
  # Write your code below this line!
  round_down = Proc.new { |x| x - (x%1) }
  # Write your code above this line!
  ints = floats.collect(&round_down)



#yielding procs

  def greeter
    yield
  end

  phrase = Proc.new { puts "Hello there!"}

  greeter(&phrase)



# mapping symbols with collect/map

  numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  strings_array = numbers_array.map(&:to_i)



#  Lambdas vs. Procs
#
#  First, a lambda checks the number of arguments
#  passed to it, while a proc does not.
#  This means that a lambda will throw an error
#  if you pass it the wrong number of arguments,
#  whereas a proc will ignore unexpected arguments and assign nil to any that are missing.

#  Second, when a lambda returns, it passes control back to the calling method;
#  when a proc returns, it does so immediately, without going back to the calling method.

  def batman_ironman_proc
    victor = Proc.new { return "Batman will win11!" }
    victor.call
    "Iron Man will win!"
  end

  puts batman_ironman_proc

  def batman_ironman_lambda
    victor = lambda { return "Batman will win22!" }
    victor.call
    "Iron Man will win!33"
  end

  puts batman_ironman_lambda



# using lambda

  my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]

  # Add your code below!
  symbol_filter = lambda { |x| x.is_a?(Symbol) }

  symbols = my_array.select(&symbol_filter)



# blocks with select

  odds_n_ends = [:weezard, 42, "Trady Blix", 3, true, 19, 12.345]

  ints = odds_n_ends.select { |x| x.is_a? Integer}



# lambda and select

  crew = {
      captain: "Picard",
      first_officer: "Riker",
      lt_cdr: "Data",
      lt: "Worf",
      ensign: "Ro",
      counselor: "Troi",
      chief_engineer: "LaForge",
      doctor: "Crusher"
  }
  # Add your code below!

  first_half = lambda { |x,y| y < "M" }

  a_to_m = crew.select(&first_half)



# proc and select

  ages = [23, 101, 7, 104, 11, 94, 100, 121, 101, 70, 44]

  # Add your code below!
  under_100 = Proc.new { |x| x < 100 }

  youngsters = ages.select(&under_100)



# basic class inheritence

  class Message
    @@messages_sent = 0

    def initialize(from, to)
      @from = from
      @to = to
      @@messages_sent += 1
    end
  end

  my_message = Message.new("asd", "asd")

  class Email < Message
    def initialize(from, to)
      super
    end
  end







































