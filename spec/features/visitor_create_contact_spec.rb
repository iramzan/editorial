require 'spec_helper'

feature "Contact Creation" do

	scenario "allows access to contacts page" do

		visit '/contacts'

			expect(page).to have_content I18n.t("contacts.contact_us")

	end

	scenario 'allows guest to create contact' do

			visit '/contacts'

			fill_in :contact_email, :with => 'user@example.com'
			fill_in :contact_message, :with => 'you suck'
			click_button 'Send message'

			expect(page).to have_content 'Thanks, your feedback has been sent'
	end

end
