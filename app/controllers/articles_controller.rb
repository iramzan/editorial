class ArticlesController < ApplicationController
	before_filter :authenticate_user!, :only => [:new,:create]

	#CREATE
	def new
	end

	def create
		@article = Article.new(article_params)

		if @article.save
			redirect_to @article
		else
			render action: 'new'
		end
	end

	#READ
	def show
		@article = Article.find(params[:id])
	end

	def index
		@articles = Article.all
	end

	#UPDATE
	def edit
		@article = Article.find(params[:id])
	end

	def update
		@article = Article.find(params[:id])

		if @article.update(article_params)
			redirect_to @article
		else
			render action: 'edit'
		end

	end

	#DELETE
	def destroy

		@article = Article.find(params[:id])
		@article.destroy
		redirect_to action: :index

	end

	private

	def article_params
		params.require(:article).permit(:title, :text)
	end

end
