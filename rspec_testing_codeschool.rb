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

