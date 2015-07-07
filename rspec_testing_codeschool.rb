# Making a Matcher Available
# Creating a custom matcher takes quite a few steps. We'll create one from scratch over the next few challenges.
# For starters, let's configure RSpec to include our new module only for models.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
    end

    def matches?(model)
      false
    end

    def failure_message
      "Not implemented"
    end

    def negative_failure_message
      "Not implemented"
    end

    def description
      "Not implemented"
    end
  end

  def validate_numericality_of(attribute)
    pending
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end



# Initializing the matcher
# In our spec, we're calling the validate_numericality_of method that is defined in our matcher.
# Update this method to return a new ValidateNumericalityOf::Matcher and update the initialize method to store the attribute.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
      @attribute = attribute
    end

    def matches?(model)
      false
    end

    def failure_message
      "Not implemented"
    end

    def negative_failure_message
      "Not implemented"
    end

    def description
      "Not implemented"
    end
  end

  def validate_numericality_of(attribute)
    Matcher.new(attribute)
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end


# Completing Our Basic Matcher
# It's time to implement our matches? method which will do the real work here. We've done most of the work for you in the check_for_number method.
# Call it from the matches? method passing the model.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
      @attribute = attribute
    end

    def matches?(model)
      check_for_number model
    end

    def failure_message
      "Not implemented"
    end

    def negative_failure_message
      "Not implemented"
    end

    def description
      "Not implemented"
    end

    def check_for_number model
      model[@attribute] = "not a number"
      model.valid?
      model.errors[@attribute].include?("is not a number")
    end
  end

  def validate_numericality_of(attribute)
    Matcher.new(attribute)
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end


# Better Descriptions
# When our spec runs, we'll see the description print as the spec name in red or green, depending on if our spec passes.
# Let's make this more informative by having it return a message indicating that it validates numericality of the passed in attribute.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
      @attribute = attribute
    end

    def matches?(model)
      check_for_number model
    end

    def failure_message
      "Not implemented"
    end

    def negative_failure_message
      "Not implemented"
    end

    def description
      "validate numericality of #{@attribute}"
    end

    def check_for_number model
      model[@attribute] = "not a number"
      model.valid?
      model.errors[@attribute].include?("is not a number")
    end
  end

  def validate_numericality_of(attribute)
    Matcher.new(attribute)
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end


# Failure Messages
# Our spec is working, but what if someone removed the numericality validation from our model? All of the sudden our spec would fail and we'd see a "Not implemented" error message.
# Change the failure message to instead return "Zombie failed to validate: iq numericality" when the example fails. Also add an error message for the negative failure message case.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
      @attribute = attribute
    end

    def matches?(model)
      @model = model
      check_for_number
    end

    def failure_message
      "#{@model.class} failed to validate: #{@attribute} numericality"
    end

    def negative_failure_message
      "#{@model.class} unexpected validation: #{@attribute} numericality"
    end

    def description
      "validate numericality of #{@attribute}"
    end

    def check_for_number
      @model[@attribute] = "not a number"
      @model.valid?
      @model.errors[@attribute].include?("is not a number")
    end
  end

  def validate_numericality_of(attribute)
    Matcher.new(attribute)
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end


# Chained Custom Matchers
# We've decided to also test that the number being passed in is only an integer. We've added most of the code you need below.
# All that is left is to create a new method called only_integers which sets the only_integers option to true and returns self.
# Then update the last line on the matches? method to return true or false depending on if the @errors array is empty.

module ValidateNumericalityOf
  class Matcher
    def initialize(attribute)
      @attribute = attribute
      @options = {}
      @errors = []
    end

    def matches?(model)
      @model = model
      @model[@attribute] = "not a number"
      @model.valid?

      if !@model.errors[@attribute].include?("is not a number")
        @errors << "numericality"
      end

      if @options[:only_integers]
        @model[@attribute] = 1.5
        @model.valid?
        if !@model.errors[@attribute].include?("must be an integer")
          @errors << "as an integer"
        end
      end

      @errors.empty?
    end

    def failure_message
      "#{@model.class} failed to validate: #{@attribute} #{@errors.join(', ')}"
    end

    def negative_failure_message
      "#{@model.class} unexpected validation: #{@attribute} #{@errors.join(', ')}"
    end

    def description
      "validate numericality of #{@attribute}"
    end

    def only_integers
      @options[:only_integers] = true
      self
    end
  end

  def validate_numericality_of(attribute)
    Matcher.new(attribute)
  end
