require 'spec_helper'

describe Article do

	describe "validations" do
		it {should validate_presence_of :title }
		it {should validate_presence_of :text }
	end

	describe "associations" do
		it { should have_many(:comments) }
	end

	describe "#subject" do
		it "returns the article title" do
			# создаем артикл хитрым способом
			# arrange act
			article = create(:article, title: 'Lorem ipsum')

			# assert
			expect(article.subject).to eq 'Lorem ipsum'

		end
	end

	describe "#last_comment" do
		it "returns the last comment" do
			#создаем статью, но в этот раз с комментариями
			article = create(:article_with_comments)

			# проверка
			expect(article.last_comment.body).to eq "comment body 3"
		end
	end

end