end

RSpec.configure do |config|
  config.include ValidateNumericalityOf, type: :model
end


-------

# Mocking
# Update the spec so that whenever a tweet is created, we verify that email_tweeter is called on the tweet object.

describe Tweet do
  context 'after create' do
    let(:zombie) { Zombie.create(email: 'anything@example.org') }
    let(:tweet) { zombie.tweets.new(message: 'Arrrrgggghhhh') }

    it 'calls "email_tweeter" on the tweet' do
      tweet.should_receive(:email_tweeter)
      tweet.save
    end
  end
end


# Mocking with a return value
# We've changed the code below so we're mocking ZombieMailer.tweet method instead of the entire method.
# There is still more to do to make this example work. First, finish the let(:mail) statement below by creating
# a stub with a deliver method that returns true.                                                                                                                                                                                                                                                              Then update the mock so the call to the tweet method returns the mail stub you created.

describe Tweet do
  context 'after create' do
    let(:zombie) { Zombie.create(email: 'anything@example.org') }
    let(:tweet) { zombie.tweets.new(message: 'Arrrrgggghhhh') }
    let(:mail) { stub(deliver: true) }

    it 'calls "tweet" on the ZombieMailer' do
      ZombieMailer.should_receive(:tweet).and_return(mail)
      tweet.save
    end
  end
end


# Checking Method Params
# We know that the ZombieMailer is being called now, but we aren't verifying the parameters. Update the spec
# to verify that the zombie and tweet are getting passed as parameters into the tweet method.

describe Tweet do
  context 'after create' do
    let(:zombie) { Zombie.create(email: 'anything@example.org') }
    let(:tweet) { zombie.tweets.new(message: 'Arrrrgggghhhh') }
    let(:mail) { stub(deliver: true) }

    it 'calls "tweet" on the ZombieMailer' do
      ZombieMailer.should_receive(:tweet).with(zombie, tweet).and_return(mail)
      tweet.save
    end
  end
end


# Verifying Delivery
# We've verified that the ZombieMailer is being called with the correct parameters, but not that deliver is being called on the resulting mail object.
# Complete the new example by stubbing out the ZombieMailer.tweet method and having it return mail. Then make sure that the deliver method is called on the mail object.

describe Tweet do
  context 'after create' do
    let(:zombie) { Zombie.create(email: 'anything@example.org') }
    let(:tweet) { zombie.tweets.new(message: 'Arrrrgggghhhh') }
    let(:mail) { stub(:mail, deliver: true) }

    it 'calls "tweet" on the ZombieMailer' do
      ZombieMailer.should_receive(:tweet).with(zombie, tweet).and_return(mail)
      tweet.save
    end

    it 'calls "deliver" on the mail object' do
      ZombieMailer.stub(tweet: mail)
      mail.should_receive(:deliver).and_return(true)
      tweet.save
    end
  end
end

# Message counts
# Notice on the tweet.rb source that we're now emailing every zombie in the horde in our email_tweeter.
# Update the spec to verify that tweet is called exactly as many times as there are zombies.

describe Tweet do
  context 'after create' do
    let(:zombie) { Zombie.create(email: 'anything@example.org') }
    let(:tweet) { zombie.tweets.new(message: 'Arrrrgggghhhh') }
    let(:mail) { stub(:mail, deliver: true) }

    it 'calls "tweet" on the ZombieMailer as many times as there are zombies' do
      Zombie.stub(all: [stub, stub, stub])
      ZombieMailer.should_receive(:tweet).exactly(3).times.and_return(mail)
      tweet.save
    end
  end
end

